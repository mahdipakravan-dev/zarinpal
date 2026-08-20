export type HealthTone = "good" | "warn" | "neutral" | "violet";

export type FunnelStage = {
  id: string;
  label: string;
  count: number;
  rate: number;
  tone: "violet" | "lavender" | "indigo" | "green";
};

export type HealthKpi = {
  id: string;
  label: string;
  value: string;
  caption: string;
  tone: HealthTone;
  icon: "bank" | "check" | "refresh" | "terminal" | "alert" | "shield";
};

export type DropOffStep = {
  id: string;
  from: string;
  to: string;
  lostCount: number;
  lostRate: number;
  severity: "high" | "medium" | "low";
};

export type AmountBucket = {
  id: string;
  label: string;
  bankSuccess: number;
  peerMedian: number;
};

export type TerminalRow = {
  id: string;
  name: string;
  successRate: number;
  noAttempt: number;
  sample: string;
};

export type PspAnomaly = {
  id: string;
  label: string;
  deviation: number;
  note: string;
  tone: HealthTone;
};

export const PAYMENT_HEALTH_PERIODS = [
  { id: "khordad-1403", label: "۱ تا ۳۱ خرداد ۱۴۰۳" },
  { id: "ordibehesht-1403", label: "۱ تا ۳۱ اردیبهشت ۱۴۰۳" },
  { id: "farvardin-1403", label: "۱ تا ۳۱ فروردین ۱۴۰۳" },
] as const;

export const PAYMENT_HEALTH_MERCHANTS = [
  { id: "merchant-a", label: "پذیرنده الف" },
  { id: "merchant-b", label: "پذیرنده ب" },
  { id: "merchant-c", label: "پذیرنده ج" },
] as const;

/** Classic payment-path funnel from gateway display to verified paid. */
export const PAYMENT_FUNNEL: FunnelStage[] = [
  {
    id: "gateway",
    label: "نمایش درگاه",
    count: 1_684_214,
    rate: 100,
    tone: "violet",
  },
  {
    id: "bank-entry",
    label: "ورود به بانک",
    count: 1_222_873,
    rate: 72.6,
    tone: "lavender",
  },
  {
    id: "bank-success",
    label: "موفقیت در بانک",
    count: 1_045_230,
    rate: 62.1,
    tone: "indigo",
  },
  {
    id: "paid",
    label: "پرداخت موفق",
    count: 1_025_627,
    rate: 60.9,
    tone: "green",
  },
];

export const FUNNEL_SUMMARY = {
  postEntrySuccess: 84.2,
  vsPeerPoints: -6.4,
  peerMedian: 90.6,
  headline: "بیشترین ریزش بین نمایش درگاه و ورود به بانک است.",
  takeaway: "مسئله اصلی NoAttempt است؛ نه لزوماً شکست بانکی.",
} as const;

export const PAYMENT_HEALTH_KPIS: HealthKpi[] = [
  {
    id: "bank-reach",
    label: "نرخ ورود به بانک",
    value: "۷۲٫۶٪",
    caption: "از کل نمایش درگاه",
    tone: "warn",
    icon: "bank",
  },
  {
    id: "post-entry",
    label: "موفقیت پس از ورود",
    value: "۸۴٫۲٪",
    caption: "۶٫۴ واحد کمتر از همتایان",
    tone: "warn",
    icon: "check",
  },
  {
    id: "retry",
    label: "بازیابی با Retry",
    value: "۱۸٫۴٪",
    caption: "از نشست‌های ناموفق اولیه",
    tone: "good",
    icon: "refresh",
  },
  {
    id: "no-attempt",
    label: "No Attempt",
    value: "۲۷٫۴٪",
    caption: "قبل از ورود به بانک",
    tone: "warn",
    icon: "alert",
  },
  {
    id: "verify-issue",
    label: "مشکل Verify",
    value: "۱٫۹٪",
    caption: "پس از موفقیت بانکی",
    tone: "neutral",
    icon: "shield",
  },
  {
    id: "terminal-gap",
    label: "شکاف ترمینال‌ها",
    value: "۹٫۱٪",
    caption: "اختلاف بهترین و بدترین",
    tone: "violet",
    icon: "terminal",
  },
];

export const FUNNEL_DROPOFFS: DropOffStep[] = [
  {
    id: "gateway-to-bank",
    from: "نمایش درگاه",
    to: "ورود به بانک",
    lostCount: 461_341,
    lostRate: 27.4,
    severity: "high",
  },
  {
    id: "bank-to-success",
    from: "ورود به بانک",
    to: "موفقیت در بانک",
    lostCount: 177_643,
    lostRate: 14.5,
    severity: "medium",
  },
  {
    id: "success-to-paid",
    from: "موفقیت در بانک",
    to: "پرداخت موفق",
    lostCount: 19_603,
    lostRate: 1.9,
    severity: "low",
  },
];

export const AMOUNT_BUCKETS: AmountBucket[] = [
  { id: "low", label: "زیر ۲۰۰ هزار", bankSuccess: 88.4, peerMedian: 91.2 },
  { id: "mid", label: "۲۰۰ تا ۸۰۰ هزار", bankSuccess: 84.1, peerMedian: 90.5 },
  { id: "high", label: "۸۰۰ هزار تا ۲ میلیون", bankSuccess: 79.6, peerMedian: 88.8 },
  { id: "xl", label: "بالای ۲ میلیون", bankSuccess: 74.2, peerMedian: 86.1 },
];

export const TERMINAL_ROWS: TerminalRow[] = [
  {
    id: "t1",
    name: "ترمینال اصلی",
    successRate: 86.8,
    noAttempt: 22.1,
    sample: "۷۴۲k",
  },
  {
    id: "t2",
    name: "ترمینال موبایل",
    successRate: 81.4,
    noAttempt: 29.6,
    sample: "۴۱۸k",
  },
  {
    id: "t3",
    name: "ترمینال VIP",
    successRate: 90.5,
    noAttempt: 18.4,
    sample: "۱۲۶k",
  },
  {
    id: "t4",
    name: "ترمینال آزمایشی",
    successRate: 77.7,
    noAttempt: 34.2,
    sample: "۳۸k",
  },
];

export const PSP_ANOMALIES: PspAnomaly[] = [
  {
    id: "psp-05",
    label: "PSP-05",
    deviation: -8.4,
    note: "افت موفقیت پس از ورود، پس از تعدیل مبلغ",
    tone: "warn",
  },
  {
    id: "issuer-mellat",
    label: "صادرکننده ملت",
    deviation: -3.1,
    note: "انحراف خفیف نسبت به الگوی همین پذیرنده",
    tone: "neutral",
  },
  {
    id: "psp-02",
    label: "PSP-02",
    deviation: 2.6,
    note: "بهتر از انتظار پس از کنترل ترکیب مبلغ",
    tone: "good",
  },
];

export const RETRY_STATS = {
  recoveredSessions: 42_180,
  recoveredShare: 18.4,
  medianAttempts: 2,
  note: "Retry بیشترین اثر را در بازه مبلغ متوسط دارد.",
} as const;
