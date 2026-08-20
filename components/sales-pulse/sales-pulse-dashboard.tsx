"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { ActivityIcon } from "lucide-react";

import { CumulativeTrendChart } from "@/components/sales-pulse/cumulative-trend-chart";
import {
  GrowthBreakdownBlocks,
  GrowthDonut,
  GrowthWaterfall,
} from "@/components/sales-pulse/growth-charts";
import { HourlyImpactChart } from "@/components/sales-pulse/hourly-impact-chart";
import { ImpactHeatmap } from "@/components/sales-pulse/impact-heatmap";
import { InsightPanel } from "@/components/sales-pulse/insight-panel";
import { KpiScorecard, KpiScorecardGrid } from "@/components/sales-pulse/kpi-scorecard";
import {
  DataLimitNote,
  PeriodToolbar,
} from "@/components/sales-pulse/period-toolbar";
import { QuickComparisonList } from "@/components/sales-pulse/quick-comparison-list";
import {
  SALES_PULSE_CUMULATIVE_TREND,
  SALES_PULSE_GROWTH_FACTORS,
  SALES_PULSE_HEATMAP,
  SALES_PULSE_HOURLY_IMPACT,
  SALES_PULSE_INSIGHT,
  SALES_PULSE_KPIS,
  SALES_PULSE_QUICK_COMPARISON,
  SALES_PULSE_TOTAL_GROWTH,
} from "@/lib/sales-pulse-mock-data";
import { cn } from "@/lib/utils";

const pulseTheme = {
  "--pulse-ink": "#17191d",
  "--pulse-subtle": "#68707d",
  "--pulse-line": "#e6e8ec",
  "--pulse-wash": "#f7f8fa",
  "--pulse-blue": "#174fd6",
  "--pulse-blue-soft": "#f2f5fb",
  "--pulse-blue-line": "#d7deeb",
  "--pulse-violet": "#174fd6",
  "--pulse-violet-soft": "#f2f5fb",
  "--pulse-violet-line": "#d7deeb",
  "--pulse-teal": "#0f9a84",
  "--pulse-good": "#119a6c",
  "--pulse-warn": "#d44949",
  "--pulse-amber": "#e8892d",
  "--pulse-amber-soft": "#fbf7f0",
  "--pulse-amber-line": "#eadfce",
  "--pulse-yellow": "#ffd60a",
} as CSSProperties;

const panelClass =
  "rail-panel rail-panel-interactive [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)]";

function SalesPulseHeader({ controls }: { controls: ReactNode }) {
  return (
    <header className="flex min-w-0 flex-col gap-2.5 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--pulse-yellow)] text-[var(--pulse-ink)] sm:size-11">
          <ActivityIcon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-lg font-extrabold tracking-tight text-[var(--pulse-ink)] sm:text-xl">
            نبض فروش و مناسبت‌ها
          </h1>
          <p className="text-xs text-[var(--pulse-subtle)] sm:text-sm">
            انحراف مناسبت نسبت به baseline · کنترل مبلغ، ساعت و ترکیب خریدار
          </p>
        </div>
      </div>

      <div className="w-full shrink-0 lg:w-auto">
        {controls}
      </div>
    </header>
  );
}

export function SalesPulseDashboard() {
  const [merchantId, setMerchantId] = useState("merchant-a");

  function handleMerchantChange(value: string | null) {
    if (value) setMerchantId(value);
  }

  return (
    <div className="flex flex-col gap-2 text-[var(--pulse-ink)]" style={pulseTheme}>
      <SalesPulseHeader
        controls={
          <PeriodToolbar
            variant="inline"
            merchantId={merchantId}
            onMerchantChange={handleMerchantChange}
          />
        }
      />

      <KpiScorecardGrid>
        {SALES_PULSE_KPIS.map((kpi) => (
          <KpiScorecard key={kpi.id} kpi={kpi} />
        ))}
      </KpiScorecardGrid>

      <section
        aria-labelledby="growth-breakdown-heading"
        className="grid grid-cols-1 gap-2 lg:grid-cols-2"
      >
        <article className={cn(panelClass, "flex flex-col gap-2.5 p-2.5 sm:p-3")}>
          <header>
            <h2
              id="growth-breakdown-heading"
              className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base"
            >
              تجزیه رشد مناسبت
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              اثر تعداد خرید، سبد، موفقیت پرداخت و سهم کارت‌های بازگشتی
            </p>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[7.5rem_1fr] lg:grid-cols-[8rem_1fr]">
            <GrowthDonut total={SALES_PULSE_TOTAL_GROWTH} />
            <GrowthWaterfall
              factors={SALES_PULSE_GROWTH_FACTORS}
              total={SALES_PULSE_TOTAL_GROWTH}
            />
          </div>

          <GrowthBreakdownBlocks
            factors={SALES_PULSE_GROWTH_FACTORS}
            total={SALES_PULSE_TOTAL_GROWTH}
          />
        </article>

        <InsightPanel
          headline={SALES_PULSE_INSIGHT.headline}
          bullets={SALES_PULSE_INSIGHT.bullets}
          action={SALES_PULSE_INSIGHT.action}
          stats={SALES_PULSE_INSIGHT.stats}
          trend={SALES_PULSE_CUMULATIVE_TREND}
        />
      </section>

      <section
        aria-label="نمودارهای تکمیلی"
        className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3"
      >
        <article className={cn(panelClass, "p-2.5 sm:p-3 md:col-span-2 xl:col-span-2")}>
          <header className="mb-2">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              روند تجمعی فروش موفق
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              واقعی در برابر baseline در طول بازه مناسبت
            </p>
          </header>
          <CumulativeTrendChart data={SALES_PULSE_CUMULATIVE_TREND} />
        </article>

        <article className={cn(panelClass, "p-2.5 sm:p-3")}>
          <QuickComparisonList items={SALES_PULSE_QUICK_COMPARISON} />
        </article>

        <article className={cn(panelClass, "flex flex-col p-2.5 sm:p-3")}>
          <header className="mb-2">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              توزیع اثر رشد بر اساس ساعت
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              سهم خالص هر بازه ساعتی از رشد کل
            </p>
          </header>
          <HourlyImpactChart data={SALES_PULSE_HOURLY_IMPACT} />
        </article>

        <article
          className={cn(
            panelClass,
            "flex flex-col overflow-x-auto p-2.5 sm:p-3 md:col-span-2"
          )}
        >
          <header className="mb-2">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              ماتریس اثر خالص رشد
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              شدت اثر بر اساس روز هفته و بازه ساعتی
            </p>
          </header>
          <ImpactHeatmap values={SALES_PULSE_HEATMAP} />
        </article>
      </section>

      <DataLimitNote />
    </div>
  );
}
