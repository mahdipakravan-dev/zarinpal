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
        "flex flex-col gap-2.5 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
      {...props}
    >
      <div className="flex min-w-0 flex-col gap-1">
        <h1 className="text-lg font-extrabold tracking-tight sm:text-xl">{title}</h1>
        {subtitle ? (
          <p className="max-w-2xl text-xs leading-5 text-muted-foreground sm:text-sm">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
