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
        className="rounded-xl border border-[var(--pulse-violet-line)] bg-[var(--pulse-violet-soft)] p-3"
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
            <ul className="list-inside list-disc space-y-1 text-xs text-[var(--pulse-subtle)]">
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
      className="relative flex h-full flex-col gap-2.5 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#151d48_0%,#2a2470_55%,#3b2f8f_100%)] p-3 text-white shadow-[0_14px_32px_rgba(21,29,72,0.24)] sm:p-4"
      aria-labelledby="sales-pulse-insight-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30 motion-reduce:hidden"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(91,76,219,0.45), transparent 42%), radial-gradient(circle at 80% 0%, rgba(15,154,132,0.25), transparent 35%)",
        }}
      />
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
      <ul className="relative space-y-1.5 text-xs text-white/80 sm:text-sm">
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
      <div className="relative mt-auto flex gap-2 rounded-xl border border-white/15 bg-white/8 p-2.5">
        <TargetIcon className="size-3.5 shrink-0 text-[var(--pulse-teal)]" aria-hidden="true" />
        <p className="text-xs leading-5 text-white/90 sm:text-sm sm:leading-6">
          <span className="font-semibold text-[var(--pulse-teal)]">پیشنهاد: </span>
          {action}
        </p>
      </div>
    </aside>
  );
}
