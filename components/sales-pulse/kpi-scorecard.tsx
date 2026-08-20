import type { ReactNode } from "react";
import {
  CheckCircle2Icon,
  ReceiptIcon,
  ShoppingBasketIcon,
  TrendingUpIcon,
  UsersIcon,
  WalletIcon,
  type LucideIcon,
} from "lucide-react";

import type { SalesPulseKpi } from "@/lib/sales-pulse-mock-data";
import { cn } from "@/lib/utils";

import { Sparkline } from "@/components/sales-pulse/sparkline";

const iconMap: Record<SalesPulseKpi["icon"], LucideIcon> = {
  receipt: ReceiptIcon,
  wallet: WalletIcon,
  basket: ShoppingBasketIcon,
  check: CheckCircle2Icon,
  users: UsersIcon,
};

const accentStyles: Record<
  SalesPulseKpi["accent"],
  { icon: string; change: string }
> = {
  emerald: {
    icon: "text-[var(--pulse-good)]",
    change: "text-[var(--pulse-good)]",
  },
  violet: {
    icon: "text-[var(--pulse-violet)]",
    change: "text-[var(--pulse-violet)]",
  },
  blue: {
    icon: "text-[var(--pulse-blue)]",
    change: "text-[var(--pulse-blue)]",
  },
  amber: {
    icon: "text-[var(--pulse-amber)]",
    change: "text-[var(--pulse-amber)]",
  },
};

export function KpiScorecard({ kpi }: { kpi: SalesPulseKpi }) {
  const Icon = iconMap[kpi.icon];
  const styles = accentStyles[kpi.accent];
  const changeSuffix =
    kpi.changeType === "points" ? " واحد درصدی نسبت به baseline" : " نسبت به baseline";

  return (
    <article
      className={cn(
        "rail-panel rail-panel-interactive flex flex-col gap-2 p-2.5 [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)]"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col gap-1.5">
          <div
            className={cn(
              "flex size-8 items-center justify-center rounded-md border border-[var(--pulse-line)]",
              styles.icon
            )}
          >
            <Icon className="size-3.5" aria-hidden="true" />
          </div>
          <h3 className="text-[11px] font-semibold text-[var(--pulse-subtle)]">{kpi.label}</h3>
        </div>
        <Sparkline data={kpi.trend} accent={kpi.accent} />
      </div>

      <div className="mt-auto flex flex-col gap-0.5">
        <p className="text-lg font-extrabold tracking-tight text-[var(--pulse-ink)] sm:text-xl">
          {kpi.value}
          {kpi.unit ? (
            <span className="ms-1 text-xs font-normal text-[var(--pulse-subtle)] sm:text-sm">
              {kpi.unit}
            </span>
          ) : null}
        </p>
        <p className={cn("flex items-center gap-1 text-xs font-medium sm:text-sm", styles.change)}>
          <TrendingUpIcon className="size-3.5 shrink-0" aria-hidden="true" />
          <span>
            {kpi.change}
            <span className="font-normal text-[var(--pulse-subtle)]">{changeSuffix}</span>
          </span>
        </p>
        <p className="text-[11px] text-[var(--pulse-subtle)]">
          {kpi.baselineLabel}: {kpi.baseline}
          {kpi.unit && kpi.id !== "sales-amount" && kpi.id !== "avg-basket"
            ? ""
            : kpi.unit
              ? ` ${kpi.unit}`
              : ""}
        </p>
      </div>
    </article>
  );
}

export function KpiScorecardGrid({ children }: { children: ReactNode }) {
  return (
    <section
      aria-label="شاخص‌های کلیدی عملکرد"
      className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-5"
    >
      {children}
    </section>
  );
}
