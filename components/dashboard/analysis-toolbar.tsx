"use client";

import { CalendarRangeIcon, StoreIcon } from "lucide-react";
import type { CSSProperties } from "react";

import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export type AnalysisToolbarMerchant = {
  id: string;
  label: string;
  verifiedPurchases?: number;
};

export type AnalysisToolbarPeriod = {
  id: string;
  label: string;
  range: string;
};

type AnalysisToolbarProps = {
  merchantId: string;
  merchants: AnalysisToolbarMerchant[];
  periodId: string;
  periods: AnalysisToolbarPeriod[];
  onMerchantChange: (merchantId: string | null) => void;
  onPeriodChange: (periodId: string | null) => void;
  className?: string;
};

const toolbarTheme = {
  "--toolbar-ink": "#19191a",
  "--toolbar-subtle": "#19191a",
  "--toolbar-line": "#e4e9f3",
  "--toolbar-wash": "#f6f8fc",
  "--toolbar-blue": "#174fd6",
  "--toolbar-blue-soft": "#eaf1ff",
  "--toolbar-blue-line": "#c8d8ff",
} as CSSProperties;

export const analysisControlTriggerClass =
  "h-10 w-full min-w-0 justify-start gap-2 rounded-lg border border-[var(--toolbar-line)] bg-card px-3 text-start hover:border-[var(--toolbar-blue-line)] hover:bg-[var(--toolbar-wash)] data-[popup-open]:border-[var(--toolbar-blue-line)] data-[popup-open]:bg-[var(--toolbar-wash)] [&>svg:last-child]:size-4 [&>svg:last-child]:shrink-0 [&>svg:last-child]:text-[var(--toolbar-blue)]";

const controlItemClass =
  "py-2 pe-8 ps-2 data-highlighted:bg-[var(--toolbar-wash)] data-selected:bg-[var(--toolbar-blue-soft)]";

export function AnalysisToolbar({
  merchantId,
  merchants,
  periodId,
  periods,
  onMerchantChange,
  onPeriodChange,
  className,
}: AnalysisToolbarProps) {
  const merchant = merchants.find((item) => item.id === merchantId);
  const period = periods.find((item) => item.id === periodId);

  return (
    <div
      style={toolbarTheme}
      className={cn("grid w-full grid-cols-2 gap-2 md:w-[24rem]", className)}
    >
      <Select value={merchantId} onValueChange={onMerchantChange}>
        <SelectTrigger
          className={analysisControlTriggerClass}
          aria-label="انتخاب پذیرنده"
        >
          <StoreIcon
            className="size-4 shrink-0 text-[var(--toolbar-blue)]"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 truncate text-xs font-bold text-[var(--toolbar-ink)]">
            {merchant?.label ?? "پذیرنده"}
          </span>
        </SelectTrigger>
        <SelectContent className="min-w-56 rounded-lg p-1.5" style={toolbarTheme}>
          <SelectGroup>
            {merchants.map((item) => (
              <SelectItem
                key={item.id}
                value={item.id}
                label={item.label}
                className={controlItemClass}
              >
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[var(--toolbar-ink)]">
                    {item.label}
                  </span>
                  {typeof item.verifiedPurchases === "number" ? (
                    <span className="text-[11px] text-[var(--toolbar-subtle)]">
                      {formatPersianNumber(item.verifiedPurchases)} خرید موفق در کل فایل
                    </span>
                  ) : null}
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select value={periodId} onValueChange={onPeriodChange}>
        <SelectTrigger
          className={analysisControlTriggerClass}
          aria-label="انتخاب بازه تحلیل"
        >
          <CalendarRangeIcon
            className="size-4 shrink-0 text-[var(--toolbar-blue)]"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 truncate text-xs font-bold text-[var(--toolbar-ink)]">
            {period?.label ?? "بازه"}
          </span>
        </SelectTrigger>
        <SelectContent className="min-w-64 rounded-lg p-1.5" style={toolbarTheme}>
          <SelectGroup>
            {periods.map((item) => (
              <SelectItem
                key={item.id}
                value={item.id}
                label={item.label}
                className={controlItemClass}
              >
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[var(--toolbar-ink)]">
                    {item.label}
                  </span>
                  <span className="text-[11px] text-[var(--toolbar-subtle)]">
                    {item.range}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
