"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import {
  ActivityIcon,
  BanIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  ClockIcon,
  CoinsIcon,
  HashIcon,
  InfoIcon,
  LayersIcon,
  LockIcon,
  MedalIcon,
  PercentIcon,
  RefreshCwIcon,
  RulerIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StoreIcon,
  TargetIcon,
  TrendingUpIcon,
  TrophyIcon,
  UsersIcon,
  WalletIcon,
  ZapIcon,
  type LucideIcon,
} from "lucide-react";

import {
  COHORT_ACTIVITY,
  LEADERBOARD,
  PEER_CATEGORIES,
  PEER_CRITERIA,
  PEER_GROUP_STATS,
  PEER_KEY_INSIGHT,
  PEER_KPIS,
  PEER_PERIODS,
  PERCENTILE_BARS,
  RADAR_AXES,
  type PeerCriterion,
  type PeerKpi,
  type PeerMetricIcon,
  type PeerTone,
  type PercentileBar,
} from "@/lib/peer-position-mock-data";
import { formatPersianNumber, toPersianDigits } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

const peerTheme = {
  "--peer-ink": "#1a2148",
  "--peer-subtle": "#6b7590",
  "--peer-line": "#e4e9f3",
  "--peer-wash": "#f6f8fc",
  "--peer-navy": "#171f4a",
  "--peer-violet": "#174fd6",
  "--peer-violet-soft": "#eaf1ff",
  "--peer-violet-line": "#c8d8ff",
  "--peer-teal": "#0f9a84",
  "--peer-teal-soft": "#e7f8f4",
  "--peer-good": "#119a6c",
  "--peer-good-soft": "#e6f7ef",
  "--peer-warn": "#e25555",
  "--peer-warn-soft": "#f6f8fc",
  "--peer-amber": "#e8892d",
  "--peer-yellow": "#ffd60a",
} as CSSProperties;

const panelClass =
  "rail-panel rail-panel-interactive [--rail-accent:var(--peer-violet)] [--rail-line:var(--peer-line)]";

const metricIconMap: Record<PeerMetricIcon, LucideIcon> = {
  wallet: WalletIcon,
  trend: TrendingUpIcon,
  shield: ShieldCheckIcon,
  cart: ShoppingCartIcon,
  users: UsersIcon,
  zap: ZapIcon,
  ban: BanIcon,
  refresh: RefreshCwIcon,
  percent: PercentIcon,
  pulse: ActivityIcon,
};

const criterionIconMap: Record<PeerCriterion["icon"], LucideIcon> = {
  store: StoreIcon,
  ruler: RulerIcon,
  coins: CoinsIcon,
  hash: HashIcon,
  clock: ClockIcon,
  repeat: RefreshCwIcon,
  shield: ShieldCheckIcon,
  layers: LayersIcon,
};

const iconToneClass: Record<PeerTone, string> = {
  good: "bg-[var(--peer-good-soft)] text-[var(--peer-good)]",
  warn: "bg-[var(--peer-wash)] text-[var(--peer-warn)] ring-1 ring-[var(--peer-line)]",
  neutral: "bg-[var(--peer-violet-soft)] text-[var(--peer-violet)]",
};

const percentileTextClass: Record<PeerTone, string> = {
  good: "text-[var(--peer-good)]",
  warn: "text-[var(--peer-warn)]",
  neutral: "text-[var(--peer-violet)]",
};

function Panel({
  title,
  description,
  children,
  className,
  headingId,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingId?: string;
}) {
  return (
    <article className={cn(panelClass, "flex flex-col gap-2.5 p-2.5 sm:p-3", className)}>
      <header className="flex flex-col gap-0.5">
        <h2
          id={headingId}
          className="text-sm font-bold text-[var(--peer-ink)] sm:text-base"
        >
          {title}
        </h2>
        {description ? (
          <p className="text-xs leading-5 text-[var(--peer-subtle)]">{description}</p>
        ) : null}
      </header>
      {children}
    </article>
  );
}

function PeerHeader() {
  const [periodId, setPeriodId] = useState<string>(PEER_PERIODS[0].id);
  const [categoryId, setCategoryId] = useState<string>(PEER_CATEGORIES[0].id);

  function handlePeriodChange(value: string | null) {
    if (value) setPeriodId(value);
  }

  function handleCategoryChange(value: string | null) {
    if (value) setCategoryId(value);
  }

  return (
    <header className="flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--peer-yellow)] text-[var(--peer-ink)] sm:size-11">
          <TrophyIcon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-lg font-extrabold tracking-tight text-[var(--peer-ink)] sm:text-xl">
            جایگاه شما در میان کسب‌وکارهای مشابه
          </h1>
          <p className="text-xs text-[var(--peer-subtle)] sm:text-sm">
            مقایسه با همتایان هم‌پروفایل · حداقل ۱۰ پذیرنده در گروه
          </p>
        </div>
      </div>

      <div className="grid w-full shrink-0 grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5 md:w-auto md:min-w-[18rem]">
        <div className="min-w-0 sm:min-w-36">
          <Select value={periodId} onValueChange={handlePeriodChange}>
            <SelectTrigger
              className="h-10 w-full border-[var(--peer-line)] bg-card [&>svg:last-child]:text-[var(--peer-violet)]"
              aria-label="انتخاب بازه زمانی"
            >
              <CalendarDaysIcon
                className="size-4 text-[var(--peer-violet)]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--peer-ink)]">
                بازه
              </span>
            </SelectTrigger>
            <SelectContent>
              {PEER_PERIODS.map((period) => (
                <SelectItem key={period.id} value={period.id}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0 sm:min-w-36">
          <Select value={categoryId} onValueChange={handleCategoryChange}>
            <SelectTrigger
              className="h-10 w-full border-[var(--peer-line)] bg-card [&>svg:last-child]:text-[var(--peer-violet)]"
              aria-label="انتخاب دسته کسب‌وکار"
            >
              <StoreIcon
                className="size-4 text-[var(--peer-violet)]"
                aria-hidden="true"
              />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--peer-ink)]">
                دسته
              </span>
            </SelectTrigger>
            <SelectContent>
              {PEER_CATEGORIES.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}

function PeerStatsBar() {
  return (
    <section
      aria-label="خلاصه گروه همتا"
      className={cn(
        panelClass,
        "grid grid-cols-1 divide-y divide-[var(--peer-line)] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-[1.1fr_1.1fr_0.9fr_auto] lg:divide-x lg:divide-x-reverse"
      )}
    >
      <div className="flex flex-col gap-0.5 px-2.5 py-2 sm:px-3">
        <span className="text-[11px] text-[var(--peer-subtle)]">
          تعداد همتایان در گروه شما
        </span>
        <span className="text-sm font-bold text-[var(--peer-ink)]">
          {formatPersianNumber(PEER_GROUP_STATS.peerCount)} پذیرنده
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-2.5 py-2 sm:px-3">
        <span className="text-[11px] text-[var(--peer-subtle)]">شما در مقایسه با</span>
        <span className="text-sm font-bold text-[var(--peer-ink)]">
          {formatPersianNumber(PEER_GROUP_STATS.comparedTo)} پذیرنده مشابه
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-2.5 py-2 sm:px-3">
        <span className="text-[11px] text-[var(--peer-subtle)]">روش گروه‌بندی</span>
        <span className="flex items-center gap-2 text-sm font-bold text-[var(--peer-ink)]">
          <span
            className="size-2 rounded-full bg-[var(--peer-violet)]"
            aria-hidden="true"
          />
          {PEER_GROUP_STATS.groupingMethod}
        </span>
      </div>
      <div className="flex items-center px-2.5 py-2 sm:px-3">
        <Button
          variant="outline"
          className="h-9 w-full cursor-pointer gap-2 border-[var(--peer-violet-line)] text-[var(--peer-violet)] hover:bg-[var(--peer-violet-soft)]"
        >
          <UsersIcon aria-hidden="true" />
          مشاهده و ویرایش گروه
          <ChevronDownIcon className="opacity-60" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}

function KeyInsightBanner() {
  return (
    <aside
      aria-labelledby="peer-key-insight-heading"
      className="rail-banner p-2.5 sm:p-3"
    >
      <div className="relative flex flex-col gap-1.5">
        <div className="flex items-center gap-2 text-[var(--peer-teal)]">
          <TargetIcon className="size-3.5" aria-hidden="true" />
          <h2 id="peer-key-insight-heading" className="text-xs font-semibold sm:text-sm">
            بینش کلیدی
          </h2>
        </div>
        <p className="text-sm leading-6 text-white/90">
          {PEER_KEY_INSIGHT.headline}{" "}
          <span className="font-bold text-white">
            صدک {toPersianDigits(PEER_KEY_INSIGHT.growthPercentile)}
          </span>
          {" — "}
          {PEER_KEY_INSIGHT.highlight}{" "}
          <span className="font-medium text-[var(--peer-teal)]">
            {PEER_KEY_INSIGHT.takeaway}
          </span>
        </p>
      </div>
    </aside>
  );
}

function PercentileTrack({ bar }: { bar: PercentileBar }) {
  const markerColor =
    bar.tone === "warn" ? "bg-[var(--peer-amber)]" : "bg-[var(--peer-violet)]";
  const valueColor = percentileTextClass[bar.tone];

  return (
    <figure className="flex min-w-0 flex-col gap-2">
      <figcaption className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-[var(--peer-subtle)]">{bar.label}</span>
        <span className={cn("text-lg font-extrabold tabular-nums", valueColor)}>
          {toPersianDigits(bar.percentile)}
          <span className="sr-only">
            {" "}
            از ۱۰۰؛{" "}
            {bar.tone === "warn" ? "پایین‌تر از میانه گروه" : "بالاتر یا نزدیک میانه گروه"}
          </span>
        </span>
      </figcaption>
      <div
        className="relative h-3 rounded-full bg-[var(--peer-wash)]"
        role="img"
        aria-label={`${bar.label}: صدک ${toPersianDigits(bar.percentile)}، میانه گروه صدک ${toPersianDigits(bar.median)}`}
      >
        <span
          className="absolute inset-y-0 rounded-full bg-[var(--peer-violet-soft)]"
          style={{
            right: `${bar.q1}%`,
            width: `${bar.q3 - bar.q1}%`,
          }}
          aria-hidden="true"
        />
        <span
          className="absolute inset-y-0 w-px border-s border-dashed border-[var(--peer-subtle)]"
          style={{ right: `${bar.median}%` }}
          aria-hidden="true"
        />
        <span
          className={cn(
            "absolute top-1/2 size-3 -translate-y-1/2 rounded-full ring-2 ring-white transition-transform duration-300 motion-reduce:transition-none",
            markerColor
          )}
          style={{ right: `calc(${bar.percentile}% - 6px)` }}
          aria-hidden="true"
        />
      </div>
    </figure>
  );
}

function PercentileSection() {
  return (
    <Panel
      title="جایگاه شما در هر شاخص"
      description="موقعیت شما نسبت به توزیع همتایان (صدک)"
      headingId="peer-percentile-heading"
    >
      <ul
        className="flex flex-wrap items-center justify-center gap-3 text-xs text-[var(--peer-subtle)]"
        aria-label="راهنمای نمودار صدک"
      >
        <li className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[var(--peer-violet)]" aria-hidden="true" />
          صدک شما
        </li>
        <li className="flex items-center gap-2">
          <span
            className="h-3 w-px border-s border-dashed border-[var(--peer-subtle)]"
            aria-hidden="true"
          />
          میانه گروه
        </li>
        <li className="flex items-center gap-2">
          <span
            className="h-2.5 w-6 rounded-sm bg-[var(--peer-violet-soft)]"
            aria-hidden="true"
          />
          بازه میانه ۲۵ تا ۷۵
        </li>
      </ul>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
        {PERCENTILE_BARS.map((bar) => (
          <PercentileTrack key={bar.id} bar={bar} />
        ))}
      </div>
    </Panel>
  );
}

function KpiCard({ kpi }: { kpi: PeerKpi }) {
  const Icon = metricIconMap[kpi.icon];
  const youTone =
    kpi.tone === "warn" ? "text-[var(--peer-warn)]" : "text-[var(--peer-ink)]";

  return (
    <article
      className={cn(
        panelClass,
        "flex flex-col gap-2 p-2.5"
      )}
    >
      <div className="flex items-start gap-2">
        <span
          className={cn(
            "flex size-9 shrink-0 items-center justify-center rounded-lg",
            iconToneClass[kpi.tone === "neutral" ? "neutral" : kpi.tone]
          )}
        >
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <h3 className="text-xs font-semibold leading-5 text-[var(--peer-ink)]">
          {kpi.label}
        </h3>
      </div>

      <dl className="mt-auto flex flex-col gap-2 text-xs">
        <div className="flex items-baseline justify-between gap-2">
          <dt className="text-[var(--peer-subtle)]">شما</dt>
          <dd className={cn("text-sm font-extrabold", youTone)}>{kpi.you}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <dt className="text-[var(--peer-subtle)]">میانه گروه</dt>
          <dd className="font-medium text-[var(--peer-ink)]">{kpi.median}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-2 border-t border-[var(--peer-line)] pt-2">
          <dt className="text-[var(--peer-subtle)]">صدک شما</dt>
          <dd className={cn("font-bold", percentileTextClass[kpi.tone])}>
            {toPersianDigits(kpi.percentile)} از ۱۰۰
            <span className="sr-only">
              {kpi.tone === "warn" ? " — پایین‌تر از میانه" : " — بالاتر از میانه"}
            </span>
          </dd>
        </div>
      </dl>
    </article>
  );
}

function KpiGrid() {
  return (
    <section
      aria-labelledby="peer-kpi-heading"
      className="flex flex-col gap-2.5"
    >
      <header className="flex flex-col gap-0.5">
        <h2 id="peer-kpi-heading" className="text-sm font-bold text-[var(--peer-ink)] sm:text-base">
          مقایسه شاخص‌های کلیدی
        </h2>
        <p className="text-xs text-[var(--peer-subtle)]">
          مقادیر شما و جایگاه صدکی نسبت به گروه همتا
        </p>
      </header>
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-5">
        {PEER_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </div>
    </section>
  );
}

function radarPoint(value: number, index: number, total: number, radius: number) {
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  const r = (value / 10) * radius;
  return {
    x: 140 + Math.cos(angle) * r,
    y: 140 + Math.sin(angle) * r,
  };
}

function polygonPath(values: number[], radius: number) {
  return values
    .map((value, index) => {
      const point = radarPoint(value, index, values.length, radius);
      return `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
    })
    .join(" ")
    .concat(" Z");
}

function RadarChart() {
  const radius = 96;
  const youValues = RADAR_AXES.map((axis) => axis.you);
  const medianValues = RADAR_AXES.map((axis) => axis.median);
  const rings = [0.25, 0.5, 0.75, 1];

  return (
    <Panel
      title="نمای کلی عملکرد"
      description="مقایسه نرمال‌شده شاخص‌ها (۰ بدتر — ۱۰ بهتر)"
      headingId="peer-radar-heading"
    >
      <ul
        className="flex flex-wrap items-center gap-2.5 text-xs text-[var(--peer-subtle)]"
        aria-label="راهنمای نمودار رادار"
      >
        <li className="flex items-center gap-2">
          <span className="h-0.5 w-5 bg-[var(--peer-violet)]" aria-hidden="true" />
          شما
        </li>
        <li className="flex items-center gap-2">
          <span
            className="h-0 w-5 border-t border-dashed border-[var(--peer-teal)]"
            aria-hidden="true"
          />
          میانه گروه
        </li>
      </ul>

      <figure className="mx-auto w-full max-w-md">
        <figcaption className="sr-only">
          نمودار رادار مقایسه شما با میانه گروه در هشت شاخص نرمال‌شده.
          {RADAR_AXES.map(
            (axis) =>
              ` ${axis.label}: شما ${toPersianDigits(axis.you)}، میانه ${toPersianDigits(axis.median)}.`
          ).join("")}
        </figcaption>
        <svg viewBox="0 0 280 280" className="mx-auto h-auto w-full" role="img" aria-hidden="true">
          {rings.map((scale) => (
            <polygon
              key={scale}
              fill="none"
              stroke="var(--peer-line)"
              strokeWidth="1"
              points={RADAR_AXES.map((_, index) => {
                const point = radarPoint(10 * scale, index, RADAR_AXES.length, radius);
                return `${point.x},${point.y}`;
              }).join(" ")}
            />
          ))}
          {RADAR_AXES.map((axis, index) => {
            const tip = radarPoint(10, index, RADAR_AXES.length, radius);
            const label = radarPoint(10, index, RADAR_AXES.length, radius + 22);
            return (
              <g key={axis.id}>
                <line
                  x1={140}
                  y1={140}
                  x2={tip.x}
                  y2={tip.y}
                  stroke="var(--peer-line)"
                  strokeWidth="1"
                />
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-[var(--peer-subtle)] text-[9px]"
                >
                  {axis.label}
                </text>
              </g>
            );
          })}
          <path
            d={polygonPath(medianValues, radius)}
            fill="color-mix(in oklch, var(--peer-teal) 12%, transparent)"
            stroke="var(--peer-teal)"
            strokeWidth="1.75"
            strokeDasharray="4 3"
          />
          <path
            d={polygonPath(youValues, radius)}
            fill="color-mix(in oklch, var(--peer-violet) 16%, transparent)"
            stroke="var(--peer-violet)"
            strokeWidth="2"
          />
          {youValues.map((value, index) => {
            const point = radarPoint(value, index, youValues.length, radius);
            return (
              <circle
                key={`you-${RADAR_AXES[index].id}`}
                cx={point.x}
                cy={point.y}
                r="3.5"
                fill="var(--peer-violet)"
              />
            );
          })}
        </svg>
      </figure>
    </Panel>
  );
}

function CohortCurve() {
  const width = 320;
  const height = 140;
  const paddingX = 12;
  const paddingY = 16;
  const values = COHORT_ACTIVITY.curve;
  const max = Math.max(...values);
  const points = values.map((value, index) => {
    const x =
      paddingX + (index / (values.length - 1)) * (width - paddingX * 2);
    const y =
      height - paddingY - (value / max) * (height - paddingY * 2);
    return { x, y };
  });
  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
    .join(" ");
  const markerIndex = Math.round((COHORT_ACTIVITY.yourPercentile / 100) * (values.length - 1));
  const marker = points[markerIndex] ?? points[points.length - 1];

  return (
    <figure className="flex flex-col gap-2.5">
      <figcaption className="sr-only">
        توزیع پذیرندگان در cohort فعالیتی؛ جایگاه شما صدک{" "}
        {toPersianDigits(COHORT_ACTIVITY.yourPercentile)}.
      </figcaption>
      <div className="flex items-start justify-between gap-2.5">
        <div>
          <p className="text-xs text-[var(--peer-subtle)]">جایگاه شما</p>
          <p className="text-[11px] text-[var(--peer-subtle)]">درصد پذیرندگان</p>
          <p className="mt-1 text-3xl font-extrabold text-[var(--peer-violet)]">
            {toPersianDigits(COHORT_ACTIVITY.yourPercentile)}٪
          </p>
        </div>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-hidden="true"
      >
        <path
          d={path}
          fill="none"
          stroke="var(--peer-violet)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1={marker.x}
          y1={marker.y}
          x2={marker.x}
          y2={height - paddingY}
          stroke="var(--peer-violet)"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx={marker.x} cy={marker.y} r="5" fill="var(--peer-violet)" />
        <text
          x={paddingX}
          y={height - 2}
          className="fill-[var(--peer-subtle)] text-[10px]"
        >
          ۰٪
        </text>
        <text
          x={width / 2}
          y={height - 2}
          textAnchor="middle"
          className="fill-[var(--peer-subtle)] text-[10px]"
        >
          ۵۰٪
        </text>
        <text
          x={width - paddingX}
          y={height - 2}
          textAnchor="end"
          className="fill-[var(--peer-subtle)] text-[10px]"
        >
          ۱۰۰٪
        </text>
      </svg>
      <p className="rounded-lg bg-[var(--peer-wash)] px-2.5 py-2 text-center text-xs text-[var(--peer-subtle)]">
        تعداد پذیرندگان با الگوی زمانی مشابه:{" "}
        <span className="font-semibold text-[var(--peer-ink)]">
          {toPersianDigits(COHORT_ACTIVITY.similarCount)}
        </span>
      </p>
    </figure>
  );
}

function Leaderboard() {
  const medalClass = {
    gold: "text-amber-500",
    silver: "text-slate-400",
    bronze: "text-orange-700",
  } as const;

  return (
    <div className="flex flex-col gap-2.5">
      <div>
        <h3 className="text-sm font-bold text-[var(--peer-ink)]">
          پذیرندگان برتر گروه شما
        </h3>
        <p className="text-xs text-[var(--peer-subtle)]">
          بر اساس ترکیب چند شاخص کلیدی
        </p>
      </div>
      <ol className="flex flex-col gap-2">
        {LEADERBOARD.map((row) => (
          <li
            key={row.id}
            className={cn(
              "flex min-h-11 items-center justify-between gap-2.5 rounded-lg border px-2.5 py-2 text-sm",
              row.isYou
                ? "border-[var(--peer-violet-line)] bg-[var(--peer-violet-soft)]"
                : "border-[var(--peer-line)] bg-card"
            )}
          >
            <div className="flex items-center gap-2">
              {row.medal ? (
                <MedalIcon
                  className={cn("size-4", medalClass[row.medal])}
                  aria-hidden="true"
                />
              ) : (
                <span className="size-4" aria-hidden="true" />
              )}
              <span className="font-medium text-[var(--peer-ink)]">{row.name}</span>
              {row.medal === "gold" ? (
                <span className="text-[10px] text-[var(--peer-subtle)]">صدک کلی</span>
              ) : null}
            </div>
            <span className="font-extrabold tabular-nums text-[var(--peer-ink)]">
              {toPersianDigits(row.score)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function CohortLeaderboardSection() {
  return (
    <Panel
      className="self-start"
      title="مقایسه در Cohort فعالیتی شما"
      description={`ساعت اوج خرید شما: ${COHORT_ACTIVITY.peakHours}`}
      headingId="peer-cohort-heading"
    >
      <div className="grid gap-2.5 md:grid-cols-2">
        <CohortCurve />
        <Leaderboard />
      </div>
    </Panel>
  );
}

function PeerGroupAside() {
  return (
    <aside
      aria-labelledby="peer-group-heading"
      className={cn(
        panelClass,
        "flex h-fit flex-col gap-2.5 p-2.5 sm:p-3 lg:sticky lg:top-4"
      )}
    >
      <header className="flex flex-col gap-1">
        <h2 id="peer-group-heading" className="text-sm font-bold text-[var(--peer-ink)] sm:text-base">
          گروه همتا (Peer Group)
        </h2>
        <p className="text-xs leading-5 text-[var(--peer-subtle)]">
          پذیرندگان با ویژگی‌های مشابه شما
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-0 divide-y divide-[var(--peer-line)] sm:grid-cols-2 sm:gap-2 sm:divide-y-0 lg:grid-cols-1 lg:gap-0 lg:divide-y">
        {PEER_CRITERIA.map((item) => {
          const Icon = criterionIconMap[item.icon];
          return (
            <li
              key={item.id}
              className="flex items-center gap-2 py-2 text-xs text-[var(--peer-ink)] sm:rounded-lg sm:border sm:border-[var(--peer-line)] sm:px-2 sm:py-2 lg:rounded-none lg:border-0 lg:px-0"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[var(--peer-teal-soft)] text-[var(--peer-teal)]">
                <Icon className="size-3.5" aria-hidden="true" />
              </span>
              <span className="leading-5">{item.label}</span>
            </li>
          );
        })}
      </ul>

      <p className="flex items-start gap-2 rounded-lg bg-[var(--peer-violet-soft)] px-2.5 py-2 text-[11px] leading-5 text-[var(--peer-ink)]">
        <LockIcon
          className="mt-0.5 size-3.5 shrink-0 text-[var(--peer-violet)]"
          aria-hidden="true"
        />
        <span>داده‌ها ترکیبی و بدون افشای هویت هستند.</span>
      </p>
    </aside>
  );
}

function Disclaimer() {
  return (
    <p className="flex items-start justify-center gap-2 px-2 text-center text-xs leading-5 text-[var(--peer-subtle)]">
      <InfoIcon className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
      <span>
        اعداد و صدک‌ها بر اساس داده‌های مشاهده‌شده شما و همتایان در بازه انتخابی
        محاسبه شده‌اند و تضمینی برای آینده نیستند.
      </span>
    </p>
  );
}

export function PeerPositionDashboard() {
  return (
    <div className="flex flex-col gap-2.5" style={peerTheme}>
      <PeerHeader />
      <PeerStatsBar />

      <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div className="flex min-w-0 flex-col gap-2.5">
          <KeyInsightBanner />
          <PercentileSection />
          <KpiGrid />
          <section
            aria-label="نمودارهای مقایسه‌ای"
            className="grid grid-cols-1 gap-2.5 md:grid-cols-2"
          >
            <RadarChart />
            <CohortLeaderboardSection />
          </section>
        </div>
        <PeerGroupAside />
      </div>

      <Disclaimer />
    </div>
  );
}
