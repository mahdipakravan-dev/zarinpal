import generatedPeerPositionIndex from "@/lib/generated/peer-position-index.json";

export type PeerTone = "good" | "warn" | "neutral";
export type PeerMetricId =
  | "sales"
  | "growth"
  | "adjustedSuccess"
  | "avgTicket"
  | "retention30"
  | "returningSales"
  | "noAttempt"
  | "retrySuccess"
  | "feePressure"
  | "volatility";

export type PeerMetric = {
  id: PeerMetricId;
  label: string;
  format: "money" | "percent" | "basis";
  value: number | null;
  median: number;
  q1: number;
  q3: number;
  percentile: number;
  higherIsBetter: boolean;
  tone: PeerTone;
  sampleSize: number;
};

export type PeerPositionResult = {
  merchant: { id: string; categoryId: string; categoryTitle: string };
  period: {
    id: string;
    label: string;
    range: string;
    start: string;
    end: string;
    previousStart: string;
    previousEnd: string;
  };
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  sample: { sessions: number; purchases: number };
  peerGroup: {
    count: number;
    minimum: number;
    method: string;
    criteria: Array<{ id: string; label: string; value: string }>;
  };
  metrics: PeerMetric[];
  insight: { headline: string; diagnosis: string; action: string };
  opportunities: Array<{ id: string; label: string; percentile: number; gap: number; action: string }>;
  scatter: {
    xLabel: string;
    yLabel: string;
    xMedian: number;
    yMedian: number;
    you: { x: number; y: number };
    peers: Array<{ id: string; x: number; y: number }>;
  };
  weeklyTrend: { labels: string[]; you: number[]; peerMedian: number[] };
  methodology: Record<string, string>;
};

export type PeerPositionIndex = {
  source: {
    file: string;
    size: number;
    mtimeMs: number;
    sha256: string;
    rowCount: number;
    dateRange: { start: string; end: string };
    generatedAt: string;
  };
  period: PeerPositionResult["period"];
  minimumPeers: number;
  maximumPeers: number;
  merchants: Array<{
    id: string;
    label: string;
    categoryId: string;
    categoryTitle: string;
    verifiedPurchases: number;
  }>;
};

export const PEER_POSITION_INDEX = generatedPeerPositionIndex as unknown as PeerPositionIndex;

export function peerPositionMerchantDataUrl(merchantId: string): string {
  return `/data/peer-position/merchants/${encodeURIComponent(merchantId)}.json`;
}
