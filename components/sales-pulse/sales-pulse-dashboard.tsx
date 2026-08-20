"use client";

import { useState } from "react";

import { PageHeading } from "@/components/dashboard/page-heading";
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

export function SalesPulseDashboard() {
  const [periodId, setPeriodId] = useState("nowruz-1403");
  const [merchantId, setMerchantId] = useState("merchant-a");

  return (
    <div className="flex flex-col gap-6">
      <PageHeading
        title="نبض فروش و مناسبت‌ها"
        subtitle="انحراف عملکرد در بازه مناسبت نسبت به baseline مورد انتظار"
      />

      <p className="max-w-3xl text-sm text-muted-foreground">
        مقایسه با همان روزهای هفته، با کنترل مبلغ، ساعت و ترکیب خریدار تا حد
        ممکن. واحد مبلغ‌ها ریال است.
      </p>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_18rem]">
        <PeriodToolbar
          periodId={periodId}
          merchantId={merchantId}
          onPeriodChange={setPeriodId}
          onMerchantChange={setMerchantId}
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
        className="grid grid-cols-1 gap-4 xl:grid-cols-2"
      >
        <article className="flex flex-col gap-4 rounded-xl bg-card p-4 ring-1 ring-foreground/10 md:p-5">
          <header>
            <h2 id="growth-breakdown-heading" className="font-heading text-base font-medium">
              تجزیه رشد مناسبت
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              رشد فروش به اثر تعداد خرید، متوسط سبد، نرخ موفقیت و سهم کارت‌های
              بازگشتی شکسته می‌شود.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[9rem_1fr]">
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
        className="grid grid-cols-1 gap-4 lg:grid-cols-3"
      >
        <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 lg:col-span-2">
          <header className="mb-4">
            <h2 className="font-heading text-base font-medium">
              روند تجمعی فروش موفق
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              مقایسه عملکرد واقعی با baseline در طول بازه مناسبت
            </p>
          </header>
          <CumulativeTrendChart data={SALES_PULSE_CUMULATIVE_TREND} />
        </article>

        <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
          <QuickComparisonList items={SALES_PULSE_QUICK_COMPARISON} />
        </article>

        <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
          <header className="mb-4">
            <h2 className="font-heading text-base font-medium">
              توزیع اثر رشد بر اساس ساعت
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              سهم خالص هر بازه ساعتی از رشد کل فروش
            </p>
          </header>
          <HourlyImpactChart data={SALES_PULSE_HOURLY_IMPACT} />
        </article>

        <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 lg:col-span-2">
          <header className="mb-4">
            <h2 className="font-heading text-base font-medium">
              ماتریس اثر خالص رشد
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              شدت اثر رشد بر اساس روز هفته و بازه ساعتی
            </p>
          </header>
          <ImpactHeatmap values={SALES_PULSE_HEATMAP} />
        </article>
      </section>

      <DataLimitNote />
    </div>
  );
}
