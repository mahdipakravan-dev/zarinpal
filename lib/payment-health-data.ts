import generatedPaymentHealthIndex from "@/lib/generated/payment-health-index.json";

export type HealthKpi = { value: number; peerMedian: number; raw?: number; count?: number; recovered?: number; eligible?: number };
export type PaymentHealthResult = {
  merchant: { id: string; categoryId: string; categoryTitle: string };
  period: { id: string; label: string; range: string; start: string; end: string };
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  peerGroup: { count: number; minimum: number; method: string };
  sample: { sessions: number; entered: number; verified: number };
  kpis: {
    bankReach: HealthKpi; postEntrySuccess: HealthKpi; retrySuccess: HealthKpi;
    noAttempt: HealthKpi; verifyIssue: HealthKpi; terminalGap: HealthKpi;
  };
  funnel: Array<{ id: string; label: string; count: number; rate: number }>;
  dropoffs: Array<{ id: string; from: string; to: string; count: number; rate: number }>;
  amountBuckets: Array<{ id: string; label: string; sample: number; successRate: number; peerMedian: number }>;
  terminals: Array<{ id: string; sessions: number; successRate: number; noAttempt: number; eligible: boolean }>;
  verifyTypes: Array<{ id: string; label: string; sample: number; successRate: number; paidIssue: number }>;
  retry: {
    sessions: number; recovered: number; successRate: number; medianAttempts: number;
    buckets: Array<{ id: string; label: string; sessions: number; recovered: number; rate: number }>;
  };
  pspAnomalies: HealthAnomaly[];
  issuerAnomalies: HealthAnomaly[];
  issuerCoverage: { known: number; entered: number; failedKnown: number; failed: number; analyzable: boolean };
  pspAmountHeatmap: {
    columns: Array<{ id: string; label: string }>;
    rows: Array<{ id: string; cells: Array<{ sample: number; rate: number; deviation: number } | null> }>;
  };
  weeklyTrend: { labels: string[]; noAttempt: number[]; success: number[] };
  insight: { headline: string; diagnosis: string; action: string };
  methodology: Record<string, string>;
};
export type HealthAnomaly = {
  id: string; label: string; sample: number; actual: number; expected: number;
  deviation: number; confidence: "high" | "medium" | "low";
};
export type PaymentHealthIndex = {
  source: { file: string; size: number; mtimeMs: number; sha256: string; rowCount: number; dateRange: { start: string; end: string }; generatedAt: string };
  period: PaymentHealthResult["period"];
  minimumPeers: number;
  maximumPeers: number;
  merchants: Array<{ id: string; label: string; categoryId: string; categoryTitle: string; verifiedPurchases: number }>;
};
export const PAYMENT_HEALTH_INDEX = generatedPaymentHealthIndex as unknown as PaymentHealthIndex;
export function paymentHealthMerchantDataUrl(merchantId: string): string {
  return `/data/payment-health/merchants/${encodeURIComponent(merchantId)}.json`;
}
