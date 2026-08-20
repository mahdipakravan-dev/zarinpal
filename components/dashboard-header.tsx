"use client";

import { BellIcon, TicketIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur-sm">
      <SidebarTrigger className="md:hidden" />

      <div className="flex items-center gap-2">
        <span className="text-xl font-black tracking-tight">زرین‌پال</span>
        <span className="inline-block size-4 skew-x-[-12deg] rounded-sm bg-[#ffd400]" />
      </div>

      <div className="ms-auto flex items-center gap-2" dir="ltr">
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

        <Avatar size="sm">
          <AvatarFallback className="bg-muted text-muted-foreground">م</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
