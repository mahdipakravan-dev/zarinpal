import * as React from "react";

import { cn } from "@/lib/utils";

export function PageHeading({
  title,
  subtitle,
  action,
  className,
  ...props
}: React.ComponentProps<"header"> & {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <header
      data-slot="page-heading"
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
