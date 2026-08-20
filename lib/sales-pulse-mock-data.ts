export type SalesPulseKpi = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  change: string;
  changeType: "percent" | "points";
  baseline: string;
  baselineLabel: string;
  trend: number[];
  accent: "emerald" | "violet" | "blue" | "amber";
  icon: "receipt" | "wallet" | "basket" | "check" | "users";
};

export type GrowthFactor = {
  label: string;
  value: number;
  positive: boolean;
};

export type TrendPoint = {
  date: string;
  actual: number;
  baseline: number;
};

export type HourlyImpact = {
  hour: number;
  label: string;
  value: number;
};

export type HeatmapCell = {
  day: string;
  block: string;
  value: number;
};

export const SALES_PULSE_PERIODS = [
  { id: "nowruz-1403", label: "نوروز ۱۴۰۳", range: "۱۵ اسفند ۱۴۰۳ – ۴ فروردین ۱۴۰۴" },
  { id: "yalda-1403", label: "یلدا ۱۴۰۳", range: "۲۹ آذر – ۱ دی ۱۴۰۳" },
  { id: "black-friday", label: "جمعه سیاه", range: "۲۴ – ۳۰ آبان ۱۴۰۳" },
] as const;

export const SALES_PULSE_MERCHANTS = [
  { id: "merchant-a", label: "پذیرنده الف" },
  { id: "merchant-b", label: "پذیرنده ب" },
  { id: "merchant-c", label: "پذیرنده ج" },
] as const;

export const SALES_PULSE_KPIS: SalesPulseKpi[] = [
  {
    id: "successful-count",
    label: "تعداد خرید موفق",
    value: "۱۲۳٬۴۵۰",
    change: "+۲۶٪",
    changeType: "percent",
    baseline: "۹۸٬۰۰۰",
    baselineLabel: "baseline",
    trend: [72, 78, 75, 82, 88, 91, 95, 100],
    accent: "emerald",
    icon: "receipt",
  },
  {
    id: "sales-amount",
    label: "مبلغ فروش موفق",
    value: "۴۲٫۸",
    unit: "میلیارد تومان",
    change: "+۲۷٪",
    changeType: "percent",
    baseline: "۳۳٫۷",
    baselineLabel: "baseline",
    trend: [68, 74, 79, 83, 87, 92, 96, 100],
    accent: "violet",
    icon: "wallet",
  },
  {
    id: "avg-basket",
    label: "متوسط مبلغ هر خرید",
    value: "۳۴۷",
    unit: "هزار تومان",
    change: "+۸٪",
    changeType: "percent",
    baseline: "۳۲۱",
    baselineLabel: "baseline",
    trend: [88, 89, 90, 91, 93, 95, 97, 100],
    accent: "blue",
    icon: "basket",
  },
  {
    id: "success-rate",
    label: "نرخ موفقیت پرداخت",
    value: "۸۴٫۷٪",
    change: "+۳٫۲",
    changeType: "points",
    baseline: "۸۱٫۵٪",
    baselineLabel: "baseline",
    trend: [78, 80, 81, 82, 83, 84, 84.5, 84.7],
    accent: "emerald",
    icon: "check",
  },
  {
    id: "returning-share",
    label: "سهم کارت‌های بازگشتی",
    value: "۲۸٫۶٪",
    change: "+۶٫۱",
    changeType: "points",
    baseline: "۲۲٫۵٪",
    baselineLabel: "baseline",
    trend: [62, 65, 68, 72, 76, 80, 84, 86],
    accent: "amber",
    icon: "users",
  },
];

export const SALES_PULSE_GROWTH_FACTORS: GrowthFactor[] = [
  { label: "اثر تعداد خرید", value: 19, positive: true },
  { label: "اثر متوسط سبد", value: 8, positive: true },
  { label: "اثر نرخ موفقیت", value: 1.8, positive: true },
  { label: "اثر کارت بازگشتی", value: -1.8, positive: false },
];

export const SALES_PULSE_TOTAL_GROWTH = 27;

export const SALES_PULSE_INSIGHT = {
  headline: "فروش موفق ۲۷٪ بالاتر از baseline مورد انتظار بود.",
  bullets: [
    "بیشترین سهم رشد از افزایش تعداد خرید (+۱۹٪) و متوسط سبد (+۸٪) آمده است.",
    "پیک فروش بین ۱۸:۰۰ تا ۲۱:۰۰ مشاهده شد؛ سهم این بازه ۳۴٪ از کل رشد است.",
    "سهم کارت‌های بازگشتی ۶٫۱ واحد درصدی بالاتر رفت، اما اثر خالص تجزیه رشد منفی بود.",
  ],
  action: "پیشنهاد: کمپین بازگشت مشتری برای ساعات غیرپیک ۱۲:۰۰–۱۵:۰۰ را آزمایش کنید.",
};

export const SALES_PULSE_CUMULATIVE_TREND: TrendPoint[] = [
  { date: "۲۵ بهمن", actual: 4.2, baseline: 3.8 },
  { date: "۲۸ بهمن", actual: 9.1, baseline: 8.0 },
  { date: "۲ اسفند", actual: 14.8, baseline: 12.5 },
  { date: "۵ اسفند", actual: 21.3, baseline: 17.2 },
  { date: "۸ اسفند", actual: 27.6, baseline: 22.1 },
  { date: "۱۱ اسفند", actual: 33.4, baseline: 27.0 },
  { date: "۱۴ اسفند", actual: 38.9, baseline: 31.8 },
  { date: "۱۷ اسفند", actual: 42.8, baseline: 33.7 },
];

export const SALES_PULSE_HOURLY_IMPACT: HourlyImpact[] = [
  { hour: 0, label: "۰", value: -2.1 },
  { hour: 3, label: "۳", value: -1.4 },
  { hour: 6, label: "۶", value: 0.8 },
  { hour: 9, label: "۹", value: 3.2 },
  { hour: 12, label: "۱۲", value: 5.6 },
  { hour: 15, label: "۱۵", value: 7.1 },
  { hour: 18, label: "۱۸", value: 11.4 },
  { hour: 21, label: "۲۱", value: 8.9 },
];

export const HEATMAP_DAYS = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه"] as const;

export const HEATMAP_BLOCKS = ["۰–۳", "۳–۶", "۶–۹", "۹–۱۲", "۱۲–۱۵", "۱۵–۱۸", "۱۸–۲۱", "۲۱–۲۴"] as const;

export const SALES_PULSE_HEATMAP: number[][] = [
  [-0.8, -1.2, 0.4, 1.8, 2.4, 3.1, 5.6, 2.2],
  [-0.5, -0.9, 0.6, 2.1, 2.8, 3.4, 6.1, 2.8],
  [-0.3, -0.6, 0.9, 2.4, 3.0, 3.8, 6.4, 3.0],
  [0.1, -0.4, 1.1, 2.6, 3.2, 4.0, 6.8, 3.2],
  [0.3, -0.2, 1.3, 2.9, 3.5, 4.3, 7.1, 3.5],
  [0.5, 0.0, 1.5, 3.1, 3.8, 4.6, 7.4, 3.8],
  [-0.2, -0.7, 0.7, 2.0, 2.6, 3.3, 5.9, 2.5],
];

export const SALES_PULSE_QUICK_COMPARISON = [
  { label: "تعداد خرید موفق", value: "+۲۶٪" },
  { label: "مبلغ فروش موفق", value: "+۲۷٪" },
  { label: "متوسط مبلغ هر خرید", value: "+۸٪" },
  { label: "نرخ موفقیت پرداخت", value: "+۳٫۲" },
  { label: "سهم کارت‌های بازگشتی", value: "+۶٫۱" },
];
