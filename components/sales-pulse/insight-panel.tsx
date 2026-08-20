import { LightbulbIcon, QuoteIcon, TargetIcon } from "lucide-react";

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
        className="rounded-xl border border-violet-200/80 bg-violet-50/80 p-4 dark:border-violet-500/20 dark:bg-violet-500/10"
        aria-labelledby="sales-pulse-insight-heading"
      >
        <div className="flex gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-600">
            <LightbulbIcon className="size-4" aria-hidden="true" />
          </div>
          <div className="flex min-w-0 flex-col gap-3">
            <h3 id="sales-pulse-insight-heading" className="font-heading text-sm font-semibold">
              بینش
            </h3>
            <p className="text-sm leading-relaxed">{headline}</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="rounded-lg bg-background/70 px-3 py-2 text-sm ring-1 ring-foreground/8">
              <span className="font-medium text-violet-700">پیشنهاد عملی: </span>
              {action}
            </p>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="flex h-full flex-col gap-4 rounded-xl bg-muted/35 p-5 ring-1 ring-foreground/8"
      aria-labelledby="sales-pulse-insight-heading"
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <QuoteIcon className="size-5" aria-hidden="true" />
        <h3 id="sales-pulse-insight-heading" className="font-heading text-base font-semibold text-foreground">
          بینش
        </h3>
      </div>
      <p className="text-sm font-medium leading-relaxed">{headline}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex gap-2 rounded-lg border border-dashed border-primary/30 bg-background/60 p-3">
        <TargetIcon className="size-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-sm">
          <span className="font-medium">پیشنهاد عملی: </span>
          {action}
        </p>
      </div>
    </aside>
  );
}
