import { formatPersianNumber, formatPersianPercent } from "@/lib/format";

import type {
  GraphKind,
  GraphPayload,
  Merchant,
  VisualGraph,
  VisualLink,
  VisualNode,
} from "./types";

/** ZarinPal chart-aligned palette (replaces prototype teal OLED set). */
const CATEGORY_COLORS = [
  "#174fd6",
  "#079b7a",
  "#e0aa09",
  "#d44949",
  "#6b5cff",
] as const;

const SEGMENT_COLORS: Record<string, string> = {
  loyal: "#079b7a",
  "at-risk": "#d44949",
  "high-value-one-off": "#e0aa09",
  new: "#174fd6",
  regular: "#6b5cff",
  "one-time": "#60708b",
};

const SEGMENT_LABELS: Record<string, string> = {
  loyal: "وفادار",
  "at-risk": "در معرض ریزش",
  "high-value-one-off": "تک‌خرید ارزشمند",
  new: "تازه",
  regular: "منظم",
  "one-time": "تک‌خرید",
};

const compact = (value: number) =>
  formatPersianNumber(value, { notation: "compact", maximumFractionDigits: 1 });

function merchantNode(merchant: Merchant, categoryColor: string): VisualNode {
  return {
    id: merchant.id,
    label: merchant.id,
    type: "merchant",
    group: `community-${merchant.community}`,
    color: categoryColor,
    val: Math.max(3, Math.log10(merchant.sessions + 10) * 1.8),
    details: {
      صنف: merchant.category,
      سشن: compact(merchant.sessions),
      "نرخ موفقیت": formatPersianPercent(merchant.successRate * 100),
      "کارت مشاهده‌شده": compact(merchant.observedCards),
      "خریدار بازگشتی": formatPersianPercent(merchant.repeatBuyerRate * 100),
      "جامعه گرافی": merchant.community + 1,
    },
  };
}

function buildMerchantSimilarity(payload: GraphPayload): VisualGraph {
  const categoryIndex = new Map(
    payload.categories.map((category, index) => [category.id, index]),
  );
  const nodes = payload.merchantGraph.nodes.map((merchant) =>
    merchantNode(
      merchant,
      CATEGORY_COLORS[
        (categoryIndex.get(merchant.categoryId) ?? 0) % CATEGORY_COLORS.length
      ],
    ),
  );
  return {
    nodes,
    links: payload.merchantGraph.links.map((link) => ({ ...link })),
    title: "شبکه شباهت پذیرنده‌ها",
    subtitle:
      "هر اتصال یعنی نزدیکی رفتاری؛ اندازه گره متناسب با تعداد session است.",
    legend: payload.categories.map((category, index) => ({
      label: category.title,
      color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
    })),
  };
}

function buildCategoryLandscape(payload: GraphPayload): VisualGraph {
  const categoryIndex = new Map(
    payload.categories.map((category, index) => [category.id, index]),
  );
  const categoryNodes: VisualNode[] = payload.categories.map(
    (category, index) => ({
      id: `category:${category.id}`,
      label: category.title,
      type: "category",
      group: category.id,
      color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
      val: 16,
      details: {
        پذیرنده: category.merchants,
        سشن: compact(category.sessions),
        "نرخ موفقیت": formatPersianPercent(category.successRate * 100),
      },
    }),
  );
  const merchantNodes = payload.merchantGraph.nodes.map((merchant) =>
    merchantNode(
      merchant,
      CATEGORY_COLORS[
        (categoryIndex.get(merchant.categoryId) ?? 0) % CATEGORY_COLORS.length
      ],
    ),
  );
  const links: VisualLink[] = payload.merchantGraph.nodes.map((merchant) => ({
    source: `category:${merchant.categoryId}`,
    target: merchant.id,
    weight: Math.min(1, 0.12 + Math.log10(merchant.sessions + 1) / 8),
    label: merchant.category,
  }));
  return {
    nodes: [...categoryNodes, ...merchantNodes],
    links,
    title: "چشم‌انداز صنف‌ها",
    subtitle:
      "نمای کلی تمرکز پذیرنده‌ها و اندازه فعالیت در پنج دسته موجود در داده.",
    legend: payload.categories.map((category, index) => ({
      label: category.title,
      color: CATEGORY_COLORS[index % CATEGORY_COLORS.length],
    })),
  };
}

function buildCustomerSimilarity(merchant: Merchant): VisualGraph {
  const nodes: VisualNode[] = merchant.customerGraph.nodes.map((customer) => ({
    id: customer.id,
    label: customer.id.replace("CARD-", "کارت "),
    type: "customer",
    group: customer.segment,
    color: SEGMENT_COLORS[customer.segment] ?? "#60708b",
    val: Math.max(3, Math.min(11, 3 + Math.log2(customer.purchases + 1))),
    details: {
      سگمنت: SEGMENT_LABELS[customer.segment] ?? customer.segment,
      خرید: customer.purchases,
      "مبلغ کل": `${compact(customer.totalAmount)} ریال`,
      "میانگین خرید": `${compact(customer.averageAmount)} ریال`,
      "روز از آخرین خرید": customer.recencyDays,
      "ساعت ترجیحی": customer.preferredHour,
      "جامعه گرافی": customer.community + 1,
    },
  }));
  return {
    nodes,
    links: merchant.customerGraph.links.map((link) => ({ ...link })),
    title: `شباهت رفتاری مشتریان ${merchant.id}`,
    subtitle: merchant.customerGraph.sampled
      ? `نماینده‌های رفتاری از میان ${compact(merchant.customerGraph.population)} کارت؛ این گراف کل مشتریان را نمایش نمی‌دهد.`
      : `تمام ${compact(merchant.customerGraph.population)} کارت مشاهده‌شده در این پذیرنده.`,
    legend: Object.entries(SEGMENT_LABELS).map(([segment, label]) => ({
      label,
      color: SEGMENT_COLORS[segment],
    })),
  };
}

function buildPaymentFlow(merchant: Merchant): VisualGraph {
  const nodes: VisualNode[] = [
    {
      id: merchant.id,
      label: merchant.id,
      type: "merchant",
      group: "merchant",
      color: "#174fd6",
      val: 16,
      fx: 0,
      fy: 0,
      details: {
        سشن: compact(merchant.sessions),
        "نرخ موفقیت": formatPersianPercent(merchant.successRate * 100),
        "عدم ورود به بانک": formatPersianPercent(merchant.noAttemptRate * 100),
      },
    },
    {
      id: "outcome:verified",
      label: "موفق مستقیم",
      type: "outcome",
      group: "verified",
      color: "#079b7a",
      val: 13,
      fx: -180,
      fy: -72,
      details: { تعریف: "try_status = Verified در اولین تلاش" },
    },
    {
      id: "outcome:not-verified",
      label: "ناموفق مستقیم",
      type: "outcome",
      group: "failed",
      color: "#d44949",
      val: 13,
      fx: -180,
      fy: 72,
      details: { تعریف: "اولین تلاش بدون Verified مستقیم" },
    },
  ];
  const links: VisualLink[] = [];

  for (const [pspIndex, psp] of merchant.paymentFlow.psps.entries()) {
    const directVerified = psp.directVerified ?? 0;
    nodes.push({
      id: `psp:${psp.id}`,
      label: psp.id,
      type: "psp",
      group: "psp",
      color: "#3b74ef",
      val: Math.max(5, Math.min(12, 4 + Math.log10(psp.attempts + 1))),
      fx: -82,
      fy: (pspIndex - (merchant.paymentFlow.psps.length - 1) / 2) * 62,
      details: {
        "تلاش اول": compact(psp.attempts),
        "موفق مستقیم": formatPersianPercent(
          (directVerified / psp.attempts) * 100,
        ),
        "موفق نهایی session": formatPersianPercent(
          ((psp.eventualVerified ?? 0) / psp.attempts) * 100,
        ),
      },
    });
    links.push({
      source: merchant.id,
      target: `psp:${psp.id}`,
      weight: psp.attempts,
      label: "تلاش اول",
      directed: true,
    });
    links.push({
      source: `psp:${psp.id}`,
      target: "outcome:verified",
      weight: directVerified,
      label: "موفق",
      directed: true,
    });
    links.push({
      source: `psp:${psp.id}`,
      target: "outcome:not-verified",
      weight: psp.attempts - directVerified,
      label: "ناموفق",
      directed: true,
    });
  }

  for (const [bankIndex, bank] of merchant.paymentFlow.banks.entries()) {
    nodes.push({
      id: `bank:${bank.id}`,
      label: bank.id,
      type: "bank",
      group: "bank",
      color: "#6b5cff",
      val: Math.max(4, Math.min(9, 3 + Math.log10(bank.verified + 1))),
      fx: 130 + (bankIndex % 2) * 54,
      fy: (bankIndex - (merchant.paymentFlow.banks.length - 1) / 2) * 48,
      details: {
        "خرید موفق": compact(bank.verified),
        تعریف: "بانک صادرکننده در خریدهای Verified",
      },
    });
    links.push({
      source: merchant.id,
      target: `bank:${bank.id}`,
      weight: bank.verified,
      label: "بانک خرید موفق",
      dashed: true,
    });
  }

  return {
    nodes,
    links,
    title: `مسیر پرداخت ${merchant.id}`,
    subtitle:
      "PSPها بر اساس اولین تلاش و بانک‌ها فقط بر اساس خریدهای موفق نمایش داده شده‌اند.",
    legend: [
      { label: "پذیرنده", color: "#174fd6" },
      { label: "PSP", color: "#3b74ef" },
      { label: "نتیجه", color: "#d44949" },
      { label: "بانک صادرکننده", color: "#6b5cff" },
    ],
  };
}

export function buildVisualGraph(
  payload: GraphPayload,
  kind: GraphKind,
  merchant: Merchant,
): VisualGraph {
  if (kind === "similarity") return buildMerchantSimilarity(payload);
  if (kind === "categories") return buildCategoryLandscape(payload);
  if (kind === "customers") return buildCustomerSimilarity(merchant);
  return buildPaymentFlow(merchant);
}

export const segmentLabel = (segment: string) =>
  SEGMENT_LABELS[segment] ?? segment;
