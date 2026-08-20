export type LoyaltyTone =
  | "amber"
  | "mint"
  | "navy"
  | "rose"
  | "sky"
  | "teal"
  | "violet";

export type LoyaltyMetricIcon =
  | "card"
  | "cart"
  | "repeat"
  | "trend"
  | "users";

export type LoyaltyMetric = {
  id: string;
  label: string;
  value: string;
  caption: string;
  icon: LoyaltyMetricIcon;
  tone: LoyaltyTone;
};

export const BUYER_LOYALTY_METRICS: LoyaltyMetric[] = [
  {
    id: "verified-purchases",
    label: "خریدهای قابل شناسایی",
    value: "۱,۰۲۵,۶۴۷",
    caption: "try_status = Verified",
    icon: "cart",
    tone: "navy",
  },
  {
    id: "observed-cards",
    label: "شناسه کارت‌های مشاهده‌شده",
    value: "۳۹۶,۳۶۵",
    caption: "کارت یکتا",
    icon: "card",
    tone: "teal",
  },
  {
    id: "returning-cards",
    label: "کارت‌های بازگشتی",
    value: "۱۲۶,۳۲۵",
    caption: "حداقل دو خرید",
    icon: "users",
    tone: "violet",
  },
  {
    id: "returning-rate",
    label: "درصد کارت‌های بازگشتی",
    value: "۳۱.۸۵٪",
    caption: "از کل کارت‌ها",
    icon: "repeat",
    tone: "teal",
  },
  {
    id: "repeat-sales-share",
    label: "سهم خریدهای تکراری از فروش",
    value: "۶۱.۳۵٪",
    caption: "خرید دوم یا بعدی",
    icon: "trend",
    tone: "sky",
  },
];

export type BehaviorSegment = {
  label: string;
  count: string;
  share: number;
  tone: LoyaltyTone;
};

export const BEHAVIOR_SEGMENTS: BehaviorSegment[] = [
  {
    label: "کارت بازگشتی (۲+ خرید)",
    count: "۱۲۶,۳۲۵",
    share: 31.85,
    tone: "teal",
  },
  {
    label: "تک‌خریدی",
    count: "۲۱۸,۳۴۲",
    share: 55.09,
    tone: "mint",
  },
  {
    label: "کارت تازه در بازه ۸ هفته",
    count: "۲۳,۴۶۵",
    share: 5.92,
    tone: "sky",
  },
  {
    label: "کارت وفادار/درخشان",
    count: "۱۶,۳۳۱",
    share: 4.12,
    tone: "violet",
  },
  {
    label: "کارت در معرض ریزش",
    count: "۱۱,۹۰۲",
    share: 3.02,
    tone: "amber",
  },
];

export type LineSeries = {
  label: string;
  values: number[];
  tone: "navy" | "muted" | "teal";
};

export const SECOND_PURCHASE_LABELS = ["روز ۷", "روز ۳۰", "روز ۶۰", "روز ۹۰"];

export const SECOND_PURCHASE_SERIES: LineSeries[] = [
  {
    label: "پذیرنده شما",
    values: [5, 14, 19, 23],
    tone: "navy",
  },
  {
    label: "میانه همتایان",
    values: [8, 21, 28, 33],
    tone: "muted",
  },
];

export type IntervalBenchmark = {
  label: string;
  value: number;
  tone: LoyaltyTone;
};

export const INTERVAL_BENCHMARKS: IntervalBenchmark[] = [
  { label: "میانه", value: 28, tone: "teal" },
  { label: "میانگین", value: 34, tone: "teal" },
  { label: "چارک اول (p25)", value: 14, tone: "sky" },
  { label: "چارک سوم (p75)", value: 46, tone: "teal" },
];

export type CohortRow = {
  month: string;
  values: Array<number | null>;
};

export const COHORT_HEADERS = ["روز ۷", "روز ۳۰", "روز ۶۰", "روز ۹۰"];

export const RETENTION_COHORT_ROWS: CohortRow[] = [
  { month: "فروردین ۱۴۰۳", values: [6, 14, 19, 23] },
  { month: "اسفند ۱۴۰۲", values: [7, 15, 20, 24] },
  { month: "بهمن ۱۴۰۲", values: [6, 13, 18, 22] },
  { month: "دی ۱۴۰۲", values: [5, 12, 16, 20] },
  { month: "آذر ۱۴۰۲", values: [5, 11, 15, null] },
];

export type DistributionBucket = {
  label: string;
  value: number;
};

export const INTERVAL_DISTRIBUTION: DistributionBucket[] = [
  { label: "۰-۷", value: 12 },
  { label: "۷-۱۵", value: 18 },
  { label: "۱۵-۳۰", value: 23 },
  { label: "۳۰-۶۰", value: 28 },
  { label: "۶۰-۹۰", value: 13 },
  { label: "+۹۰", value: 6 },
];

export type RevenueSegment = {
  label: string;
  amount: string;
  share: number;
  tone: LoyaltyTone;
};

export const REVENUE_SEGMENTS: RevenueSegment[] = [
  {
    label: "کارت بازگشتی (۲+ خرید)",
    amount: "۲۳,۶۳۰,۰۰۰,۰۰۰",
    share: 62,
    tone: "teal",
  },
  {
    label: "کارت تک‌خریدی",
    amount: "۷,۶۹۰,۰۰۰,۰۰۰",
    share: 21,
    tone: "amber",
  },
  {
    label: "کارت تازه",
    amount: "۳,۶۸۰,۰۰۰,۰۰۰",
    share: 10,
    tone: "violet",
  },
  {
    label: "کارت در معرض ریزش",
    amount: "۲,۸۴۵,۰۰۰,۰۰۰",
    share: 7,
    tone: "rose",
  },
];

export const OCCASION_TREND_LABELS = [
  "عادی قبل",
  "۷ روز قبل",
  "مناسبت",
  "۷ روز بعد",
  "عادی بعد",
];

export const OCCASION_TREND_SERIES: LineSeries[] = [
  {
    label: "پذیرنده شما",
    values: [31, 34, 43, 35, 34],
    tone: "teal",
  },
  {
    label: "میانه همتایان",
    values: [25, 29, 36, 29, 26],
    tone: "muted",
  },
];

export type LifecycleStage = {
  id: string;
  title: string;
  cards: string;
  share: string;
  description: string;
  tone: LoyaltyTone;
};

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: "fresh",
    title: "تازه",
    cards: "۸۵,۰۱۲ کارت",
    share: "۲۱.۶٪",
    description: "اولین خرید در بازه",
    tone: "teal",
  },
  {
    id: "single",
    title: "تک‌خریدی",
    cards: "۲۱۸,۳۴۲ کارت",
    share: "۵۵.۰۹٪",
    description: "هنوز خرید دوم نداشته‌اند",
    tone: "violet",
  },
  {
    id: "risk",
    title: "در معرض ریزش",
    cards: "۱۱,۹۰۲ کارت",
    share: "۳.۰۲٪",
    description: "۶۰ تا ۹۰ روز از آخرین خرید",
    tone: "rose",
  },
  {
    id: "loyal",
    title: "وفادار (۳+ خرید)",
    cards: "۴۱,۲۱۲ کارت",
    share: "۱۰.۳۹٪",
    description: "۳ خرید یا بیشتر داشته‌اند",
    tone: "mint",
  },
];
