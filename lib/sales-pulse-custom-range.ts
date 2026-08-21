import type { SalesPulseDailyData, SalesPulseResult } from "@/lib/sales-pulse-data";

function round(value: number, digits = 2) {
  if (!Number.isFinite(value)) return 0;
  const scale = 10 ** digits;
  return Math.round(value * scale) / scale;
}

function ratio(numerator: number, denominator: number) {
  return denominator > 0 ? numerator / denominator : 0;
}

function add(into: number[], values: readonly number[]) {
  values.forEach((value, index) => (into[index] += value));
  return into;
}

function sum(items: SalesPulseDailyData[], key: "actual" | "baseline") {
  return items.reduce((total, item) => add(total, item[key]), Array(8).fill(0));
}

function metrics(values: readonly number[]) {
  const verified = values[2];
  return {
    successfulCount: verified,
    salesAmount: values[3],
    avgBasket: ratio(values[3], verified),
    successRate: ratio(verified, values[0]) * 100,
    returningShare: ratio(values[5], verified) * 100,
  };
}

function percentageChange(actual: number, baseline: number) {
  return baseline > 0 ? ((actual - baseline) / baseline) * 100 : 0;
}

function factorVector(values: readonly number[]) {
  const verified = values[2];
  const ticket = ratio(values[3], verified);
  return [
    values[0],
    ratio(verified, values[0]),
    ratio(values[5], verified),
    values[4] > 0 ? values[6] / values[4] : ticket,
    values[5] > 0 ? values[7] / values[5] : ticket,
  ];
}

function vectorModel([sessions, successRate, returningShare, newTicket, returningTicket]: number[]) {
  return sessions * successRate * ((1 - returningShare) * newTicket + returningShare * returningTicket);
}

function factorial(value: number) {
  let result = 1;
  for (let current = 2; current <= value; current += 1) result *= current;
  return result;
}

function shapleyGrowth(actual: number[], baseline: number[]) {
  const actualVector = factorVector(actual);
  const baselineVector = factorVector(baseline);
  const groups = [[0], [1], [2], [3, 4]];
  const effects = Array(groups.length).fill(0);
  groups.forEach((_, factor) => {
    for (let mask = 0; mask < 1 << groups.length; mask += 1) {
      if (mask & (1 << factor)) continue;
      const selectedCount = groups.filter((__, group) => Boolean(mask & (1 << group))).length;
      const weight =
        (factorial(selectedCount) * factorial(groups.length - selectedCount - 1)) /
        factorial(groups.length);
      const before = [...baselineVector];
      groups.forEach((positions, group) => {
        if (mask & (1 << group)) positions.forEach((position) => (before[position] = actualVector[position]));
      });
      const after = [...before];
      groups[factor].forEach((position) => (after[position] = actualVector[position]));
      effects[factor] += weight * (vectorModel(after) - vectorModel(before));
    }
  });
  return effects.map((effect) => round(ratio(effect, baseline[3]) * 100));
}

function bucketTrend(items: SalesPulseDailyData[], metric: keyof ReturnType<typeof metrics>) {
  return Array.from({ length: 8 }, (_, bucket) => {
    const start = Math.floor((bucket * items.length) / 8);
    const end = Math.floor(((bucket + 1) * items.length) / 8);
    return round(metrics(sum(items.slice(start, end), "actual"))[metric]);
  });
}

function sample<T>(items: T[], count = 8) {
  if (items.length <= count) return items;
  return Array.from({ length: count }, (_, index) =>
    items[Math.round((index * (items.length - 1)) / (count - 1))]
  );
}

function calendarAggregate(items: SalesPulseDailyData[]) {
  const actual = sum(items, "actual");
  const baseline = sum(items, "baseline");
  return {
    dates: items.length,
    eligible: actual[0] >= 10 && baseline[0] >= 10 && actual[2] >= 3,
    successfulSalesPercent: round(percentageChange(actual[3], baseline[3])),
    successfulPurchaseCountPercent: round(percentageChange(actual[2], baseline[2])),
  };
}

export function buildCustomSalesPulseResult(
  allDays: SalesPulseDailyData[],
  start: string,
  end: string
): SalesPulseResult | null {
  const days = allDays.filter((item) => item.date >= start && item.date <= end);
  if (days.length === 0) return null;
  const actual = sum(days, "actual");
  const baseline = sum(days, "baseline");
  const actualMetrics = metrics(actual);
  const baselineMetrics = metrics(baseline);
  const metricResult = (
    id: keyof ReturnType<typeof metrics>,
    changeType: "percent" | "points" = "percent"
  ) => ({
    value: round(actualMetrics[id]),
    baseline: round(baselineMetrics[id]),
    change: round(
      changeType === "points"
        ? actualMetrics[id] - baselineMetrics[id]
        : percentageChange(actualMetrics[id], baselineMetrics[id])
    ),
    trend: bucketTrend(days, id),
  });
  const factorValues = shapleyGrowth(actual, baseline);
  const growthFactors = [
    ["volume", "اثر حجم نشست"],
    ["success-rate", "اثر نرخ موفقیت"],
    ["returning", "اثر مشتری بازگشتی"],
    ["ticket", "اثر مبلغ خرید"],
  ].map(([id, label], index) => ({ id, label, value: factorValues[index], positive: factorValues[index] >= 0 }));
  const hourlyActual = Array(8).fill(0);
  const hourlyBaseline = Array(8).fill(0);
  days.forEach((day) => {
    add(hourlyActual, day.hourlyActualSales);
    add(hourlyBaseline, day.hourlyBaselineSales);
  });
  const hourlyImpact = hourlyActual.map((value, block) => ({
    hour: block * 3,
    label: `${(block * 3).toLocaleString("fa-IR")}–${(block * 3 + 3).toLocaleString("fa-IR")}`,
    value: round(ratio(value - hourlyBaseline[block], baseline[3]) * 100),
  }));
  const heatActual = Array.from({ length: 7 }, () => Array(8).fill(0));
  const heatBaseline = Array.from({ length: 7 }, () => Array(8).fill(0));
  days.forEach((day) => {
    const dayIndex = (new Date(`${day.date}T00:00:00Z`).getUTCDay() + 1) % 7;
    add(heatActual[dayIndex], day.hourlyActualSales);
    add(heatBaseline[dayIndex], day.hourlyBaselineSales);
  });
  const heatmap = heatActual.map((row, dayIndex) =>
    row.map((value, block) => round(ratio(value - heatBaseline[dayIndex][block], baseline[3]) * 100))
  );
  let cumulativeActual = 0;
  let cumulativeBaseline = 0;
  const cumulativeTrend = sample(
    days.map((day) => {
      cumulativeActual += day.actual[3];
      cumulativeBaseline += day.baseline[3];
      return {
        date: day.calendar?.jalaliLabel.replace(/^\S+\s+/u, "") ?? day.date,
        actual: round(cumulativeActual / 10_000_000_000, 3),
        baseline: round(cumulativeBaseline / 10_000_000_000, 3),
      };
    })
  );
  const dayTypes = [
    { id: "weekend" as const, label: "جمعه‌ها", values: days.filter((day) => day.calendar?.isWeekend) },
    { id: "official-holiday" as const, label: "تعطیلات رسمی", values: days.filter((day) => day.calendar?.isOfficialHoliday) },
    { id: "special-day" as const, label: "روزهای مناسبتی", values: days.filter((day) => day.calendar?.events.length) },
  ].map(({ id, label, values }) => ({ id, label, ...calendarAggregate(values) }));
  const notableDates = days
    .filter((day) => day.calendar?.events.length)
    .map((day) => ({
      date: day.date,
      jalaliDate: day.calendar?.jalaliLabel ?? day.date,
      labels: day.calendar?.events ?? [],
      isOfficialHoliday: Boolean(day.calendar?.isOfficialHoliday),
      isWeekend: Boolean(day.calendar?.isWeekend),
      ...calendarAggregate([day]),
    }))
    .filter((day) => day.eligible)
    .sort((left, right) => Math.abs(right.successfulSalesPercent) - Math.abs(left.successfulSalesPercent))
    .slice(0, 5);
  const eligible = actual[0] >= 30 && baseline[0] >= 30 && actual[2] >= 10;
  const confidence =
    actual[2] >= 500 && baseline[2] >= 500
      ? "high"
      : actual[2] >= 100 && baseline[2] >= 100
        ? "medium"
        : "low";
  const totalGrowth = round(percentageChange(actual[3], baseline[3]));
  const strongestCalendar = [...dayTypes]
    .filter((item) => item.eligible)
    .sort((left, right) => Math.abs(right.successfulSalesPercent) - Math.abs(left.successfulSalesPercent))[0];
  const action = !eligible
    ? "بازه طولانی‌تری انتخاب کنید تا داده کافی برای یک پیشنهاد قابل اتکا جمع شود."
    : strongestCalendar
      ? `برای ${strongestCalendar.label} یک آزمایش کوچک اجرا کنید و نتیجه را دوباره با روزهای مشابه بسنجید.`
      : "الگوی فروش این بازه را پایش کنید و در بازه بعد دوباره بسنجید.";
  const kpis = {
    successfulCount: metricResult("successfulCount"),
    salesAmount: metricResult("salesAmount"),
    avgBasket: metricResult("avgBasket"),
    successRate: metricResult("successRate", "points"),
    returningShare: metricResult("returningShare", "points"),
  };
  return {
    eligible,
    confidence,
    sampleSize: Math.round(actual[0]),
    verifiedPurchases: Math.round(actual[2]),
    kpis,
    totalGrowth,
    growthFactors,
    cumulativeTrend,
    hourlyImpact,
    heatmap,
    calendarImpact: {
      coverage: { start: days[0].date, end: days.at(-1)?.date ?? days[0].date, calendarDays: days.length },
      dayTypes,
      notableDates,
    },
    quickComparison: [
      { label: "تعداد خرید موفق", value: kpis.successfulCount.change, type: "percent" },
      { label: "مبلغ فروش موفق", value: kpis.salesAmount.change, type: "percent" },
      { label: "متوسط مبلغ هر خرید", value: kpis.avgBasket.change, type: "percent" },
      { label: "نرخ موفقیت پرداخت", value: kpis.successRate.change, type: "points" },
      { label: "سهم مشتریان بازگشتی", value: kpis.returningShare.change, type: "points" },
    ],
    insight: {
      headline: eligible
        ? `فروش موفق این بازه ${Math.abs(totalGrowth).toLocaleString("fa-IR", { maximumFractionDigits: 1 })}٪ ${totalGrowth >= 0 ? "بالاتر" : "پایین‌تر"} از روزهای مشابه بود.`
        : "داده این بازه برای یک نتیجه قابل اتکا کافی نیست.",
      bullets: [
        strongestCalendar
          ? `بیشترین تفاوت تقویمی در ${strongestCalendar.label} دیده شد.`
          : "برای روزهای تقویمی این بازه نمونه کافی وجود ندارد.",
        notableDates[0]
          ? `${notableDates[0].jalaliDate} برجسته‌ترین روز مناسبتی این بازه بود.`
          : "روز مناسبتی واجد نمونه کافی در این بازه وجود ندارد.",
        `اطمینان تحلیل ${confidence === "high" ? "زیاد" : confidence === "medium" ? "متوسط" : "کم"} است و این تفاوت‌ها رابطه علّی را ثابت نمی‌کنند.`,
      ],
      action,
      ruleAction: action,
      actionSource: "rules",
    },
  };
}
