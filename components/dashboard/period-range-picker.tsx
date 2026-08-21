"use client";

import { useState, type CSSProperties } from "react";
import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type PeriodDateRange = {
  start: Date;
  end?: Date;
};

type PeriodRangePickerProps = {
  className?: string;
  defaultRange?: PeriodDateRange;
  onRangeChange?: (range: { start: Date; end: Date }) => void;
  minDate?: Date;
  maxDate?: Date;
};

const periodPickerTheme = {
  "--period-ink": "#19191a",
  "--period-subtle": "#19191a",
  "--period-line": "#e6e8ec",
  "--period-wash": "#f7f8fa",
  "--period-blue": "#174fd6",
  "--period-blue-line": "#d7deeb",
  "--period-yellow": "#ffd60a",
  "--period-yellow-soft": "#fff6bf",
  "--period-yellow-strong": "#d4ad00",
} as CSSProperties;

const calendarWeekdays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
const calendarMonthFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  month: "long",
  year: "numeric",
});
const calendarDayFormatter = new Intl.NumberFormat("fa-IR");
const compactDateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "short",
});
const fullDateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function createDefaultPeriodRange(): PeriodDateRange {
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

const calendarPartsFormatter = new Intl.DateTimeFormat("en-US-u-ca-persian", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

function calendarParts(date: Date) {
  const parts = Object.fromEntries(
    calendarPartsFormatter.formatToParts(date).map((part) => [part.type, part.value])
  );
  return { year: Number(parts.year), month: Number(parts.month), day: Number(parts.day) };
}

function monthCells(month: Date): Array<Date | null> {
  const current = calendarParts(month);
  const first = new Date(month);
  first.setDate(first.getDate() - current.day + 1);
  const leadingBlanks = (first.getDay() + 1) % 7;
  const cells: Array<Date | null> = Array.from(
    { length: leadingBlanks },
    () => null
  );
  for (let date = first; ; ) {
    const parts = calendarParts(date);
    if (parts.year !== current.year || parts.month !== current.month) break;
    cells.push(new Date(date));
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  }

  return cells;
}

function shiftMonth(month: Date, offset: number): Date {
  const current = calendarParts(month);
  const first = new Date(month);
  first.setDate(first.getDate() - current.day + 1);
  const probe = new Date(first);
  probe.setDate(probe.getDate() + (offset > 0 ? 32 : -1));
  const target = calendarParts(probe);
  probe.setDate(probe.getDate() - target.day + 1);
  return probe;
}

export function PeriodRangePicker({
  className,
  defaultRange,
  onRangeChange,
  minDate,
  maxDate,
}: PeriodRangePickerProps) {
  const initialRange = defaultRange ?? createDefaultPeriodRange();
  const [open, setOpen] = useState(false);
  const [appliedRange, setAppliedRange] = useState<PeriodDateRange>(initialRange);
  const [draftRange, setDraftRange] = useState<PeriodDateRange>(initialRange);
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(initialRange.end ?? initialRange.start)
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
    const nextRange = { start: draftRange.start, end: draftRange.end };
    setAppliedRange(nextRange);
    onRangeChange?.(nextRange);
    setOpen(false);
  };

  return (
    <div style={periodPickerTheme} className={cn("h-8 w-full min-w-0", className)}>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              className="h-8 w-full min-w-0 justify-between gap-1.5 rounded-lg border border-[var(--period-line)] bg-card pe-2 ps-2.5 text-sm hover:border-[var(--period-blue-line)] hover:bg-[var(--period-wash)] data-[popup-open]:border-[var(--period-blue-line)] data-[popup-open]:bg-[var(--period-wash)]"
              aria-label={`انتخاب بازه؛ بازه فعلی ${appliedLabel}`}
            />
          }
        >
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <CalendarDaysIcon
              className="size-4 shrink-0 text-[var(--period-blue)]"
              aria-hidden="true"
            />
            <span className="truncate text-xs font-extrabold text-[var(--period-ink)]">
              {appliedLabel}
            </span>
          </span>
          <ChevronDownIcon
            className="size-4 shrink-0 text-[var(--period-blue)]"
            aria-hidden="true"
          />
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="w-[min(21rem,calc(100vw-1.5rem))] gap-3 p-3"
          style={
            {
              ...periodPickerTheme,
              "--primary": "var(--period-yellow)",
              "--primary-foreground": "var(--period-ink)",
            } as CSSProperties
          }
        >
          <PopoverTitle className="sr-only">انتخاب بازه زمانی</PopoverTitle>
          <PopoverDescription className="sr-only">
            ابتدا تاریخ شروع و سپس تاریخ پایان را از تقویم انتخاب کنید.
          </PopoverDescription>

          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-[var(--period-ink)]">
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
                className="flex h-8 items-center justify-center text-xs font-semibold text-[var(--period-subtle)]"
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
              const disabled = Boolean(
                (minDate && date < startOfDay(minDate)) || (maxDate && date > startOfDay(maxDate))
              );

              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  className={cn(
                    "mx-auto flex size-9 cursor-pointer items-center justify-center rounded-full border border-transparent text-sm font-medium text-[var(--period-ink)] outline-none transition-[background-color,border-color,transform] duration-150 ease-out hover:bg-[var(--period-yellow-soft)] focus-visible:ring-2 focus-visible:ring-[var(--period-yellow-strong)] focus-visible:ring-offset-2 active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none",
                    isStart &&
                      "border-[var(--period-yellow)] bg-[var(--period-yellow)] font-extrabold",
                    isEnd &&
                      !isStart &&
                      "border-[var(--period-yellow-strong)] bg-card font-extrabold"
                  )}
                  onClick={() => handleDateSelection(date)}
                  disabled={disabled}
                  aria-label={fullDateFormatter.format(date)}
                  aria-pressed={isStart || isEnd}
                >
                  {calendarDayFormatter.format(calendarParts(date).day)}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 border-t border-[var(--period-line)] pt-3">
            <p
              className="min-h-5 text-xs leading-5 text-[var(--period-subtle)]"
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
    </div>
  );
}
