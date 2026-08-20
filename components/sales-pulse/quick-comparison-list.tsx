import { cn } from "@/lib/utils";

type QuickComparisonProps = {
  items: { label: string; value: string }[];
};

export function QuickComparisonList({ items }: QuickComparisonProps) {
  return (
    <section aria-labelledby="quick-comparison-heading" className="flex h-full flex-col">
      <h3
        id="quick-comparison-heading"
        className="mb-0.5 text-sm font-bold text-[var(--pulse-ink)] sm:text-base"
      >
        مقایسه سریع
      </h3>
      <p className="mb-3 text-xs text-[var(--pulse-subtle)]">
        انحراف‌های کلیدی نسبت به baseline
      </p>
      <ul className="flex flex-1 flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex min-h-10 items-center justify-between gap-2 rounded-lg border border-[var(--pulse-line)] bg-[var(--pulse-wash)] px-2.5 py-1.5 text-xs transition-colors duration-200 hover:bg-[var(--pulse-violet-soft)] motion-reduce:transition-none sm:text-sm"
          >
            <span className="text-[var(--pulse-subtle)]">{item.label}</span>
            <span
              className={cn(
                "font-extrabold tabular-nums",
                item.value.startsWith("+")
                  ? "text-[var(--pulse-good)]"
                  : "text-[var(--pulse-ink)]"
              )}
            >
              {item.value}
              {!item.value.includes("٪") ? (
                <span className="text-[10px] font-normal text-[var(--pulse-subtle)] sm:text-xs">
                  {" "}
                  واحد درصدی
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
