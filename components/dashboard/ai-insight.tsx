import { LightbulbIcon, SparklesIcon, TargetIcon } from "lucide-react";

import type { LiveAiStatus } from "@/hooks/use-live-ai-action";
import { cn } from "@/lib/utils";

const INSIGHT_BLUE = "#174fd6";

type AiInsightProps = {
  headline: string;
  detail?: string;
  action: string;
  status?: LiveAiStatus;
  loadingLabel?: string;
  layout?: "stack" | "split";
  surface?: "banner" | "panel";
  className?: string;
};

function InsightHeader() {
  return (
    <div className="relative flex items-center gap-2" style={{ color: INSIGHT_BLUE }}>
      <LightbulbIcon className="size-4 shrink-0" aria-hidden="true" />
      <h3 className="text-sm font-bold" style={{ color: INSIGHT_BLUE }}>
        بینش کلیدی
      </h3>
    </div>
  );
}

export function AiInsight({
  headline,
  detail,
  action,
  status = "idle",
  loadingLabel = "در حال تحلیل داده‌ها…",
  layout = "split",
  surface = "banner",
  className,
}: AiInsightProps) {
  const isAi = status !== "error";
  const ActionIcon = isAi ? SparklesIcon : TargetIcon;
  const actionLabel = isAi ? "پیشنهاد هوشمند: " : "پیشنهاد: ";
  const actionText =
    action || (status === "streaming" || status === "idle" ? loadingLabel : "");
  const shell = surface === "panel" ? "rail-panel" : "rail-banner";

  const actionBlock = (
    <div
      className={cn(
        "relative flex gap-2",
        layout === "stack" &&
          "mt-auto min-h-24 flex-1 rounded-lg border border-[var(--insight-line,var(--border))] bg-[var(--insight-wash,var(--muted))] p-2.5",
        layout === "split" &&
          "min-h-20 border-t border-[var(--insight-line,var(--border))] pt-3 md:border-s md:border-t-0 md:ps-3 md:pt-0"
      )}
    >
      <ActionIcon
        className="mt-0.5 size-4 shrink-0"
        style={{ color: INSIGHT_BLUE }}
        aria-hidden="true"
      />
      <p className="min-h-0 flex-1 text-xs leading-5 text-[var(--insight-ink,var(--foreground))] sm:text-sm sm:leading-6">
        <span className="font-semibold" style={{ color: INSIGHT_BLUE }}>
          {actionLabel}
        </span>
        <span aria-live="polite">
          {actionText}
          {status === "streaming" ? (
            <span
              className="ms-1 inline-block h-4 w-0.5 animate-pulse bg-current align-middle"
              aria-hidden="true"
            />
          ) : null}
        </span>
      </p>
    </div>
  );

  if (layout === "stack") {
    return (
      <aside
        className={cn(
          shell,
          "flex h-full min-h-0 flex-col gap-2.5 p-2.5 sm:p-3",
          className
        )}
        aria-label="بینش کلیدی"
      >
        <InsightHeader />
        <p className="relative text-sm leading-6 text-[var(--insight-ink,var(--foreground))]">
          {headline}
        </p>
        {detail ? (
          <p className="relative text-xs leading-5 text-[var(--insight-subtle,var(--muted-foreground))] sm:text-sm">
            {detail}
          </p>
        ) : null}
        {actionBlock}
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        shell,
        "grid gap-3 p-3 md:grid-cols-2",
        className
      )}
      aria-label="بینش کلیدی"
    >
      <div className="relative flex min-w-0 flex-col gap-2">
        <InsightHeader />
        <p className="text-sm font-semibold leading-6 text-[var(--insight-ink,var(--foreground))]">
          {headline}
        </p>
        {detail ? (
          <p className="text-xs leading-5 text-[var(--insight-subtle,var(--muted-foreground))]">
            {detail}
          </p>
        ) : null}
      </div>
      {actionBlock}
    </aside>
  );
}
