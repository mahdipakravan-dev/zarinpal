import type { CSSProperties, ReactNode } from "react";
import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowUpRightIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ClockIcon,
  CreditCardIcon,
  InfoIcon,
  LightbulbIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StarIcon,
  StoreIcon,
  TargetIcon,
  TrendingUpIcon,
  UserCheckIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import {
  BEHAVIOR_SEGMENTS,
  BUYER_LOYALTY_METRICS,
  COHORT_HEADERS,
  INTERVAL_BENCHMARKS,
  INTERVAL_DISTRIBUTION,
  LIFECYCLE_STAGES,
  OCCASION_TREND_LABELS,
  OCCASION_TREND_SERIES,
  RETENTION_COHORT_ROWS,
  REVENUE_SEGMENTS,
  SECOND_PURCHASE_LABELS,
  SECOND_PURCHASE_SERIES,
  type BehaviorSegment,
  type LifecycleStage,
  type LineSeries,
  type LoyaltyMetricIcon,
  type LoyaltyTone,
} from "@/lib/buyer-loyalty-mock-data";
import { formatPersianNumber, formatPersianPercent } from "@/lib/format";
import { cn } from "@/lib/utils";

const loyaltyTheme = {
  "--loyalty-ink": "#17213f",
  "--loyalty-subtle": "#69748e",
  "--loyalty-line": "#dfe6f2",
  "--loyalty-wash": "#f7f9fc",
  "--loyalty-navy": "#151d48",
  "--loyalty-navy-2": "#1d275c",
  "--loyalty-teal": "#119a7c",
  "--loyalty-teal-soft": "#dff6ee",
  "--loyalty-teal-line": "#b9eadb",
  "--loyalty-teal-wash": "#f0fbf7",
  "--loyalty-mint": "#6ac89e",
  "--loyalty-mint-soft": "#e7f8ef",
  "--loyalty-mint-line": "#c7ecd8",
  "--loyalty-sky": "#2f6fe8",
  "--loyalty-sky-soft": "#eaf2ff",
  "--loyalty-sky-line": "#c8d9fb",
  "--loyalty-violet": "#7a5cff",
  "--loyalty-violet-alpha": "color-mix(in oklch, #7a5cff 58%, transparent)",
  "--loyalty-violet-soft": "#efeaff",
  "--loyalty-violet-line": "#d8ccff",
  "--loyalty-amber": "#f79a2e",
  "--loyalty-amber-alpha": "color-mix(in oklch, #f79a2e 78%, transparent)",
  "--loyalty-amber-soft": "#fff3e4",
  "--loyalty-amber-line": "#ffd8a8",
  "--loyalty-rose": "#ee6868",
  "--loyalty-rose-soft": "#ffeded",
  "--loyalty-rose-line": "#ffc9c9",
  "--loyalty-sky-alpha": "color-mix(in oklch, #2f6fe8 68%, transparent)",
  "--loyalty-mint-alpha": "color-mix(in oklch, #6ac89e 68%, transparent)",
  "--loyalty-teal-alpha": "color-mix(in oklch, #119a7c 18%, transparent)",
  "--loyalty-muted-line": "#96a3ba",
} as CSSProperties;

const panelClass =
  "rounded-lg border border-[var(--loyalty-line)] bg-card shadow-[0_14px_40px_rgba(23,33,63,0.06)]";

const toneStyles: Record<
  LoyaltyTone,
  {
    bg: string;
    border: string;
    soft: string;
    stroke: string;
    text: string;
    wash: string;
  }
> = {
  amber: {
    bg: "bg-[var(--loyalty-amber)]",
    border: "border-[var(--loyalty-amber-line)]",
    soft: "bg-[var(--loyalty-amber-soft)]",
    stroke: "stroke-[var(--loyalty-amber)]",
    text: "text-[var(--loyalty-amber)]",
    wash: "bg-[var(--loyalty-amber-soft)]",
  },
  mint: {
    bg: "bg-[var(--loyalty-mint)]",
    border: "border-[var(--loyalty-mint-line)]",
    soft: "bg-[var(--loyalty-mint-soft)]",
    stroke: "stroke-[var(--loyalty-mint)]",
    text: "text-[var(--loyalty-mint)]",
    wash: "bg-[var(--loyalty-mint-soft)]",
  },
  navy: {
    bg: "bg-[var(--loyalty-navy)]",
    border: "border-[var(--loyalty-line)]",
    soft: "bg-[var(--loyalty-wash)]",
    stroke: "stroke-[var(--loyalty-navy)]",
    text: "text-[var(--loyalty-navy)]",
    wash: "bg-[var(--loyalty-wash)]",
  },
  rose: {
    bg: "bg-[var(--loyalty-rose)]",
    border: "border-[var(--loyalty-rose-line)]",
    soft: "bg-[var(--loyalty-rose-soft)]",
    stroke: "stroke-[var(--loyalty-rose)]",
    text: "text-[var(--loyalty-rose)]",
    wash: "bg-[var(--loyalty-rose-soft)]",
  },
  sky: {
    bg: "bg-[var(--loyalty-sky)]",
    border: "border-[var(--loyalty-sky-line)]",
    soft: "bg-[var(--loyalty-sky-soft)]",
    stroke: "stroke-[var(--loyalty-sky)]",
    text: "text-[var(--loyalty-sky)]",
    wash: "bg-[var(--loyalty-sky-soft)]",
  },
  teal: {
    bg: "bg-[var(--loyalty-teal)]",
    border: "border-[var(--loyalty-teal-line)]",
    soft: "bg-[var(--loyalty-teal-soft)]",
    stroke: "stroke-[var(--loyalty-teal)]",
    text: "text-[var(--loyalty-teal)]",
    wash: "bg-[var(--loyalty-teal-wash)]",
  },
  violet: {
    bg: "bg-[var(--loyalty-violet)]",
    border: "border-[var(--loyalty-violet-line)]",
    soft: "bg-[var(--loyalty-violet-soft)]",
    stroke: "stroke-[var(--loyalty-violet)]",
    text: "text-[var(--loyalty-violet)]",
    wash: "bg-[var(--loyalty-violet-soft)]",
  },
};

const metricIconMap: Record<LoyaltyMetricIcon, LucideIcon> = {
  card: CreditCardIcon,
  cart: ShoppingCartIcon,
  repeat: RepeatIcon,
  trend: TrendingUpIcon,
  users: UsersIcon,
};

const lifecycleIconMap: Record<string, LucideIcon> = {
  fresh: UserCheckIcon,
  loyal: StarIcon,
  risk: AlertTriangleIcon,
  single: ShoppingCartIcon,
};

const behaviorArcs = BEHAVIOR_SEGMENTS.reduce<
  Array<BehaviorSegment & { offset: number }>
>((items, segment) => {
  const offset = items.reduce((sum, item) => sum + item.share, 0);

  return [...items, { ...segment, offset }];
}, []);

function formatChartPercent(value: number): string {
  return formatPersianPercent(value);
}

function Panel({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn(panelClass, "flex min-h-72 flex-col gap-4 p-4", className)}>
      <header className="flex flex-col gap-1">
        <h2 className="text-base font-bold text-[var(--loyalty-ink)]">{title}</h2>
        {description ? (
          <p className="text-xs leading-5 text-[var(--loyalty-subtle)]">
            {description}
          </p>
        ) : null}
      </header>
      {children}
    </article>
  );
}

function ToolbarButton({
  icon: Icon,
  eyebrow,
  value,
  ariaLabel,
}: {
  icon: LucideIcon;
  eyebrow: string;
  value: string;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="flex min-h-14 min-w-56 items-center justify-between gap-4 rounded-lg border border-[var(--loyalty-line)] bg-card px-4 py-2 text-start shadow-[0_8px_24px_rgba(23,33,63,0.04)] transition-colors hover:bg-[var(--loyalty-wash)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 motion-reduce:transition-none"
    >
      <span className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-md border border-[var(--loyalty-line)] bg-[var(--loyalty-wash)] text-[var(--loyalty-navy)]">
          <Icon aria-hidden="true" />
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-[11px] text-[var(--loyalty-subtle)]">{eyebrow}</span>
          <span className="text-xs font-medium text-[var(--loyalty-ink)]">{value}</span>
        </span>
      </span>
      <ChevronDownIcon className="text-[var(--loyalty-subtle)]" aria-hidden="true" />
    </button>
  );
}

function BuyerLoyaltyHeader({ className }: { className?: string }) {
  return (
    <header className={cn("flex flex-col gap-4", className)}>
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[var(--loyalty-navy)] text-white shadow-[0_14px_30px_rgba(21,29,72,0.25)]">
          <UsersIcon aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <h1 className="text-2xl font-extrabold tracking-tight text-[var(--loyalty-ink)]">
            رفتار و وفاداری خریداران
          </h1>
          <p className="text-sm text-[var(--loyalty-subtle)]">
            تحلیل رفتار کارت‌ها بر اساس خریدهای قابل شناسایی
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <ToolbarButton
          icon={CalendarDaysIcon}
          eyebrow="بازه زمانی"
          value="۱ فروردین ۱۴۰۳ تا ۳۱ خرداد ۱۴۰۳"
          ariaLabel="انتخاب بازه زمانی تحلیل وفاداری"
        />
        <ToolbarButton
          icon={StoreIcon}
          eyebrow="پذیرنده"
          value="انتخاب پذیرنده"
          ariaLabel="انتخاب پذیرنده برای تحلیل وفاداری"
        />
      </div>
    </header>
  );
}

function MetricCard({ metric }: { metric: (typeof BUYER_LOYALTY_METRICS)[number] }) {
  const Icon = metricIconMap[metric.icon];
  const styles = toneStyles[metric.tone];

  return (
    <article className={cn(panelClass, "flex min-h-24 items-start justify-between gap-3 p-3")}>
      <div className="flex min-w-0 flex-col gap-2">
        <h2 className="text-[11px] font-semibold leading-5 text-[var(--loyalty-ink)]">{metric.label}</h2>
        <p className={cn("text-[1.65rem] font-extrabold leading-none tracking-tight", styles.text)}>
          {metric.value}
        </p>
        <p className="text-xs text-[var(--loyalty-subtle)]">{metric.caption}</p>
      </div>
      <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-lg border", styles.border, styles.soft, styles.text)}>
        <Icon aria-hidden="true" />
      </div>
    </article>
  );
}

function MetricStrip({ className }: { className?: string }) {
  return (
    <section
      aria-label="شاخص‌های خلاصه وفاداری"
      className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5", className)}
    >
      {BUYER_LOYALTY_METRICS.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}

function TargetIllustration() {
  return (
    <div className="relative flex min-h-20 flex-1 items-end justify-end overflow-hidden rounded-lg border border-white/10 bg-white/5 px-4 pb-3">
      <div className="absolute bottom-3 right-5 flex items-end gap-1.5" aria-hidden="true">
        <span className="h-7 w-3 rounded-t-sm bg-[var(--loyalty-violet-alpha)]" />
        <span className="h-12 w-3 rounded-t-sm bg-[var(--loyalty-sky-alpha)]" />
        <span className="h-8 w-3 rounded-t-sm bg-[var(--loyalty-mint-alpha)]" />
      </div>
      <div className="absolute bottom-5 left-5 size-20 rounded-full border-[10px] border-[var(--loyalty-teal)] bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.25)]" aria-hidden="true">
        <div className="absolute inset-3 rounded-full border-[8px] border-[var(--loyalty-violet)]" />
        <div className="absolute inset-[1.95rem] rounded-full bg-[var(--loyalty-navy)]" />
        <ArrowUpRightIcon className="absolute -top-5 left-8 text-white drop-shadow" aria-hidden="true" />
      </div>
      <div className="absolute bottom-4 left-28 flex items-end gap-1" aria-hidden="true">
        <span className="h-10 w-7 rounded-t-md bg-[var(--loyalty-amber-alpha)]" />
        <span className="h-14 w-8 rounded-t-md bg-[var(--loyalty-violet-alpha)]" />
      </div>
    </div>
  );
}

function InsightActionPanel({ className }: { className?: string }) {
  return (
    <aside
      aria-labelledby="buyer-loyalty-insight-heading"
      className={cn(
        "flex min-h-64 flex-col gap-3 rounded-lg bg-[var(--loyalty-navy)] p-4 text-white shadow-[0_20px_50px_rgba(21,29,72,0.28)]",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-white/10 text-[var(--loyalty-amber)]">
          <LightbulbIcon aria-hidden="true" />
        </div>
        <h2 id="buyer-loyalty-insight-heading" className="text-base font-bold">
          بینش کلیدی
        </h2>
      </div>

      <p className="text-sm leading-6 text-white/85">
        ۱۴٪ کارت‌های اولین‌بار مشاهده‌شده در فروردین طی ۳۰ روز خرید دیگری
        انجام دادند. این عدد برای همتایان شما ۲۱٪ است.
      </p>
      <p className="text-sm leading-6 text-white/75">
        با رسیدن به میانه هم‌صنف‌ها، حدود ۱۸۰ خرید تکراری بیشتر در یک cohort
        مشابه قابل انتظار است.
      </p>

      <div className="mt-auto grid gap-3 border-t border-white/10 pt-3 lg:grid-cols-[1fr_7rem]">
        <div className="flex gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--loyalty-teal-alpha)] text-[var(--loyalty-mint)]">
            <TargetIcon aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-[var(--loyalty-mint)]">اقدام پیشنهادی</h3>
            <p className="text-sm leading-6 text-white/82">
              پیشنهاد خرید دوم را در فاصله زمانی اجرا کنید که مشتریان وفادار
              فعلی معمولاً بازمی‌گردند.
            </p>
          </div>
        </div>
        <TargetIllustration />
      </div>
    </aside>
  );
}

function MethodNote() {
  return (
    <p className="flex items-start justify-center gap-2 rounded-lg bg-[var(--loyalty-wash)] px-4 py-3 text-center text-xs leading-5 text-[var(--loyalty-subtle)]">
      <InfoIcon className="mt-0.5 shrink-0 text-[var(--loyalty-navy)]" aria-hidden="true" />
      <span>
        تمام محاسبات بر اساس payer_card_key و در سطح این پذیرنده انجام شده است.
      </span>
    </p>
  );
}

function BehaviorDonutCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="تقسیم‌بندی کارت‌ها بر اساس رفتار"
      description="سهم کارت‌های مشاهده‌شده در هر وضعیت رفتاری"
    >
      <figure className="grid flex-1 items-center gap-4 md:grid-cols-[11rem_1fr]">
        <figcaption className="sr-only">
          توزیع کارت‌های یکتا بر اساس رفتار خرید و بازگشت.
        </figcaption>
        <div className="relative mx-auto flex size-44 items-center justify-center">
          <svg
            viewBox="0 0 120 120"
            className="size-full -rotate-90 motion-reduce:rotate-0"
            aria-hidden="true"
          >
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              className="stroke-[var(--loyalty-line)]"
              strokeWidth="15"
            />
            {behaviorArcs.map((segment) => (
              <circle
                key={segment.label}
                cx="60"
                cy="60"
                r="45"
                fill="none"
                pathLength={100}
                className={toneStyles[segment.tone].stroke}
                strokeWidth="15"
                strokeDasharray={`${segment.share} ${100 - segment.share}`}
                strokeDashoffset={-segment.offset}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-2xl font-extrabold text-[var(--loyalty-ink)]">
              ۳۹۶,۳۶۵
            </span>
            <span className="text-xs text-[var(--loyalty-subtle)]">کارت یکتا</span>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          {BEHAVIOR_SEGMENTS.map((segment) => (
            <li key={segment.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-2 text-xs">
              <span className={cn("size-3 rounded-sm", toneStyles[segment.tone].bg)} aria-hidden="true" />
              <span className="text-[var(--loyalty-ink)]">{segment.label}</span>
              <span className="tabular-nums text-[var(--loyalty-subtle)]">
                {formatChartPercent(segment.share)}
              </span>
            </li>
          ))}
        </ul>
      </figure>
      <p className="rounded-md bg-[var(--loyalty-wash)] px-3 py-2 text-xs text-[var(--loyalty-subtle)]">
        در معرض ریزش: آخرین خرید ۶۰ تا ۹۰ روز قبل و هنوز خرید جدیدی انجام نشده
        است.
      </p>
    </Panel>
  );
}

function buildChartPoints(values: number[], labels: string[], max: number) {
  const width = 460;
  const height = 190;
  const top = 20;
  const left = 44;
  const xStep = width / Math.max(labels.length - 1, 1);

  return values.map((value, index) => ({
    label: labels[index] ?? "",
    value,
    x: left + index * xStep,
    y: top + height - (value / max) * height,
  }));
}

function TrendChart({
  labels,
  max,
  series,
  title,
}: {
  labels: string[];
  max: number;
  series: LineSeries[];
  title: string;
}) {
  const chartSeries = series.map((item) => ({
    ...item,
    points: buildChartPoints(item.values, labels, max),
  }));

  return (
    <figure className="flex flex-1 flex-col gap-3">
      <figcaption className="sr-only">{title}</figcaption>
      <div className="flex justify-center gap-6 text-xs text-[var(--loyalty-subtle)]">
        {series.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <span
              className={cn(
                "h-0.5 w-8 rounded-full",
                item.tone === "muted"
                  ? "bg-[var(--loyalty-muted-line)]"
                  : item.tone === "teal"
                    ? "bg-[var(--loyalty-teal)]"
                    : "bg-[var(--loyalty-navy)]"
              )}
              aria-hidden="true"
            />
            {item.label}
          </span>
        ))}
      </div>
      <svg viewBox="0 0 560 250" className="min-h-48 w-full" role="img" aria-label={title}>
        <g aria-hidden="true">
          {[0, 10, 20, 30, 40].map((tick) => {
            const y = 210 - (tick / max) * 190;

            return (
              <g key={tick}>
                <line x1="44" x2="520" y1={y} y2={y} className="stroke-[var(--loyalty-line)]" strokeWidth="1" />
                <text x="22" y={y + 4} textAnchor="middle" className="fill-[var(--loyalty-subtle)] text-[10px]">
                  {formatChartPercent(tick)}
                </text>
              </g>
            );
          })}
          <line x1="44" x2="520" y1="210" y2="210" className="stroke-[var(--loyalty-line)]" strokeWidth="1.5" />
          {labels.map((label, index) => {
            const x = 44 + index * (460 / Math.max(labels.length - 1, 1));

            return (
              <text key={label} x={x} y="235" textAnchor="middle" className="fill-[var(--loyalty-subtle)] text-[11px]">
                {label}
              </text>
            );
          })}
        </g>

        {chartSeries.map((item) => {
          const lineTone =
            item.tone === "muted"
              ? "stroke-[var(--loyalty-muted-line)]"
              : item.tone === "teal"
                ? "stroke-[var(--loyalty-teal)]"
                : "stroke-[var(--loyalty-navy)]";
          const textTone =
            item.tone === "muted"
              ? "fill-[var(--loyalty-muted-line)]"
              : item.tone === "teal"
                ? "fill-[var(--loyalty-teal)]"
                : "fill-[var(--loyalty-navy)]";

          return (
            <g key={item.label}>
              <polyline
                points={item.points.map((point) => `${point.x},${point.y}`).join(" ")}
                fill="none"
                className={lineTone}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={item.tone === "muted" ? "7 8" : undefined}
              />
              {item.points.map((point) => (
                <g key={`${item.label}-${point.label}`}>
                  <circle cx={point.x} cy={point.y} r="5" className={cn("fill-card", lineTone)} strokeWidth="3" />
                  <text
                    x={point.x}
                    y={point.y - 12}
                    textAnchor="middle"
                    className={cn("text-[11px] font-semibold", textTone)}
                  >
                    {formatChartPercent(point.value)}
                  </text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}

function SecondPurchaseCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="نرخ خرید دوم یا بعدی در بازه‌های زمانی"
      description="از بین کارت‌های اولین‌بار مشاهده‌شده"
    >
      <TrendChart
        labels={SECOND_PURCHASE_LABELS}
        max={40}
        series={SECOND_PURCHASE_SERIES}
        title="نمودار نرخ خرید دوم یا بعدی در روزهای ۷، ۳۰، ۶۰ و ۹۰"
      />
    </Panel>
  );
}

function PurchaseIntervalCard({ className }: { className?: string }) {
  const maxValue = Math.max(...INTERVAL_BENCHMARKS.map((item) => item.value));

  return (
    <Panel
      className={className}
      title="میانه فاصله بین خریدهای متوالی"
      description="برای کارت‌های بازگشتی"
    >
      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-4xl font-extrabold text-[var(--loyalty-ink)]">۲۸</p>
            <p className="text-sm text-[var(--loyalty-subtle)]">روز</p>
          </div>
          <div className="flex size-12 items-center justify-center rounded-lg border border-[var(--loyalty-teal-line)] bg-[var(--loyalty-teal-soft)] text-[var(--loyalty-teal)]">
            <CalendarDaysIcon aria-hidden="true" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {INTERVAL_BENCHMARKS.map((item) => (
            <div key={item.label} className="grid grid-cols-[5.25rem_1fr_3rem] items-center gap-3 text-xs">
              <span className="text-[var(--loyalty-subtle)]">{item.label}</span>
              <span className="h-2 overflow-hidden rounded-full bg-[var(--loyalty-wash)]">
                <span
                  className={cn("block h-full rounded-full", toneStyles[item.tone].bg)}
                  style={{ width: `${(item.value / maxValue) * 100}%` }}
                />
              </span>
              <span className="font-semibold text-[var(--loyalty-ink)]">
                {formatPersianNumber(item.value)} روز
              </span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function cohortCellStyle(value: number): CSSProperties {
  const mix = Math.min(34 + value * 1.8, 78);

  return {
    backgroundColor: `color-mix(in oklch, var(--loyalty-violet) ${mix}%, white)`,
    color: value >= 20 ? "white" : "var(--loyalty-ink)",
  };
}

function RetentionCohortCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="Retention Cohort بر اساس ماه ماه اولین مشاهده"
      description="درصد کارت‌هایی که در بازه زمانی، خرید تکراری داشته‌اند"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[28rem] border-separate border-spacing-0 text-center text-xs">
          <caption className="sr-only">
            جدول cohort نگهداشت کارت‌ها بر اساس ماه اولین مشاهده و بازگشت در روزهای ۷،
            ۳۰، ۶۰ و ۹۰.
          </caption>
          <thead>
            <tr>
              <th scope="col" className="p-2 text-start font-medium text-[var(--loyalty-subtle)]">
                ماه اول مشاهده
              </th>
              {COHORT_HEADERS.map((header) => (
                <th key={header} scope="col" className="p-2 font-medium text-[var(--loyalty-subtle)]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RETENTION_COHORT_ROWS.map((row) => (
              <tr key={row.month}>
                <th scope="row" className="border-t border-[var(--loyalty-line)] p-2 text-start font-medium text-[var(--loyalty-ink)]">
                  {row.month}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.month}-${COHORT_HEADERS[index]}`}
                    className="border-t border-white p-2 font-bold tabular-nums"
                    style={value === null ? undefined : cohortCellStyle(value)}
                  >
                    {value === null ? "–" : formatChartPercent(value)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="flex items-start gap-2 rounded-md bg-[var(--loyalty-wash)] px-3 py-2 text-xs text-[var(--loyalty-subtle)]">
        <InfoIcon className="mt-0.5 shrink-0 text-[var(--loyalty-navy)]" aria-hidden="true" />
        سطرهای اخیر به دلیل right-censoring فرصت کامل برای ۹۰ روز ندارند.
      </p>
    </Panel>
  );
}

function AmountComparisonCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="مقایسه مبلغ خرید اول و خریدهای بعدی"
      description="میانگین مبلغ خرید"
    >
      <div className="grid flex-1 items-center gap-4">
        <div className="rounded-md bg-[var(--loyalty-wash)] p-4 text-center">
          <p className="text-xs text-[var(--loyalty-subtle)]">خرید اول</p>
          <p className="mt-2 text-xl font-extrabold text-[var(--loyalty-navy)]">
            ۷۸۲,۰۰۰
          </p>
        </div>
        <div className="mx-auto flex size-24 flex-col items-center justify-center rounded-full border-2 border-[var(--loyalty-teal)] bg-card shadow-[0_8px_30px_rgba(17,154,124,0.12)]">
          <span className="text-2xl font-extrabold text-[var(--loyalty-navy)]">+۷۱٪</span>
          <span className="text-[11px] text-[var(--loyalty-subtle)]">بیشتر</span>
        </div>
        <div className="rounded-md bg-[var(--loyalty-amber-soft)] p-4 text-center">
          <p className="text-xs text-[var(--loyalty-subtle)]">خریدهای بعدی</p>
          <p className="mt-2 text-xl font-extrabold text-[var(--loyalty-amber)]">
            ۱,۳۴۰,۰۰۰
          </p>
        </div>
      </div>
      <p className="text-center text-xs leading-5 text-[var(--loyalty-subtle)]">
        افزایش متوسط مبلغ در خریدهای بعدی نسبت به خرید اول
      </p>
    </Panel>
  );
}

function IntervalDistributionCard({ className }: { className?: string }) {
  const maxValue = Math.max(...INTERVAL_DISTRIBUTION.map((bucket) => bucket.value));

  return (
    <Panel
      className={className}
      title="توزیع فاصله بین خریدهای متوالی (روز)"
      description="برای کارت‌های بازگشتی"
    >
        <div className="grid flex-1 items-stretch gap-5 min-[1800px]:grid-cols-[1fr_8rem]">
        <figure className="flex min-h-56 flex-col justify-end">
          <figcaption className="sr-only">
            توزیع فاصله بین خریدهای متوالی برای کارت‌های بازگشتی.
          </figcaption>
          <div className="flex h-52 items-end justify-between gap-3 border-b border-[var(--loyalty-line)] px-3">
            {INTERVAL_DISTRIBUTION.map((bucket) => (
              <div key={bucket.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-[var(--loyalty-ink)]">
                  {formatChartPercent(bucket.value)}
                </span>
                <span
                  className="w-full max-w-9 rounded-t-md bg-[linear-gradient(180deg,var(--loyalty-mint),var(--loyalty-teal))]"
                  style={{ height: `${Math.max((bucket.value / maxValue) * 135, 12)}px` }}
                  aria-hidden="true"
                />
                <span className="text-[11px] text-[var(--loyalty-subtle)]">{bucket.label}</span>
              </div>
            ))}
          </div>
        </figure>
        <div className="flex flex-col justify-center rounded-md border border-[var(--loyalty-teal-line)] bg-[var(--loyalty-teal-soft)] p-4 text-center">
          <ClockIcon className="mx-auto text-[var(--loyalty-teal)]" aria-hidden="true" />
          <p className="mt-3 text-sm font-bold text-[var(--loyalty-teal)]">
            بازه رایج بازگشت
          </p>
          <p className="mt-2 text-2xl font-extrabold text-[var(--loyalty-navy)]">
            ۱۵ تا ۴۵ روز
          </p>
          <p className="mt-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
            خریدهای پرتکرار بعدی معمولاً در این محدوده رخ می‌دهد.
          </p>
        </div>
      </div>
    </Panel>
  );
}

function RevenueSegmentCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="درآمد مشاهده‌شده هر بخش"
      description="سهم از فروش"
    >
      <div className="flex flex-1 flex-col justify-center gap-3">
        {REVENUE_SEGMENTS.map((segment) => (
          <div
            key={segment.label}
            className={cn(
              "grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-md border p-3 text-xs",
              toneStyles[segment.tone].border,
              toneStyles[segment.tone].wash
            )}
          >
            <span className={cn("flex size-9 items-center justify-center rounded-md", toneStyles[segment.tone].soft, toneStyles[segment.tone].text)}>
              <TargetIcon aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-semibold text-[var(--loyalty-ink)]">{segment.label}</span>
              <span className="block text-[var(--loyalty-subtle)]">{segment.amount}</span>
            </span>
            <span className={cn("font-extrabold tabular-nums", toneStyles[segment.tone].text)}>
              {formatChartPercent(segment.share)}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function OccasionReturnTrendCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="تغییر سهم کارت‌های بازگشتی در مناسبت‌ها"
      description="سهم خریدهای بازگشتی از کل فروش"
    >
      <TrendChart
        labels={OCCASION_TREND_LABELS}
        max={50}
        series={OCCASION_TREND_SERIES}
        title="نمودار تغییر سهم کارت‌های بازگشتی در روزهای قبل و بعد از مناسبت"
      />
    </Panel>
  );
}

function LifecycleStageItem({
  index,
  stage,
}: {
  index: number;
  stage: LifecycleStage;
}) {
  const Icon = lifecycleIconMap[stage.id] ?? CreditCardIcon;

  return (
    <li className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="rounded-lg border border-[var(--loyalty-line)] bg-card p-4 shadow-[0_10px_30px_rgba(23,33,63,0.05)]">
        <div className="flex items-start gap-3">
          <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-full", toneStyles[stage.tone].soft, toneStyles[stage.tone].text)}>
            <Icon aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="font-bold text-[var(--loyalty-ink)]">{stage.title}</h3>
            <p className="mt-2 text-sm font-semibold text-[var(--loyalty-ink)]">{stage.cards}</p>
            <p className="text-sm text-[var(--loyalty-subtle)]">{stage.share}</p>
            <p className="mt-2 text-xs text-[var(--loyalty-subtle)]">{stage.description}</p>
          </div>
        </div>
      </div>
      {index < LIFECYCLE_STAGES.length - 1 ? (
        <ArrowLeftIcon
          className="hidden text-[var(--loyalty-navy)] min-[1800px]:block"
          aria-hidden="true"
        />
      ) : null}
    </li>
  );
}

function LifecycleRail() {
  return (
    <section
      aria-labelledby="buyer-lifecycle-heading"
      className={cn(panelClass, "p-4")}
    >
      <h2 id="buyer-lifecycle-heading" className="text-center text-base font-bold text-[var(--loyalty-ink)]">
        چرخه عمر کارت در بازه
      </h2>
      <ol className="mt-4 grid gap-3 lg:grid-cols-2 min-[1800px]:grid-cols-[repeat(4,minmax(0,1fr))]">
        {LIFECYCLE_STAGES.map((stage, index) => (
          <LifecycleStageItem key={stage.id} index={index} stage={stage} />
        ))}
      </ol>
    </section>
  );
}

function ImportantNote() {
  return (
    <aside className={cn(panelClass, "flex min-h-40 items-center gap-5 p-5")}>
      <div className="flex size-16 shrink-0 items-center justify-center rounded-lg bg-[var(--loyalty-teal-soft)] text-[var(--loyalty-teal)]">
        <ShieldCheckIcon aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-bold text-[var(--loyalty-teal)]">نکته مهم</h2>
        <p className="text-sm leading-7 text-[var(--loyalty-subtle)]">
          به دلیل محدودیت شش‌ماهه داده، این نتایج نشان‌دهنده انحراف عملکرد در
          بازه نسبت به baseline مورد انتظار هستند، نه اثبات اثر قطعی با رابطه
          علّی.
        </p>
      </div>
    </aside>
  );
}

export function BuyerLoyaltyDashboard() {
  return (
    <div
      className="flex flex-col gap-4 text-[var(--loyalty-ink)]"
      style={loyaltyTheme}
    >
      <section className="grid gap-4 xl:grid-cols-[minmax(19rem,24rem)_minmax(0,1fr)]">
        <BuyerLoyaltyHeader className="xl:col-start-2" />
        <InsightActionPanel className="xl:col-start-1 xl:row-span-2 xl:row-start-1" />
        <MetricStrip className="xl:col-start-2" />
      </section>

      <MethodNote />

      <section
        aria-label="تحلیل نگهداشت و فاصله خرید"
        className="grid grid-cols-1 gap-4 xl:grid-cols-12"
      >
        <RetentionCohortCard className="xl:col-span-4" />
        <PurchaseIntervalCard className="xl:col-span-2" />
        <SecondPurchaseCard className="xl:col-span-3" />
        <BehaviorDonutCard className="xl:col-span-3" />
      </section>

      <section
        aria-label="رفتار خرید بعدی و درآمد هر بخش"
        className="grid grid-cols-1 gap-4 xl:grid-cols-12"
      >
        <OccasionReturnTrendCard className="xl:col-span-3" />
        <RevenueSegmentCard className="xl:col-span-3" />
        <IntervalDistributionCard className="xl:col-span-3" />
        <AmountComparisonCard className="xl:col-span-3" />
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(22rem,31rem)_minmax(0,1fr)]">
        <ImportantNote />
        <LifecycleRail />
      </section>
    </div>
  );
}
