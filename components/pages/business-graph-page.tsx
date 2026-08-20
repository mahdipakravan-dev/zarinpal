import {
  AlertTriangleIcon,
  ClockIcon,
  CreditCardIcon,
  RepeatIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendingUpIcon,
} from "lucide-react";
import type { ComponentType } from "react";

import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

const impactNodes = [
  { label: "مناسبت", value: "+۲۸٪", x: 410, y: 54, tone: "accent" },
  { label: "فروش موفق", value: "۶۸۲م", x: 250, y: 132, tone: "primary" },
  { label: "خریدار بازگشتی", value: "۳۹٪", x: 92, y: 84, tone: "good" },
  { label: "ساعت اوج", value: "۲۰-۲۲", x: 108, y: 218, tone: "muted" },
  { label: "NoAttempt", value: "۷.۸٪", x: 374, y: 230, tone: "warn" },
] as const;

const graphEdges = [
  ["مناسبت", "فروش موفق"],
  ["خریدار بازگشتی", "فروش موفق"],
  ["ساعت اوج", "فروش موفق"],
  ["NoAttempt", "فروش موفق"],
] as const;

const nodeToneClass = {
  accent: "fill-accent stroke-primary/25",
  good: "fill-[color-mix(in_oklch,var(--chart-2)_14%,white)] stroke-[var(--chart-2)]/45",
  muted: "fill-muted stroke-border",
  primary: "fill-primary stroke-primary",
  warn: "fill-card stroke-[var(--chart-5)]/45",
} as const;

function nodePoint(label: string) {
  const node = impactNodes.find((item) => item.label === label);

  if (!node) {
    throw new Error(`Unknown graph node: ${label}`);
  }

  return node;
}

function GraphPreview() {
  return (
    <figure className="rail-empty-grid min-h-72 overflow-hidden rounded-md border border-border bg-card">
      <figcaption className="sr-only">
        گراف روابط بین مناسبت، خریدار بازگشتی، ساعت اوج، NoAttempt و فروش موفق.
      </figcaption>
      <svg
        viewBox="0 0 500 300"
        className="h-full min-h-72 w-full"
        role="img"
        aria-label="پیش‌نمایش گراف هوشمند کسب‌وکار"
      >
        <g aria-hidden="true">
          {graphEdges.map(([from, to]) => {
            const start = nodePoint(from);
            const end = nodePoint(to);

            return (
              <line
                key={`${from}-${to}`}
                x1={start.x}
                x2={end.x}
                y1={start.y}
                y2={end.y}
                className="stroke-primary/35"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={from === "NoAttempt" ? "5 6" : undefined}
              />
            );
          })}
        </g>

        {impactNodes.map((node) => (
          <g key={node.label}>
            <rect
              x={node.x - 58}
              y={node.y - 28}
              width="116"
              height="56"
              rx="8"
              className={nodeToneClass[node.tone]}
              strokeWidth="1.5"
            />
            <text
              x={node.x}
              y={node.y - 4}
              textAnchor="middle"
              className="fill-foreground text-[12px] font-bold"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={node.y + 16}
              textAnchor="middle"
              className="fill-muted-foreground text-[11px] font-semibold"
            >
              {node.value}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}

function CompactList({
  items,
}: {
  items: Array<{ icon: ComponentType<{ className?: string }>; label: string; value: string }>;
}) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map(({ icon: Icon, label, value }) => (
        <li
          key={label}
          className="grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-md border border-border bg-muted/35 px-2.5 py-2 text-xs"
        >
          <span className="flex size-7 items-center justify-center rounded-md bg-card text-primary">
            <Icon className="size-3.5" aria-hidden="true" />
          </span>
          <span className="font-medium text-foreground">{label}</span>
          <span className="font-extrabold tabular-nums text-foreground">{value}</span>
        </li>
      ))}
    </ul>
  );
}

export function BusinessGraphPage() {
  return (
    <InsightPage
      title="گراف هوشمند کسب‌وکار"
      story="روابط پنهان بین فروش، خریدار، زمان و مسیر پرداخت را روی یک نقشه عملیاتی ببینید"
      note="گراف از داده‌های تجمیع‌شده ساخته می‌شود و هویت سایر پذیرنده‌ها یا خریداران افشا نمی‌شود."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="نمای گراف تعاملی"
        description="هر گره یک متغیر اثرگذار است؛ ضخامت ارتباط‌ها با قدرت همبستگی تغییر می‌کند."
      >
        <GraphPreview />
      </AnalysisSlot>
      <AnalysisSlot
        title="گره‌های پرتأثیر"
        description="متغیرهایی که بیشترین سهم را در تغییر فروش دارند."
      >
        <CompactList
          items={[
            { icon: TrendingUpIcon, label: "رشد مناسبت", value: "+۲۸٪" },
            { icon: RepeatIcon, label: "خریدار بازگشتی", value: "۳۹٪" },
            { icon: CreditCardIcon, label: "میانگین سبد", value: "۹۸۲ه" },
          ]}
        />
      </AnalysisSlot>
      <AnalysisSlot
        title="مسیرهای علّی محتمل"
        description="زنجیره‌های قابل بررسی، با سطح اطمینان آماری."
      >
        <CompactList
          items={[
            { icon: ClockIcon, label: "اوج ۲۰ تا ۲۲ ← فروش", value: "۰.۷۴" },
            { icon: AlertTriangleIcon, label: "NoAttempt ← افت موفقیت", value: "۰.۶۲" },
            { icon: ShieldCheckIcon, label: "Retry ← بازیابی نشست", value: "۰.۵۷" },
          ]}
        />
      </AnalysisSlot>
      <AnalysisSlot
        className="md:col-span-2"
        title="پیشنهاد مداخله"
        description="اقدام پیشنهادی بر اساس ساختار فعلی گراف."
      >
        <div className="rail-banner grid gap-2.5 p-2.5 sm:grid-cols-[auto_1fr] sm:items-center">
          <span className="flex size-9 items-center justify-center rounded-md bg-white/10 text-accent">
            <TargetIcon className="size-4" aria-hidden="true" />
          </span>
          <p className="text-sm leading-6 text-white/90">
            پیشنهاد خرید دوم را در بازه ۱۵ تا ۴۵ روز پس از خرید اول فعال کنید و
            همزمان ترمینال‌های دارای NoAttempt بالا را از قیف پرداخت جداگانه پایش کنید.
          </p>
        </div>
      </AnalysisSlot>
    </InsightPage>
  );
}
