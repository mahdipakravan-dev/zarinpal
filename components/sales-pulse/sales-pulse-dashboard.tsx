"use client";

import { useState, type CSSProperties } from "react";
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
  BaselineNote,
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
  "--pulse-ink": "#1a2148",
  "--pulse-subtle": "#6b7590",
  "--pulse-line": "#e4e9f3",
  "--pulse-wash": "#f6f8fc",
  "--pulse-violet": "#5b4cdb",
  "--pulse-violet-soft": "#efecff",
  "--pulse-violet-line": "#d5ceff",
  "--pulse-teal": "#0f9a84",
  "--pulse-good": "#119a6c",
  "--pulse-amber": "#e8892d",
  "--pulse-amber-soft": "#fff6ea",
  "--pulse-amber-line": "#ffe0b5",
} as CSSProperties;

const panelClass =
  "rounded-xl border border-[var(--pulse-line)] bg-card shadow-[0_12px_36px_rgba(26,33,72,0.05)] transition-shadow duration-200 hover:shadow-[0_16px_40px_rgba(26,33,72,0.08)] motion-reduce:transition-none";

function SalesPulseHeader() {
  return (
    <header className="flex min-w-0 items-center gap-3">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--pulse-violet)] text-white shadow-[0_10px_24px_rgba(91,76,219,0.25)] sm:size-11">
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
    </header>
  );
}

export function SalesPulseDashboard() {
  const [periodId, setPeriodId] = useState("nowruz-1403");
  const [merchantId, setMerchantId] = useState("merchant-a");

  function handlePeriodChange(value: string | null) {
    if (value) setPeriodId(value);
  }

  function handleMerchantChange(value: string | null) {
    if (value) setMerchantId(value);
  }

  return (
    <div className="flex flex-col gap-3 text-[var(--pulse-ink)]" style={pulseTheme}>
      <SalesPulseHeader />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,16rem)]">
        <PeriodToolbar
          periodId={periodId}
          merchantId={merchantId}
          onPeriodChange={handlePeriodChange}
          onMerchantChange={handleMerchantChange}
        />
        <BaselineNote />
      </div>

      <KpiScorecardGrid>
        {SALES_PULSE_KPIS.map((kpi) => (
          <KpiScorecard key={kpi.id} kpi={kpi} />
        ))}
      </KpiScorecardGrid>

      <section
        aria-labelledby="growth-breakdown-heading"
        className="grid grid-cols-1 gap-3 lg:grid-cols-2"
      >
        <article className={cn(panelClass, "flex flex-col gap-3 p-3 sm:p-4")}>
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

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[7.5rem_1fr] lg:grid-cols-[8rem_1fr]">
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
        />
      </section>

      <section
        aria-label="نمودارهای تکمیلی"
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      >
        <article className={cn(panelClass, "p-3 sm:p-4 md:col-span-2 xl:col-span-2")}>
          <header className="mb-3">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              روند تجمعی فروش موفق
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              واقعی در برابر baseline در طول بازه مناسبت
            </p>
          </header>
          <CumulativeTrendChart data={SALES_PULSE_CUMULATIVE_TREND} />
        </article>

        <article className={cn(panelClass, "p-3 sm:p-4")}>
          <QuickComparisonList items={SALES_PULSE_QUICK_COMPARISON} />
        </article>

        <article className={cn(panelClass, "p-3 sm:p-4")}>
          <header className="mb-3">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              توزیع اثر رشد بر اساس ساعت
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              سهم خالص هر بازه ساعتی از رشد کل
            </p>
          </header>
          <HourlyImpactChart data={SALES_PULSE_HOURLY_IMPACT} />
        </article>

        <article className={cn(panelClass, "overflow-x-auto p-3 sm:p-4 md:col-span-2")}>
          <header className="mb-3">
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
