import { useState, type CSSProperties, type ReactNode } from "react";
import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  "--loyalty-yellow-soft": "#fff6bf",
  "--loyalty-yellow-strong": "#d4ad00",
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

const behaviorArcs = BEHAVIOR_SEGMENTS.reduce<
  Array<BehaviorSegment & { offset: number }>
>((items, segment) => {
  const offset = items.reduce((sum, item) => sum + item.share, 0);

  return [...items, { ...segment, offset }];
}, []);

type DateRange = {
  start: Date;
  end?: Date;
};

const calendarWeekdays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const calendarMonthFormatter = new Intl.DateTimeFormat(
  "fa-IR-u-ca-gregory",
  { month: "long", year: "numeric" }
);
const calendarDayFormatter = new Intl.NumberFormat("fa-IR");
const compactDateFormatter = new Intl.DateTimeFormat(
  "fa-IR-u-ca-gregory",
  { day: "numeric", month: "short" }
);
const fullDateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-gregory", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function createDefaultDateRange(): DateRange {
  const end = startOfDay(new Date());
  const start = new Date(end);
  start.setMonth(start.getMonth() - 6);

  return { start, end };
}

function isSameDate(first: Date, second?: Date): boolean {
  return Boolean(
    second &&
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
  );
}

function monthCells(month: Date): Array<Date | null> {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const leadingBlanks = (new Date(year, monthIndex, 1).getDay() + 1) % 7;
  const cells: Array<Date | null> = Array.from(
    { length: leadingBlanks },
    () => null
  );

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, monthIndex, day));
  }

  return cells;
}

function shiftMonth(month: Date, offset: number): Date {
  return new Date(month.getFullYear(), month.getMonth() + offset, 1);
}

function DateRangePicker() {
  const [open, setOpen] = useState(false);
  const [appliedRange, setAppliedRange] = useState<DateRange>(() =>
    createDefaultDateRange()
  );
  const [draftRange, setDraftRange] = useState<DateRange>(() =>
    createDefaultDateRange()
  );
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(createDefaultDateRange().end ?? new Date())
  );
  const cells = monthCells(visibleMonth);
  const appliedLabel = appliedRange.end
    ? `${compactDateFormatter.format(appliedRange.start)} – ${compactDateFormatter.format(appliedRange.end)}`
    : compactDateFormatter.format(appliedRange.start);
  const selectionLabel = draftRange.end
    ? `از ${fullDateFormatter.format(draftRange.start)} تا ${fullDateFormatter.format(draftRange.end)}`
    : `تاریخ شروع: ${fullDateFormatter.format(draftRange.start)}؛ تاریخ پایان را انتخاب کنید`;

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (nextOpen) {
      setDraftRange(appliedRange);
      setVisibleMonth(new Date(appliedRange.end ?? appliedRange.start));
    }
  };

  const handleDateSelection = (date: Date) => {
    if (draftRange.end) {
      setDraftRange({ start: date });
      return;
    }

    if (date < draftRange.start) {
      setDraftRange({ start: date, end: draftRange.start });
      return;
    }

    setDraftRange({ start: draftRange.start, end: date });
  };

  const handleCancel = () => {
    setDraftRange(appliedRange);
    setOpen(false);
  };

  const handleApply = () => {
    if (!draftRange.end) return;
    setAppliedRange(draftRange);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger
        render={
          <Button
            variant="outline"
            size="sm"
            className="h-9 w-full min-w-0 justify-between"
            aria-label={`انتخاب بازه زمانی؛ بازه فعلی ${appliedLabel}`}
          />
        }
      >
        <span className="flex min-w-0 items-center gap-1.5">
          <CalendarDaysIcon data-icon="inline-start" aria-hidden="true" />
          <span className="truncate text-xs font-extrabold">{appliedLabel}</span>
        </span>
        <ChevronDownIcon data-icon="inline-end" aria-hidden="true" />
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-[min(21rem,calc(100vw-1.5rem))] gap-3 p-3"
        style={
          {
            ...loyaltyTheme,
            "--primary": "var(--loyalty-yellow)",
            "--primary-foreground": "var(--loyalty-ink)",
          } as CSSProperties
        }
      >
        <PopoverTitle className="sr-only">انتخاب بازه زمانی</PopoverTitle>
        <PopoverDescription className="sr-only">
          ابتدا تاریخ شروع و سپس تاریخ پایان را از تقویم انتخاب کنید.
        </PopoverDescription>

        <div className="flex items-center justify-between gap-3">
          <p className="font-bold text-[var(--loyalty-ink)]">
            {calendarMonthFormatter.format(visibleMonth)}
          </p>
          <div className="flex items-center gap-1" dir="ltr">
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setVisibleMonth((month) => shiftMonth(month, -1))}
            >
              <ChevronLeftIcon aria-hidden="true" />
              <span className="sr-only">ماه قبل</span>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              onClick={() => setVisibleMonth((month) => shiftMonth(month, 1))}
            >
              <ChevronRightIcon aria-hidden="true" />
              <span className="sr-only">ماه بعد</span>
            </Button>
          </div>
        </div>

        <div
          className="grid grid-cols-7 gap-y-1 text-center"
          role="group"
          aria-label={calendarMonthFormatter.format(visibleMonth)}
        >
          {calendarWeekdays.map((weekday) => (
            <span
              key={weekday}
              className="flex h-8 items-center justify-center text-xs font-semibold text-[var(--loyalty-subtle)]"
              aria-hidden="true"
            >
              {weekday}
            </span>
          ))}
          {cells.map((date, index) => {
            if (!date) {
              return (
                <span
                  key={`blank-${index}`}
                  className="size-9"
                  aria-hidden="true"
                />
              );
            }

            const isStart = isSameDate(date, draftRange.start);
            const isEnd = isSameDate(date, draftRange.end);

            return (
              <button
                key={date.toISOString()}
                type="button"
                className={cn(
                  "mx-auto flex size-9 cursor-pointer items-center justify-center rounded-full border border-transparent text-sm font-medium text-[var(--loyalty-ink)] outline-none transition-[background-color,border-color,transform] duration-150 ease-out hover:bg-[var(--loyalty-yellow-soft)] focus-visible:ring-2 focus-visible:ring-[var(--loyalty-yellow-strong)] focus-visible:ring-offset-2 active:scale-95 motion-reduce:transition-none",
                  isStart &&
                    "border-[var(--loyalty-yellow)] bg-[var(--loyalty-yellow)] font-extrabold",
                  isEnd &&
                    !isStart &&
                    "border-[var(--loyalty-yellow-strong)] bg-card font-extrabold"
                )}
                onClick={() => handleDateSelection(date)}
                aria-label={fullDateFormatter.format(date)}
                aria-pressed={isStart || isEnd}
              >
                {calendarDayFormatter.format(date.getDate())}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--loyalty-line)] pt-3">
          <p
            className="min-h-5 text-xs leading-5 text-[var(--loyalty-subtle)]"
            role="status"
            aria-live="polite"
          >
            {selectionLabel}
          </p>
          <div className="flex items-center justify-end gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={handleCancel}>
              انصراف
            </Button>
            <Button
              type="button"
              size="sm"
              disabled={!draftRange.end}
              onClick={handleApply}
            >
              اعمال بازه
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

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
    <article
      className={cn(
        panelClass,
        "flex h-full min-h-0 flex-col gap-2 p-2.5 sm:gap-2.5 sm:p-3",
        className
      )}
    >
      <header className="flex shrink-0 flex-col gap-0.5">
        <h2 className="text-sm font-bold text-[var(--loyalty-ink)] sm:text-base">
          {title}
        </h2>
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
  const [merchantId, setMerchantId] = useState("main-store");

  return (
    <header className="flex shrink-0 flex-col gap-3 border-b border-[var(--loyalty-line)] pb-3 md:flex-row md:items-center md:justify-between">
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

      <div className="grid w-full shrink-0 grid-cols-2 gap-2 md:w-auto md:min-w-[21rem]">
        <div className="min-w-0 md:min-w-40">
          <Select
            value={merchantId}
            onValueChange={(value) => value && setMerchantId(value)}
          >
            <SelectTrigger
              className="h-9 w-full border-[var(--loyalty-line)] bg-card [&>svg:last-child]:text-[var(--loyalty-violet)]"
              aria-label="انتخاب پذیرنده برای تحلیل وفاداری"
            >
              <StoreIcon
                className="text-[var(--loyalty-violet)]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--loyalty-ink)]">
                فروشگاه اصلی
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="main-store">فروشگاه اصلی</SelectItem>
                <SelectItem value="all-stores">همه پذیرنده‌ها</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="min-w-0 md:min-w-40">
          <DateRangePicker />
        </div>
      </div>
    </header>
  );
}

function MetricCard({ metric }: { metric: (typeof BUYER_LOYALTY_METRICS)[number] }) {
  const Icon = metricIconMap[metric.icon];
  const styles = toneStyles[metric.tone];

  return (
    <article className={cn(panelClass, "flex h-full min-h-28 flex-col justify-between gap-2.5 p-3")}>
      <div className="flex min-w-0 items-start justify-between gap-2">
        <h2 className="text-xs font-semibold leading-4 text-[var(--loyalty-ink)]">
          {metric.label}
        </h2>
        <div
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-md border",
            styles.border,
            styles.soft,
            styles.text
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-1">
        <p className={cn("text-xl font-extrabold leading-none tracking-tight sm:text-2xl", styles.text)}>
          {metric.value}
        </p>
        <p className="text-[10px] text-[var(--loyalty-subtle)]">
          {metric.caption}
        </p>
      </div>
    </article>
  );
}

function MetricStrip() {
  return (
    <section
      aria-label="شاخص‌های خلاصه وفاداری"
      className="grid shrink-0 grid-cols-2 gap-2 lg:grid-cols-5"
    >
      {BUYER_LOYALTY_METRICS.map((metric, index) => (
        <div
          key={metric.id}
          className={cn(index === BUYER_LOYALTY_METRICS.length - 1 && "col-span-2 lg:col-span-1")}
        >
          <MetricCard metric={metric} />
        </div>
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
      <figure className="flex min-h-0 flex-1 flex-col justify-center gap-3">
        <figcaption className="sr-only">
          توزیع کارت‌های یکتا بر اساس رفتار خرید و بازگشت.
        </figcaption>
        <div className="relative mx-auto flex size-44 items-center justify-center sm:size-52">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <span className="text-xl font-extrabold leading-none tracking-tight tabular-nums text-[var(--loyalty-ink)] sm:text-2xl">
              ۳۹۶,۳۶۵
            </span>
            <span className="mt-1.5 text-xs text-[var(--loyalty-subtle)]">
              کارت یکتا
            </span>
          </div>
        </div>
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
          {BEHAVIOR_SEGMENTS.map((segment) => (
            <li
              key={segment.label}
              className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-md border border-[var(--loyalty-line)] bg-[var(--loyalty-wash)] px-2.5 py-2 text-xs"
            >
              <span
                className={cn("size-3 rounded-sm", toneStyles[segment.tone].bg)}
                aria-hidden="true"
              />
              <span className="min-w-0 truncate text-[var(--loyalty-ink)]">
                {segment.label}
              </span>
              <span className="tabular-nums font-semibold text-[var(--loyalty-subtle)]">
                {formatChartPercent(segment.share)}
              </span>
            </li>
          ))}
        </ul>
      </figure>
      <p className="shrink-0 border-s-2 border-[var(--loyalty-line)] ps-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
        در معرض ریزش: آخرین خرید ۶۰ تا ۹۰ روز قبل و هنوز خرید جدیدی انجام نشده
        است.
      </p>
    </Panel>
  );
}

function buildChartPoints(values: number[], labels: string[], max: number) {
  const width = 460;
  const height = 240;
  const top = 22;
  const left = 40;
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
  const plotBottom = 262;
  const viewHeight = 290;

  return (
    <figure className="flex min-h-0 flex-1 flex-col justify-center gap-2">
      <figcaption className="sr-only">{title}</figcaption>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[var(--loyalty-subtle)]">
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
        viewBox={`0 0 520 ${viewHeight}`}
        className="h-auto min-h-[15rem] w-full flex-1"
        role="img"
        aria-label={title}
      >
        <g aria-hidden="true">
          {[0, 10, 20, 30, 40].map((tick) => {
            const y = plotBottom - (tick / max) * 240;

            return (
              <g key={tick}>
                <line
                  x1="40"
                  x2="500"
                  y1={y}
                  y2={y}
                  className="stroke-[var(--loyalty-line)]"
                  strokeWidth="1"
                />
                <text
                  x="20"
                  y={y + 3}
                  textAnchor="middle"
                  className="fill-[var(--loyalty-subtle)] text-[9px]"
                >
                  {formatChartPercent(tick)}
                </text>
              </g>
            );
          })}
          <line
            x1="40"
            x2="500"
            y1={plotBottom}
            y2={plotBottom}
            className="stroke-[var(--loyalty-line)]"
            strokeWidth="1.5"
          />
          {labels.map((label, index) => {
            const x = 40 + index * (460 / Math.max(labels.length - 1, 1));

            return (
              <text
                key={label}
                x={x}
                y={viewHeight - 4}
                textAnchor="middle"
                className="fill-[var(--loyalty-subtle)] text-[10px]"
              >
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
                points={item.points
                  .map((point) => `${point.x},${point.y}`)
                  .join(" ")}
                fill="none"
                className={lineTone}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={item.tone === "muted" ? "6 7" : undefined}
              />
              {item.points.map((point) => (
                <g key={`${item.label}-${point.label}`}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    className={cn("fill-card", lineTone)}
                    strokeWidth="2.5"
                  />
                  <text
                    x={point.x}
                    y={point.y - 8}
                    textAnchor="middle"
                    className={cn("text-[9px] font-semibold", textTone)}
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
      <p className="shrink-0 border-s-2 border-[var(--loyalty-amber)] ps-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
        نرخ بازگشت ۹۰ روزه، ۱۰ واحد درصد پایین‌تر از میانه همتایان است.
      </p>
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
      <div className="flex min-h-0 flex-1 flex-col justify-center overflow-x-auto">
        <table className="w-full min-w-[24rem] border-separate border-spacing-0 text-center text-sm">
          <caption className="sr-only">
            جدول cohort نگهداشت کارت‌ها بر اساس ماه اولین مشاهده و بازگشت در روزهای
            ۷، ۳۰، ۶۰ و ۹۰.
          </caption>
          <thead>
            <tr>
              <th
                scope="col"
                className="px-2 py-2.5 text-start text-xs font-medium text-[var(--loyalty-subtle)]"
              >
                ماه اول مشاهده
              </th>
              {COHORT_HEADERS.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-2 py-2.5 text-xs font-medium text-[var(--loyalty-subtle)]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RETENTION_COHORT_ROWS.map((row) => (
              <tr key={row.month}>
                <th
                  scope="row"
                  className="border-t border-[var(--loyalty-line)] px-2 py-3 text-start text-xs font-medium text-[var(--loyalty-ink)] sm:text-sm"
                >
                  {row.month}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.month}-${COHORT_HEADERS[index]}`}
                    className="border-t border-white px-2 py-3 text-xs font-bold tabular-nums sm:text-sm"
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
      <p className="flex shrink-0 items-start gap-2 border-s-2 border-[var(--loyalty-line)] ps-2 text-xs leading-5 text-[var(--loyalty-subtle)]">
        <InfoIcon
          className="mt-0.5 shrink-0 text-[var(--loyalty-navy)]"
          aria-hidden="true"
        />
        سطرهای اخیر به دلیل right-censoring فرصت کامل برای ۹۰ روز ندارند.
      </p>
    </Panel>
  );
}

function DataScopeNote() {
  return (
    <p className="flex shrink-0 items-start gap-2 px-1 text-[11px] leading-5 text-[var(--loyalty-subtle)] sm:text-xs">
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
      className="flex min-h-0 flex-1 flex-col gap-2.5 text-[var(--loyalty-ink)]"
      style={loyaltyTheme}
    >
      <BuyerLoyaltyHeader />
      <section
        aria-label="نمای کلی و تحلیل وفاداری"
        className="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-2.5 xl:grid-cols-12 xl:items-stretch"
      >
        <div className="flex min-h-0 min-w-0 flex-col gap-2.5 xl:col-span-9">
          <MetricStrip />
          <div className="grid min-h-0 min-w-0 flex-1 grid-cols-1 gap-2.5 lg:grid-cols-9 lg:items-stretch">
            <RetentionCohortCard className="min-h-[22rem] lg:col-span-5" />
            <SecondPurchaseCard className="min-h-[22rem] lg:col-span-4" />
          </div>
        </div>
        <BehaviorDonutCard className="min-h-[22rem] xl:col-span-3" />
      </section>

      <DataScopeNote />
    </div>
  );
}
