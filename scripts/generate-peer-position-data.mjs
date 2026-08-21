import { createReadStream } from "node:fs";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createInterface } from "node:readline";

const root = resolve(import.meta.dirname, "..");
const sourcePath = resolve(root, "challenge_data.csv");
const salesIndexPath = resolve(root, "lib/generated/sales-pulse-index.json");
const loyaltyDirectory = resolve(root, "public/data/buyer-loyalty/merchants");
const indexPath = resolve(root, "lib/generated/peer-position-index.json");
const outputDirectory = resolve(root, "public/data/peer-position/merchants");
const onlyIfStale = process.argv.includes("--if-stale");

const PERIOD = {
  id: "khordad-1405",
  label: "خرداد ۱۴۰۵",
  range: "۱ تا ۳۱ خرداد ۱۴۰۵",
  start: "2026-05-22",
  end: "2026-06-21",
  previousStart: "2026-04-21",
  previousEnd: "2026-05-21",
};
const MIN_PEERS = 10;
const MAX_PEERS = 24;
const PSP_CODES = ["PSP-01", "PSP-02", "PSP-03", "PSP-04", "PSP-05", "PSP-06", "PSP-07", "PSP-08"];
const columns = {
  session: 0,
  sequence: 1,
  merchant: 3,
  categoryId: 4,
  categoryTitle: 5,
  amount: 6,
  fee: 7,
  sessionStatus: 8,
  tryStatus: 9,
  psp: 11,
  verify: 14,
  createdAt: 17,
};

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return 0;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function ratio(numerator, denominator) {
  return denominator > 0 ? numerator / denominator : 0;
}

function median(values) {
  return quantile(values, 0.5);
}

function quantile(values, q) {
  const clean = values.filter(Number.isFinite).sort((a, b) => a - b);
  if (!clean.length) return 0;
  const position = (clean.length - 1) * q;
  const lower = Math.floor(position);
  const fraction = position - lower;
  return clean[lower + 1] === undefined
    ? clean[lower]
    : clean[lower] + fraction * (clean[lower + 1] - clean[lower]);
}

function emptyMerchant(id, categoryId, categoryTitle) {
  return {
    id,
    categoryId,
    categoryTitle,
    current: {
      sessions: 0,
      noAttempt: 0,
      attemptSessions: 0,
      verifiedSessions: 0,
      sales: 0,
      purchases: 0,
      fee: 0,
      amountBands: [0, 0, 0, 0],
      hours: [0, 0, 0, 0],
      verify: [0, 0],
      psp: Object.fromEntries(PSP_CODES.map((code) => [code, 0])),
      strata: new Map(),
      daily: Array(31).fill(0),
      weekly: Array(5).fill(0),
      retrySessions: 0,
      retrySuccess: 0,
    },
    previousSales: 0,
    loyalty: null,
  };
}

function amountBand(amount) {
  if (amount <= 1_000_000) return 0;
  if (amount <= 5_000_000) return 1;
  if (amount <= 20_000_000) return 2;
  return 3;
}

function dateOffset(date, start) {
  return Math.floor((Date.parse(`${date}T00:00:00Z`) - Date.parse(`${start}T00:00:00Z`)) / 86_400_000);
}

function increment(map, key, success) {
  const value = map.get(key) ?? [0, 0];
  value[0] += 1;
  if (success) value[1] += 1;
  map.set(key, value);
}

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
  } catch {
    return false;
  }
}

function normalized(values) {
  const total = values.reduce((sum, value) => sum + value, 0);
  return values.map((value) => ratio(value, total));
}

function coefficientOfVariation(values) {
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  if (mean <= 0) return 0;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  return Math.sqrt(variance) / mean;
}

function adjustedSuccess(merchant, standardWeights) {
  const raw = ratio(merchant.current.verifiedSessions, merchant.current.attemptSessions);
  let result = 0;
  for (const [stratum, weight] of standardWeights) {
    const [sessions = 0, success = 0] = merchant.current.strata.get(stratum) ?? [];
    const smoothed = sessions >= 5 ? (success + raw * 5) / (sessions + 5) : raw;
    result += weight * smoothed;
  }
  return result * 100;
}

function metricValues(merchant, standardWeights) {
  const current = merchant.current;
  const avgTicket = ratio(current.sales, current.purchases);
  const growth = merchant.previousSales > 0
    ? ((current.sales - merchant.previousSales) / merchant.previousSales) * 100
    : null;
  const retention30 = merchant.loyalty?.retentionCurve?.find((item) => item.horizon === 30)?.rate ?? 0;
  return {
    sales: current.sales,
    growth,
    adjustedSuccess: adjustedSuccess(merchant, standardWeights),
    avgTicket,
    retention30,
    returningSales: merchant.loyalty?.kpis?.repeatAmountShare ?? 0,
    noAttempt: ratio(current.noAttempt, current.sessions) * 100,
    retrySuccess: ratio(current.retrySuccess, current.retrySessions) * 100,
    feePressure: ratio(current.fee, current.sales) * 10_000,
    volatility: coefficientOfVariation(current.daily) * 100,
  };
}

function merchantFeatures(merchant) {
  const current = merchant.current;
  const amountShares = normalized(current.amountBands);
  const hourShares = normalized(current.hours);
  const pspShares = normalized(PSP_CODES.map((code) => current.psp[code]));
  const avgTicket = ratio(current.sales, current.purchases);
  const retention30 = merchant.loyalty?.retentionCurve?.find((item) => item.horizon === 30)?.rate ?? 0;
  return {
    size: Math.log1p(current.sessions),
    ticket: Math.log1p(avgTicket),
    small: amountShares[0],
    large: amountShares[3],
    hours: hourShares,
    retention: retention30 / 100,
    automated: ratio(current.verify[0], current.attemptSessions),
    psp: pspShares,
  };
}

function manhattan(left, right) {
  return left.reduce((sum, value, index) => sum + Math.abs(value - right[index]), 0);
}

function peerDistance(left, right) {
  return (
    Math.abs(left.size - right.size) * 1.8 +
    Math.abs(left.ticket - right.ticket) * 1.3 +
    Math.abs(left.small - right.small) +
    Math.abs(left.large - right.large) +
    manhattan(left.hours, right.hours) * 0.9 +
    Math.abs(left.retention - right.retention) * 1.4 +
    Math.abs(left.automated - right.automated) * 0.5 +
    manhattan(left.psp, right.psp) * 0.65
  );
}

function percentile(value, peerValues, higherIsBetter = true) {
  const clean = peerValues.filter(Number.isFinite);
  if (!Number.isFinite(value) || clean.length === 0) return 0;
  const lower = clean.filter((item) => item < value).length;
  const equal = clean.filter((item) => item === value).length;
  const raw = ((lower + equal * 0.5) / clean.length) * 100;
  return Math.max(1, Math.min(99, Math.round(higherIsBetter ? raw : 100 - raw)));
}

const metricDefinitions = [
  ["sales", "مبلغ فروش موفق", "money", true],
  ["growth", "رشد فروش ماهانه", "percent", true],
  ["adjustedSuccess", "نرخ موفقیت تعدیل‌شده", "percent", true],
  ["avgTicket", "متوسط مبلغ خرید", "money", true],
  ["retention30", "نرخ خرید مجدد ۳۰روزه", "percent", true],
  ["returningSales", "سهم فروش مشتریان بازگشتی", "percent", true],
  ["noAttempt", "نرخ NoAttempt", "percent", false],
  ["retrySuccess", "موفقیت retry", "percent", true],
  ["feePressure", "فشار نسبی کارمزد", "basis", false],
  ["volatility", "نوسان روزانه فروش", "percent", false],
];

const actionByMetric = {
  growth: "کانال‌ها و ساعت‌هایی را که در ماه قبل افت کرده‌اند جدا کنید و یک آزمایش بازیابی فروش تعریف کنید.",
  adjustedSuccess: "افت موفقیت را به تفکیک PSP و بازه مبلغ بررسی و مسیر پرتکرار خطا را اصلاح کنید.",
  retention30: "برای مشتریان خرید اول، پیشنهاد خرید دوم را پیش از روز سی‌ام آزمایش کنید.",
  returningSales: "کمپین بازگشت را روی مشتریان تک‌خرید با مبلغ خرید بالاتر متمرکز کنید.",
  noAttempt: "مسیر قبل از ورود به PSP را بررسی کنید؛ بخش بزرگی از نشست‌ها هنوز به تلاش پرداخت نمی‌رسند.",
  retrySuccess: "پس از خطای اول، PSP جایگزین و پیام راهنمای تلاش مجدد را آزمایش کنید.",
  feePressure: "ترکیب مبالغ خرد و مسیرهای پرهزینه را بازبینی کنید تا فشار کارمزد کاهش یابد.",
  volatility: "فروش روزهای ضعیف را با برنامه تکرارشونده و تمرکز بر ساعات پایدار هموار کنید.",
  sales: "شکاف حجم فروش را ابتدا از مسیر تعداد نشست، موفقیت پرداخت و مبلغ خرید تفکیک کنید.",
  avgTicket: "بسته پیشنهادی و آستانه خرید را برای افزایش مبلغ هر سفارش آزمایش کنید.",
};

function sizeLabel(sessions) {
  if (sessions < 30) return "کم‌حجم؛ کمتر از ۳۰ نشست";
  if (sessions < 200) return "کوچک؛ ۳۰ تا ۱۹۹ نشست";
  if (sessions < 1_000) return "متوسط؛ ۲۰۰ تا ۹۹۹ نشست";
  if (sessions < 5_000) return "بزرگ؛ ۱٬۰۰۰ تا ۴٬۹۹۹ نشست";
  return "پرحجم؛ ۵٬۰۰۰ نشست و بیشتر";
}

function ticketLabel(value) {
  if (value < 1_000_000) return "کمتر از ۱۰۰ هزار تومان";
  if (value < 5_000_000) return "۱۰۰ تا ۵۰۰ هزار تومان";
  if (value < 20_000_000) return "۵۰۰ هزار تا ۲ میلیون تومان";
  return "بیش از ۲ میلیون تومان";
}

function buildResult(merchant, peers, allMetrics) {
  const values = allMetrics.get(merchant.id);
  const peerMetricValues = peers.map((peer) => allMetrics.get(peer.id));
  const metrics = metricDefinitions.map(([id, label, format, higherIsBetter]) => {
    const peerValues = peerMetricValues.map((item) => item[id]).filter(Number.isFinite);
    const value = values[id];
    const rank = percentile(value, peerValues, higherIsBetter);
    return {
      id,
      label,
      format,
      value: Number.isFinite(value) ? round(value) : null,
      median: round(median(peerValues)),
      q1: round(quantile(peerValues, 0.25)),
      q3: round(quantile(peerValues, 0.75)),
      percentile: rank,
      higherIsBetter,
      tone: rank >= 65 ? "good" : rank <= 35 ? "warn" : "neutral",
      sampleSize: peerValues.length,
    };
  });
  const metricById = Object.fromEntries(metrics.map((metric) => [metric.id, metric]));
  const strategic = metrics.filter((metric) => !["sales", "avgTicket"].includes(metric.id));
  const strongest = [...strategic].sort((a, b) => b.percentile - a.percentile)[0];
  const weakest = [...strategic].sort((a, b) => a.percentile - b.percentile)[0];
  const eligible = merchant.current.sessions >= 30 && merchant.current.purchases >= 10 && peers.length >= MIN_PEERS;
  const opportunities = [...metrics]
    .map((metric) => ({
      id: metric.id,
      label: metric.label,
      percentile: metric.percentile,
      gap: Math.max(0, 50 - metric.percentile),
      action: actionByMetric[metric.id],
    }))
    .filter((item) => item.gap > 0)
    .sort((a, b) => b.gap - a.gap)
    .slice(0, 3);

  const peakIndex = merchant.current.hours.indexOf(Math.max(...merchant.current.hours));
  const peakLabels = ["بامداد ۰ تا ۶", "صبح ۶ تا ۱۲", "بعدازظهر ۱۲ تا ۱۸", "شب ۱۸ تا ۲۴"];
  const topPsp = PSP_CODES
    .map((code) => [code, merchant.current.psp[code]])
    .sort((left, right) => right[1] - left[1])
    .slice(0, 2)
    .filter((item) => item[1] > 0)
    .map((item) => item[0]);
  const amountShares = normalized(merchant.current.amountBands);
  const weeklyIndex = (item) => {
    const mean = item.current.weekly.reduce((sum, value) => sum + value, 0) / 5;
    return item.current.weekly.map((value) => round(ratio(value, mean) * 100, 1));
  };
  const peerWeekly = peers.map(weeklyIndex);

  return {
    merchant: { id: merchant.id, categoryId: merchant.categoryId, categoryTitle: merchant.categoryTitle },
    period: PERIOD,
    eligible,
    confidence: merchant.current.purchases >= 500 ? "high" : merchant.current.purchases >= 100 ? "medium" : "low",
    sample: { sessions: merchant.current.sessions, purchases: merchant.current.purchases },
    peerGroup: {
      count: peers.length,
      minimum: MIN_PEERS,
      method: "نزدیک‌ترین همتاهای هم‌دسته با فاصله چندمتغیره",
      criteria: [
        { id: "category", label: "دسته کسب‌وکار", value: merchant.categoryTitle },
        { id: "size", label: "اندازه بر اساس تعداد پرداخت", value: sizeLabel(merchant.current.sessions) },
        { id: "ticket", label: "بازه متوسط مبلغ خرید", value: ticketLabel(values.avgTicket) },
        { id: "amountMix", label: "ترکیب مبلغ پرداخت", value: `${round(amountShares[0] * 100)}٪ خرد · ${round(amountShares[3] * 100)}٪ بزرگ` },
        { id: "time", label: "الگوی زمانی فعالیت", value: peakLabels[peakIndex] },
        { id: "returning", label: "خرید مجدد ۳۰روزه", value: `${round(values.retention30)}٪` },
        { id: "verify", label: "نوع غالب verify", value: ratio(merchant.current.verify[0], merchant.current.attemptSessions) >= 0.5 ? "خودکار" : "دستی" },
        { id: "psp", label: "ترکیب غالب PSP", value: topPsp.join(" و ") || "بدون تلاش PSP" },
      ],
    },
    metrics,
    insight: eligible
      ? {
          headline: `در میان ${peers.length} پذیرنده مشابه، بهترین جایگاه شما ${strongest.label} در صدک ${strongest.percentile} است؛ اما ${weakest.label} در صدک ${weakest.percentile} قرار دارد.`,
          diagnosis: weakest.percentile < 35
            ? `مسئله اصلی فعلی ${weakest.label} است، نه ${strongest.label}.`
            : "عملکرد شما در شاخص‌های اصلی نزدیک یا بالاتر از میانه گروه است.",
          action: actionByMetric[weakest.id],
        }
      : {
          headline: "نمونه این پذیرنده برای مقایسه قابل اتکا کافی نیست.",
          diagnosis: `در این بازه ${merchant.current.sessions} نشست و ${merchant.current.purchases} خرید موفق ثبت شده است.`,
          action: "برای تصمیم‌گیری، بازه طولانی‌تری را بررسی کنید یا تا رسیدن به حداقل ۳۰ نشست و ۱۰ خرید موفق صبر کنید.",
        },
    opportunities,
    scatter: {
      xLabel: "رشد فروش ماهانه",
      yLabel: "خرید مجدد ۳۰روزه",
      xMedian: metricById.growth.median,
      yMedian: metricById.retention30.median,
      you: { x: values.growth ?? 0, y: values.retention30 },
      peers: peerMetricValues
        .filter((item) => Number.isFinite(item.growth))
        .map((item, index) => ({ id: `همتا ${index + 1}`, x: item.growth, y: item.retention30 })),
    },
    weeklyTrend: {
      labels: ["هفته ۱", "هفته ۲", "هفته ۳", "هفته ۴", "روزهای پایانی"],
      you: weeklyIndex(merchant),
      peerMedian: Array.from({ length: 5 }, (_, index) => round(median(peerWeekly.map((item) => item[index])), 1)),
    },
    methodology: {
      success: "نشست‌های دارای تلاش PSP؛ استانداردشده با ترکیب مشترک PSP و بازه مبلغ، همراه با هموارسازی نمونه‌های کوچک",
      noAttempt: "try_status = NoAttempt تقسیم بر همه نشست‌ها",
      retry: "نشست‌های موفق پس از تلاش دوم تقسیم بر نشست‌های دارای حداقل دو تلاش",
      retention: "مشتریان دارای فرصت مشاهده کامل ۳۰روزه پس از اولین خرید موفق",
      fee: "adjusted_fee خریدهای موفق تقسیم بر مبلغ فروش موفق، بر حسب واحد در ده‌هزار",
      stability: "ضریب تغییرات فروش روزانه؛ صدک بالاتر به معنی نوسان کمتر است",
    },
  };
}

async function main() {
  let source;
  try {
    source = await stat(sourcePath);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
    try {
      await stat(indexPath);
      console.log("[peer-position] challenge_data.csv is absent; using the existing generated aggregate.");
      return;
    } catch {
      throw new Error("challenge_data.csv is required to generate peer position data.");
    }
  }
  if (await fresh(source)) {
    console.log("[peer-position] generated aggregate is current.");
    return;
  }

  const salesIndex = JSON.parse(await readFile(salesIndexPath, "utf8"));
  const merchants = new Map(
    salesIndex.merchants.map((item) => [item.id, emptyMerchant(item.id, item.categoryId, item.categoryTitle)])
  );
  const retrySessions = new Map();
  const globalStrata = new Map();
  const lines = createInterface({ input: createReadStream(sourcePath), crlfDelay: Number.POSITIVE_INFINITY });
  let row = 0;
  console.log("[peer-position] aggregating session, retry, amount, PSP, and time metrics...");
  for await (const line of lines) {
    row += 1;
    if (row === 1 || !line) continue;
    const values = line.split(",");
    const merchant = merchants.get(values[columns.merchant]);
    if (!merchant) continue;
    const date = values[columns.createdAt].slice(0, 10);
    const sequence = Number(values[columns.sequence]);
    const amount = Number(values[columns.amount]) || 0;
    const verified = values[columns.tryStatus] === "Verified";

    if (verified) {
      if (date >= PERIOD.start && date <= PERIOD.end) {
        const offset = dateOffset(date, PERIOD.start);
        const hour = Number(values[columns.createdAt].slice(11, 13));
        merchant.current.sales += amount;
        merchant.current.purchases += 1;
        merchant.current.fee += Number(values[columns.fee]) || 0;
        merchant.current.hours[Math.min(3, Math.floor(hour / 6))] += 1;
        merchant.current.daily[offset] += amount;
        merchant.current.weekly[Math.min(4, Math.floor(offset / 7))] += amount;
      } else if (date >= PERIOD.previousStart && date <= PERIOD.previousEnd) {
        merchant.previousSales += amount;
      }
    }
    if (date < PERIOD.start || date > PERIOD.end) continue;

    if (sequence === 0 || sequence === 1) {
      merchant.current.sessions += 1;
      if (sequence === 0 || values[columns.tryStatus] === "NoAttempt") merchant.current.noAttempt += 1;
    }
    if (sequence === 1) {
      const success = values[columns.sessionStatus] === "Verified";
      const psp = values[columns.psp];
      const band = amountBand(amount);
      const stratum = `${psp}|${band}`;
      merchant.current.attemptSessions += 1;
      if (success) merchant.current.verifiedSessions += 1;
      merchant.current.amountBands[band] += 1;
      merchant.current.verify[values[columns.verify] === "Automated" ? 0 : 1] += 1;
      if (merchant.current.psp[psp] !== undefined) merchant.current.psp[psp] += 1;
      increment(merchant.current.strata, stratum, success);
      increment(globalStrata, stratum, success);
    }
    if (sequence >= 2) {
      const key = `${merchant.id}\u001f${values[columns.session]}`;
      const session = retrySessions.get(key) ?? { merchant, success: false };
      if (verified) session.success = true;
      retrySessions.set(key, session);
    }
  }
  for (const session of retrySessions.values()) {
    session.merchant.current.retrySessions += 1;
    if (session.success) session.merchant.current.retrySuccess += 1;
  }

  await Promise.all([...merchants.values()].map(async (merchant) => {
    try {
      merchant.loyalty = JSON.parse(await readFile(resolve(loyaltyDirectory, `${merchant.id}.json`), "utf8"));
    } catch {
      merchant.loyalty = null;
    }
  }));

  const totalStrata = [...globalStrata.values()].reduce((sum, value) => sum + value[0], 0);
  const standardWeights = [...globalStrata].map(([key, value]) => [key, ratio(value[0], totalStrata)]);
  const merchantList = [...merchants.values()];
  const features = new Map(merchantList.map((merchant) => [merchant.id, merchantFeatures(merchant)]));
  const allMetrics = new Map(merchantList.map((merchant) => [merchant.id, metricValues(merchant, standardWeights)]));

  await mkdir(outputDirectory, { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  for (const merchant of merchantList) {
    const candidates = merchantList.filter((item) => item.id !== merchant.id && item.categoryId === merchant.categoryId && item.current.sessions > 0);
    const fallback = candidates.length >= MIN_PEERS
      ? candidates
      : merchantList.filter((item) => item.id !== merchant.id && item.categoryId === merchant.categoryId);
    const peers = fallback
      .map((item) => ({ item, distance: peerDistance(features.get(merchant.id), features.get(item.id)) }))
      .sort((left, right) => left.distance - right.distance || left.item.id.localeCompare(right.item.id))
      .slice(0, MAX_PEERS)
      .map((entry) => entry.item);
    await writeJsonAtomic(resolve(outputDirectory, `${merchant.id}.json`), buildResult(merchant, peers, allMetrics));
  }

  await writeJsonAtomic(indexPath, {
    source: {
      file: "challenge_data.csv",
      size: source.size,
      mtimeMs: Math.trunc(source.mtimeMs),
      sha256: salesIndex.source.sha256,
      rowCount: row - 1,
      dateRange: salesIndex.source.dateRange,
      generatedAt: new Date().toISOString(),
    },
    period: PERIOD,
    minimumPeers: MIN_PEERS,
    maximumPeers: MAX_PEERS,
    merchants: salesIndex.merchants,
  });
  console.log(`[peer-position] wrote ${merchantList.length} merchant files with privacy-safe peer groups.`);
}

await main();
