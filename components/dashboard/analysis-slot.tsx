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
        "flex min-h-52 flex-col gap-3 rounded-xl bg-card p-4 text-card-foreground ring-1 ring-foreground/10",
        "data-[empty=true]:border data-[empty=true]:border-dashed data-[empty=true]:border-border data-[empty=true]:bg-muted/25 data-[empty=true]:ring-0",
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
      <div className="flex min-h-32 flex-1 flex-col">
        {empty ? (
          <div
            aria-hidden="true"
            className="min-h-32 flex-1 rounded-lg bg-background/70 ring-1 ring-inset ring-foreground/6"
          />
        ) : (
          children
        )}
      </div>
    </section>
  );
}
