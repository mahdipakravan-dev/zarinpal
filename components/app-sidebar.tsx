"use client";

import type { ComponentType } from "react";
import {
  ChartNoAxesColumnIcon,
  ChevronLeftIcon,
  GitGraphIcon,
  HeartPulseIcon,
  LayoutDashboardIcon,
  RepeatIcon,
  SettingsIcon,
  WalletIcon,
  WaypointsIcon,
} from "lucide-react";

import { type DashboardPage } from "@/lib/dashboard";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export type { DashboardPage };

type NavItem = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  page?: DashboardPage;
};

const growthItems: NavItem[] = [
  {
    id: "dashboard",
    label: "پیشخوان",
    icon: LayoutDashboardIcon,
    page: "dashboard",
  },

  {
    id: "sales-pulse",
    label: "نبض فروش و مناسبت‌ها",
    icon: HeartPulseIcon,
    page: "sales-pulse",
  },
  {
    id: "buyer-loyalty",
    label: "رفتار و وفاداری خریداران",
    icon: RepeatIcon,
    page: "buyer-loyalty",
  },
  {
    id: "peer-position",
    label: "جایگاه در میان کسب‌وکارهای مشابه",
    icon: ChartNoAxesColumnIcon,
    page: "peer-position",
  },
  {
    id: "payment-health",
    label: "سلامت مسیر پرداخت",
    icon: WaypointsIcon,
    page: "payment-health",
  },
    {
    id: "business-graph",
    label: "گراف هوشمند کسب و کار",
    icon: GitGraphIcon,
    page: "business-graph",
  },
];

type AppSidebarProps = {
  activePage: DashboardPage;
  onNavigate: (page: DashboardPage) => void;
};

function NavGroup({
  label,
  items,
  activePage,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  activePage: DashboardPage;
  onNavigate: (page: DashboardPage) => void;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map(({ id, label: itemLabel, icon: Icon, page }) => {
            const isActive = page ? activePage === page : false;

            return (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip={itemLabel}
                  aria-current={isActive ? "page" : undefined}
                  className="h-auto min-h-11 items-start py-2 whitespace-normal [&>span:last-child]:overflow-visible [&>span:last-child]:text-wrap [&>span:last-child]:whitespace-normal"
                  onClick={() => page && onNavigate(page)}
                >
                  <Icon className="mt-0.5" />
                  <span>{itemLabel}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

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
        <nav aria-label="بخش‌های داشبورد">
          <NavGroup
            label="رشد کسب‌وکار"
            items={growthItems}
            activePage={activePage}
            onNavigate={onNavigate}
          />
        </nav>
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
