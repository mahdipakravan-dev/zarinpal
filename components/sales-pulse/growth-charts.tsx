import { InfoIcon } from "lucide-react";

import type { GrowthFactor } from "@/lib/sales-pulse-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
  const maxAbs = Math.max(...factors.map((f) => Math.abs(f.value)), Math.abs(total), 1);
  const totalPositive = total >= 0;

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
        className="flex flex-1 items-end justify-center gap-2.5 px-2 pt-3 sm:gap-3"
        aria-hidden="true"
      >
        {factors.map((factor) => {
          const barHeight = (Math.abs(factor.value) / maxAbs) * maxBarHeight;

          return (
            <div key={factor.label} className="flex max-w-16 flex-1 flex-col items-center gap-2">
              <span
                className={cn(
                  "text-xs font-semibold tabular-nums",
                  factor.positive ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"
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
                    factor.positive ? "bg-[var(--pulse-good)]" : "bg-[var(--pulse-warn)]"
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
          <span
            className={cn(
              "text-xs font-bold",
              totalPositive ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"
            )}
          >
            {total > 0 ? "+" : ""}{formatPersianNumber(total)}٪
          </span>
          <div
            className="flex w-full max-w-10 items-end justify-center"
            style={{ height: maxBarHeight }}
          >
            <div
              className={cn(
                "w-full rounded-t-md",
                totalPositive ? "bg-[var(--pulse-good)]" : "bg-[var(--pulse-warn)]"
              )}
              style={{ height: Math.max((Math.abs(total) / maxAbs) * maxBarHeight, 8) }}
            />
          </div>
          <span className="text-center text-[11px] font-medium leading-tight">
            تغییر خالص فروش
          </span>
        </div>
      </div>
    </figure>
  );
}

export function GrowthDonut({ total }: { total: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(Math.abs(total) / 40, 1);
  const dashOffset = circumference * (1 - progress);
  const positive = total >= 0;

  return (
    <div className="relative mx-auto mt-4 flex size-36 items-center justify-center sm:mt-5">
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
          className={cn(
            positive ? "stroke-[var(--pulse-good)]" : "stroke-[var(--pulse-warn)]"
          )}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn(
            "text-2xl font-bold",
            positive ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"
          )}
        >
          {total > 0 ? "+" : ""}{formatPersianNumber(total)}٪
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
              "rounded-lg px-2.5 py-1.5 font-medium",
              factor.positive
                ? "bg-[var(--pulse-good)]/10 text-[var(--pulse-good)]"
                : "bg-[var(--pulse-wash)] text-[var(--pulse-warn)] ring-1 ring-[var(--pulse-line)]"
            )}
          >
            {factor.label}{" "}
            <span className="font-bold">{formatFactorValue(factor.value)}</span>
          </span>
        </div>
      ))}
      <span className="text-muted-foreground">=</span>
      <span
        className={cn(
          "rounded-md px-2.5 py-1.5 font-bold text-white",
          total >= 0 ? "bg-[var(--pulse-good)]" : "bg-[var(--pulse-warn)]"
        )}
      >
        {formatPersianNumber(total)}٪ تغییر کل
      </span>
    </div>
  );
}

export function GrowthFormulaInfo({
  factors,
  total,
}: {
  factors: GrowthFactor[];
  total: number;
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            className="absolute top-2.5 end-2.5 z-10 size-7 text-[var(--pulse-blue)] hover:bg-[var(--pulse-blue-soft)] hover:text-[var(--pulse-blue)]"
            aria-label="نمایش فرمول تجزیه رشد"
          />
        }
      >
        <InfoIcon className="size-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg" dir="rtl">
        <DialogHeader>
          <DialogTitle>فرمول تجزیه رشد</DialogTitle>
          <DialogDescription>
            سهم هر عامل از تغییر کل فروش موفق در دوره انتخاب‌شده
          </DialogDescription>
        </DialogHeader>
        <GrowthBreakdownBlocks factors={factors} total={total} />
      </DialogContent>
    </Dialog>
  );
}
