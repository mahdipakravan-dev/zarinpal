export type PeerTone = "good" | "warn" | "neutral";

export type PeerMetricIcon =
  | "wallet"
  | "trend"
  | "shield"
  | "cart"
  | "users"
  | "zap"
  | "ban"
  | "refresh"
  | "percent"
  | "pulse";

export type PeerKpi = {
  id: string;
  label: string;
  you: string;
  median: string;
  percentile: number;
  tone: PeerTone;
  icon: PeerMetricIcon;
};

export type PercentileBar = {
  id: string;
  label: string;
  percentile: number;
  median: number;
  q1: number;
  q3: number;
  tone: PeerTone;
};

export type PeerCriterion = {
  id: string;
  label: string;
  icon:
    | "store"
    | "ruler"
    | "coins"
    | "hash"
    | "clock"
    | "repeat"
    | "shield"
    | "layers";
};

export type RadarAxis = {
  id: string;
  label: string;
  you: number;
  median: number;
};

export type LeaderboardRow = {
  id: string;
  name: string;
  score: number;
  medal?: "gold" | "silver" | "bronze";
  isYou?: boolean;
};

export const PEER_PERIODS = [
  { id: "khordad-1403", label: "۱ تا ۳۱ خرداد ۱۴۰۳" },
  { id: "ordibehesht-1403", label: "۱ تا ۳۱ اردیبهشت ۱۴۰۳" },
  { id: "farvardin-1403", label: "۱ تا ۳۱ فروردین ۱۴۰۳" },
] as const;

export const PEER_CATEGORIES = [
  { id: "restaurant", label: "رستوران و فست‌فود" },
  { id: "retail", label: "خرده‌فروشی" },
  { id: "digital", label: "خدمات دیجیتال" },
] as const;

export const PEER_GROUP_STATS = {
  peerCount: 23,
  comparedTo: 23,
  groupingMethod: "هوشمند",
} as const;

export const PEER_KEY_INSIGHT = {
  growthPercentile: 78,
  returnPercentile: 31,
  peerCount: 23,
  headline: "شما در رشد فروش بین ۲۳ پذیرنده مشابه در صدک ۷۸ هستید؛",
  highlight: "اما نرخ بازگشت ۳۰روزه شما در صدک ۳۱ است.",
  takeaway: "مسئله اصلی جذب مشتری نیست؛ نگهداشت مشتری است.",
} as const;

export const PEER_CRITERIA: PeerCriterion[] = [
  { id: "category", label: "رستوران، برگر و فست‌فود", icon: "store" },
  { id: "size", label: "اندازه کسب‌وکار (تعداد پرداخت)", icon: "ruler" },
  {
    id: "avg-ticket",
    label: "میانگین تراکنش ۸۰۰٬۰۰۰ تومان",
    icon: "coins",
  },
  {
    id: "volume",
    label: "تعداد پرداخت‌ها (۱۰۰k تا ۱۰۵k)",
    icon: "hash",
  },
  {
    id: "return-share",
    label: "سهم مشتریان بازگشتی ۳۱٪ تا ۵۰٪",
    icon: "repeat",
  },
  {
    id: "hours",
    label: "اوج فعالیت عصر و شب",
    icon: "clock",
  },
  { id: "verify", label: "نوع Verified", icon: "shield" },
  {
    id: "psp",
    label: "ترکیب PSP (در تحلیل conversion)",
    icon: "layers",
  },
];

export const PERCENTILE_BARS: PercentileBar[] = [
  {
    id: "growth",
    label: "رشد فروش ماهانه",
    percentile: 78,
    median: 50,
    q1: 25,
    q3: 75,
    tone: "good",
  },
  {
    id: "success",
    label: "نرخ موفقیت تعدیل‌شده",
    percentile: 62,
    median: 50,
    q1: 25,
    q3: 75,
    tone: "neutral",
  },
  {
    id: "return-rate",
    label: "نرخ بازگشت ۳۰ روزه",
    percentile: 31,
    median: 50,
    q1: 25,
    q3: 75,
    tone: "warn",
  },
  {
    id: "return-sales",
    label: "سهم فروش از بازگشتی‌ها",
    percentile: 36,
    median: 50,
    q1: 25,
    q3: 75,
    tone: "warn",
  },
];

export const PEER_KPIS: PeerKpi[] = [
  {
    id: "sales-amount",
    label: "مبلغ فروش موفق",
    you: "۱۲٫۴ میلیارد تومان",
    median: "۷٫۱ میلیارد تومان",
    percentile: 78,
    tone: "good",
    icon: "wallet",
  },
  {
    id: "growth",
    label: "رشد فروش ماهانه",
    you: "+۲۷٪",
    median: "+۱۴٪",
    percentile: 78,
    tone: "good",
    icon: "trend",
  },
  {
    id: "success",
    label: "نرخ موفقیت تعدیل‌شده",
    you: "۹۳٫۲٪",
    median: "۹۰٫۱٪",
    percentile: 62,
    tone: "good",
    icon: "shield",
  },
  {
    id: "avg-basket",
    label: "متوسط مبلغ خرید",
    you: "۳۷۵٬۰۰۰ تومان",
    median: "۳۲۸٬۰۰۰ تومان",
    percentile: 57,
    tone: "good",
    icon: "cart",
  },
  {
    id: "return-rate",
    label: "نرخ بازگشت ۳۰ روزه",
    you: "۱۴٪",
    median: "۲۱٪",
    percentile: 31,
    tone: "warn",
    icon: "users",
  },
  {
    id: "return-sales",
    label: "سهم فروش از بازگشتی‌ها",
    you: "۲۳٪",
    median: "۳۱٪",
    percentile: 36,
    tone: "warn",
    icon: "zap",
  },
  {
    id: "no-attempt",
    label: "No Attempt",
    you: "۴٫۸٪",
    median: "۶٫۲٪",
    percentile: 72,
    tone: "good",
    icon: "ban",
  },
  {
    id: "retry",
    label: "Retry",
    you: "۴۶٪",
    median: "۳۹٪",
    percentile: 64,
    tone: "good",
    icon: "refresh",
  },
  {
    id: "fee-pressure",
    label: "شاخص نسبی فشار کارمزد",
    you: "۰٫۷۲",
    median: "۱٫۰۰",
    percentile: 81,
    tone: "good",
    icon: "percent",
  },
  {
    id: "stability",
    label: "پایداری فروش",
    you: "۱۸٪",
    median: "۲۶٪",
    percentile: 76,
    tone: "good",
    icon: "pulse",
  },
];

/** Normalized 0–10 scores for radar (higher = better). */
export const RADAR_AXES: RadarAxis[] = [
  { id: "growth", label: "رشد فروش", you: 7.8, median: 5.0 },
  { id: "sales", label: "مبلغ فروش", you: 7.8, median: 5.0 },
  { id: "success", label: "موفقیت تعدیل‌شده", you: 6.2, median: 5.0 },
  { id: "basket", label: "متوسط خرید", you: 5.7, median: 5.0 },
  { id: "return-rate", label: "نرخ بازگشت ۳۰روزه", you: 3.1, median: 5.0 },
  { id: "return-sales", label: "سهم فروش بازگشتی", you: 3.6, median: 5.0 },
  { id: "fee", label: "فشار کارمزد", you: 8.1, median: 5.0 },
  { id: "stability", label: "پایداری فروش", you: 7.6, median: 5.0 },
];

export const COHORT_ACTIVITY = {
  peakHours: "۱۸ تا ۲۲",
  yourPercentile: 78,
  similarCount: 18,
  /** Density curve samples 0–100 for SVG path. */
  curve: [
    4, 6, 9, 14, 22, 34, 48, 62, 74, 84, 90, 94, 96, 94, 88, 78, 64, 48, 34, 22,
    14, 9, 6, 4,
  ],
} as const;

export const LEADERBOARD: LeaderboardRow[] = [
  { id: "a", name: "پذیرنده الف", score: 92, medal: "gold" },
  { id: "b", name: "پذیرنده ب", score: 88, medal: "silver" },
  { id: "c", name: "پذیرنده ج", score: 86, medal: "bronze" },
  { id: "you", name: "شما", score: 74, isYou: true },
];
