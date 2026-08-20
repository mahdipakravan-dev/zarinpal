"use client";

import { CalendarRangeIcon, InfoIcon, StoreIcon } from "lucide-react";

import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

type PeriodToolbarProps = {
  periodId: string;
  merchantId: string;
  periods: Array<{ id: string; label: string; range: string }>;
  merchants: Array<{ id: string; label: string; verifiedPurchases: number }>;
  onPeriodChange: (periodId: string | null) => void;
  onMerchantChange: (merchantId: string | null) => void;
  variant?: "panel" | "inline";
};

export function PeriodToolbar({
  periodId,
  merchantId,
  periods,
  merchants,
  onPeriodChange,
  onMerchantChange,
  variant = "panel",
}: PeriodToolbarProps) {
  const isInline = variant === "inline";
  const period = periods.find((item) => item.id === periodId);
  const merchant = merchants.find((item) => item.id === merchantId);

  return (
    <div
      className={cn(
        isInline
          ? "flex w-full flex-col gap-2 lg:w-auto"
          : "rail-panel flex flex-col gap-2 p-2.5 [--rail-line:var(--pulse-line)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2.5 sm:p-3"
      )}
    >
      <div
        className={cn(
          "grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5",
          isInline ? "lg:w-auto lg:min-w-[18rem]" : "sm:w-auto"
        )}
      >
        <div className="min-w-0 sm:min-w-36">
          <Select value={merchantId} onValueChange={onMerchantChange}>
            <SelectTrigger
              className="h-10 w-full justify-start gap-2 rounded-lg border-[var(--pulse-line)] bg-card px-3 py-2 text-start hover:border-[var(--pulse-blue-line)] hover:bg-[var(--pulse-wash)] data-[popup-open]:border-[var(--pulse-blue-line)] data-[popup-open]:bg-[var(--pulse-wash)] [&>svg:last-child]:text-[var(--pulse-blue)]"
              aria-label="انتخاب پذیرنده"
            >
              <StoreIcon className="size-4 shrink-0 text-[var(--pulse-blue)]" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--pulse-ink)]">
                {merchant?.label ?? "پذیرنده"}
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-56 rounded-lg p-1.5">
              <SelectGroup>
                {merchants.map((item) => (
                  <SelectItem
                    key={item.id}
                    value={item.id}
                    label={item.label}
                    className="py-2 pe-8 ps-2 data-highlighted:bg-[var(--pulse-wash)] data-selected:bg-[var(--pulse-blue-soft)]"
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[var(--pulse-ink)]">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-[var(--pulse-subtle)]">
                        {formatPersianNumber(item.verifiedPurchases)} خرید موفق در کل فایل
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="min-w-0 sm:min-w-36">
          <Select value={periodId} onValueChange={onPeriodChange}>
            <SelectTrigger
              className="h-10 w-full justify-start gap-2 rounded-lg border-[var(--pulse-line)] bg-card px-3 py-2 text-start hover:border-[var(--pulse-blue-line)] hover:bg-[var(--pulse-wash)] data-[popup-open]:border-[var(--pulse-blue-line)] data-[popup-open]:bg-[var(--pulse-wash)] [&>svg:last-child]:text-[var(--pulse-blue)]"
              aria-label="انتخاب بازه تحلیل"
            >
              <CalendarRangeIcon className="size-4 shrink-0 text-[var(--pulse-blue)]" aria-hidden="true" />
              <span className="min-w-0 flex-1 truncate text-xs font-extrabold text-[var(--pulse-ink)]">
                {period?.label ?? "بازه"}
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-64 rounded-lg p-1.5">
              <SelectGroup>
                {periods.map((item) => (
                  <SelectItem
                    key={item.id}
                    value={item.id}
                    label={item.label}
                    className="py-2 pe-8 ps-2 data-highlighted:bg-[var(--pulse-wash)] data-selected:bg-[var(--pulse-blue-soft)]"
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[var(--pulse-ink)]">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-[var(--pulse-subtle)]">
                        {item.range}
                      </span>
                    </span>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {period && !isInline ? (
        <p className="rounded-md bg-[var(--pulse-wash)] px-2.5 py-1.5 text-xs text-[var(--pulse-subtle)] sm:text-sm">
          بازه:{" "}
          <span className="font-semibold text-[var(--pulse-ink)]">{period.range}</span>
        </p>
      ) : null}
    </div>
  );
}

export function DataLimitNote({
  eligible,
  confidence,
  sampleSize,
  sourceHash,
}: {
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  sampleSize: number;
  sourceHash: string;
}) {
  const confidenceLabel =
    confidence === "high" ? "زیاد" : confidence === "medium" ? "متوسط" : "کم";

  return (
    <p className="flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--pulse-subtle)] sm:text-xs">
      <InfoIcon
        className="mt-0.5 size-3.5 shrink-0 text-[var(--pulse-violet)]"
        aria-hidden="true"
      />
      <span>
        منبع: challenge_data.csv · {formatPersianNumber(sampleSize)} نشست · اطمینان {confidenceLabel}
        {!eligible ? " (نمونه ناکافی برای توصیه قطعی)" : ""} · مقایسه با میانگین همان روز و ساعت در ۸
        هفته گذشته · مبالغ منبع ریال و نمایش به تومان · نسخه داده {sourceHash.slice(0, 8)}
      </span>
    </p>
  );
}
