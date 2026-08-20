"use client";

import { useState, type ComponentType } from "react";
import {
  ChartNoAxesColumnIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  GitGraphIcon,
  HeartPulseIcon,
  LogOutIcon,
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
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export type { DashboardPage };

type NavItem = {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  page?: DashboardPage;
};

const growthItems: NavItem[] = [
  {
    id: "sales-pulse",
    label: "نبض فروش",
    icon: HeartPulseIcon,
    page: "sales-pulse",
  },
  {
    id: "buyer-loyalty",
    label: "وفاداری خریداران",
    icon: RepeatIcon,
    page: "buyer-loyalty",
  },
  {
    id: "peer-position",
    label: "جایگاه همتا",
    icon: ChartNoAxesColumnIcon,
    page: "peer-position",
  },
  {
    id: "payment-health",
    label: "سلامت پرداخت",
    icon: WaypointsIcon,
    page: "payment-health",
  },
  {
    id: "business-graph",
    label: "گراف کسب‌وکار",
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
    <SidebarGroup className="px-2 py-1">
      <SidebarGroupLabel className="h-7 px-3 text-[10px] font-semibold text-sidebar-foreground/55">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className="gap-1">
          {items.map(({ id, label: itemLabel, icon: Icon, page }) => {
            const isActive = page ? activePage === page : false;

            return (
              <SidebarMenuItem key={id}>
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip={{ children: itemLabel, side: "left" }}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/72 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border active:bg-muted motion-reduce:transition-none",
                    "data-active:bg-muted data-active:text-sidebar-foreground",
                    "group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden"
                  )}
                  onClick={() => page && onNavigate(page)}
                >
                  <Icon />
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

function SidebarCollapseControl() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <button
      type="button"
      aria-label={state === "expanded" ? "جمع کردن سایدبار" : "باز کردن سایدبار"}
      title={state === "expanded" ? "جمع کردن سایدبار" : "باز کردن سایدبار"}
      onClick={toggleSidebar}
      className="absolute top-1/2 -left-3 z-10 hidden size-7 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-sidebar-border bg-sidebar text-sidebar-foreground shadow-[0_8px_20px_rgba(15,23,42,0.10)] transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sidebar-border motion-reduce:transition-none md:flex"
    >
      <ChevronLeftIcon
        className={cn(
          "size-4 transition-transform duration-200 motion-reduce:transition-none",
          state === "collapsed" && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  );
}

export function AppSidebar({ activePage, onNavigate }: AppSidebarProps) {
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <Sidebar
      side="right"
      variant="floating"
      collapsible="icon"
      className="zarin-clean-sidebar"
    >
      <SidebarCollapseControl />

      <SidebarHeader className="gap-2.5 p-3 group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:hidden">
          <div className="flex min-w-0 items-center group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-extrabold text-sidebar-foreground">داشبورد زرین‌پال</p>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            aria-expanded={accountOpen}
            aria-controls="sidebar-account-menu"
            onClick={() => setAccountOpen((open) => !open)}
            className="flex w-full cursor-pointer items-center gap-3 rounded-xl bg-muted/60 p-2.5 text-start ring-1 ring-sidebar-border transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1.5"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-sidebar-border bg-sidebar text-sidebar-foreground group-data-[collapsible=icon]:size-8">
              <WalletIcon />
            </div>
            <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
              <p className="truncate text-sm font-bold text-sidebar-foreground">مهدی پاکروان</p>
              <p className="truncate text-xs text-muted-foreground" dir="ltr">
                zarinp.al/mahdipakravan
              </p>
            </div>
            <ChevronDownIcon
              className={cn(
                "shrink-0 text-muted-foreground transition-transform duration-200 motion-reduce:transition-none group-data-[collapsible=icon]:hidden",
                accountOpen && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>

          <div
            id="sidebar-account-menu"
            className={cn(
              "grid transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none group-data-[collapsible=icon]:hidden",
              accountOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col gap-1 rounded-lg border border-sidebar-border bg-sidebar p-1">
                <button
                  type="button"
                  className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-start text-xs font-medium text-sidebar-foreground/78 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none"
                >
                  <WalletIcon className="size-3.5" aria-hidden="true" />
                  <span>جزئیات پذیرنده</span>
                </button>
                <button
                  type="button"
                  className="flex h-8 cursor-pointer items-center gap-2 rounded-md px-2 text-start text-xs font-medium text-sidebar-foreground/78 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring/35 motion-reduce:transition-none"
                >
                  <SettingsIcon className="size-3.5" aria-hidden="true" />
                  <span>تنظیمات حساب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarSeparator className="mx-5 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-8" />

      <SidebarContent className="pt-2">
        <nav aria-label="بخش‌های داشبورد">
          <NavGroup
            label="رشد کسب‌وکار"
            items={growthItems}
            activePage={activePage}
            onNavigate={onNavigate}
          />
        </nav>
      </SidebarContent>

      <SidebarFooter className="mt-auto gap-1 p-3">
        <SidebarSeparator className="mx-2 group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:w-8" />
        <SidebarMenu className="gap-1 pt-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{ children: "تنظیمات زرین‌لینک", side: "left" }}
              className="h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/72 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden"
            >
              <SettingsIcon />
              <span>تنظیمات زرین‌لینک</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={{ children: "خروج", side: "left" }}
              className="h-10 cursor-pointer items-center gap-2 rounded-lg px-3 text-[13px] font-medium text-sidebar-foreground/58 transition-colors duration-200 hover:bg-muted hover:text-sidebar-foreground focus-visible:ring-sidebar-border group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:[&>span]:hidden"
            >
              <LogOutIcon />
              <span>خروج</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
