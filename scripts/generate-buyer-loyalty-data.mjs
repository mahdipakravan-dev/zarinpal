import { createReadStream } from "node:fs";
import { mkdir, readFile, rename, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createInterface } from "node:readline";

const root = resolve(import.meta.dirname, "..");
const sourcePath = resolve(root, "challenge_data.csv");
const salesIndexPath = resolve(root, "lib/generated/sales-pulse-index.json");
const indexPath = resolve(root, "lib/generated/buyer-loyalty-index.json");
const outputDirectory = resolve(root, "public/data/buyer-loyalty/merchants");
const onlyIfStale = process.argv.includes("--if-stale");
const DAY = 86_400_000;

const columns = {
  sessionKey: 0,
  trySequence: 1,
  merchantId: 3,
  categoryId: 4,
  categoryTitle: 5,
  amount: 6,
  tryStatus: 9,
  payerCard: 13,
  createdAt: 17,
};

const horizons = [7, 30, 60, 90];
const cohortMonths = [
  { id: "dey-1404", label: "دی ۱۴۰۴", start: "2026-01-01", end: "2026-01-20", partial: true },
  { id: "bahman-1404", label: "بهمن ۱۴۰۴", start: "2026-01-21", end: "2026-02-19" },
  { id: "esfand-1404", label: "اسفند ۱۴۰۴", start: "2026-02-20", end: "2026-03-20" },
  { id: "farvardin-1405", label: "فروردین ۱۴۰۵", start: "2026-03-21", end: "2026-04-20" },
  { id: "ordibehesht-1405", label: "اردیبهشت ۱۴۰۵", start: "2026-04-21", end: "2026-05-21" },
  { id: "khordad-1405", label: "خرداد ۱۴۰۵", start: "2026-05-22", end: "2026-06-21" },
  { id: "tir-1405", label: "تیر ۱۴۰۵", start: "2026-06-22", end: "2026-06-30", partial: true },
];

function round(value, digits = 2) {
  if (!Number.isFinite(value)) return 0;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function ratio(numerator, denominator) {
  return denominator > 0 ? numerator / denominator : 0;
}

function timestamp(date) {
  return Date.parse(`${date}T23:59:59Z`);
}

function eventKey(values) {
  return `${values[columns.createdAt]}|${values[columns.sessionKey]}|${values[columns.trySequence]}`;
}

function quantile(sorted, probability) {
  if (sorted.length === 0) return 0;
  const position = (sorted.length - 1) * probability;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  if (lower === upper) return sorted[lower];
  return sorted[lower] + (sorted[upper] - sorted[lower]) * (position - lower);
}

function wilson(successes, total, z = 1.96) {
  if (total === 0) return { low: 0, high: 0 };
  const observed = successes / total;
  const denominator = 1 + (z * z) / total;
  const center = (observed + (z * z) / (2 * total)) / denominator;
  const margin =
    (z / denominator) *
    Math.sqrt((observed * (1 - observed)) / total + (z * z) / (4 * total * total));
  return { low: round((center - margin) * 100), high: round((center + margin) * 100) };
}

async function writeJsonAtomic(path, value) {
  const temporary = `${path}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value)}\n`, "utf8");
  await rename(temporary, path);
}

async function fresh(source) {
  if (!onlyIfStale) return false;
  try {
    const generated = JSON.parse(await readFile(indexPath, "utf8"));
    return generated.source.size === source.size && generated.source.mtimeMs === Math.trunc(source.mtimeMs);
  } catch {
    return false;
  }
}

function updateCard(card, values) {
  const event = eventKey(values);
  const time = Date.parse(`${values[columns.createdAt].replace(" ", "T")}Z`);
  const amount = Number(values[columns.amount]);
  card.purchaseCount += 1;
  card.amount += amount;
  if (event < card.firstEvent) {
    card.secondEvent = card.firstEvent;
    card.secondTime = card.firstTime;
    card.firstEvent = event;
    card.firstTime = time;
    card.firstAmount = amount;
  } else if (event < card.secondEvent) {
    card.secondEvent = event;
    card.secondTime = time;
  }
  if (time > card.lastTime) card.lastTime = time;
}

function retention(cards, horizon, endTime) {
  const eligible = cards.filter((card) => card.firstTime <= endTime - horizon * DAY);
  const returned = eligible.filter(
    (card) => card.secondTime < Number.POSITIVE_INFINITY && card.secondTime - card.firstTime <= horizon * DAY
  ).length;
  return {
    horizon,
    eligible: eligible.length,
    returned,
    rate: round(ratio(returned, eligible.length) * 100),
    interval: wilson(returned, eligible.length),
  };
}

function segmentFor(card, endTime) {
  const age = (endTime - card.firstTime) / DAY;
  const recency = (endTime - card.lastTime) / DAY;
  if (age < 30) return "new";
  if (card.purchaseCount === 1) return "single";
  if (recency > 60) return "low-activity";
  if (card.purchaseCount >= 3) return "loyal";
  return "active-returning";
}

function insightFor({ retentionCurve, segments, intervalStats, valueComparison, confidence, eligible, observedCards, returningCards }) {
  const retention30 = retentionCurve.find((item) => item.horizon === 30);
  const single = segments.find((item) => item.id === "single");
  const repeatAmountShare = valueComparison.repeatAmountShare;
  if (!eligible) {
    const action = "تا ثبت حداقل ۳۰ مشتری واجد شرایط و ۱۰ مشتری بازگشتی، از اجرای کمپین گسترده خودداری کنید و فقط داده بیشتری جمع‌آوری کنید.";
    return {
      headline: "نمونه این پذیرنده برای تحلیل قابل اتکای وفاداری کافی نیست.",
      bullets: [
        `${observedCards.toLocaleString("fa-IR")} مشتری مشاهده‌شده و ${returningCards.toLocaleString("fa-IR")} مشتری دارای خرید مجدد ثبت شده است.`,
        `برای نرخ ۳۰روزه فقط ${retention30.eligible.toLocaleString("fa-IR")} مشتری فرصت کامل مشاهده داشته‌اند.`,
        "نمودارها صرفاً داده مشاهده‌شده را نشان می‌دهند و مبنای تصمیم قطعی نیستند.",
      ],
      action,
      ruleAction: action,
      actionSource: "rules",
    };
  }
  let action = `پیشنهاد خرید دوم را حدود ${Math.max(1, Math.round(intervalStats.p25))} تا ${Math.max(1, Math.round(intervalStats.median))} روز پس از اولین خرید مشاهده‌شده آزمایش کنید.`;
  if (retention30.rate >= 30) {
    action = "الگوی بازگشت فعلی را حفظ کنید و برای مشتریان تک‌خریدی یک آزمایش محدود با زمان‌بندی مشابه مشتریان وفادار اجرا کنید.";
  } else if (single.share < 25) {
    action = "برای افزایش ارزش خریدهای بعدی، بسته یا آستانه خرید را ابتدا روی گروه کوچکی از مشتریان بازگشتی آزمایش کنید.";
  }
  return {
    headline: `از هر ۱۰۰ مشتری واجد شرایط، حدود ${Math.round(retention30.rate).toLocaleString("fa-IR")} مشتری تا ۳۰ روز خرید دیگری داشته‌اند.`,
    bullets: [
      `${single.share.toLocaleString("fa-IR", { maximumFractionDigits: 1 })}٪ مشتریان پس از داشتن فرصت کافی همچنان تک‌خریدی مانده‌اند.`,
      `میانه زمان خرید دوم ${intervalStats.median.toLocaleString("fa-IR", { maximumFractionDigits: 0 })} روز است و بازه میانی بین ${intervalStats.p25.toLocaleString("fa-IR", { maximumFractionDigits: 0 })} تا ${intervalStats.p75.toLocaleString("fa-IR", { maximumFractionDigits: 0 })} روز قرار دارد.`,
      `${repeatAmountShare.toLocaleString("fa-IR", { maximumFractionDigits: 1 })}٪ مبلغ فروش مشاهده‌شده از خریدهای دوم و بعدی آمده است؛ اطمینان تحلیل ${confidence === "high" ? "زیاد" : confidence === "medium" ? "متوسط" : "کم"} است.`,
    ],
    action,
    ruleAction: action,
    actionSource: "rules",
  };
}

function buildMerchantResult(merchant, cardMap, endTime) {
  const cards = [...cardMap.values()];
  const totalPurchases = cards.reduce((sum, card) => sum + card.purchaseCount, 0);
  const totalAmount = cards.reduce((sum, card) => sum + card.amount, 0);
  const firstAmount = cards.reduce((sum, card) => sum + card.firstAmount, 0);
  const returningCards = cards.filter((card) => card.purchaseCount >= 2);
  const repeatPurchases = totalPurchases - cards.length;
  const repeatAmount = totalAmount - firstAmount;
  const secondIntervals = returningCards
    .map((card) => (card.secondTime - card.firstTime) / DAY)
    .sort((left, right) => left - right);
  const retentionCurve = horizons.map((horizon) => retention(cards, horizon, endTime));

  const segmentDefinitions = [
    ["new", "تازه", "اولین خرید مشاهده‌شده در ۳۰ روز پایانی"],
    ["single", "تک‌خریدی", "یک خرید و حداقل ۳۰ روز فرصت مشاهده"],
    ["active-returning", "بازگشتی فعال", "دو خرید و فعالیت در ۶۰ روز پایانی"],
    ["loyal", "وفادار", "حداقل سه خرید و فعالیت در ۶۰ روز پایانی"],
    ["low-activity", "کم‌فعالیت", "دارای خرید تکراری، بدون خرید در ۶۰ روز پایانی"],
  ];
  const segmentAggregates = new Map(
    segmentDefinitions.map(([id]) => [id, { cards: 0, amount: 0, purchases: 0 }])
  );
  for (const card of cards) {
    const segment = segmentAggregates.get(segmentFor(card, endTime));
    segment.cards += 1;
    segment.amount += card.amount;
    segment.purchases += card.purchaseCount;
  }
  const segments = segmentDefinitions.map(([id, label, definition]) => {
    const aggregate = segmentAggregates.get(id);
    return {
      id,
      label,
      definition,
      cards: aggregate.cards,
      share: round(ratio(aggregate.cards, cards.length) * 100),
      amount: aggregate.amount,
      amountShare: round(ratio(aggregate.amount, totalAmount) * 100),
      purchases: aggregate.purchases,
    };
  });

  const cohort = cohortMonths.map((month) => {
    const startTime = Date.parse(`${month.start}T00:00:00Z`);
    const monthEndTime = timestamp(month.end);
    const cohortCards = cards.filter(
      (card) => card.firstTime >= startTime && card.firstTime <= monthEndTime
    );
    return {
      ...month,
      cards: cohortCards.length,
      retention: horizons.map((horizon) => {
        if (monthEndTime > endTime - horizon * DAY) return null;
        const returned = cohortCards.filter(
          (card) => card.secondTime - card.firstTime <= horizon * DAY
        ).length;
        return {
          horizon,
          eligible: cohortCards.length,
          returned,
          rate: round(ratio(returned, cohortCards.length) * 100),
          interval: wilson(returned, cohortCards.length),
        };
      }),
    };
  });

  const intervalBuckets = [
    { id: "0-7", label: "۰ تا ۷", maximum: 7 },
    { id: "8-15", label: "۸ تا ۱۵", maximum: 15 },
    { id: "16-30", label: "۱۶ تا ۳۰", maximum: 30 },
    { id: "31-60", label: "۳۱ تا ۶۰", maximum: 60 },
    { id: "61-90", label: "۶۱ تا ۹۰", maximum: 90 },
    { id: "90+", label: "بیش از ۹۰", maximum: Number.POSITIVE_INFINITY },
  ];
  let previousMaximum = Number.NEGATIVE_INFINITY;
  const intervalDistribution = intervalBuckets.map((bucket) => {
    const count = secondIntervals.filter(
      (days) => days > previousMaximum && days <= bucket.maximum
    ).length;
    previousMaximum = bucket.maximum;
    return { id: bucket.id, label: bucket.label, count, share: round(ratio(count, secondIntervals.length) * 100) };
  });
  const intervalStats = {
    p25: round(quantile(secondIntervals, 0.25), 1),
    median: round(quantile(secondIntervals, 0.5), 1),
    p75: round(quantile(secondIntervals, 0.75), 1),
    sampleSize: secondIntervals.length,
  };
  const valueComparison = {
    firstPurchaseAverage: round(ratio(firstAmount, cards.length)),
    repeatPurchaseAverage: round(ratio(repeatAmount, repeatPurchases)),
    firstAmount,
    repeatAmount,
    repeatAmountShare: round(ratio(repeatAmount, totalAmount) * 100),
  };
  const eligible30 = retentionCurve.find((item) => item.horizon === 30).eligible;
  const eligible = cards.length >= 30 && eligible30 >= 30 && returningCards.length >= 10;
  const confidence = eligible30 >= 500 ? "high" : eligible30 >= 100 ? "medium" : "low";
  const insight = insightFor({
    retentionCurve,
    segments,
    intervalStats,
    valueComparison,
    confidence,
    eligible,
    observedCards: cards.length,
    returningCards: returningCards.length,
  });

  return {
    merchant: { id: merchant.id, categoryTitle: merchant.categoryTitle },
    observation: { start: "2026-01-01", end: "2026-06-30" },
    eligible,
    confidence,
    kpis: {
      observedCards: cards.length,
      returningCards: returningCards.length,
      returningCardRate: round(ratio(returningCards.length, cards.length) * 100),
      repeatPurchases,
      repeatPurchaseShare: round(ratio(repeatPurchases, totalPurchases) * 100),
      repeatAmount,
      repeatAmountShare: valueComparison.repeatAmountShare,
      medianSecondPurchaseDays: intervalStats.median,
      verifiedPurchases: totalPurchases,
      totalAmount,
    },
    retentionCurve,
    cohort,
    intervalDistribution,
    intervalStats,
    valueComparison,
    segments,
    insight,
    methodology: {
      identity: "payer_card_key scoped to merchant_key",
      purchase: "try_status = Verified",
      firstPurchase: "earliest verified purchase observed from 2026-01-01 onward",
      retentionDenominator: "cards with a complete observation opportunity for the selected horizon",
      excludedFrom30DayRetention: cards.length - eligible30,
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
      console.log("[buyer-loyalty] challenge_data.csv is absent; using the existing generated aggregate.");
      return;
    } catch {
      throw new Error("challenge_data.csv is required to generate buyer loyalty data.");
    }
  }
  if (await fresh(source)) {
    console.log("[buyer-loyalty] generated aggregate is current.");
    return;
  }
  const salesIndex = JSON.parse(await readFile(salesIndexPath, "utf8"));
  const merchants = salesIndex.merchants;
  const merchantCards = new Map(merchants.map((merchant) => [merchant.id, new Map()]));
  const lines = createInterface({ input: createReadStream(sourcePath), crlfDelay: Number.POSITIVE_INFINITY });
  let row = 0;
  console.log("[buyer-loyalty] aggregating verified purchases by merchant and card...");
  for await (const line of lines) {
    row += 1;
    if (row === 1 || !line) continue;
    const values = line.split(",");
    if (values[columns.tryStatus] !== "Verified" || !values[columns.payerCard]) continue;
    const cards = merchantCards.get(values[columns.merchantId]);
    if (!cards) continue;
    const payerCard = values[columns.payerCard];
    let card = cards.get(payerCard);
    const event = eventKey(values);
    const time = Date.parse(`${values[columns.createdAt].replace(" ", "T")}Z`);
    const amount = Number(values[columns.amount]);
    if (!card) {
      card = {
        purchaseCount: 1,
        amount,
        firstAmount: amount,
        firstEvent: event,
        firstTime: time,
        secondEvent: "\uffff",
        secondTime: Number.POSITIVE_INFINITY,
        lastTime: time,
      };
      cards.set(payerCard, card);
    } else {
      updateCard(card, values);
    }
  }

  const endTime = timestamp("2026-06-30");
  await mkdir(outputDirectory, { recursive: true });
  await mkdir(dirname(indexPath), { recursive: true });
  for (const merchant of merchants) {
    await writeJsonAtomic(
      resolve(outputDirectory, `${merchant.id}.json`),
      buildMerchantResult(merchant, merchantCards.get(merchant.id), endTime)
    );
  }
  await writeJsonAtomic(indexPath, {
    source: {
      file: "challenge_data.csv",
      size: source.size,
      mtimeMs: Math.trunc(source.mtimeMs),
      sha256: salesIndex.source.sha256,
      rowCount: salesIndex.source.rowCount,
      dateRange: salesIndex.source.dateRange,
      generatedAt: new Date().toISOString(),
    },
    merchants,
    horizons,
    cohortMonths,
  });
  console.log(`[buyer-loyalty] wrote ${merchants.length} merchant files.`);
}

await main();
