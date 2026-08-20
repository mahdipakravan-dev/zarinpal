"use client";

import { BellIcon, TicketIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function DashboardHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-20 flex shrink-0 items-center justify-between gap-3 border-b px-3 backdrop-blur-sm",
        compact ? "h-11 bg-background/95" : "h-12 bg-background/90 md:px-4"
      )}
      dir="ltr"
    >
      <div className="flex items-center gap-2" dir="ltr">
        <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
          <TicketIcon data-icon="inline-start" />
          <span className="font-semibold">تیکت‌ها</span>
        </Button>

        <Button variant="ghost" size="icon-sm" className="relative">
          <BellIcon />
          <Badge className="absolute -top-1 -right-1 size-5 justify-center rounded-full p-0 text-[10px]">
            ۱۳
          </Badge>
          <span className="sr-only">اعلان‌ها</span>
        </Button>
      </div>

      <div className="flex items-center gap-2" aria-label="زرین‌پال" dir="rtl">
        <img
          src="/zarinpal-logo.svg"
          alt="زرین‌پال"
          className={cn(compact ? "h-6 w-auto" : "h-7 w-auto")}
        />
        <SidebarTrigger className="md:hidden" />
      </div>
    </header>
  );
}
