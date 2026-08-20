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
  { icon: string; change: string; ring: string }
> = {
  emerald: {
    icon: "bg-emerald-500/10 text-emerald-600",
    change: "text-emerald-600",
    ring: "ring-emerald-500/20",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-600",
    change: "text-violet-600",
    ring: "ring-violet-500/20",
  },
  blue: {
    icon: "bg-blue-500/10 text-blue-600",
    change: "text-blue-600",
    ring: "ring-blue-500/20",
  },
  amber: {
    icon: "bg-amber-500/10 text-amber-600",
    change: "text-amber-600",
    ring: "ring-amber-500/20",
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
        "flex min-h-44 flex-col gap-3 rounded-xl bg-card p-4 ring-1 ring-foreground/10",
        styles.ring
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div
            className={cn(
              "flex size-9 items-center justify-center rounded-full",
              styles.icon
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
          </div>
          <h3 className="text-sm font-medium text-muted-foreground">{kpi.label}</h3>
        </div>
        <Sparkline data={kpi.trend} accent={kpi.accent} />
      </div>

      <div className="mt-auto flex flex-col gap-1">
        <p className="font-heading text-2xl font-semibold tracking-tight">
          {kpi.value}
          {kpi.unit ? (
            <span className="ms-1 text-sm font-normal text-muted-foreground">
              {kpi.unit}
            </span>
          ) : null}
        </p>
        <p className={cn("flex items-center gap-1 text-sm font-medium", styles.change)}>
          <TrendingUpIcon className="size-3.5" aria-hidden="true" />
          <span>
            {kpi.change}
            <span className="font-normal text-muted-foreground">{changeSuffix}</span>
          </span>
        </p>
        <p className="text-xs text-muted-foreground">
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
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5"
    >
      {children}
    </section>
  );
}
