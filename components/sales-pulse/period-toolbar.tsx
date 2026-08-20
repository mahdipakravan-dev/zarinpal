"use client";

import { CalendarRangeIcon, InfoIcon, StoreIcon } from "lucide-react";

import {
  SALES_PULSE_MERCHANTS,
  SALES_PULSE_PERIODS,
} from "@/lib/sales-pulse-mock-data";
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
  onPeriodChange: (periodId: string | null) => void;
  onMerchantChange: (merchantId: string | null) => void;
  variant?: "panel" | "inline";
};

export function PeriodToolbar({
  periodId,
  merchantId,
  onPeriodChange,
  onMerchantChange,
  variant = "panel",
}: PeriodToolbarProps) {
  const isInline = variant === "inline";
  const period = SALES_PULSE_PERIODS.find((item) => item.id === periodId);

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
                پذیرنده
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-56 rounded-lg p-1.5">
              <SelectGroup>
                {SALES_PULSE_MERCHANTS.map((merchant, index) => (
                  <SelectItem
                    key={merchant.id}
                    value={merchant.id}
                    label={merchant.label}
                    className="py-2 pe-8 ps-2 data-highlighted:bg-[var(--pulse-wash)] data-selected:bg-[var(--pulse-blue-soft)]"
                  >
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-sm font-semibold text-[var(--pulse-ink)]">
                        {merchant.label}
                      </span>
                      <span className="text-[11px] text-[var(--pulse-subtle)]">
                        {index === 0 ? "پذیرنده اصلی داشبورد" : "قابل مقایسه با همین baseline"}
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
                بازه
              </span>
            </SelectTrigger>
            <SelectContent className="min-w-64 rounded-lg p-1.5">
              <SelectGroup>
                {SALES_PULSE_PERIODS.map((item) => (
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
        <p className="border-t border-[var(--pulse-line)] pt-2 text-xs text-[var(--pulse-subtle)] sm:text-sm">
          بازه:{" "}
          <span className="font-semibold text-[var(--pulse-ink)]">{period.range}</span>
        </p>
      ) : null}
    </div>
  );
}

export function DataLimitNote() {
  return (
    <p className="flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--pulse-subtle)] sm:text-xs">
      <InfoIcon
        className="mt-0.5 size-3.5 shrink-0 text-[var(--pulse-violet)]"
        aria-hidden="true"
      />
      <span>
        پنجره داده ۶ ماهه ممکن است cohortهای قدیمی را ناقص کند. مبالغ به تومان
        نمایش داده شده‌اند.
      </span>
    </p>
  );
}
