import generatedSalesPulseIndex from "@/lib/generated/sales-pulse-index.json";

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
  id: string;
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

export type SalesPulseMetric = {
  value: number;
  baseline: number;
  change: number;
  trend: number[];
};

export type SalesPulseResult = {
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  sampleSize: number;
  verifiedPurchases: number;
  kpis: {
    successfulCount: SalesPulseMetric;
    salesAmount: SalesPulseMetric;
    avgBasket: SalesPulseMetric;
    successRate: SalesPulseMetric;
    returningShare: SalesPulseMetric;
  };
  totalGrowth: number;
  growthFactors: GrowthFactor[];
  cumulativeTrend: TrendPoint[];
  hourlyImpact: HourlyImpact[];
  heatmap: number[][];
  quickComparison: Array<{
    label: string;
    value: number;
    type: "percent" | "points";
  }>;
  insight: {
    headline: string;
    bullets: string[];
    action: string;
    ruleAction: string;
    actionSource: "rules" | "ai";
    ai?: {
      model: string;
      generatedAt: string;
    };
  };
};

export type SalesPulseIndex = {
  source: {
    file: string;
    size: number;
    mtimeMs: number;
    sha256: string;
    rowCount: number;
    dateRange: { start: string; end: string };
    generatedAt: string;
    amountUnit: "IRR";
    baselineMethod: string;
  };
  periods: Array<{
    id: string;
    label: string;
    range: string;
    start: string;
    end: string;
    kind: "month" | "occasion";
  }>;
  merchants: Array<{
    id: string;
    label: string;
    categoryId: string;
    categoryTitle: string;
    verifiedPurchases: number;
  }>;
};

export const SALES_PULSE_INDEX = generatedSalesPulseIndex as unknown as SalesPulseIndex;

export function salesPulseMerchantDataUrl(merchantId: string): string {
  return `/data/sales-pulse/merchants/${encodeURIComponent(merchantId)}.json`;
}

export const HEATMAP_DAYS = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنجشنبه",
  "جمعه",
] as const;

export const HEATMAP_BLOCKS = [
  "۰–۳",
  "۳–۶",
  "۶–۹",
  "۹–۱۲",
  "۱۲–۱۵",
  "۱۵–۱۸",
  "۱۸–۲۱",
  "۲۱–۲۴",
] as const;
