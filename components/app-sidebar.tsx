"use client";

import {
  ArrowLeftRightIcon,
  ChevronLeftIcon,
  LayoutDashboardIcon,
  Link2Icon,
  ReceiptIcon,
  SettingsIcon,
  TagIcon,
  WalletIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export type DashboardPage = "transactions" | "discounts" | "links";

const navItems: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  page?: DashboardPage;
}[] = [
  { id: "dashboard", label: "پیشخوان", icon: LayoutDashboardIcon },
  { id: "transactions", label: "تراکنش‌ها", icon: ArrowLeftRightIcon, page: "transactions" },
  { id: "settlements", label: "تسویه‌حساب", icon: ReceiptIcon },
  { id: "discounts", label: "کدهای تخفیف", icon: TagIcon, page: "discounts" },
  { id: "links", label: "لینک‌های پرداخت", icon: Link2Icon, page: "links" },
];

type AppSidebarProps = {
  activePage: DashboardPage;
  onNavigate: (page: DashboardPage) => void;
};

export function AppSidebar({ activePage, onNavigate }: AppSidebarProps) {
  return (
    <Sidebar side="right" variant="inset" collapsible="offcanvas">
      <SidebarHeader>
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-[#3158ff] to-primary px-3 py-3 text-primary-foreground shadow-lg shadow-primary/20">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
            <WalletIcon />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">مهدی پاکروان نوعیابی</p>
            <p className="truncate text-xs opacity-80" dir="ltr">
              zarinp.al/mahdipakravan
            </p>
          </div>
          <ChevronLeftIcon className="size-4 shrink-0 opacity-70" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ id, label, icon: Icon, page }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton
                    isActive={page ? activePage === page : false}
                    onClick={() => page && onNavigate(page)}
                  >
                    <Icon />
                    <span>{label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <SettingsIcon />
              <span>تنظیمات زرین‌لینک</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
