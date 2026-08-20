export const DASHBOARD_PAGES = [
  "transactions",
  "discounts",
  "links",
  "sales-pulse",
  "buyer-loyalty",
  "peer-position",
  "payment-health",
] as const;

export type DashboardPage = (typeof DASHBOARD_PAGES)[number];

export const PAGE_TITLES: Record<DashboardPage, string> = {
  transactions: "تراکنش‌ها",
  discounts: "کدهای تخفیف",
  links: "لینک‌های پرداخت",
  "sales-pulse": "نبض فروش و مناسبت‌ها",
  "buyer-loyalty": "رفتار و وفاداری خریداران",
  "peer-position": "جایگاه در میان کسب‌وکارهای مشابه",
  "payment-health": "سلامت مسیر پرداخت",
};
