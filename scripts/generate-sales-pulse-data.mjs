import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { createInterface } from "node:readline";

const projectRoot = resolve(import.meta.dirname, "..");
const sourcePath = resolve(projectRoot, "challenge_data.csv");
const indexOutputPath = resolve(projectRoot, "lib/generated/sales-pulse-index.json");
const merchantOutputDirectory = resolve(projectRoot, "public/data/sales-pulse/merchants");
const onlyIfStale = process.argv.includes("--if-stale");

const periods = [
  {
    id: "esfand-1404",
    label: "اسفند ۱۴۰۴",
    range: "۱ تا ۲۹ اسفند ۱۴۰۴",
    start: "2026-02-20",
    end: "2026-03-20",
    kind: "month",
  },
  {
    id: "nowruz-1405",
    label: "نوروز ۱۴۰۵",
    range: "۱۵ اسفند ۱۴۰۴ تا ۴ فروردین ۱۴۰۵",
    start: "2026-03-06",
    end: "2026-03-24",
    kind: "occasion",
  },
  {
    id: "farvardin-1405",
    label: "فروردین ۱۴۰۵",
    range: "۱ تا ۳۱ فروردین ۱۴۰۵",
    start: "2026-03-21",
    end: "2026-04-20",
    kind: "month",
  },
  {
    id: "ordibehesht-1405",
    label: "اردیبهشت ۱۴۰۵",
    range: "۱ تا ۳۱ اردیبهشت ۱۴۰۵",
    start: "2026-04-21",
    end: "2026-05-21",
    kind: "month",
  },
  {
    id: "khordad-1405",
    label: "خرداد ۱۴۰۵",
    range: "۱ تا ۳۱ خرداد ۱۴۰۵",
    start: "2026-05-22",
    end: "2026-06-21",
    kind: "month",
  },
];

const expectedHeader = [
  "session_key",
  "try_seq",
  "terminal_key",
  "merchant_key",
  "category_id",
  "category_title",
  "amount",
  "adjusted_fee",
  "session_status",
  "try_status",
  "switch_response_code",
  "psp_code",
  "issuer_bank_code",
  "payer_card_key",
  "verify_type",
  "init_time_ms",
  "verify_time_ms",
  "created_at",
  "try_created_at",
  "verified_at",
  "settled_at",
  "expire_in",
];

const index = Object.fromEntries(expectedHeader.map((field, position) => [field, position]));
const ZERO = Object.freeze([0, 0, 0, 0, 0, 0, 0, 0]);
const persianDateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

function parseDate(date) {
  return new Date(`${date}T00:00:00Z`);
}

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function shiftDate(date, days) {
  const value = parseDate(date);
  value.setUTCDate(value.getUTCDate() + days);
  return formatDate(value);
}

function datesBetween(start, end) {
  const dates = [];
  for (let date = start; date <= end; date = shiftDate(date, 1)) dates.push(date);
  return dates;
}

function persianDateLabel(date) {
  return persianDateFormatter.format(parseDate(date));
}

function round(value, digits = 3) {
  if (!Number.isFinite(value)) return 0;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function ratio(numerator, denominator) {
  return denominator > 0 ? numerator / denominator : 0;
}

function add(into, values, weight = 1) {
  for (let position = 0; position < into.length; position += 1) {
    into[position] += values[position] * weight;
  }
  return into;
}

async function sourceMetadata() {
  try {
    return await stat(sourcePath);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
    return null;
  }
}

async function isFresh(source) {
  if (!onlyIfStale || !source) return false;
  try {
    const generated = JSON.parse(await readFile(indexOutputPath, "utf8"));
    return (
      generated.source?.size === source.size &&
      generated.source?.mtimeMs === Math.trunc(source.mtimeMs)
    );
  } catch {
    return false;
  }
}

async function forEachRow(onRow) {
  const lines = createInterface({
    input: createReadStream(sourcePath, { encoding: "utf8" }),
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  let rowNumber = 0;
  for await (const line of lines) {
    rowNumber += 1;
    if (rowNumber === 1) {
      const header = line.split(",");
      if (header.join("\n") !== expectedHeader.join("\n")) {
        throw new Error("challenge_data.csv has an unexpected column layout.");
      }
      continue;
    }
    if (!line) continue;

    // The supplied challenge file contains no quoted or comma-bearing fields.
    const columns = line.split(",");
    if (columns.length !== expectedHeader.length) {
      throw new Error(`Malformed CSV row ${rowNumber}: expected 22 columns, got ${columns.length}.`);
    }
    onRow(columns, rowNumber - 1);
  }
}

async function sha256(path) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex");
}

function eventKey(columns) {
  return `${columns[index.created_at]}|${columns[index.session_key]}|${columns[index.try_seq]}`;
}

function cellFor(merchantCells, merchantId, date, hour) {
  let cells = merchantCells.get(merchantId);
  if (!cells) {
    cells = new Map();
    merchantCells.set(merchantId, cells);
  }
  const key = `${date}|${hour}`;
  let cell = cells.get(key);
  if (!cell) {
    cell = [0, 0, 0, 0, 0, 0, 0, 0];
    cells.set(key, cell);
  }
  return cell;
}

function actualCell(cells, date, hour) {
  return cells.get(`${date}|${hour}`) ?? ZERO;
}

function baselineCell(cells, date, hour, globalStart) {
  const total = [0, 0, 0, 0, 0, 0, 0, 0];
  let observations = 0;
  for (let week = 1; week <= 8; week += 1) {
    const sourceDate = shiftDate(date, -7 * week);
    if (sourceDate < globalStart) continue;
    add(total, actualCell(cells, sourceDate, hour));
    observations += 1;
  }
  if (observations === 0) return ZERO;
  return total.map((value) => value / observations);
}

function metricSnapshot(values) {
  const sessions = values[0];
  const verified = values[2];
  return {
    successfulCount: verified,
    salesAmount: values[3],
    avgBasket: ratio(values[3], verified),
    successRate: ratio(verified, sessions) * 100,
    returningShare: ratio(values[5], verified) * 100,
  };
}

function percentageChange(actual, baseline) {
  return baseline > 0 ? ((actual - baseline) / baseline) * 100 : 0;
}

function vectorModel(vector) {
  const [sessions, successRate, returningShare, newTicket, returningTicket] = vector;
  const blendedTicket = (1 - returningShare) * newTicket + returningShare * returningTicket;
  return sessions * successRate * blendedTicket;
}

function factorVector(values) {
  const verified = values[2];
  const overallTicket = ratio(values[3], verified);
  return [
    values[0],
    ratio(verified, values[0]),
    ratio(values[5], verified),
    values[4] > 0 ? values[6] / values[4] : overallTicket,
    values[5] > 0 ? values[7] / values[5] : overallTicket,
  ];
}

function factorial(value) {
  let result = 1;
  for (let current = 2; current <= value; current += 1) result *= current;
  return result;
}

function shapleyGrowth(actual, baseline) {
  const actualVector = factorVector(actual);
  const baselineVector = factorVector(baseline);
  const factorGroups = [[0], [1], [2], [3, 4]];
  const count = factorGroups.length;
  const effects = Array(count).fill(0);

  for (let factor = 0; factor < count; factor += 1) {
    for (let mask = 0; mask < 1 << count; mask += 1) {
      if (mask & (1 << factor)) continue;
      const selected = Array.from({ length: count }, (_, item) => Boolean(mask & (1 << item)));
      const selectedCount = selected.filter(Boolean).length;
      const weight =
        (factorial(selectedCount) * factorial(count - selectedCount - 1)) / factorial(count);
      const before = [...baselineVector];
      const after = [...baselineVector];
      for (let group = 0; group < count; group += 1) {
        if (selected[group]) {
          for (const position of factorGroups[group]) before[position] = actualVector[position];
        }
      }
      for (let position = 0; position < before.length; position += 1) after[position] = before[position];
      for (const position of factorGroups[factor]) after[position] = actualVector[position];
      effects[factor] += weight * (vectorModel(after) - vectorModel(before));
    }
  }

  const baselineSales = baseline[3];
  return effects.map((effect) => round(ratio(effect, baselineSales) * 100, 2));
}

function sampleIndexes(length, count = 8) {
  if (length <= count) return Array.from({ length }, (_, index) => index);
  return Array.from({ length: count }, (_, index) =>
    Math.round((index * (length - 1)) / (count - 1))
  );
}

function bucketTrend(daily, metric) {
  const values = [];
  for (let bucket = 0; bucket < 8; bucket += 1) {
    const start = Math.floor((bucket * daily.length) / 8);
    const end = Math.floor(((bucket + 1) * daily.length) / 8);
    const aggregate = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let position = start; position < end; position += 1) add(aggregate, daily[position].actual);
    values.push(round(metricSnapshot(aggregate)[metric], 2));
  }
  return values;
}

function insightFor({ eligible, confidence, current, baseline, factors, hourly }) {
  if (!eligible) {
    const action = "بازه طولانی‌تری انتخاب کنید یا تا جمع‌شدن نمونه بیشتر صبر کنید.";
    return {
      headline: "نمونه این پذیرنده برای یک بینش قابل اتکا کافی نیست.",
      bullets: [
        `در این بازه ${Math.round(current[0]).toLocaleString("fa-IR")} نشست و ${Math.round(current[2]).toLocaleString("fa-IR")} خرید موفق ثبت شده است.`,
        "نمودارها داده مشاهده‌شده را نشان می‌دهند، اما برای تصمیم‌گیری قطعی مناسب نیستند.",
      ],
      action,
      ruleAction: action,
      actionSource: "rules",
    };
  }

  const growth = percentageChange(current[3], baseline[3]);
  const direction = growth >= 0 ? "بالاتر" : "پایین‌تر";
  const sortedFactors = [...factors].sort((left, right) => Math.abs(right.value) - Math.abs(left.value));
  const peak = [...hourly].sort((left, right) => right.value - left.value)[0];
  const returnChange = metricSnapshot(current).returningShare - metricSnapshot(baseline).returningShare;
  let action = "الگوی فعلی را پایش کنید و تغییرات را در بازه بعد دوباره بسنجید.";
  if (returnChange < -2) action = "یک پیشنهاد خرید دوم را نزدیک به زمان بازگشت معمول مشتریان وفادار آزمایش کنید.";
  else if (factors.find((factor) => factor.id === "success-rate")?.value < -2) action = "افت موفقیت پرداخت را به تفکیک PSP و مبلغ بررسی کنید.";
  else if (factors.find((factor) => factor.id === "ticket")?.value < -2) action = "بسته‌های خرید یا آستانه‌های مبلغ را برای افزایش سبد آزمایش کنید.";
  else if (peak?.value > 0) action = `کمپین بعدی را با تمرکز بر بازه ${peak.label} آزمایش کنید.`;

  return {
    headline: `فروش موفق ${Math.abs(growth).toLocaleString("fa-IR", { maximumFractionDigits: 1 })}٪ ${direction} از میانگین دوره‌های مشابه بود.`,
    bullets: [
      `بیشترین سهم تغییر از ${sortedFactors[0].label} (${sortedFactors[0].value > 0 ? "+" : ""}${sortedFactors[0].value.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد) آمده است.`,
      `بیشترین اثر ساعتی در بازه ${peak.label} ثبت شد (${peak.value > 0 ? "+" : ""}${peak.value.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد).`,
      `سهم مشتریان بازگشتی ${Math.abs(returnChange).toLocaleString("fa-IR", { maximumFractionDigits: 1 })} واحد درصد ${returnChange >= 0 ? "افزایش" : "کاهش"} داشت؛ اطمینان تحلیل ${confidence === "high" ? "زیاد" : confidence === "medium" ? "متوسط" : "کم"} است.`,
    ],
    action,
    ruleAction: action,
    actionSource: "rules",
  };
}

function buildResult(cells, period, globalStart) {
  const dates = datesBetween(period.start, period.end);
  const current = [0, 0, 0, 0, 0, 0, 0, 0];
  const baseline = [0, 0, 0, 0, 0, 0, 0, 0];
  const daily = [];
  const hourlyActual = Array.from({ length: 8 }, () => [0, 0, 0, 0, 0, 0, 0, 0]);
  const hourlyBaseline = Array.from({ length: 8 }, () => [0, 0, 0, 0, 0, 0, 0, 0]);
  const heatActual = Array.from({ length: 7 }, () =>
    Array.from({ length: 8 }, () => [0, 0, 0, 0, 0, 0, 0, 0])
  );
  const heatBaseline = Array.from({ length: 7 }, () =>
    Array.from({ length: 8 }, () => [0, 0, 0, 0, 0, 0, 0, 0])
  );

  for (const date of dates) {
    const actualDay = [0, 0, 0, 0, 0, 0, 0, 0];
    const baselineDay = [0, 0, 0, 0, 0, 0, 0, 0];
    const dayIndex = (parseDate(date).getUTCDay() + 1) % 7;
    for (let hour = 0; hour < 24; hour += 1) {
      const actual = actualCell(cells, date, hour);
      const expected = baselineCell(cells, date, hour, globalStart);
      const block = Math.floor(hour / 3);
      add(actualDay, actual);
      add(baselineDay, expected);
      add(hourlyActual[block], actual);
      add(hourlyBaseline[block], expected);
      add(heatActual[dayIndex][block], actual);
      add(heatBaseline[dayIndex][block], expected);
    }
    add(current, actualDay);
    add(baseline, baselineDay);
    daily.push({ date, actual: actualDay, baseline: baselineDay });
  }

  const actualMetrics = metricSnapshot(current);
  const baselineMetrics = metricSnapshot(baseline);
  const totalGrowth = round(percentageChange(current[3], baseline[3]), 2);
  const factorValues = shapleyGrowth(current, baseline);
  const factorDefinitions = [
    ["volume", "اثر حجم نشست"],
    ["success-rate", "اثر نرخ موفقیت"],
    ["returning", "اثر مشتری بازگشتی"],
    ["ticket", "اثر مبلغ خرید"],
  ];
  const growthFactors = factorDefinitions.map(([id, label], position) => ({
    id,
    label,
    value: factorValues[position],
    positive: factorValues[position] >= 0,
  }));
  const hourlyImpact = hourlyActual.map((actual, block) => ({
    hour: block * 3,
    label: `${(block * 3).toLocaleString("fa-IR")}–${(block * 3 + 3).toLocaleString("fa-IR")}`,
    value: round(ratio(actual[3] - hourlyBaseline[block][3], baseline[3]) * 100, 2),
  }));
  const heatmap = heatActual.map((day, dayIndex) =>
    day.map((actual, block) =>
      round(ratio(actual[3] - heatBaseline[dayIndex][block][3], baseline[3]) * 100, 2)
    )
  );

  let cumulativeActual = 0;
  let cumulativeBaseline = 0;
  const cumulativeDaily = daily.map((item) => {
    cumulativeActual += item.actual[3];
    cumulativeBaseline += item.baseline[3];
    return {
      date: persianDateLabel(item.date),
      actual: round(cumulativeActual / 10_000_000_000, 3),
      baseline: round(cumulativeBaseline / 10_000_000_000, 3),
    };
  });
  const cumulativeTrend = sampleIndexes(cumulativeDaily.length).map((position) => cumulativeDaily[position]);
  const eligible = current[0] >= 30 && baseline[0] >= 30 && current[2] >= 10;
  const confidence =
    current[2] >= 500 && baseline[2] >= 500
      ? "high"
      : current[2] >= 100 && baseline[2] >= 100
        ? "medium"
        : "low";

  const kpis = {
    successfulCount: {
      value: round(actualMetrics.successfulCount, 2),
      baseline: round(baselineMetrics.successfulCount, 2),
      change: round(percentageChange(actualMetrics.successfulCount, baselineMetrics.successfulCount), 2),
      trend: bucketTrend(daily, "successfulCount"),
    },
    salesAmount: {
      value: round(actualMetrics.salesAmount, 2),
      baseline: round(baselineMetrics.salesAmount, 2),
      change: round(percentageChange(actualMetrics.salesAmount, baselineMetrics.salesAmount), 2),
      trend: bucketTrend(daily, "salesAmount"),
    },
    avgBasket: {
      value: round(actualMetrics.avgBasket, 2),
      baseline: round(baselineMetrics.avgBasket, 2),
      change: round(percentageChange(actualMetrics.avgBasket, baselineMetrics.avgBasket), 2),
      trend: bucketTrend(daily, "avgBasket"),
    },
    successRate: {
      value: round(actualMetrics.successRate, 2),
      baseline: round(baselineMetrics.successRate, 2),
      change: round(actualMetrics.successRate - baselineMetrics.successRate, 2),
      trend: bucketTrend(daily, "successRate"),
    },
    returningShare: {
      value: round(actualMetrics.returningShare, 2),
      baseline: round(baselineMetrics.returningShare, 2),
      change: round(actualMetrics.returningShare - baselineMetrics.returningShare, 2),
      trend: bucketTrend(daily, "returningShare"),
    },
  };

  return {
    eligible,
    confidence,
    sampleSize: Math.round(current[0]),
    verifiedPurchases: Math.round(current[2]),
    kpis,
    totalGrowth,
    growthFactors,
    cumulativeTrend,
    hourlyImpact,
    heatmap,
    quickComparison: [
      { label: "تعداد خرید موفق", value: kpis.successfulCount.change, type: "percent" },
      { label: "مبلغ فروش موفق", value: kpis.salesAmount.change, type: "percent" },
      { label: "متوسط مبلغ هر خرید", value: kpis.avgBasket.change, type: "percent" },
      { label: "نرخ موفقیت پرداخت", value: kpis.successRate.change, type: "points" },
      { label: "سهم مشتریان بازگشتی", value: kpis.returningShare.change, type: "points" },
    ],
    insight: insightFor({
      eligible,
      confidence,
      current,
      baseline,
      factors: growthFactors,
      hourly: hourlyImpact,
    }),
  };
}

async function main() {
  const source = await sourceMetadata();
  if (!source) {
    try {
      await stat(indexOutputPath);
      console.log("[sales-pulse] challenge_data.csv is absent; using the existing generated aggregate.");
      return;
    } catch {
      throw new Error("challenge_data.csv is required to generate sales pulse data.");
    }
  }
  if (await isFresh(source)) {
    console.log("[sales-pulse] generated aggregate is current.");
    return;
  }

  console.log("[sales-pulse] pass 1/2: finding first observed verified purchase per merchant-card...");
  const firstPurchase = new Map();
  const merchants = new Map();
  let rowCount = 0;
  let globalStart = null;
  let globalEnd = null;
  await forEachRow((columns, currentRow) => {
    rowCount = currentRow;
    const merchantId = columns[index.merchant_key];
    const date = columns[index.created_at].slice(0, 10);
    globalStart = globalStart === null || date < globalStart ? date : globalStart;
    globalEnd = globalEnd === null || date > globalEnd ? date : globalEnd;
    let merchant = merchants.get(merchantId);
    if (!merchant) {
      merchant = {
        id: merchantId,
        label: `${merchantId} · ${columns[index.category_title]}`,
        categoryId: columns[index.category_id],
        categoryTitle: columns[index.category_title],
        verifiedPurchases: 0,
      };
      merchants.set(merchantId, merchant);
    }
    if (columns[index.try_status] !== "Verified") return;
    merchant.verifiedPurchases += 1;
    const cardKey = `${merchantId}\u001f${columns[index.payer_card_key]}`;
    const key = eventKey(columns);
    const existing = firstPurchase.get(cardKey);
    if (existing === undefined || key < existing) firstPurchase.set(cardKey, key);
  });

  console.log("[sales-pulse] pass 2/2: aggregating merchant, day, and hour metrics...");
  const merchantCells = new Map();
  await forEachRow((columns) => {
    const merchantId = columns[index.merchant_key];
    const dateTime = columns[index.created_at];
    const date = dateTime.slice(0, 10);
    const hour = Number(dateTime.slice(11, 13));
    const sequence = Number(columns[index.try_seq]);
    const cell = cellFor(merchantCells, merchantId, date, hour);

    if (sequence === 0 || sequence === 1) {
      cell[0] += 1;
      if (columns[index.session_status] === "Verified") cell[1] += 1;
    }
    if (columns[index.try_status] !== "Verified") return;

    const amount = Number(columns[index.amount]);
    const cardKey = `${merchantId}\u001f${columns[index.payer_card_key]}`;
    const returning = firstPurchase.get(cardKey) !== eventKey(columns);
    cell[2] += 1;
    cell[3] += amount;
    if (returning) {
      cell[5] += 1;
      cell[7] += amount;
    } else {
      cell[4] += 1;
      cell[6] += amount;
    }
  });

  const merchantList = [...merchants.values()].sort(
    (left, right) => right.verifiedPurchases - left.verifiedPurchases || left.id.localeCompare(right.id)
  );
  const results = {};
  for (const merchant of merchantList) {
    const cells = merchantCells.get(merchant.id) ?? new Map();
    results[merchant.id] = Object.fromEntries(
      periods.map((period) => [period.id, buildResult(cells, period, globalStart)])
    );
  }

  const sourceInfo = {
    file: "challenge_data.csv",
    size: source.size,
    mtimeMs: Math.trunc(source.mtimeMs),
    sha256: await sha256(sourcePath),
    rowCount,
    dateRange: { start: globalStart, end: globalEnd },
    generatedAt: new Date().toISOString(),
    amountUnit: "IRR",
    baselineMethod:
      "Expected value for each target hour is the mean of the same weekday and hour over the preceding eight weeks.",
  };
  const output = {
    source: sourceInfo,
    periods,
    merchants: merchantList,
  };

  await mkdir(dirname(indexOutputPath), { recursive: true });
  await mkdir(merchantOutputDirectory, { recursive: true });
  await writeFile(indexOutputPath, `${JSON.stringify(output)}\n`, "utf8");
  await Promise.all(
    merchantList.map((merchant) =>
      writeFile(
        resolve(merchantOutputDirectory, `${merchant.id}.json`),
        `${JSON.stringify(results[merchant.id])}\n`,
        "utf8"
      )
    )
  );
  console.log(
    `[sales-pulse] wrote one index and ${merchantList.length} merchant files × ${periods.length} periods`
  );
}

await main();
