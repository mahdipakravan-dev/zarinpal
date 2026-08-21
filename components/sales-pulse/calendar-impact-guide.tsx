import { CalendarDaysIcon, PartyPopperIcon } from "lucide-react";

import type { SalesPulseResult } from "@/lib/sales-pulse-data";
import { formatPersianNumber } from "@/lib/format";

function changeLabel(value: number) {
  return `${formatPersianNumber(Math.abs(value), { maximumFractionDigits: 1 })}٪ ${
    value >= 0 ? "بیشتر" : "کمتر"
  }`;
}

export function CalendarImpactGuide({ impact }: { impact: SalesPulseResult["calendarImpact"] }) {
  return (
    <section
      className="rail-panel [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)] p-3 sm:p-4"
      aria-labelledby="calendar-impact-heading"
    >
      <header className="mb-3 flex items-start gap-2.5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--pulse-blue-soft)] text-[var(--pulse-blue)]">
          <CalendarDaysIcon className="size-4.5" aria-hidden="true" />
        </span>
        <div>
          <h2 id="calendar-impact-heading" className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
            فروش شما در روزهای خاص چه تغییری کرد؟
          </h2>
          <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
            مقایسه با همان روز هفته و همان ساعت در هشت هفته قبل
          </p>
        </div>
      </header>

      <div className="grid gap-2 sm:grid-cols-3">
        {impact.dayTypes.map((item) => (
          <article key={item.id} className="rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] p-2.5">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xs font-semibold text-[var(--pulse-ink)] sm:text-sm">{item.label}</h3>
              <span className="text-[11px] text-[var(--pulse-subtle)]">
                {formatPersianNumber(item.dates)} روز
              </span>
            </div>
            <p className={`mt-2 text-sm font-bold ${item.successfulSalesPercent >= 0 ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"}`}>
              {item.eligible ? changeLabel(item.successfulSalesPercent) : "داده کافی نیست"}
            </p>
            <p className="mt-0.5 text-[11px] text-[var(--pulse-subtle)]">مبلغ فروش موفق</p>
          </article>
        ))}
      </div>

      {impact.notableDates.length > 0 ? (
        <div className="mt-3 border-t border-[var(--pulse-line)] pt-3">
          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[var(--pulse-ink)] sm:text-sm">
            <PartyPopperIcon className="size-3.5 text-[var(--pulse-amber)]" aria-hidden="true" />
            روزهای قابل توجه
          </div>
          <ul className="grid gap-1.5 lg:grid-cols-2">
            {impact.notableDates.slice(0, 4).map((item) => (
              <li key={item.date} className="flex items-start justify-between gap-3 rounded-md bg-white px-2.5 py-2 text-xs ring-1 ring-[var(--pulse-line)]">
                <span className="min-w-0">
                  <span className="block font-medium text-[var(--pulse-ink)]">{item.jalaliDate}</span>
                  <span className="mt-0.5 block truncate text-[var(--pulse-subtle)]">{item.labels.join("، ")}</span>
                </span>
                <span className={`shrink-0 font-semibold ${item.successfulSalesPercent >= 0 ? "text-[var(--pulse-good)]" : "text-[var(--pulse-warn)]"}`}>
                  {changeLabel(item.successfulSalesPercent)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
