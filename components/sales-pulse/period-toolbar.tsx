"use client";

import { CalendarRangeIcon, InfoIcon, StoreIcon } from "lucide-react";

import {
  SALES_PULSE_MERCHANTS,
  SALES_PULSE_PERIODS,
} from "@/lib/sales-pulse-mock-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type PeriodToolbarProps = {
  periodId: string;
  merchantId: string;
  onPeriodChange: (periodId: string | null) => void;
  onMerchantChange: (merchantId: string | null) => void;
};

export function PeriodToolbar({
  periodId,
  merchantId,
  onPeriodChange,
  onMerchantChange,
}: PeriodToolbarProps) {
  const period = SALES_PULSE_PERIODS.find((item) => item.id === periodId);

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-[var(--pulse-line)] bg-card p-3 shadow-[0_12px_36px_rgba(26,33,72,0.05)] sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-3 sm:p-3.5">
      <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-2 sm:gap-3">
        <div className="flex min-w-0 flex-col gap-1 sm:min-w-40">
          <span className="text-[11px] text-[var(--pulse-subtle)]">پذیرنده</span>
          <Select value={merchantId} onValueChange={onMerchantChange}>
            <SelectTrigger
              className="h-9 w-full border-[var(--pulse-line)] bg-card"
              aria-label="انتخاب پذیرنده"
            >
              <StoreIcon className="size-4 text-[var(--pulse-subtle)]" aria-hidden="true" />
              <SelectValue placeholder="پذیرنده" />
            </SelectTrigger>
            <SelectContent>
              {SALES_PULSE_MERCHANTS.map((merchant) => (
                <SelectItem key={merchant.id} value={merchant.id}>
                  {merchant.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex min-w-0 flex-col gap-1 sm:min-w-48">
          <span className="text-[11px] text-[var(--pulse-subtle)]">بازه تحلیل</span>
          <Select value={periodId} onValueChange={onPeriodChange}>
            <SelectTrigger
              className="h-9 w-full border-[var(--pulse-line)] bg-card"
              aria-label="انتخاب بازه تحلیل"
            >
              <CalendarRangeIcon
                className="size-4 text-[var(--pulse-subtle)]"
                aria-hidden="true"
              />
              <SelectValue placeholder="بازه تحلیل" />
            </SelectTrigger>
            <SelectContent>
              {SALES_PULSE_PERIODS.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {period ? (
        <p className="text-xs text-[var(--pulse-subtle)] sm:text-sm">
          بازه:{" "}
          <span className="font-semibold text-[var(--pulse-ink)]">{period.range}</span>
        </p>
      ) : null}
    </div>
  );
}

export function BaselineNote() {
  return (
    <aside
      className="rounded-xl border border-[var(--pulse-amber-line)] bg-[var(--pulse-amber-soft)] p-3"
      aria-labelledby="baseline-note-heading"
    >
      <div className="flex gap-2">
        <InfoIcon
          className="mt-0.5 size-3.5 shrink-0 text-[var(--pulse-amber)]"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-0.5 text-xs sm:text-sm">
          <h3
            id="baseline-note-heading"
            className="font-semibold text-[var(--pulse-ink)]"
          >
            baseline
          </h3>
          <p className="leading-5 text-[var(--pulse-subtle)]">
            میانگین همان روزهای هفته در ۶ هفته قبل؛ انحراف عملکرد است نه اثبات
            اثر فصلی.
          </p>
        </div>
      </div>
    </aside>
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
