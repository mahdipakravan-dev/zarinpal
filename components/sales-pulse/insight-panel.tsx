import { LightbulbIcon, TargetIcon } from "lucide-react";

type InsightPanelProps = {
  headline: string;
  bullets: string[];
  action: string;
  variant?: "card" | "panel";
};

export function InsightPanel({
  headline,
  bullets,
  action,
  variant = "panel",
}: InsightPanelProps) {
  if (variant === "card") {
    return (
      <aside
        className="rounded-lg border border-[var(--pulse-violet-line)] bg-[var(--pulse-violet-soft)] p-2.5"
        aria-labelledby="sales-pulse-insight-heading"
      >
        <div className="flex gap-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[var(--pulse-violet)]/15 text-[var(--pulse-violet)]">
            <LightbulbIcon className="size-3.5" aria-hidden="true" />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <h3
              id="sales-pulse-insight-heading"
              className="text-sm font-semibold text-[var(--pulse-ink)]"
            >
              بینش
            </h3>
            <p className="text-sm leading-6 text-[var(--pulse-ink)]">{headline}</p>
            <ul className="flex list-inside list-disc flex-col gap-1 text-xs text-[var(--pulse-subtle)]">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="rounded-lg bg-card/80 px-2.5 py-2 text-xs ring-1 ring-[var(--pulse-line)] sm:text-sm">
              <span className="font-medium text-[var(--pulse-violet)]">پیشنهاد: </span>
              {action}
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="rail-banner flex h-full flex-col gap-2.5 p-2.5 sm:p-3"
      aria-labelledby="sales-pulse-insight-heading"
    >
      <div className="relative flex items-center gap-2 text-[var(--pulse-teal)]">
        <LightbulbIcon className="size-3.5" aria-hidden="true" />
        <h3
          id="sales-pulse-insight-heading"
          className="text-sm font-bold text-white"
        >
          بینش کلیدی
        </h3>
      </div>
      <p className="relative text-sm leading-6 text-white/90">{headline}</p>
      <ul className="relative flex flex-col gap-1.5 text-xs text-white/80 sm:text-sm">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--pulse-teal)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="relative mt-auto flex gap-2 rounded-lg border border-white/15 bg-white/10 p-2">
        <TargetIcon className="size-3.5 shrink-0 text-[var(--pulse-teal)]" aria-hidden="true" />
        <p className="text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
          <span className="font-semibold text-[var(--pulse-teal)]">پیشنهاد: </span>
          {action}
        </p>
      </div>
    </aside>
  );
}
