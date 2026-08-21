"use client";

import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import { ActivityIcon } from "lucide-react";

import { CumulativeTrendChart } from "@/components/sales-pulse/cumulative-trend-chart";
import { CalendarImpactGuide } from "@/components/sales-pulse/calendar-impact-guide";
import {
  GrowthDonut,
  GrowthFormulaInfo,
  GrowthWaterfall,
} from "@/components/sales-pulse/growth-charts";
import { HourlyImpactChart } from "@/components/sales-pulse/hourly-impact-chart";
import { ImpactHeatmap } from "@/components/sales-pulse/impact-heatmap";
import { AiInsight } from "@/components/dashboard/ai-insight";
import { KpiScorecard, KpiScorecardGrid } from "@/components/sales-pulse/kpi-scorecard";
import {
  DataLimitNote,
  PeriodToolbar,
} from "@/components/sales-pulse/period-toolbar";
import { QuickComparisonList } from "@/components/sales-pulse/quick-comparison-list";
import { Skeleton } from "@/components/ui/skeleton";
import { useLiveAiAction } from "@/hooks/use-live-ai-action";
import {
  SALES_PULSE_INDEX,
  salesPulseMerchantDataUrl,
  type SalesPulseKpi,
  type SalesPulseMerchantData,
  type SalesPulseResult,
} from "@/lib/sales-pulse-data";
import { buildCustomSalesPulseResult } from "@/lib/sales-pulse-custom-range";
import { formatPersianNumber } from "@/lib/format";
import { streamSalesPulseAction } from "@/lib/sales-pulse-ai-stream";
import { cn } from "@/lib/utils";

const pulseTheme = {
  "--pulse-ink": "#19191a",
  "--pulse-subtle": "#19191a",
  "--pulse-line": "#e4e9f3",
  "--pulse-wash": "#f6f8fc",
  "--pulse-blue": "#174fd6",
  "--pulse-blue-soft": "#eaf1ff",
  "--pulse-blue-line": "#c8d8ff",
  "--pulse-violet": "#174fd6",
  "--pulse-violet-soft": "#eaf1ff",
  "--pulse-violet-line": "#c8d8ff",
  "--pulse-teal": "#0f9a84",
  "--pulse-good": "#119a6c",
  "--pulse-warn": "#d44949",
  "--pulse-amber": "#e8892d",
  "--pulse-amber-soft": "#fff6ea",
  "--pulse-amber-line": "#ffe0b5",
  "--pulse-yellow": "#ffd60a",
  "--insight-ink": "#19191a",
  "--insight-subtle": "#19191a",
  "--insight-line": "#e4e9f3",
  "--insight-wash": "#f6f8fc",
} as CSSProperties;

const panelClass =
  "rail-panel rail-panel-interactive [--rail-accent:var(--pulse-blue)] [--rail-line:var(--pulse-line)]";

const dataMinDate = new Date(2026, 0, 1);
const dataMaxDate = new Date(2026, 5, 30);

function localDateKey(date: Date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map((value, index) => (index === 0 ? String(value) : String(value).padStart(2, "0")))
    .join("-");
}

function formatSigned(value: number, suffix = ""): string {
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${formatPersianNumber(value, { maximumFractionDigits: 1 })}${suffix}`;
}

function salesScale(value: number, baseline: number) {
  const largest = Math.max(Math.abs(value), Math.abs(baseline));
  if (largest >= 10_000_000_000) {
    return { divisor: 10_000_000_000, unit: "میلیارد تومان" };
  }
  if (largest >= 10_000_000) {
    return { divisor: 10_000_000, unit: "میلیون تومان" };
  }
  return { divisor: 10, unit: "تومان" };
}

function formatSalesPulseKpis(result: SalesPulseResult): SalesPulseKpi[] {
  const sales = result.kpis.salesAmount;
  const salesUnit = salesScale(sales.value, sales.baseline);
  const count = result.kpis.successfulCount;
  const basket = result.kpis.avgBasket;
  const success = result.kpis.successRate;
  const returning = result.kpis.returningShare;

  return [
    {
      id: "successful-count",
      label: "تعداد خرید موفق",
      value: formatPersianNumber(count.value, { maximumFractionDigits: 0 }),
      change: formatSigned(count.change, "٪"),
      changeType: "percent",
      baseline: formatPersianNumber(count.baseline, { maximumFractionDigits: 0 }),
      baselineLabel: "میانگین مشابه",
      trend: count.trend,
      accent: "emerald",
      icon: "receipt",
    },
    {
      id: "sales-amount",
      label: "مبلغ فروش موفق",
      value: formatPersianNumber(sales.value / salesUnit.divisor, { maximumFractionDigits: 2 }),
      unit: salesUnit.unit,
      change: formatSigned(sales.change, "٪"),
      changeType: "percent",
      baseline: formatPersianNumber(sales.baseline / salesUnit.divisor, {
        maximumFractionDigits: 2,
      }),
      baselineLabel: "میانگین مشابه",
      trend: sales.trend,
      accent: "violet",
      icon: "wallet",
    },
    {
      id: "avg-basket",
      label: "متوسط مبلغ هر خرید",
      value: formatPersianNumber(basket.value / 10, { maximumFractionDigits: 0 }),
      unit: "تومان",
      change: formatSigned(basket.change, "٪"),
      changeType: "percent",
      baseline: formatPersianNumber(basket.baseline / 10, { maximumFractionDigits: 0 }),
      baselineLabel: "میانگین مشابه",
      trend: basket.trend,
      accent: "blue",
      icon: "basket",
    },
    {
      id: "success-rate",
      label: "نرخ موفقیت پرداخت",
      value: `${formatPersianNumber(success.value, { maximumFractionDigits: 1 })}٪`,
      change: formatSigned(success.change),
      changeType: "points",
      baseline: `${formatPersianNumber(success.baseline, { maximumFractionDigits: 1 })}٪`,
      baselineLabel: "میانگین مشابه",
      trend: success.trend,
      accent: "emerald",
      icon: "check",
    },
    {
      id: "returning-share",
      label: "سهم مشتریان بازگشتی",
      value: `${formatPersianNumber(returning.value, { maximumFractionDigits: 1 })}٪`,
      change: formatSigned(returning.change),
      changeType: "points",
      baseline: `${formatPersianNumber(returning.baseline, { maximumFractionDigits: 1 })}٪`,
      baselineLabel: "میانگین مشابه",
      trend: returning.trend,
      accent: "amber",
      icon: "users",
    },
  ];
}

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
            مقایسه با میانگین همان روز و ساعت در هشت هفته گذشته
          </p>
        </div>
      </div>

      <div className="w-full shrink-0 lg:w-auto">
        {controls}
      </div>
    </header>
  );
}

function SalesPulseLoading() {
  return (
    <div className="flex flex-col gap-2.5" aria-label="در حال بارگذاری داده نبض فروش">
      <section className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-3 xl:grid-cols-5">
        {Array.from({ length: 5 }, (_, index) => (
          <Skeleton key={index} className="h-36 rounded-lg" />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-2.5 lg:grid-cols-2">
        <Skeleton className="h-80 rounded-lg" />
        <Skeleton className="h-80 rounded-lg" />
      </section>
      <section className="grid grid-cols-1 gap-2.5 md:grid-cols-3">
        <Skeleton className="h-64 rounded-lg md:col-span-2" />
        <Skeleton className="h-64 rounded-lg" />
      </section>
    </div>
  );
}

export function SalesPulseDashboard() {
  const [rangeMode, setRangeMode] = useState<"all" | "custom">("all");
  const [customRange, setCustomRange] = useState({ start: dataMinDate, end: dataMaxDate });
  const [merchantId, setMerchantId] = useState(SALES_PULSE_INDEX.merchants[0].id);
  const [merchantData, setMerchantData] = useState<SalesPulseMerchantData | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(salesPulseMerchantDataUrl(merchantId), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<SalesPulseMerchantData>;
      })
      .then(setMerchantData)
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setLoadError("فایل تجمیعی این پذیرنده بارگذاری نشد.");
      });

    return () => controller.abort();
  }, [merchantId]);

  const customStart = localDateKey(customRange.start);
  const customEnd = localDateKey(customRange.end);
  const result = useMemo(
    () =>
      rangeMode === "all"
        ? merchantData?.results["all-range"]
        : merchantData
          ? buildCustomSalesPulseResult(merchantData.daily, customStart, customEnd)
          : null,
    [customEnd, customStart, merchantData, rangeMode]
  );
  const merchant = SALES_PULSE_INDEX.merchants.find((item) => item.id === merchantId);
  const rangeKey = rangeMode === "all" ? "all-range" : `${customStart}:${customEnd}`;
  const rangeLabel =
    rangeMode === "all"
      ? "کل بازه ۱۱ دی ۱۴۰۴ تا ۹ تیر ۱۴۰۵"
      : `بازه دلخواه ${customStart} تا ${customEnd}`;
  const insightKey = `${merchantId}:${rangeKey}`;
  const fallbackAction = result?.insight.ruleAction ?? "";

  const { action: liveAction, status: liveStatus } = useLiveAiAction({
    key: insightKey,
    enabled: Boolean(result && merchant),
    fallback: fallbackAction,
    stream: ({ signal, onText }) =>
      streamSalesPulseAction({
        merchantCategory: merchant!.categoryTitle,
        periodLabel: rangeLabel,
        result: result!,
        signal,
        onText,
      }),
  });

  function handleMerchantChange(value: string | null) {
    if (value) {
      setMerchantData(null);
      setLoadError(null);
      setMerchantId(value);
    }
  }

  const controls = (
    <PeriodToolbar
      variant="inline"
      merchantId={merchantId}
      merchants={SALES_PULSE_INDEX.merchants}
      onMerchantChange={handleMerchantChange}
      rangeMode={rangeMode}
      customRange={customRange}
      minDate={dataMinDate}
      maxDate={dataMaxDate}
      onRangeModeChange={setRangeMode}
      onCustomRangeChange={setCustomRange}
    />
  );

  if (!result) {
    return (
      <div className="flex flex-col gap-2.5 text-[var(--pulse-ink)]" style={pulseTheme}>
        <SalesPulseHeader controls={controls} />
        {loadError ? (
          <div className={cn(panelClass, "flex min-h-48 items-center justify-center p-4")} role="alert">
            <p className="text-sm text-[var(--pulse-warn)]">{loadError}</p>
          </div>
        ) : (
          <SalesPulseLoading />
        )}
      </div>
    );
  }

  const kpis = formatSalesPulseKpis(result);
  const quickComparison = result.quickComparison.map((item) => ({
    label: item.label,
    value: formatSigned(item.value, item.type === "percent" ? "٪" : ""),
  }));

  return (
    <div className="flex flex-col gap-2.5 text-[var(--pulse-ink)]" style={pulseTheme}>
      <SalesPulseHeader
        controls={controls}
      />

      <KpiScorecardGrid>
        {kpis.map((kpi) => (
          <KpiScorecard key={kpi.id} kpi={kpi} />
        ))}
      </KpiScorecardGrid>

      <CalendarImpactGuide impact={result.calendarImpact} />

      <section
        aria-labelledby="growth-breakdown-heading"
        className="grid grid-cols-1 gap-2.5 lg:grid-cols-2"
      >
        <article className={cn(panelClass, "relative flex flex-col gap-2.5 p-2.5 sm:p-3")}>
          <GrowthFormulaInfo
            factors={result.growthFactors}
            total={result.totalGrowth}
          />
          <header className="pe-8">
            <h2
              id="growth-breakdown-heading"
              className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base"
            >
              تجزیه رشد مناسبت
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              اثر حجم نشست، موفقیت پرداخت، مبلغ خرید و سهم مشتریان بازگشتی
            </p>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-[7.5rem_1fr] lg:grid-cols-[8rem_1fr]">
            <GrowthDonut total={result.totalGrowth} />
            <GrowthWaterfall
              factors={result.growthFactors}
              total={result.totalGrowth}
            />
          </div>
        </article>

        <AiInsight
          layout="stack"
          headline={result.insight.headline}
          detail={result.insight.bullets[0]}
          action={liveAction}
          status={liveStatus}
        />
      </section>

      <section
        aria-label="نمودارهای تکمیلی"
        className="grid grid-cols-1 gap-2.5 md:grid-cols-2 xl:grid-cols-3"
      >
        <article className={cn(panelClass, "p-2.5 sm:p-3 md:col-span-2 xl:col-span-2")}>
          <header className="mb-2">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              روند تجمعی فروش موفق (میلیارد تومان)
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              فروش واقعی در برابر میانگین دوره‌های مشابه
            </p>
          </header>
          <CumulativeTrendChart data={result.cumulativeTrend} />
        </article>

        <article className={cn(panelClass, "p-2.5 sm:p-3")}>
          <QuickComparisonList items={quickComparison} />
        </article>

        <article className={cn(panelClass, "flex h-full flex-col p-2.5 sm:p-3")}>
          <header className="mb-2 shrink-0">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              توزیع اثر رشد بر اساس ساعت
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              سهم خالص هر بازه ساعتی از رشد کل
            </p>
          </header>
          <HourlyImpactChart data={result.hourlyImpact} />
        </article>

        <article
          className={cn(
            panelClass,
            "flex h-full flex-col overflow-x-auto p-2.5 sm:p-3 md:col-span-2"
          )}
        >
          <header className="mb-2 shrink-0">
            <h2 className="text-sm font-bold text-[var(--pulse-ink)] sm:text-base">
              ماتریس اثر خالص رشد
            </h2>
            <p className="mt-0.5 text-xs leading-5 text-[var(--pulse-subtle)]">
              شدت اثر بر اساس روز هفته و بازه ساعتی
            </p>
          </header>
          <ImpactHeatmap values={result.heatmap} />
        </article>
      </section>

      <DataLimitNote
        eligible={result.eligible}
        confidence={result.confidence}
        sampleSize={result.sampleSize}
        sourceHash={SALES_PULSE_INDEX.source.sha256}
      />
    </div>
  );
}
