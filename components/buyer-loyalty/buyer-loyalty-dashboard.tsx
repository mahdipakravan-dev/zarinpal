import { useState, type CSSProperties, type ReactNode } from "react";
import {
  CalendarDaysIcon,
  CreditCardIcon,
  InfoIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StoreIcon,
  TrendingUpIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";

import {
  BEHAVIOR_SEGMENTS,
  BUYER_LOYALTY_METRICS,
  COHORT_HEADERS,
  RETENTION_COHORT_ROWS,
  SECOND_PURCHASE_LABELS,
  SECOND_PURCHASE_SERIES,
  type BehaviorSegment,
  type LineSeries,
  type LoyaltyMetricIcon,
  type LoyaltyTone,
} from "@/lib/buyer-loyalty-mock-data";
import { formatPersianPercent } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const loyaltyTheme = {
  "--loyalty-ink": "#17191d",
  "--loyalty-subtle": "#68707d",
  "--loyalty-line": "#e6e8ec",
  "--loyalty-wash": "#f7f8fa",
  "--loyalty-navy": "#171f4a",
  "--loyalty-navy-2": "#1e3f85",
  "--loyalty-teal": "#0f9a84",
  "--loyalty-teal-soft": "#f1f7f5",
  "--loyalty-teal-line": "#d6e6e1",
  "--loyalty-teal-wash": "#f7faf9",
  "--loyalty-mint": "#6ac89e",
  "--loyalty-mint-soft": "#f2f7f4",
  "--loyalty-mint-line": "#dae7df",
  "--loyalty-sky": "#2f6fe8",
  "--loyalty-sky-soft": "#f2f5fb",
  "--loyalty-sky-line": "#d7deeb",
  "--loyalty-violet": "#174fd6",
  "--loyalty-violet-alpha": "color-mix(in oklch, #174fd6 58%, transparent)",
  "--loyalty-violet-soft": "#f2f5fb",
  "--loyalty-violet-line": "#d7deeb",
  "--loyalty-amber": "#e8892d",
  "--loyalty-amber-alpha": "color-mix(in oklch, #e8892d 78%, transparent)",
  "--loyalty-amber-soft": "#fbf7f0",
  "--loyalty-amber-line": "#eadfce",
  "--loyalty-rose": "#e25555",
  "--loyalty-rose-soft": "#f6f8fc",
  "--loyalty-rose-line": "#e4e9f3",
  "--loyalty-sky-alpha": "color-mix(in oklch, #2f6fe8 68%, transparent)",
  "--loyalty-mint-alpha": "color-mix(in oklch, #6ac89e 68%, transparent)",
  "--loyalty-teal-alpha": "color-mix(in oklch, #0f9a84 18%, transparent)",
  "--loyalty-muted-line": "#96a3ba",
  "--loyalty-yellow": "#ffd60a",
} as CSSProperties;

const panelClass =
  "rail-panel rail-panel-interactive [--rail-accent:var(--loyalty-violet)] [--rail-line:var(--loyalty-line)]";

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
    border: "border-[var(--loyalty-line)]",
    soft: "bg-[var(--loyalty-wash)]",
    stroke: "stroke-[var(--loyalty-rose)]",
    text: "text-[var(--loyalty-rose)]",
    wash: "bg-[var(--loyalty-wash)]",
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

const primaryMetricIds = new Set([
  "verified-purchases",
  "observed-cards",
  "returning-rate",
]);

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
    <article className={cn(panelClass, "flex flex-col gap-2.5 p-2.5 sm:p-3", className)}>
      <header className="flex flex-col gap-0.5">
        <h2 className="text-sm font-bold text-[var(--loyalty-ink)] sm:text-base">{title}</h2>
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

function BuyerLoyaltyHeader() {
  const [merchantId, setMerchantId] = useState("merchant");
  const [periodId, setPeriodId] = useState("period");

  return (
    <header className="flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--loyalty-yellow)] text-[var(--loyalty-ink)] sm:size-11">
          <UsersIcon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-lg font-extrabold tracking-tight text-[var(--loyalty-ink)] sm:text-xl">
            رفتار و وفاداری خریداران
          </h1>
          <p className="text-xs text-[var(--loyalty-subtle)] sm:text-sm">
            تحلیل رفتار کارت‌ها بر اساس خریدهای قابل شناسایی
          </p>
        </div>
      </div>

      <div className="grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 md:w-auto md:min-w-[18rem]">
        <div className="min-w-0 sm:min-w-36">
          <Select
            value={merchantId}
            onValueChange={(value) => value && setMerchantId(value)}
          >
            <SelectTrigger
              className="h-10 w-full border-[var(--loyalty-line)] bg-card [&>svg:last-child]:text-[var(--loyalty-violet)]"
              aria-label="انتخاب پذیرنده برای تحلیل وفاداری"
            >
              <StoreIcon
                className="size-4 text-[var(--loyalty-violet)]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--loyalty-ink)]">
                پذیرنده
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="merchant">پذیرنده</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-0 sm:min-w-36">
          <Select
            value={periodId}
            onValueChange={(value) => value && setPeriodId(value)}
          >
            <SelectTrigger
              className="h-10 w-full border-[var(--loyalty-line)] bg-card [&>svg:last-child]:text-[var(--loyalty-violet)]"
              aria-label="انتخاب بازه زمانی تحلیل وفاداری"
            >
              <CalendarDaysIcon
                className="size-4 text-[var(--loyalty-violet)]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--loyalty-ink)]">
                بازه
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="period">بازه</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}

function MetricCard({ metric }: { metric: (typeof BUYER_LOYALTY_METRICS)[number] }) {
  const Icon = metricIconMap[metric.icon];
  const styles = toneStyles[metric.tone];

  return (
    <article className={cn(panelClass, "flex items-start justify-between gap-2 p-2.5")}>
      <div className="flex min-w-0 flex-col gap-1">
        <h2 className="text-[11px] font-semibold leading-4 text-[var(--loyalty-ink)]">{metric.label}</h2>
        <p className={cn("text-lg font-extrabold leading-none tracking-tight sm:text-xl", styles.text)}>
          {metric.value}
        </p>
        <p className="text-[11px] text-[var(--loyalty-subtle)]">{metric.caption}</p>
      </div>
      <div className={cn("flex size-8 shrink-0 items-center justify-center rounded-md border", styles.border, styles.text)}>
        <Icon className="size-3.5" aria-hidden="true" />
      </div>
    </article>
  );
}

function MetricStrip() {
  const metrics = BUYER_LOYALTY_METRICS.filter((metric) =>
    primaryMetricIds.has(metric.id)
  );

  return (
    <section
      aria-label="شاخص‌های خلاصه وفاداری"
      className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2.5"
    >
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </section>
  );
}

function BehaviorDonutCard({ className }: { className?: string }) {
  return (
    <Panel
      className={className}
      title="تقسیم‌بندی کارت‌ها بر اساس رفتار"
      description="سهم کارت‌های مشاهده‌شده در هر وضعیت رفتاری"
    >
      <figure className="grid flex-1 items-center gap-2.5">
        <figcaption className="sr-only">
          توزیع کارت‌های یکتا بر اساس رفتار خرید و بازگشت.
        </figcaption>
        <div className="relative mx-auto flex size-36 items-center justify-center">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
            <span className="text-lg font-extrabold leading-none tracking-tight tabular-nums text-[var(--loyalty-ink)] sm:text-xl">
              ۳۹۶,۳۶۵
            </span>
            <span className="mt-1 text-[11px] text-[var(--loyalty-subtle)]">
              کارت یکتا
            </span>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 xl:grid-cols-1">
          {BEHAVIOR_SEGMENTS.map((segment) => (
            <li key={segment.label} className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 text-xs">
              <span className={cn("size-3 rounded-sm", toneStyles[segment.tone].bg)} aria-hidden="true" />
              <span className="min-w-0 truncate text-[var(--loyalty-ink)]">{segment.label}</span>
              <span className="tabular-nums text-[var(--loyalty-subtle)]">
                {formatChartPercent(segment.share)}
              </span>
            </li>
          ))}
        </ul>
      </figure>
      <p className="border-s-2 border-[var(--loyalty-line)] ps-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
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
  compact = false,
  max,
  series,
  title,
}: {
  labels: string[];
  compact?: boolean;
  max: number;
  series: LineSeries[];
  title: string;
}) {
  const chartSeries = series.map((item) => ({
    ...item,
    points: buildChartPoints(item.values, labels, max),
  }));

  return (
    <figure className={cn("flex flex-col gap-2.5", !compact && "flex-1")}>
      <figcaption className="sr-only">{title}</figcaption>
      <div className="flex justify-center gap-4 text-xs text-[var(--loyalty-subtle)]">
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
      <svg
        viewBox="0 0 560 250"
        className={cn("h-auto w-full", compact ? "max-h-40" : "min-h-40 sm:min-h-48")}
        role="img"
        aria-label={title}
      >
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
      title="Retention Cohort بر اساس ماه اولین مشاهده"
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
      <p className="flex items-start gap-2 border-s-2 border-[var(--loyalty-line)] ps-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
        <InfoIcon className="mt-0.5 shrink-0 text-[var(--loyalty-navy)]" aria-hidden="true" />
        سطرهای اخیر به دلیل right-censoring فرصت کامل برای ۹۰ روز ندارند.
      </p>
    </Panel>
  );
}

function DataScopeNote() {
  return (
    <p className="flex items-start gap-2 px-1 text-[11px] leading-5 text-[var(--loyalty-subtle)] sm:text-xs">
      <ShieldCheckIcon
        className="mt-0.5 size-3.5 shrink-0 text-[var(--loyalty-violet)]"
        aria-hidden="true"
      />
      <span>
        محدودیت شش‌ماهه داده و محاسبه روی payer_card_key یعنی نتایج انحراف
        عملکرد نسبت به baseline هستند، نه اثبات اثر علّی.
      </span>
    </p>
  );
}

export function BuyerLoyaltyDashboard() {
  return (
    <div
      className="flex flex-col gap-2 text-[var(--loyalty-ink)]"
      style={loyaltyTheme}
    >
      <BuyerLoyaltyHeader />
      <MetricStrip />

      <section
        aria-label="تحلیل نگهداشت و فاصله خرید"
        className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-12"
      >
        <RetentionCohortCard className="xl:col-span-5" />
        <SecondPurchaseCard className="xl:col-span-4" />
        <BehaviorDonutCard className="xl:col-span-3" />
      </section>

      <DataScopeNote />
    </div>
  );
}
