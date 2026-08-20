import generatedBuyerLoyaltyIndex from "@/lib/generated/buyer-loyalty-index.json";

export type RetentionPoint = {
  horizon: number;
  eligible: number;
  returned: number;
  rate: number;
  interval: { low: number; high: number };
};

export type LoyaltySegment = {
  id: "new" | "single" | "active-returning" | "loyal" | "low-activity";
  label: string;
  definition: string;
  cards: number;
  share: number;
  amount: number;
  amountShare: number;
  purchases: number;
};

export type BuyerLoyaltyResult = {
  merchant: { id: string; categoryTitle: string };
  observation: { start: string; end: string };
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  kpis: {
    observedCards: number;
    returningCards: number;
    returningCardRate: number;
    repeatPurchases: number;
    repeatPurchaseShare: number;
    repeatAmount: number;
    repeatAmountShare: number;
    medianSecondPurchaseDays: number;
    verifiedPurchases: number;
    totalAmount: number;
  };
  retentionCurve: RetentionPoint[];
  cohort: Array<{
    id: string;
    label: string;
    start: string;
    end: string;
    partial?: boolean;
    cards: number;
    retention: Array<RetentionPoint | null>;
  }>;
  intervalDistribution: Array<{ id: string; label: string; count: number; share: number }>;
  intervalStats: { p25: number; median: number; p75: number; sampleSize: number };
  valueComparison: {
    firstPurchaseAverage: number;
    repeatPurchaseAverage: number;
    firstAmount: number;
    repeatAmount: number;
    repeatAmountShare: number;
  };
  segments: LoyaltySegment[];
  insight: {
    headline: string;
    bullets: string[];
    action: string;
    ruleAction: string;
    actionSource: "rules" | "ai";
  };
  methodology: {
    identity: string;
    purchase: string;
    firstPurchase: string;
    retentionDenominator: string;
    excludedFrom30DayRetention: number;
  };
};

export type BuyerLoyaltyIndex = {
  source: {
    file: string;
    size: number;
    mtimeMs: number;
    sha256: string;
    rowCount: number;
    dateRange: { start: string; end: string };
    generatedAt: string;
  };
  merchants: Array<{
    id: string;
    label: string;
    categoryId: string;
    categoryTitle: string;
    verifiedPurchases: number;
  }>;
};

export const BUYER_LOYALTY_INDEX = generatedBuyerLoyaltyIndex as unknown as BuyerLoyaltyIndex;

export function buyerLoyaltyMerchantDataUrl(merchantId: string) {
  return `/data/buyer-loyalty/merchants/${encodeURIComponent(merchantId)}.json`;
}
