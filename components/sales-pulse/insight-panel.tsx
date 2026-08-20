import { ClockIcon, LightbulbIcon, TargetIcon, TrendingUpIcon } from "lucide-react";

import type { TrendPoint } from "@/lib/sales-pulse-mock-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type InsightStat = {
  label: string;
  value: string;
  tone: "good" | "neutral" | "amber";
};

type InsightPanelProps = {
  headline: string;
  bullets: string[];
  action: string;
  stats?: InsightStat[];
  trend?: TrendPoint[];
  variant?: "card" | "panel";
};

const toneClass = {
  good: "text-[var(--pulse-good)]",
  neutral: "text-[var(--pulse-blue)]",
  amber: "text-[var(--pulse-amber)]",
} as const;

function InsightSparkline({ trend }: { trend: TrendPoint[] }) {
  const width = 280;
  const height = 72;
  const padX = 8;
  const padY = 10;
  const max = Math.max(...trend.flatMap((point) => [point.actual, point.baseline]), 1);

  function buildPath(key: "actual" | "baseline") {
    return trend
      .map((point, index) => {
        const x = padX + (index / Math.max(trend.length - 1, 1)) * (width - padX * 2);
        const y = height - padY - (point[key] / max) * (height - padY * 2);
        return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  }

  const last = trend[trend.length - 1];
  const lift =
    last && last.baseline > 0
      ? ((last.actual - last.baseline) / last.baseline) * 100
      : 0;

  return (
    <figure className="flex flex-col gap-2 rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] p-2.5">
      <figcaption className="flex items-center justify-between gap-2 text-xs">
        <span className="flex items-center gap-1.5 font-medium text-[var(--pulse-ink)]">
          <TrendingUpIcon className="size-3.5 text-[var(--pulse-blue)]" aria-hidden="true" />
          فاصله فروش از baseline
        </span>
        <span className="font-extrabold tabular-nums text-[var(--pulse-good)]">
          +{formatPersianNumber(lift, { maximumFractionDigits: 0 })}٪
        </span>
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-16 w-full"
        role="img"
        aria-label="روند فروش واقعی در برابر baseline"
      >
        <path
          d={buildPath("baseline")}
          fill="none"
          stroke="var(--pulse-subtle)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        <path
          d={buildPath("actual")}
          fill="none"
          stroke="var(--pulse-blue)"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-center justify-between text-[10px] text-[var(--pulse-subtle)]">
        <span className="flex items-center gap-1.5">
          <span className="h-0.5 w-4 bg-[var(--pulse-blue)]" aria-hidden="true" />
          واقعی
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="h-0 w-4 border-t border-dashed border-[var(--pulse-subtle)]"
            aria-hidden="true"
          />
          baseline
        </span>
      </div>
    </figure>
  );
}

export function InsightPanel({
  headline,
  bullets,
  action,
  stats = [],
  trend = [],
  variant = "panel",
}: InsightPanelProps) {
  if (variant === "card") {
    return (
      <aside
        className="rounded-lg border border-[var(--pulse-line)] bg-card p-2.5"
        aria-labelledby="sales-pulse-insight-heading"
      >
        <div className="flex gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center text-[var(--pulse-violet)]">
            <LightbulbIcon className="size-3.5" aria-hidden="true" />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <h3
              id="sales-pulse-insight-heading"
              className="text-sm font-semibold text-[var(--pulse-ink)]"
            >
              بینش
            </h3>
            <p className="text-sm leading-6 text-[var(--pulse-ink)]">{headline}</p>
            <ul className="flex list-inside list-disc flex-col gap-1 text-xs text-[var(--pulse-subtle)]">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="border-t border-[var(--pulse-line)] pt-2 text-xs sm:text-sm">
              <span className="font-medium text-[var(--pulse-violet)]">پیشنهاد: </span>
              {action}
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="rail-banner flex h-full flex-col gap-2.5 p-2.5 sm:p-3"
      aria-labelledby="sales-pulse-insight-heading"
    >
      <div className="relative flex items-center gap-2 text-[var(--pulse-teal)]">
        <LightbulbIcon className="size-3.5" aria-hidden="true" />
        <h3
          id="sales-pulse-insight-heading"
          className="text-sm font-bold text-[var(--pulse-ink)]"
        >
          بینش کلیدی
        </h3>
      </div>

      <p className="relative text-sm leading-6 text-[var(--pulse-ink)]">{headline}</p>

      {stats.length > 0 ? (
        <div
          className="grid grid-cols-3 gap-2"
          role="list"
          aria-label="شاخص‌های خلاصه بینش"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              role="listitem"
              className="rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] px-2 py-2"
            >
              <p className="text-[10px] text-[var(--pulse-subtle)]">{stat.label}</p>
              <p
                className={cn(
                  "mt-1 text-sm font-extrabold tabular-nums",
                  toneClass[stat.tone]
                )}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {trend.length > 0 ? <InsightSparkline trend={trend} /> : null}

      <ul className="relative flex flex-col gap-1.5 text-xs text-[var(--pulse-subtle)] sm:text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--pulse-teal)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex gap-2 rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] p-2.5">
        <TargetIcon
          className="mt-0.5 size-3.5 shrink-0 text-[var(--pulse-teal)]"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[var(--pulse-teal)]">
            <ClockIcon className="size-3" aria-hidden="true" />
            اقدام پیشنهادی
          </p>
          <p className="mt-1 text-xs leading-5 text-[var(--pulse-ink)] sm:text-sm sm:leading-6">
            {action.replace(/^پیشنهاد:\s*/, "")}
          </p>
        </div>
      </div>
    </aside>
  );
}
