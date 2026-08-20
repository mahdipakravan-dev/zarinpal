import { Children, useId, type ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function AnalysisSlot({
  title,
  description,
  children,
  className,
  ...props
}: ComponentProps<"section"> & {
  title: string;
  description?: string;
}) {
  const headingId = useId();
  const empty = Children.count(children) === 0;

  return (
    <section
      aria-labelledby={headingId}
      data-slot="analysis-slot"
      data-empty={empty ? "true" : "false"}
      className={cn(
        "rail-panel flex min-h-36 flex-col gap-2.5 p-2.5 text-card-foreground sm:p-3",
        "data-[empty=true]:border-dashed data-[empty=true]:bg-card/70",
        className
      )}
      {...props}
    >
      <header className="flex flex-col gap-1">
        <h2 id={headingId} className="font-heading text-sm font-medium">
          {title}
        </h2>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <div className="flex min-h-20 flex-1 flex-col">
        {empty ? (
          <div
            aria-hidden="true"
            className="rail-empty-grid min-h-20 flex-1 rounded-md"
          />
        ) : (
          children
        )}
      </div>
    </section>
  );
}
