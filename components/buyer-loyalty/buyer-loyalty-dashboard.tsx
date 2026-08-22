"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  BadgeDollarSignIcon,
  CalendarClockIcon,
  CreditCardIcon,
  InfoIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";

import { AnalysisToolbar } from "@/components/dashboard/analysis-toolbar";
import { AiInsight } from "@/components/dashboard/ai-insight";
import { Skeleton } from "@/components/ui/skeleton";
import { useLiveAiAction } from "@/hooks/use-live-ai-action";
import { streamBuyerLoyaltyAction } from "@/lib/buyer-loyalty-ai-stream";
import { PAGE_TITLES } from "@/lib/dashboard";
import {
  BUYER_LOYALTY_INDEX,
  buyerLoyaltyMerchantDataUrl,
  type BuyerLoyaltyResult,
  type LoyaltySegment,
} from "@/lib/buyer-loyalty-data";
import { formatPersianNumber, formatPersianPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

const theme = {
  "--loyalty-ink": "#19191a",
  "--loyalty-subtle": "#19191a",
  "--loyalty-line": "#e1e6ef",
  "--loyalty-wash": "#f6f8fb",
  "--loyalty-blue": "#2457d6",
  "--loyalty-blue-soft": "#eaf0ff",
  "--loyalty-green": "#11966f",
  "--loyalty-green-soft": "#e7f7f1",
  "--loyalty-amber": "#db7b22",
  "--loyalty-amber-soft": "#fff2e2",
  "--loyalty-rose": "#d64d62",
  "--loyalty-rose-soft": "#fdecef",
  "--loyalty-yellow": "#ffd60a",
  "--insight-ink": "#19191a",
  "--insight-subtle": "#19191a",
  "--insight-line": "#e1e6ef",
  "--insight-wash": "#f6f8fb",
} as CSSProperties;

const panel = "rail-panel rail-panel-interactive [--rail-accent:var(--loyalty-blue)] [--rail-line:var(--loyalty-line)]";

function Panel({ title, description, children, className }: {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn(panel, "flex min-h-0 min-w-0 flex-col gap-3 p-2.5 sm:p-3", className)}>
      <header className="shrink-0">
        <h2 className="text-sm font-bold text-[var(--loyalty-ink)] sm:text-base">{title}</h2>
        <p className="mt-0.5 text-xs leading-5 text-[var(--loyalty-subtle)]">{description}</p>
      </header>
      {children}
    </article>
  );
}

function Header({ merchantId, onMerchantChange }: {
  merchantId: string;
  onMerchantChange: (value: string | null) => void;
}) {
  const periodLabel = formatObservationRange(BUYER_LOYALTY_INDEX.source.dateRange);
  const periods = [
    {
      id: "observation",
      label: periodLabel,
      range: periodLabel,
    },
  ];

  return (
    <header className="flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[var(--loyalty-yellow)] text-[var(--loyalty-ink)]">
          <UsersIcon className="size-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h1 className="text-lg font-extrabold text-[var(--loyalty-ink)] sm:text-xl">
            {PAGE_TITLES["buyer-loyalty"]}
          </h1>
          <p className="text-xs leading-5 text-[var(--loyalty-subtle)] sm:text-sm">
            رفتار مشتریان از اولین خرید مشاهده‌شده تا بازگشت بعدی
          </p>
        </div>
      </div>
      <AnalysisToolbar
        merchantId={merchantId}
        merchants={BUYER_LOYALTY_INDEX.merchants}
        periodId="observation"
        periods={periods}
        onMerchantChange={onMerchantChange}
        onPeriodChange={() => undefined}
      />
    </header>
  );
}

function formatObservationRange(range: { start: string; end: string }) {
  const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
    year: "numeric",
  });
  const start = formatter.format(new Date(`${range.start}T00:00:00`));
  const end = formatter.format(new Date(`${range.end}T00:00:00`));
  return start === end ? start : `${start} تا ${end}`;
}

const kpiDefinitions = [
  { id: "cards", label: "مشتری مشاهده‌شده", icon: CreditCardIcon, tone: "blue" },
  { id: "returning", label: "مشتری دارای خرید مجدد", icon: RefreshCwIcon, tone: "green" },
  { id: "repeat-purchases", label: "سهم تعداد خریدهای تکراری", icon: UsersIcon, tone: "amber" },
  { id: "repeat-amount", label: "سهم مبلغ خریدهای تکراری", icon: BadgeDollarSignIcon, tone: "rose" },
  { id: "median", label: "میانه زمان تا خرید دوم", icon: CalendarClockIcon, tone: "green" },
] as const;

function Kpis({ result }: { result: BuyerLoyaltyResult }) {
  const values = {
    cards: { value: formatPersianNumber(result.kpis.observedCards), note: `${formatPersianNumber(result.kpis.verifiedPurchases)} خرید موفق` },
    returning: { value: formatPersianPercent(result.kpis.returningCardRate), note: `${formatPersianNumber(result.kpis.returningCards)} مشتری با ۲+ خرید` },
    "repeat-purchases": { value: formatPersianPercent(result.kpis.repeatPurchaseShare), note: "خرید دوم و بعدی از کل خریدها" },
    "repeat-amount": { value: formatPersianPercent(result.kpis.repeatAmountShare), note: "از کل مبلغ فروش موفق" },
    median: {
      value: result.intervalStats.sampleSize
        ? `${formatPersianNumber(result.kpis.medianSecondPurchaseDays, { maximumFractionDigits: 1 })} روز`
        : "داده ناکافی",
      note: `${formatPersianNumber(result.intervalStats.sampleSize)} مشتری بازگشتی`,
    },
  };
  return (
    <section className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-5" aria-label="شاخص‌های اصلی وفاداری">
      {kpiDefinitions.map((item) => {
        const Icon = item.icon;
        const value = values[item.id];
        return (
          <article key={item.id} className={cn(panel, "flex min-h-28 flex-col justify-between gap-2 p-2.5 last:col-span-2 md:last:col-span-1")}>
            <div className="flex items-start justify-between gap-2">
              <p className="text-[11px] font-semibold leading-4 text-[var(--loyalty-subtle)]">{item.label}</p>
              <span className={cn("flex size-8 shrink-0 items-center justify-center rounded-md", item.tone === "blue" && "bg-[var(--loyalty-blue-soft)] text-[var(--loyalty-blue)]", item.tone === "green" && "bg-[var(--loyalty-green-soft)] text-[var(--loyalty-green)]", item.tone === "amber" && "bg-[var(--loyalty-amber-soft)] text-[var(--loyalty-amber)]", item.tone === "rose" && "bg-[var(--loyalty-rose-soft)] text-[var(--loyalty-rose)]")}>
                <Icon className="size-4" aria-hidden="true" />
              </span>
            </div>
            <div>
              <p className="text-lg font-extrabold text-[var(--loyalty-ink)] sm:text-xl">{value.value}</p>
              <p className="text-[10px] leading-4 text-[var(--loyalty-subtle)]">{value.note}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}

function RetentionChart({ result }: { result: BuyerLoyaltyResult }) {
  return (
    <Panel title="نرخ خرید مجدد" description="درصد مشتریان واجد شرایط که تا هر افق زمانی خرید دیگری داشته‌اند">
      <div className="flex flex-col gap-3">
        {result.retentionCurve.map((point) => (
          <div key={point.horizon} className="grid grid-cols-[3.5rem_minmax(0,1fr)_3.5rem] items-center gap-2">
            <div className="text-xs font-semibold text-[var(--loyalty-ink)]">تا {formatPersianNumber(point.horizon)} روز</div>
            <div className="relative h-8 overflow-hidden rounded-md bg-[var(--loyalty-wash)]">
              <div className="h-full rounded-md bg-[var(--loyalty-green)]" style={{ width: `${Math.max(1, point.rate)}%` }} />
              <span className="absolute inset-0 flex items-center px-2 text-[10px] font-medium text-[var(--loyalty-ink)]">{formatPersianNumber(point.returned)} از {formatPersianNumber(point.eligible)} مشتری</span>
            </div>
            <div className="text-end">
              <p className="text-sm font-bold text-[var(--loyalty-green)]">{formatPersianPercent(point.rate)}</p>
              <p className="text-[9px] text-[var(--loyalty-subtle)]">{formatPersianNumber(point.interval.low, { maximumFractionDigits: 1 })}–{formatPersianNumber(point.interval.high, { maximumFractionDigits: 1 })}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[10px] leading-4 text-[var(--loyalty-subtle)]">بازه کوچک زیر هر نرخ، فاصله اطمینان ۹۵٪ است؛ مخرج هر افق فقط مشتریان دارای فرصت کامل مشاهده را شامل می‌شود.</p>
    </Panel>
  );
}

function CohortHeatmap({ result }: { result: BuyerLoyaltyResult }) {
  return (
    <Panel className="xl:col-span-2" title="نسل‌های خرید و بازگشت" description="نرخ خرید مجدد براساس ماه اولین خرید مشاهده‌شده؛ خانه خالی یعنی فرصت مشاهده کامل نشده است">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-separate border-spacing-1 text-center text-xs">
          <thead><tr><th className="p-1.5 text-start font-medium text-[var(--loyalty-subtle)]">ماه اولین مشاهده</th><th className="p-1.5 font-medium text-[var(--loyalty-subtle)]">مشتری</th>{[7, 30, 60, 90].map((horizon) => <th key={horizon} className="p-1.5 font-medium text-[var(--loyalty-subtle)]">تا {formatPersianNumber(horizon)} روز</th>)}</tr></thead>
          <tbody>
            {result.cohort.map((row) => (
              <tr key={row.id}>
                <th className="rounded-md bg-[var(--loyalty-wash)] p-2 text-start font-semibold text-[var(--loyalty-ink)]">{row.label}{row.partial ? <span className="ms-1 text-[9px] font-normal text-[var(--loyalty-subtle)]">(ناقص)</span> : null}</th>
                <td className="p-2 text-[var(--loyalty-subtle)]">{formatPersianNumber(row.cards)}</td>
                {row.retention.map((cell, index) => <td key={index} className={cn("rounded-md p-2 font-bold", cell ? "text-white" : "bg-[var(--loyalty-wash)] text-[var(--loyalty-subtle)]")} style={cell ? { backgroundColor: `color-mix(in oklch, var(--loyalty-blue) ${Math.min(35 + cell.rate, 88)}%, white)` } : undefined} title={cell ? `${cell.returned} از ${cell.eligible} مشتری` : "فرصت مشاهده کامل نشده"}>{cell ? formatPersianPercent(cell.rate) : "—"}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function IntervalDistribution({ result }: { result: BuyerLoyaltyResult }) {
  const max = Math.max(...result.intervalDistribution.map((item) => item.share), 1);
  return (
    <Panel title="چه زمانی دوباره خرید می‌کنند؟" description="توزیع فاصله اولین خرید مشاهده‌شده تا خرید دوم">
      <div className="grid h-44 grid-cols-6 items-end gap-1.5 border-b border-[var(--loyalty-line)] pt-5">
        {result.intervalDistribution.map((bucket) => <div key={bucket.id} className="flex h-full min-w-0 flex-col items-center justify-end gap-1"><span className="text-[9px] font-semibold text-[var(--loyalty-green)]">{formatPersianPercent(bucket.share)}</span><div className="w-full rounded-t bg-[var(--loyalty-green)]" style={{ height: `${Math.max(4, (bucket.share / max) * 105)}px` }} title={`${bucket.count} مشتری`} /><span className="min-h-7 text-center text-[9px] leading-3 text-[var(--loyalty-subtle)]">{bucket.label}</span></div>)}
      </div>
      <div className="grid grid-cols-3 gap-2 text-center text-xs">
        <div className="rounded-md bg-[var(--loyalty-blue-soft)] p-2"><span className="block text-[10px] text-[var(--loyalty-subtle)]">چارک اول</span><strong>{formatPersianNumber(result.intervalStats.p25, { maximumFractionDigits: 1 })} روز</strong></div>
        <div className="rounded-md bg-[var(--loyalty-green-soft)] p-2"><span className="block text-[10px] text-[var(--loyalty-subtle)]">میانه</span><strong>{formatPersianNumber(result.intervalStats.median, { maximumFractionDigits: 1 })} روز</strong></div>
        <div className="rounded-md bg-[var(--loyalty-amber-soft)] p-2"><span className="block text-[10px] text-[var(--loyalty-subtle)]">چارک سوم</span><strong>{formatPersianNumber(result.intervalStats.p75, { maximumFractionDigits: 1 })} روز</strong></div>
      </div>
    </Panel>
  );
}

function SegmentValue({ result }: { result: BuyerLoyaltyResult }) {
  const colors: Record<LoyaltySegment["id"], string> = { new: "bg-[var(--loyalty-blue)]", single: "bg-[var(--loyalty-amber)]", "active-returning": "bg-[var(--loyalty-green)]", loyal: "bg-[#6d4bc3]", "low-activity": "bg-[var(--loyalty-rose)]" };
  return (
    <Panel className="xl:col-span-2" title="ترکیب مشتریان و ارزش هر گروه" description="گروه‌ها غیرهم‌پوشان‌اند؛ سهم مشتری با سهم مبلغ فروش کنار هم مقایسه شده است">
      <div className="flex flex-col gap-2.5">
        {result.segments.map((segment) => <div key={segment.id} className="grid gap-1.5 rounded-md border border-[var(--loyalty-line)] p-2 sm:grid-cols-[9rem_minmax(0,1fr)] sm:items-center"><div><div className="flex items-center gap-1.5"><span className={cn("size-2.5 rounded-sm", colors[segment.id])} /><strong className="text-xs text-[var(--loyalty-ink)]">{segment.label}</strong></div><p className="mt-0.5 text-[9px] leading-4 text-[var(--loyalty-subtle)]">{segment.definition}</p></div><div className="grid grid-cols-[2.8rem_minmax(0,1fr)_3rem] items-center gap-x-2 gap-y-1 text-[10px]"><span className="text-[var(--loyalty-subtle)]">مشتری</span><div className="h-2 rounded bg-[var(--loyalty-wash)]"><div className={cn("h-full rounded", colors[segment.id])} style={{ width: `${segment.share}%` }} /></div><strong>{formatPersianPercent(segment.share)}</strong><span className="text-[var(--loyalty-subtle)]">مبلغ</span><div className="h-2 rounded bg-[var(--loyalty-wash)]"><div className={cn("h-full rounded opacity-70", colors[segment.id])} style={{ width: `${segment.amountShare}%` }} /></div><strong>{formatPersianPercent(segment.amountShare)}</strong></div></div>)}
      </div>
    </Panel>
  );
}

function formatTomanParts(irr: number) {
  const toman = irr / 10;
  if (toman <= 0) return { value: "۰", unit: "تومان" };
  if (toman >= 1_000_000) {
    return {
      value: formatPersianNumber(toman / 1_000_000, { maximumFractionDigits: 1 }),
      unit: "میلیون تومان",
    };
  }
  if (toman >= 1_000) {
    return {
      value: formatPersianNumber(toman / 1_000, { maximumFractionDigits: 0 }),
      unit: "هزار تومان",
    };
  }
  return {
    value: formatPersianNumber(toman, { maximumFractionDigits: 0 }),
    unit: "تومان",
  };
}

function PurchaseValue({ result }: { result: BuyerLoyaltyResult }) {
  const first = result.valueComparison.firstPurchaseAverage;
  const repeat = result.valueComparison.repeatPurchaseAverage;
  const max = Math.max(first, repeat, 1);
  const hasData = first > 0 || repeat > 0;
  const deltaPercent = first > 0 && repeat > 0 ? ((repeat - first) / first) * 100 : null;
  const rising = deltaPercent !== null && deltaPercent >= 0;
  const columns = [
    {
      id: "first",
      label: "خرید اول",
      hint: "اولین خرید مشاهده‌شده",
      value: first,
      fill: "linear-gradient(180deg, #5b82f0 0%, #2457d6 72%, #1b3f9e 100%)",
      glow: "0 10px 24px color-mix(in oklab, var(--loyalty-blue) 28%, transparent)",
    },
    {
      id: "repeat",
      label: "خرید بعدی",
      hint: "خرید دوم و بعدی",
      value: repeat,
      fill: "linear-gradient(180deg, #3dbe96 0%, #11966f 72%, #0b6d51 100%)",
      glow: "0 10px 24px color-mix(in oklab, var(--loyalty-green) 28%, transparent)",
    },
  ] as const;

  return (
    <Panel
      className="h-full min-h-0"
      title="ارزش خرید اول و خریدهای بعدی"
      description="متوسط مبلغ تراکنش موفق؛ نمایش به تومان"
    >
      {!hasData ? (
        <div className="flex min-h-44 flex-1 items-center justify-center rounded-lg bg-[var(--loyalty-wash)] px-3 text-center text-xs text-[var(--loyalty-subtle)]">
          برای این پذیرنده میانگین مبلغ خرید قابل‌محاسبه نیست.
        </div>
      ) : (
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <div
            className="relative flex min-h-52 flex-1 items-end justify-center gap-3 overflow-hidden rounded-xl border border-[var(--loyalty-line)] px-3 pb-3 pt-10 sm:gap-5"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 110%, color-mix(in oklab, var(--loyalty-green) 10%, transparent), transparent 55%), radial-gradient(90% 70% at 15% 0%, color-mix(in oklab, var(--loyalty-blue) 12%, transparent), transparent 50%), var(--loyalty-wash)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 bottom-10 top-8 rounded-lg border border-dashed border-[var(--loyalty-line)]/80"
            />
            {columns.map((column) => {
              const parts = formatTomanParts(column.value);
              const height = column.value > 0 ? Math.max(18, (column.value / max) * 100) : 8;
              return (
                <div key={column.id} className="relative z-[1] flex h-full w-full max-w-[7rem] flex-col items-center">
                  <div className="mb-2 text-center">
                    <p className="text-lg font-extrabold leading-none tracking-tight text-[var(--loyalty-ink)] sm:text-xl">
                      {parts.value}
                    </p>
                    <p className="mt-1 text-[10px] text-[var(--loyalty-subtle)]">{parts.unit}</p>
                  </div>
                  <div className="flex w-full flex-1 items-end justify-center">
                    <div
                      className={cn(
                        "w-[72%] max-w-16 rounded-t-2xl transition-[height] duration-500 ease-out",
                        column.value === 0 && "border border-dashed border-[var(--loyalty-line)] bg-white/50 shadow-none",
                      )}
                      style={
                        column.value > 0
                          ? { height: `${height}%`, background: column.fill, boxShadow: column.glow }
                          : { height: `${height}%` }
                      }
                      title={column.hint}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-[11px] font-bold text-[var(--loyalty-ink)]">{column.label}</p>
                    <p className="text-[9px] leading-4 text-[var(--loyalty-subtle)]">{column.hint}</p>
                  </div>
                </div>
              );
            })}
            {deltaPercent !== null ? (
              <div className="absolute left-1/2 top-3 z-[2] flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/80 bg-white px-2.5 py-1 shadow-[0_8px_20px_rgba(25,25,26,0.08)]">
                {rising ? (
                  <TrendingUpIcon className="size-3.5 text-[var(--loyalty-green)]" aria-hidden />
                ) : (
                  <TrendingDownIcon className="size-3.5 text-[var(--loyalty-rose)]" aria-hidden />
                )}
                <span
                  className={cn(
                    "text-[11px] font-extrabold",
                    rising ? "text-[var(--loyalty-green)]" : "text-[var(--loyalty-rose)]",
                  )}
                >
                  {rising ? "+" : "−"}
                  {formatPersianPercent(Math.abs(deltaPercent))}
                </span>
              </div>
            ) : repeat === 0 ? (
              <div className="absolute left-1/2 top-3 z-[2] -translate-x-1/2 rounded-full border border-[var(--loyalty-line)] bg-white px-2.5 py-1 text-[10px] font-semibold text-[var(--loyalty-subtle)] shadow-sm">
                بدون خرید تکراری
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="rounded-md bg-[var(--loyalty-blue-soft)] px-2 py-2">
              <span className="block text-[9px] text-[var(--loyalty-subtle)]">سهم مبلغ خریدهای بعدی</span>
              <strong className="text-sm text-[var(--loyalty-ink)]">
                {formatPersianPercent(result.valueComparison.repeatAmountShare)}
              </strong>
            </div>
            <div
              className={cn(
                "rounded-md px-2 py-2",
                deltaPercent === null
                  ? "bg-[var(--loyalty-wash)]"
                  : rising
                    ? "bg-[var(--loyalty-green-soft)]"
                    : "bg-[var(--loyalty-rose-soft)]",
              )}
            >
              <span className="block text-[9px] text-[var(--loyalty-subtle)]">نسبت به خرید اول</span>
              <strong className="text-sm text-[var(--loyalty-ink)]">
                {deltaPercent === null
                  ? "—"
                  : `${rising ? "+" : "−"}${formatPersianPercent(Math.abs(deltaPercent))}`}
              </strong>
            </div>
          </div>
        </div>
      )}
    </Panel>
  );
}

function Methodology({ result }: { result: BuyerLoyaltyResult }) {
  return (
    <details className={cn(panel, "group p-2.5 text-xs text-[var(--loyalty-subtle)]")}>
      <summary className="flex cursor-pointer list-none items-center gap-2 font-semibold text-[var(--loyalty-ink)]"><InfoIcon className="size-4 text-[var(--loyalty-blue)]" /> چگونه محاسبه شد؟</summary>
      <div className="mt-3 grid gap-2 border-t border-[var(--loyalty-line)] pt-3 sm:grid-cols-2 lg:grid-cols-4">
        <p><strong className="block text-[var(--loyalty-ink)]">شناسه مشتری</strong>هر payer_card_key به‌عنوان یک مشتری قابل‌شناسایی و فقط در همان پذیرنده شمرده شده است.</p>
        <p><strong className="block text-[var(--loyalty-ink)]">خرید</strong>فقط ردیف‌های try_status = Verified.</p>
        <p><strong className="block text-[var(--loyalty-ink)]">مخرج ۳۰روزه</strong>{formatPersianNumber(result.retentionCurve.find((item) => item.horizon === 30)?.eligible ?? 0)} مشتری واجد شرایط؛ {formatPersianNumber(result.methodology.excludedFrom30DayRetention)} مشتری نابالغ حذف شدند.</p>
        <p><strong className="block text-[var(--loyalty-ink)]">نسخه داده</strong>{BUYER_LOYALTY_INDEX.source.sha256.slice(0, 8)} · نخستین خرید یعنی نخستین خرید مشاهده‌شده در فایل.</p>
      </div>
    </details>
  );
}

function Loading() {
  return <div className="grid gap-2.5"><div className="grid grid-cols-2 gap-2 xl:grid-cols-5">{Array.from({ length: 5 }, (_, index) => <Skeleton key={index} className="h-28" />)}</div><div className="grid gap-2.5 lg:grid-cols-2"><Skeleton className="h-72" /><Skeleton className="h-72" /></div></div>;
}

export function BuyerLoyaltyDashboard() {
  const [merchantId, setMerchantId] = useState(BUYER_LOYALTY_INDEX.merchants[0].id);
  const [result, setResult] = useState<BuyerLoyaltyResult | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(buyerLoyaltyMerchantDataUrl(merchantId), { signal: controller.signal }).then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json() as Promise<BuyerLoyaltyResult>;
    }).then(setResult).catch((reason: unknown) => {
      if (reason instanceof DOMException && reason.name === "AbortError") return;
      setError(true);
    });
    return () => controller.abort();
  }, [merchantId]);

  const { action: liveAction, status: liveStatus } = useLiveAiAction({
    key: merchantId,
    enabled: Boolean(result && result.merchant.id === merchantId && result.eligible),
    fallback: result?.insight.ruleAction ?? "",
    stream: ({ signal, onText }) =>
      streamBuyerLoyaltyAction({ result: result!, signal, onText }),
  });

  function changeMerchant(value: string | null) {
    if (!value) return;
    setResult(null);
    setError(false);
    setMerchantId(value);
  }

  return (
    <div className="flex flex-col gap-2.5 text-[var(--loyalty-ink)]" style={theme}>
      <Header merchantId={merchantId} onMerchantChange={changeMerchant} />
      {!result ? error ? <div className={cn(panel, "flex min-h-48 items-center justify-center p-4 text-sm text-[var(--loyalty-rose)]")}>داده وفاداری این پذیرنده بارگذاری نشد.</div> : <Loading /> : <>
        <Kpis result={result} />
        <section className="grid gap-2.5 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)]">
          <AiInsight
            layout="stack"
            className="min-h-72"
            headline={result.insight.headline}
            detail={result.insight.bullets[0]}
            action={liveAction}
            status={result.eligible ? liveStatus : "error"}
            loadingLabel="در حال تحلیل الگوی بازگشت…"
          />
          <RetentionChart result={result} />
        </section>
        <section className="grid gap-2.5 xl:grid-cols-3"><CohortHeatmap result={result} /><IntervalDistribution result={result} /><SegmentValue result={result} /><PurchaseValue result={result} /></section>
        <Methodology result={result} />
        <p className="flex items-start justify-center gap-2 px-2 text-center text-[10px] leading-5 text-[var(--loyalty-subtle)] sm:text-xs"><ShieldCheckIcon className="mt-0.5 size-3.5 shrink-0 text-[var(--loyalty-green)]" />در این داشبورد هر payer_card_key یک مشتری قابل‌شناسایی در نظر گرفته شده و داده فقط رفتار مشاهده‌شده از دی ۱۴۰۴ تا تیر ۱۴۰۵ را پوشش می‌دهد.</p>
      </>}
    </div>
  );
}
