export const DASHBOARD_PAGES = [
  "business-graph",
  "sales-pulse",
  "buyer-loyalty",
  "peer-position",
  "payment-health",
  "transactions",
  "discounts",
  "links",
] as const;

export type DashboardPage = (typeof DASHBOARD_PAGES)[number];

export const PAGE_TITLES: Record<DashboardPage, string> = {
  "business-graph": "گراف هوشمند کسب و کار",
  "sales-pulse": "نبض فروش و مناسبت‌ها",
  "buyer-loyalty": "رفتار و وفاداری خریداران",
  "peer-position": "جایگاه در میان کسب‌وکارهای مشابه",
  "payment-health": "سلامت مسیر پرداخت",
  transactions: "تراکنش‌ها",
  discounts: "کدهای تخفیف",
  links: "لینک‌های پرداخت",
};
