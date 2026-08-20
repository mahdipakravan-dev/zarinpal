import * as React from "react";

import { cn } from "@/lib/utils";

import { PageHeading } from "@/components/dashboard/page-heading";

export function InsightPage({
  title,
  story,
  note,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  title: string;
  story: string;
  note?: string;
}) {
  return (
    <div
      data-slot="insight-page"
      className={cn("flex flex-col gap-2.5", className)}
      {...props}
    >
      <PageHeading title={title} subtitle={story} />
      {note ? (
        <p className="max-w-3xl text-xs leading-5 text-muted-foreground sm:text-sm">{note}</p>
      ) : null}
      <div className="grid grid-cols-1 gap-2.5 md:grid-cols-2">{children}</div>
    </div>
  );
}
