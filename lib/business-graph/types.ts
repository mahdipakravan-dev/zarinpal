export type Scope = "global" | "merchant";
export type GlobalGraphKind = "similarity" | "categories";
export type MerchantGraphKind = "customers" | "flow";
export type GraphKind = GlobalGraphKind | MerchantGraphKind;

export interface GraphMeta {
  source: string;
  sourceBytes: number;
  sourceSha256: string;
  attemptRows: number;
  sessions: number;
  merchants: number;
  observedCards: number;
  dateFrom: string;
  dateTo: string;
  currency: string;
  customerIdentity: string;
}

export interface CustomerNode {
  id: string;
  purchases: number;
  totalAmount: number;
  averageAmount: number;
  recencyDays: number;
  activeSpanDays: number;
  preferredHour: number;
  segment: string;
  community: number;
}

export interface SourceLink {
  source: string;
  target: string;
  weight: number;
  reasons?: string[];
}

export interface Merchant {
  id: string;
  categoryId: string;
  category: string;
  attempts: number;
  sessions: number;
  terminalCount: number;
  verified: number;
  failed: number;
  paid: number;
  reversed: number;
  successRate: number;
  noAttempt: number;
  noAttemptRate: number;
  verifiedAmount: number;
  averageTicket: number;
  verifiedAdjustedFee: number;
  adjustedFeeBurden: number;
  manualShare: number;
  retrySessions: number;
  retryRate: number;
  laterVerified: number;
  observedCards: number;
  repeatBuyers: number;
  repeatBuyerRate: number;
  repeatPurchaseShare: number;
  segments: Record<string, number>;
  community: number;
  customerGraph: {
    sampled: boolean;
    population: number;
    nodes: CustomerNode[];
    links: SourceLink[];
  };
  paymentFlow: {
    psps: Array<{
      id: string;
      attempts: number;
      directVerified?: number;
      eventualVerified?: number;
    }>;
    banks: Array<{ id: string; verified: number }>;
  };
}

export interface Category {
  id: string;
  title: string;
  merchants: number;
  sessions: number;
  verifiedAmount: number;
  successRate: number;
}

export interface GraphPayload {
  meta: GraphMeta;
  methodology: {
    merchantGraph: string;
    customerGraph: string;
    limitations: string[];
  };
  categories: Category[];
  merchantGraph: {
    nodes: Merchant[];
    links: SourceLink[];
  };
}

export interface VisualNode {
  id: string;
  label: string;
  type: "merchant" | "category" | "customer" | "psp" | "outcome" | "bank";
  group: string;
  color: string;
  val: number;
  details: Record<string, string | number>;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number;
  fy?: number;
}

export interface VisualLink {
  source: string | VisualNode;
  target: string | VisualNode;
  weight: number;
  label?: string;
  reasons?: string[];
  dashed?: boolean;
  directed?: boolean;
}

export interface VisualGraph {
  nodes: VisualNode[];
  links: VisualLink[];
  title: string;
  subtitle: string;
  legend: Array<{ label: string; color: string }>;
}
