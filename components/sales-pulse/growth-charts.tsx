import type { GrowthFactor } from "@/lib/sales-pulse-mock-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type GrowthWaterfallProps = {
        factors: GrowthFactor[];
  total: number;
};

function formatFactorValue(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`;
}

export function GrowthWaterfall({ factors, total }: GrowthWaterfallProps) {
  const maxBarHeight = 128;
  const maxAbs = Math.max(...factors.map((f) => Math.abs(f.value)), total);

  return (
    <figure className="flex h-full flex-col">
      <figcaption className="sr-only">
        نمودار آبشاری تجزیه رشد فروش:{" "}
        {factors
          .map((f) => `${f.label} ${formatFactorValue(f.value)}`)
          .join("، ")}{" "}
        مجموع {formatPersianNumber(total)}٪
      </figcaption>

      <div
        className="flex flex-1 items-end justify-center gap-3 px-2 pt-4 sm:gap-4"
        aria-hidden="true"
      >
        {factors.map((factor) => {
          const barHeight = (Math.abs(factor.value) / maxAbs) * maxBarHeight;

          return (
            <div key={factor.label} className="flex max-w-16 flex-1 flex-col items-center gap-2">
              <span
                className={cn(
                  "text-xs font-semibold tabular-nums",
                  factor.positive ? "text-emerald-600" : "text-rose-500"
                )}
              >
                {formatFactorValue(factor.value)}
              </span>
              <div
                className="flex w-full max-w-10 items-end justify-center"
                style={{ height: maxBarHeight }}
              >
                <div
                  className={cn(
                    "w-full rounded-t-md motion-reduce:transition-none",
                    factor.positive ? "bg-emerald-500" : "bg-rose-400"
                  )}
                  style={{ height: Math.max(barHeight, 8) }}
                />
              </div>
              <span className="text-center text-[11px] leading-tight text-muted-foreground">
                {factor.label}
              </span>
            </div>
          );
        })}

        <div className="flex max-w-16 flex-1 flex-col items-center gap-2">
          <span className="text-xs font-bold text-emerald-700">
            +{formatPersianNumber(total)}٪
          </span>
          <div
            className="flex w-full max-w-10 items-end justify-center"
            style={{ height: maxBarHeight }}
          >
            <div
              className="w-full rounded-t-md bg-emerald-600"
              style={{ height: (total / maxAbs) * maxBarHeight }}
            />
          </div>
          <span className="text-center text-[11px] font-medium leading-tight">
            رشد خالص فروش
          </span>
        </div>
      </div>
    </figure>
  );
}

export function GrowthDonut({ total }: { total: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(total / 40, 1);
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative mx-auto flex size-36 items-center justify-center">
      <svg
        viewBox="0 0 128 128"
        className="size-full -rotate-90 motion-reduce:rotate-0"
        aria-hidden="true"
      >
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          className="stroke-muted"
          strokeWidth="12"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="none"
          className="stroke-emerald-500"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-emerald-600">
          +{formatPersianNumber(total)}٪
        </span>
        <span className="text-xs text-muted-foreground">رشد کل</span>
      </div>
    </div>
  );
}

export function GrowthBreakdownBlocks({
  factors,
  total,
}: {
  factors: GrowthFactor[];
  total: number;
}) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-2 text-sm"
      aria-hidden="true"
    >
      {factors.map((factor, index) => (
        <div key={factor.label} className="flex items-center gap-2">
          {index > 0 ? (
            <span className="text-muted-foreground">{factor.positive ? "+" : "−"}</span>
          ) : null}
          <span
            className={cn(
              "rounded-lg px-3 py-2 font-medium",
              factor.positive
                ? "bg-emerald-500/10 text-emerald-700"
                : "bg-rose-500/10 text-rose-600"
            )}
          >
            {factor.label}{" "}
            <span className="font-bold">{formatFactorValue(factor.value)}</span>
          </span>
        </div>
      ))}
      <span className="text-muted-foreground">=</span>
      <span className="rounded-lg bg-emerald-600 px-3 py-2 font-bold text-white">
        {formatPersianNumber(total)}٪ رشد کل
      </span>
    </div>
  );
}
