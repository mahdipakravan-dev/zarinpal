import { createReadStream } from "node:fs";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createInterface } from "node:readline";

const root = resolve(import.meta.dirname, "..");
const sourcePath = resolve(root, "challenge_data.csv");
const salesIndexPath = resolve(root, "lib/generated/sales-pulse-index.json");
const peerIndexPath = resolve(root, "lib/generated/peer-position-index.json");
const indexPath = resolve(root, "lib/generated/payment-health-index.json");
const outputDirectory = resolve(root, "public/data/payment-health/merchants");
const onlyIfStale = process.argv.includes("--if-stale");
const MIN_PEERS = 10;
const MAX_PEERS = 24;
const PSP_CODES = ["PSP-01", "PSP-02", "PSP-03", "PSP-04", "PSP-05", "PSP-06", "PSP-07", "PSP-08"];
const AMOUNT_BUCKETS = [
  { id: "micro", label: "زیر ۱۰۰ هزار تومان", max: 1_000_000 },
  { id: "small", label: "۱۰۰ تا ۵۰۰ هزار تومان", max: 5_000_000 },
  { id: "medium", label: "۵۰۰ هزار تا ۲ میلیون تومان", max: 20_000_000 },
  { id: "large", label: "بیش از ۲ میلیون تومان", max: Number.POSITIVE_INFINITY },
];
const columns = {
  session: 0, sequence: 1, terminal: 2, merchant: 3, categoryId: 4, categoryTitle: 5,
  amount: 6, sessionStatus: 8, tryStatus: 9, psp: 11, issuer: 12, verify: 14, createdAt: 17,
};

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return 0;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}
function ratio(a, b) { return b > 0 ? a / b : 0; }
function quantile(values, q) {
  const clean = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!clean.length) return 0;
  const position = (clean.length - 1) * q;
  const lower = Math.floor(position);
  const fraction = position - lower;
  return clean[lower + 1] === undefined ? clean[lower] : clean[lower] + fraction * (clean[lower + 1] - clean[lower]);
}
function median(values) { return quantile(values, 0.5); }
function bucketFor(amount) { return AMOUNT_BUCKETS.findIndex((bucket) => amount <= bucket.max); }
function emptyBreakdown() { return { attempts: 0, success: 0, paid: 0, buckets: Array.from({ length: AMOUNT_BUCKETS.length }, () => [0, 0]) }; }
function emptyTerminal() { return { sessions: 0, noAttempt: 0, entered: 0, verified: 0 }; }
function emptyMerchant(item) {
  return {
    id: item.id, label: item.label, categoryId: item.categoryId, categoryTitle: item.categoryTitle,
    sessions: 0, noAttempt: 0, entered: 0, bankPaid: 0, verified: 0, initialAmount: 0,
    issuerKnown: 0, issuerFailedKnown: 0,
    amountBuckets: Array.from({ length: AMOUNT_BUCKETS.length }, () => [0, 0]),
    psp: new Map(), issuer: new Map(), verify: new Map(), terminals: new Map(),
    retrySessions: 0, retrySuccess: 0, recoveredAttempts: [],
    retryBuckets: Array.from({ length: AMOUNT_BUCKETS.length }, () => [0, 0]),
    weekly: Array.from({ length: 5 }, () => ({ sessions: 0, noAttempt: 0, entered: 0, verified: 0 })),
  };
}
function breakdown(map, key) {
  let item = map.get(key);
  if (!item) { item = emptyBreakdown(); map.set(key, item); }
  return item;
}
function terminal(map, key) {
  let item = map.get(key);
  if (!item) { item = emptyTerminal(); map.set(key, item); }
  return item;
}
function normalized(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return values.map((value) => ratio(value, total));
}
function manhattan(left, right) { return left.reduce((sum, value, index) => sum + Math.abs(value - right[index]), 0); }
function dateOffset(date, start) { return Math.floor((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 86_400_000); }
async function writeJsonAtomic(path, value) {
  const temporary = `${path}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value)}\n`, "utf8");
  await rename(temporary, path);
}
async function fresh(source) {
  if (!onlyIfStale || !source) return false;
  try {
    const generated = JSON.parse(await readFile(indexPath, "utf8"));
    return generated.source?.size === source.size && generated.source?.mtimeMs === Math.trunc(source.mtimeMs);
  } catch { return false; }
}

function featureFor(merchant) {
  return {
    size: Math.log1p(merchant.sessions),
    ticket: Math.log1p(ratio(merchant.initialAmount, merchant.entered)),
    amounts: normalized(merchant.amountBuckets.map((bucket) => bucket[0])),
    automated: ratio(merchant.verify.get("Automated")?.attempts ?? 0, merchant.entered),
    psp: normalized(PSP_CODES.map((code) => merchant.psp.get(code)?.attempts ?? 0)),
  };
}
function peerDistance(left, right) {
  return Math.abs(left.size - right.size) * 2 + Math.abs(left.ticket - right.ticket) * 1.4 +
    manhattan(left.amounts, right.amounts) + Math.abs(left.automated - right.automated) * 0.7 +
    manhattan(left.psp, right.psp) * 0.9;
}

function adjustedSuccess(merchant, standardWeights) {
  const raw = ratio(merchant.verified, merchant.entered);
  let value = 0;
  for (const [key, weight] of standardWeights) {
    const [psp, bucketText] = key.split("|");
    const bucket = Number(bucketText);
    const stats = merchant.psp.get(psp)?.buckets[bucket] ?? [0, 0];
    const rate = stats[0] >= 5 ? (stats[1] + raw * 5) / (stats[0] + 5) : raw;
    value += rate * weight;
  }
  return value * 100;
}

function merchantMetrics(merchant, standardWeights) {
  const terminalRates = [...merchant.terminals.values()].filter((item) => item.entered >= 30).map((item) => ratio(item.verified, item.entered) * 100);
  return {
    bankReach: ratio(merchant.entered, merchant.sessions) * 100,
    postEntrySuccess: ratio(merchant.verified, merchant.entered) * 100,
    adjustedSuccess: adjustedSuccess(merchant, standardWeights),
    retrySuccess: ratio(merchant.retrySuccess, merchant.retrySessions) * 100,
    noAttempt: ratio(merchant.noAttempt, merchant.sessions) * 100,
    verifyIssue: ratio(merchant.bankPaid - merchant.verified, merchant.bankPaid) * 100,
    terminalGap: terminalRates.length >= 2 ? Math.max(...terminalRates) - Math.min(...terminalRates) : 0,
  };
}

function adjustedAnomalies(merchant, map, kind) {
  const entries = [...map.entries()];
  const totalAttempts = entries.reduce((sum, [, item]) => sum + item.attempts, 0);
  const totalSuccess = entries.reduce((sum, [, item]) => sum + item.success, 0);
  const output = [];
  for (const [id, item] of entries) {
    if (!id || item.attempts < 30) continue;
    const fallback = ratio(totalSuccess - item.success, totalAttempts - item.attempts);
    let expected = 0;
    for (let bucket = 0; bucket < AMOUNT_BUCKETS.length; bucket += 1) {
      const own = item.buckets[bucket];
      if (!own[0]) continue;
      const totalBucketAttempts = entries.reduce((sum, [, candidate]) => sum + candidate.buckets[bucket][0], 0);
      const totalBucketSuccess = entries.reduce((sum, [, candidate]) => sum + candidate.buckets[bucket][1], 0);
      const otherAttempts = totalBucketAttempts - own[0];
      const otherSuccess = totalBucketSuccess - own[1];
      const expectedRate = otherAttempts >= 10 ? ratio(otherSuccess, otherAttempts) : fallback;
      expected += ratio(own[0], item.attempts) * expectedRate;
    }
    const actual = ratio(item.success, item.attempts);
    output.push({
      id, label: kind === "psp" ? id : `صادرکننده ${id}`, sample: item.attempts,
      actual: round(actual * 100), expected: round(expected * 100), deviation: round((actual - expected) * 100),
      confidence: item.attempts >= 500 ? "high" : item.attempts >= 100 ? "medium" : "low",
    });
  }
  return output.sort((left, right) => left.deviation - right.deviation);
}

function pspAmountHeatmap(merchant) {
  const entries = [...merchant.psp.entries()].filter(([, item]) => item.attempts >= 30).sort((a, b) => b[1].attempts - a[1].attempts).slice(0, 6);
  return entries.map(([psp, item]) => ({
    id: psp,
    cells: item.buckets.map((own, bucket) => {
      if (own[0] < 15) return null;
      const others = entries.filter(([candidate]) => candidate !== psp);
      const otherAttempts = others.reduce((sum, [, stats]) => sum + stats.buckets[bucket][0], 0);
      const otherSuccess = others.reduce((sum, [, stats]) => sum + stats.buckets[bucket][1], 0);
      if (otherAttempts < 15) return null;
      return { sample: own[0], rate: round(ratio(own[1], own[0]) * 100), deviation: round((ratio(own[1], own[0]) - ratio(otherSuccess, otherAttempts)) * 100) };
    }),
  }));
}

function buildResult(merchant, peers, allMetrics) {
  const metrics = allMetrics.get(merchant.id);
  const peerMetrics = peers.map((peer) => allMetrics.get(peer.id));
  const peerMedian = Object.fromEntries(Object.keys(metrics).map((key) => [key, round(median(peerMetrics.map((item) => item[key])))]));
  const funnel = [
    { id: "sessions", label: "نمایش درگاه", count: merchant.sessions, rate: 100 },
    { id: "bank-entry", label: "ورود به بانک", count: merchant.entered, rate: ratio(merchant.entered, merchant.sessions) * 100 },
    { id: "bank-paid", label: "پرداخت در بانک", count: merchant.bankPaid, rate: ratio(merchant.bankPaid, merchant.sessions) * 100 },
    { id: "verified", label: "خرید تاییدشده", count: merchant.verified, rate: ratio(merchant.verified, merchant.sessions) * 100 },
  ].map((item) => ({ ...item, rate: round(item.rate) }));
  const dropoffs = funnel.slice(1).map((stage, index) => {
    const previous = funnel[index];
    return { id: `${previous.id}-${stage.id}`, from: previous.label, to: stage.label, count: previous.count - stage.count, rate: round(ratio(previous.count - stage.count, previous.count) * 100) };
  });
  const amountBuckets = AMOUNT_BUCKETS.map((bucket, index) => {
    const own = merchant.amountBuckets[index];
    const peerRates = peers.map((peer) => ratio(peer.amountBuckets[index][1], peer.amountBuckets[index][0]) * 100).filter((value, peerIndex) => peers[peerIndex].amountBuckets[index][0] >= 20);
    return { id: bucket.id, label: bucket.label, sample: own[0], successRate: round(ratio(own[1], own[0]) * 100), peerMedian: round(median(peerRates)) };
  });
  const terminals = [...merchant.terminals.entries()].filter(([, item]) => item.sessions >= 30).sort((a, b) => b[1].sessions - a[1].sessions).slice(0, 6).map(([id, item]) => ({
    id, sessions: item.sessions, successRate: round(ratio(item.verified, item.entered) * 100), noAttempt: round(ratio(item.noAttempt, item.sessions) * 100), eligible: item.entered >= 30,
  }));
  const verifyTypes = [...merchant.verify.entries()].map(([id, item]) => ({ id, label: id === "Automated" ? "خودکار" : "دستی", sample: item.attempts, successRate: round(ratio(item.success, item.attempts) * 100), paidIssue: round(ratio(item.paid - item.success, item.paid) * 100) }));
  const pspAnomalies = adjustedAnomalies(merchant, merchant.psp, "psp");
  const failedAttempts = merchant.entered - merchant.verified;
  const issuerAnalyzable = merchant.issuerFailedKnown >= 30 && ratio(merchant.issuerFailedKnown, failedAttempts) >= 0.5;
  const issuerAnomalies = issuerAnalyzable ? adjustedAnomalies(merchant, merchant.issuer, "issuer") : [];
  const worstPsp = pspAnomalies[0];
  const worstAmount = [...amountBuckets].filter((item) => item.sample >= 20).sort((a, b) => (a.successRate - a.peerMedian) - (b.successRate - b.peerMedian))[0];
  const gaps = {
    noAttempt: metrics.noAttempt - peerMedian.noAttempt,
    postEntry: metrics.adjustedSuccess - peerMedian.adjustedSuccess,
    retry: metrics.retrySuccess - peerMedian.retrySuccess,
    verify: metrics.verifyIssue - peerMedian.verifyIssue,
  };
  const priorities = [
    { id: "noAttempt", score: Math.max(gaps.noAttempt, 0) * merchant.sessions, eligible: gaps.noAttempt >= 2 },
    { id: "postEntry", score: Math.max(-gaps.postEntry, 0) * merchant.entered, eligible: gaps.postEntry <= -2 },
    { id: "retry", score: Math.max(-gaps.retry, 0) * merchant.retrySessions, eligible: gaps.retry <= -2 && merchant.retrySessions >= 30 },
    { id: "verify", score: Math.max(gaps.verify, 0) * merchant.bankPaid, eligible: gaps.verify >= 1 },
  ].filter((item) => item.eligible).sort((left, right) => right.score - left.score);
  const priority = priorities[0]?.id;
  let headline = "مسیر پرداخت شما در محدوده معمول همتایان قرار دارد.";
  let diagnosis = "افت متمرکز و معناداری در یک مرحله مشخص دیده نمی‌شود.";
  let action = "ترکیب PSP، مبلغ و ترمینال را در بازه بعد پایش کنید و تغییر ناگهانی را بررسی کنید.";
  if (priority === "postEntry") {
    headline = `نرخ ورود به بانک ${Math.abs(metrics.bankReach - peerMedian.bankReach) < 2 ? "عادی است" : "با همتایان تفاوت دارد"}، اما موفقیت تعدیل‌شده پس از ورود ${Math.abs(gaps.postEntry).toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد پایین‌تر از میانه همتاست.`;
    diagnosis = `افت اصلی ${worstPsp ? `در ${worstPsp.label}` : "پس از ورود به بانک"}${worstAmount ? ` و بازه ${worstAmount.label}` : ""} دیده می‌شود.`;
    action = "integration و پاسخ PSP را در بخش دارای افت بررسی و پس از خطای اول، مسیر retry یا PSP جایگزین را آزمایش کنید.";
  } else if (priority === "noAttempt") {
    headline = `نرخ NoAttempt شما ${gaps.noAttempt.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد بالاتر از میانه همتاست.`;
    diagnosis = "بخش مهمی از ریزش پیش از ارسال اولین تلاش به PSP رخ می‌دهد.";
    action = "ساخت نشست، زمان انقضا، نمایش درگاه و خطاهای سمت integration را پیش از بانک بررسی کنید.";
  } else if (priority === "retry") {
    headline = `موفقیت retry شما ${Math.abs(gaps.retry).toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد پایین‌تر از میانه همتاست.`;
    diagnosis = "کاربر پس از خطای اول فرصت یا مسیر موثری برای بازیابی پرداخت ندارد.";
    action = "پیام خطا، ارائه مجدد لینک و تغییر PSP در تلاش بعدی را به‌صورت کنترل‌شده آزمایش کنید.";
  } else if (priority === "verify") {
    headline = `سهم پرداخت بانکی بدون verify نهایی ${gaps.verify.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد بالاتر از میانه همتاست.`;
    diagnosis = "مسئله پس از پرداخت بانکی و در مرحله تایید نهایی متمرکز است.";
    action = "callback، timeout و منطق استعلام verify را برای وضعیت‌های Paid بررسی کنید.";
  }
  const eligible = merchant.sessions >= 30 && merchant.entered >= 20 && peers.length >= MIN_PEERS;
  if (!eligible) {
    headline = "نمونه این پذیرنده برای تحلیل سلامت پرداخت کافی نیست.";
    diagnosis = `در این بازه ${merchant.sessions.toLocaleString("fa-IR")} نشست و ${merchant.entered.toLocaleString("fa-IR")} ورود به بانک ثبت شده است.`;
    action = "بازه طولانی‌تری را بررسی کنید یا تا جمع‌شدن حداقل ۳۰ نشست و ۲۰ ورود به بانک صبر کنید.";
  }
  const normalizeWeekly = (item, field, denominator) => item.weekly.map((week) => round(ratio(week[field], week[denominator]) * 100));
  return {
    merchant: { id: merchant.id, categoryId: merchant.categoryId, categoryTitle: merchant.categoryTitle },
    period: PERIOD,
    eligible, confidence: merchant.entered >= 500 ? "high" : merchant.entered >= 100 ? "medium" : "low",
    peerGroup: { count: peers.length, minimum: MIN_PEERS, method: "هم‌دسته و نزدیک از نظر حجم، مبلغ، verify و ترکیب PSP" },
    sample: { sessions: merchant.sessions, entered: merchant.entered, verified: merchant.verified },
    kpis: {
      bankReach: { value: round(metrics.bankReach), peerMedian: peerMedian.bankReach },
      postEntrySuccess: { value: round(metrics.adjustedSuccess), raw: round(metrics.postEntrySuccess), peerMedian: peerMedian.adjustedSuccess },
      retrySuccess: { value: round(metrics.retrySuccess), peerMedian: peerMedian.retrySuccess, recovered: merchant.retrySuccess, eligible: merchant.retrySessions },
      noAttempt: { value: round(metrics.noAttempt), peerMedian: peerMedian.noAttempt, count: merchant.noAttempt },
      verifyIssue: { value: round(metrics.verifyIssue), peerMedian: peerMedian.verifyIssue, count: merchant.bankPaid - merchant.verified },
      terminalGap: { value: round(metrics.terminalGap), peerMedian: peerMedian.terminalGap },
    },
    funnel, dropoffs, amountBuckets, terminals, verifyTypes,
    retry: { sessions: merchant.retrySessions, recovered: merchant.retrySuccess, successRate: round(metrics.retrySuccess), medianAttempts: round(median(merchant.recoveredAttempts), 1), buckets: AMOUNT_BUCKETS.map((bucket, index) => ({ id: bucket.id, label: bucket.label, sessions: merchant.retryBuckets[index][0], recovered: merchant.retryBuckets[index][1], rate: round(ratio(merchant.retryBuckets[index][1], merchant.retryBuckets[index][0]) * 100) })) },
    pspAnomalies: pspAnomalies.slice(0, 5), issuerAnomalies: issuerAnomalies.slice(0, 5),
    issuerCoverage: {
      known: merchant.issuerKnown, entered: merchant.entered,
      failedKnown: merchant.issuerFailedKnown, failed: failedAttempts,
      analyzable: issuerAnalyzable,
    },
    pspAmountHeatmap: { columns: AMOUNT_BUCKETS.map((bucket) => ({ id: bucket.id, label: bucket.label })), rows: pspAmountHeatmap(merchant) },
    weeklyTrend: {
      labels: ["هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴", "روزهای پایانی"],
      noAttempt: normalizeWeekly(merchant, "noAttempt", "sessions"),
      success: normalizeWeekly(merchant, "verified", "entered"),
    },
    insight: { headline, diagnosis, action },
    methodology: {
      session: "هر session_key یک نشست است؛ ردیف try_seq صفر یا یک آغاز نشست را نشان می‌دهد.",
      bankEntry: "نشست‌هایی با try_seq = 1 که تلاش آن‌ها به PSP ارسال شده است.",
      bankPaid: "session_status برابر Paid، Verified یا Reversed؛ Reversed در خرید تاییدشده شمرده نمی‌شود.",
      adjusted: "نرخ موفقیت با وزن مشترک ترکیب PSP و چهار بازه مبلغ استاندارد و برای نمونه کوچک هموار شده است.",
      retry: "نشست دارای try_seq حداقل ۲ که تلاش اول موفق نبوده و تلاش بعدی Verified شده است.",
      anomaly: "انحراف PSP نسبت به سایر مسیرهای همان پذیرنده پس از کنترل بازه مبلغ و با حداقل نمونه ۳۰؛ تحلیل issuer فقط با پوشش کافی خطاها نمایش داده می‌شود.",
    },
  };
}

let PERIOD;
async function main() {
  let source;
  try { source = await stat(sourcePath); }
  catch (error) {
    if (error?.code !== "ENOENT") throw error;
    try { await stat(indexPath); console.log("[payment-health] challenge_data.csv is absent; using the existing generated aggregate."); return; }
    catch { throw new Error("challenge_data.csv is required to generate payment health data."); }
  }
  if (await fresh(source)) { console.log("[payment-health] generated aggregate is current."); return; }
  const salesIndex = JSON.parse(await readFile(salesIndexPath, "utf8"));
  const peerIndex = JSON.parse(await readFile(peerIndexPath, "utf8"));
  PERIOD = peerIndex.period;
  const merchants = new Map(salesIndex.merchants.map((item) => [item.id, emptyMerchant(item)]));
  const retryMap = new Map();
  const globalStrata = new Map();
  const lines = createInterface({ input: createReadStream(sourcePath), crlfDelay: Number.POSITIVE_INFINITY });
  let row = 0;
  console.log("[payment-health] aggregating funnel, retry, terminal, PSP, and issuer metrics...");
  for await (const line of lines) {
    row += 1;
    if (row === 1 || !line) continue;
    const values = line.split(",");
    const date = values[columns.createdAt].slice(0, 10);
    if (date < PERIOD.start || date > PERIOD.end) continue;
    const merchant = merchants.get(values[columns.merchant]);
    if (!merchant) continue;
    const sequence = Number(values[columns.sequence]);
    const amount = Number(values[columns.amount]) || 0;
    const bucket = bucketFor(amount);
    const finalVerified = values[columns.sessionStatus] === "Verified";
    const bankPaid = ["Paid", "Verified", "Reversed"].includes(values[columns.sessionStatus]);
    const week = Math.min(4, Math.floor(dateOffset(date, PERIOD.start) / 7));
    const terminalStats = terminal(merchant.terminals, values[columns.terminal]);
    if (sequence === 0 || sequence === 1) {
      merchant.sessions += 1; terminalStats.sessions += 1; merchant.weekly[week].sessions += 1;
      if (sequence === 0 || values[columns.tryStatus] === "NoAttempt") {
        merchant.noAttempt += 1; terminalStats.noAttempt += 1; merchant.weekly[week].noAttempt += 1;
      }
    }
    if (sequence === 1) {
      merchant.entered += 1; merchant.initialAmount += amount; terminalStats.entered += 1; merchant.weekly[week].entered += 1;
      if (bankPaid) merchant.bankPaid += 1;
      if (finalVerified) { merchant.verified += 1; terminalStats.verified += 1; merchant.weekly[week].verified += 1; }
      merchant.amountBuckets[bucket][0] += 1;
      if (finalVerified) merchant.amountBuckets[bucket][1] += 1;
      const psp = breakdown(merchant.psp, values[columns.psp]);
      const issuer = breakdown(merchant.issuer, values[columns.issuer]);
      const verify = breakdown(merchant.verify, values[columns.verify]);
      for (const item of [psp, issuer, verify]) {
        item.attempts += 1; item.buckets[bucket][0] += 1;
        if (bankPaid) item.paid += 1;
        if (finalVerified) { item.success += 1; item.buckets[bucket][1] += 1; }
      }
      if (values[columns.issuer]) {
        merchant.issuerKnown += 1;
        if (!finalVerified) merchant.issuerFailedKnown += 1;
      }
      const stratum = `${values[columns.psp]}|${bucket}`;
      const global = globalStrata.get(stratum) ?? [0, 0]; global[0] += 1; if (finalVerified) global[1] += 1; globalStrata.set(stratum, global);
      const key = `${merchant.id}\u001f${values[columns.session]}`;
      const existing = retryMap.get(key) ?? { merchant, attempts: 0, firstSuccess: false, recovered: false, bucket };
      existing.attempts = Math.max(existing.attempts, 1); existing.firstSuccess = values[columns.tryStatus] === "Verified"; existing.bucket = bucket; retryMap.set(key, existing);
    } else if (sequence >= 2) {
      const key = `${merchant.id}\u001f${values[columns.session]}`;
      const existing = retryMap.get(key) ?? { merchant, attempts: 0, firstSuccess: false, recovered: false, bucket };
      existing.attempts = Math.max(existing.attempts, sequence);
      if (values[columns.tryStatus] === "Verified") existing.recovered = true;
      retryMap.set(key, existing);
    }
  }
  for (const session of retryMap.values()) {
    if (session.attempts < 2) continue;
    session.merchant.retrySessions += 1;
    session.merchant.retryBuckets[session.bucket][0] += 1;
    if (!session.firstSuccess && session.recovered) {
      session.merchant.retrySuccess += 1; session.merchant.recoveredAttempts.push(session.attempts); session.merchant.retryBuckets[session.bucket][1] += 1;
    }
  }
  const totalStrata = [...globalStrata.values()].reduce((sum, item) => sum + item[0], 0);
  const standardWeights = [...globalStrata].map(([key, item]) => [key, ratio(item[0], totalStrata)]);
  const merchantList = [...merchants.values()];
  const features = new Map(merchantList.map((merchant) => [merchant.id, featureFor(merchant)]));
  const allMetrics = new Map(merchantList.map((merchant) => [merchant.id, merchantMetrics(merchant, standardWeights)]));
  await mkdir(outputDirectory, { recursive: true }); await mkdir(dirname(indexPath), { recursive: true });
  for (const merchant of merchantList) {
    const active = merchantList.filter((item) => item.id !== merchant.id && item.categoryId === merchant.categoryId && item.sessions > 0);
    const candidates = active.length >= MIN_PEERS ? active : merchantList.filter((item) => item.id !== merchant.id && item.categoryId === merchant.categoryId);
    const peers = candidates.map((item) => ({ item, distance: peerDistance(features.get(merchant.id), features.get(item.id)) })).sort((a, b) => a.distance - b.distance || a.item.id.localeCompare(b.item.id)).slice(0, MAX_PEERS).map((entry) => entry.item);
    await writeJsonAtomic(resolve(outputDirectory, `${merchant.id}.json`), buildResult(merchant, peers, allMetrics));
  }
  await writeJsonAtomic(indexPath, {
    source: { file: "challenge_data.csv", size: source.size, mtimeMs: Math.trunc(source.mtimeMs), sha256: salesIndex.source.sha256, rowCount: row - 1, dateRange: salesIndex.source.dateRange, generatedAt: new Date().toISOString() },
    period: PERIOD, minimumPeers: MIN_PEERS, maximumPeers: MAX_PEERS, merchants: salesIndex.merchants,
  });
  console.log(`[payment-health] wrote ${merchantList.length} merchant files.`);
}
await main();
