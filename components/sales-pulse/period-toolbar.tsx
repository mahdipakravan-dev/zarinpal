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
  onPeriodChange: (periodId: string) => void;
  onMerchantChange: (merchantId: string) => void;
};

export function PeriodToolbar({
  periodId,
  merchantId,
  onPeriodChange,
  onMerchantChange,
}: PeriodToolbarProps) {
  const period = SALES_PULSE_PERIODS.find((item) => item.id === periodId);

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-2">
        <Select value={merchantId} onValueChange={onMerchantChange}>
          <SelectTrigger className="h-9 w-full min-w-40 sm:w-44" aria-label="انتخاب پذیرنده">
            <StoreIcon className="size-4 text-muted-foreground" aria-hidden="true" />
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

        <Select value={periodId} onValueChange={onPeriodChange}>
          <SelectTrigger className="h-9 w-full min-w-52 sm:w-56" aria-label="انتخاب بازه تحلیل">
            <CalendarRangeIcon className="size-4 text-muted-foreground" aria-hidden="true" />
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

      {period ? (
        <p className="text-sm text-muted-foreground">
          بازه تحلیل: <span className="font-medium text-foreground">{period.range}</span>
        </p>
      ) : null}
    </div>
  );
}

export function BaselineNote() {
  return (
    <aside
      className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-4 dark:border-amber-500/20 dark:bg-amber-500/10"
      aria-labelledby="baseline-note-heading"
    >
      <div className="flex gap-3">
        <InfoIcon className="size-4 shrink-0 text-amber-600" aria-hidden="true" />
        <div className="flex flex-col gap-1 text-sm">
          <h3 id="baseline-note-heading" className="font-medium text-amber-900 dark:text-amber-100">
            نکته مهم درباره baseline
          </h3>
          <p className="leading-relaxed text-amber-900/85 dark:text-amber-100/85">
            baseline از میانگین همان روزهای هفته در بازه ۶ هفته قبل محاسبه می‌شود،
            با کنترل مبلغ، ساعت و ترکیب خریدار تا حد ممکن. این مقایسه انحراف
            عملکرد است؛ نه اثبات قطعی اثر فصلی.
          </p>
        </div>
      </div>
    </aside>
  );
}

export function DataLimitNote() {
  return (
    <aside
      className="rounded-xl bg-muted/50 p-4 ring-1 ring-foreground/8"
      aria-labelledby="data-limit-note-heading"
    >
      <div className="flex gap-3">
        <InfoIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <h3 id="data-limit-note-heading" className="font-medium text-foreground">
            توضیح
          </h3>
          <p className="leading-relaxed">
            به‌دلیل محدودیت پنجره داده ۶ ماهه، cohortهای قدیمی‌تر و برخی
            بازه‌های مناسبت ممکن است ناقص باشند. واحد مبلغ‌ها ریال است؛ در
            نمایش بالا برای خوانایی به تومان تبدیل شده‌اند.
          </p>
        </div>
      </div>
    </aside>
  );
}
