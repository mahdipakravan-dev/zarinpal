"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  AlertTriangleIcon, ArrowUpRightIcon, Building2Icon, CheckCircle2Icon,
  InfoIcon, RefreshCwIcon, RouteIcon, ShieldAlertIcon, ShieldCheckIcon,
  StoreIcon, TerminalIcon, UsersIcon, type LucideIcon,
} from "lucide-react";

import { AnalysisToolbar } from "@/components/dashboard/analysis-toolbar";
import { AiInsight } from "@/components/dashboard/ai-insight";
import { Skeleton } from "@/components/ui/skeleton";
import { useLiveAiAction } from "@/hooks/use-live-ai-action";
import { formatPersianNumber, formatPersianPercent } from "@/lib/format";
import { streamPaymentHealthAction } from "@/lib/payment-health-ai-stream";
import {
  PAYMENT_HEALTH_INDEX, paymentHealthMerchantDataUrl, type HealthAnomaly,
  type HealthKpi, type PaymentHealthResult,
} from "@/lib/payment-health-data";
import { cn } from "@/lib/utils";

const theme = {
  "--health-ink": "#19191a", "--health-subtle": "#19191a", "--health-line": "#e3e7ed",
  "--health-wash": "#f7f8fa", "--health-blue": "#174fd6", "--health-blue-soft": "#edf3ff",
  "--health-teal": "#0f907d", "--health-teal-soft": "#e9f7f3", "--health-green": "#16865f",
  "--health-amber": "#d97720", "--health-amber-soft": "#fff2e3", "--health-red": "#d44c5c",
  "--health-red-soft": "#fdecef", "--health-yellow": "#ffd60a",
  "--insight-ink": "#19191a", "--insight-subtle": "#19191a",
  "--insight-line": "#e3e7ed", "--insight-wash": "#f7f8fa",
} as CSSProperties;
const panel = "rail-panel rail-panel-interactive [--rail-accent:var(--health-blue)] [--rail-line:var(--health-line)]";

function Panel({ title, description, children, className }: { title: string; description?: string; children: ReactNode; className?: string }) {
  return <article className={cn(panel, "flex min-w-0 flex-col gap-3 p-3", className)}><header><h2 className="text-sm font-bold text-[var(--health-ink)] sm:text-base">{title}</h2>{description ? <p className="mt-0.5 text-xs leading-5 text-[var(--health-subtle)]">{description}</p> : null}</header>{children}</article>;
}

function Header({ merchantId, onChange }: { merchantId: string; onChange: (value: string | null) => void }) {
  const period = PAYMENT_HEALTH_INDEX.period;
  return (
    <header className="flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
      <div className="flex min-w-0 items-center gap-2.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[var(--health-yellow)]">
          <ShieldCheckIcon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h1 className="text-lg font-extrabold text-[var(--health-ink)] sm:text-xl">سلامت مسیر پرداخت</h1>
          <p className="text-xs leading-5 text-[var(--health-subtle)] sm:text-sm">
            تشخیص ریزش از NoAttempt تا verify، با کنترل مبلغ و PSP
          </p>
        </div>
      </div>
      <AnalysisToolbar
        merchantId={merchantId}
        merchants={PAYMENT_HEALTH_INDEX.merchants}
        periodId={period.id}
        periods={[{ id: period.id, label: period.label, range: period.range }]}
        onMerchantChange={onChange}
        onPeriodChange={() => undefined}
      />
    </header>
  );
}

function Summary({ result }: { result: PaymentHealthResult }) {
  const confidence = result.confidence === "high" ? "زیاد" : result.confidence === "medium" ? "متوسط" : "کم";
  const items: Array<[string, string, LucideIcon]> = [
    ["گروه همتا", `${formatPersianNumber(result.peerGroup.count)} پذیرنده`, UsersIcon],
    ["دسته کسب‌وکار", result.merchant.categoryTitle, StoreIcon],
    ["نمونه تحلیل", `${formatPersianNumber(result.sample.sessions)} نشست · ${formatPersianNumber(result.sample.verified)} خرید`, RouteIcon],
    ["اطمینان تحلیل", confidence, ShieldCheckIcon],
  ];
  return <section className={cn(panel, "grid divide-y divide-[var(--health-line)] sm:grid-cols-4 sm:divide-x sm:divide-x-reverse sm:divide-y-0")} aria-label="خلاصه تحلیل">{items.map(([label, value, Icon]) => <div key={label} className="flex min-w-0 items-center gap-2.5 px-3 py-2.5"><span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[var(--health-blue-soft)] text-[var(--health-blue)]"><Icon className="size-4" /></span><div className="min-w-0"><p className="text-[10px] text-[var(--health-subtle)]">{label}</p><p className="truncate text-xs font-bold" title={value}>{value}</p></div></div>)}</section>;
}

type KpiDefinition = { id: keyof PaymentHealthResult["kpis"]; label: string; caption: string; icon: LucideIcon; lowerBetter?: boolean };
const kpiDefinitions: KpiDefinition[] = [
  { id: "bankReach", label: "ورود به بانک", caption: "از کل نشست‌ها", icon: Building2Icon },
  { id: "postEntrySuccess", label: "موفقیت تعدیل‌شده", caption: "پس از ورود به بانک", icon: CheckCircle2Icon },
  { id: "retrySuccess", label: "بازیابی retry", caption: "از نشست‌های دارای retry", icon: RefreshCwIcon },
  { id: "noAttempt", label: "NoAttempt", caption: "پیش از اولین تلاش", icon: AlertTriangleIcon, lowerBetter: true },
  { id: "verifyIssue", label: "مشکل verify", caption: "پرداخت بانکی بدون تایید", icon: ShieldAlertIcon, lowerBetter: true },
  { id: "terminalGap", label: "شکاف ترمینال", caption: "بهترین تا ضعیف‌ترین", icon: TerminalIcon, lowerBetter: true },
];

function KpiCard({ definition, kpi }: { definition: KpiDefinition; kpi: HealthKpi }) {
  const gap = kpi.value - kpi.peerMedian;
  const good = definition.lowerBetter ? gap <= 0 : gap >= 0;
  const tone = Math.abs(gap) < 1 ? "blue" : good ? "green" : "red";
  const colors = tone === "green" ? "bg-[var(--health-teal-soft)] text-[var(--health-green)]" : tone === "red" ? "bg-[var(--health-red-soft)] text-[var(--health-red)]" : "bg-[var(--health-blue-soft)] text-[var(--health-blue)]";
  const Icon = definition.icon;
  return <article className={cn(panel, "flex min-h-32 flex-col gap-2 p-3")}><div className="flex items-start justify-between gap-2"><h3 className="text-xs font-bold leading-5">{definition.label}</h3><span className={cn("flex size-8 items-center justify-center rounded-md", colors)}><Icon className="size-4" /></span></div><p className="text-xl font-extrabold">{formatPersianPercent(kpi.value)}</p><p className="text-[10px] text-[var(--health-subtle)]">{definition.caption}</p><p className="mt-auto border-t border-[var(--health-line)] pt-2 text-[10px] text-[var(--health-subtle)]">میانه همتا: <strong className="text-[var(--health-ink)]">{formatPersianPercent(kpi.peerMedian)}</strong></p></article>;
}

function Kpis({ result }: { result: PaymentHealthResult }) {
  return <section className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6" aria-label="شاخص‌های سلامت پرداخت">{kpiDefinitions.map((definition) => <KpiCard key={definition.id} definition={definition} kpi={result.kpis[definition.id]} />)}</section>;
}

function Funnel({ result }: { result: PaymentHealthResult }) {
  const colors = ["var(--health-blue)", "#3b74ef", "var(--health-teal)", "var(--health-green)"];
  return <Panel title="قیف مسیر پرداخت" description="هر مرحله نسبت به کل نشست‌ها نمایش داده شده و ریزش مرحله‌ای در کنار آن آمده است." className="h-full xl:col-span-2"><div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_15rem]"><ol className="flex flex-col items-center gap-2">{result.funnel.map((stage, index) => <li key={stage.id} className="flex h-14 min-w-[38%] items-center justify-between gap-3 rounded-md px-3 text-white" style={{ width: `${Math.max(stage.rate, 38)}%`, backgroundColor: colors[index] }}><span className="text-xs font-semibold">{stage.label}</span><span className="text-end"><strong className="block text-sm">{formatPersianNumber(stage.count)}</strong><small className="text-[10px] text-white/80">{formatPersianPercent(stage.rate)}</small></span></li>)}</ol><div className="flex flex-col justify-center gap-2">{result.dropoffs.map((dropoff, index) => <div key={dropoff.id} className={cn("rounded-md border p-2", index === 0 ? "border-[var(--health-red)]/30 bg-[var(--health-red-soft)]" : "border-[var(--health-line)] bg-[var(--health-wash)]")}><p className="text-[10px] text-[var(--health-subtle)]">{dropoff.from} ← {dropoff.to}</p><div className="mt-1 flex items-baseline justify-between gap-2"><strong className={index === 0 ? "text-[var(--health-red)]" : ""}>{formatPersianPercent(dropoff.rate)}</strong><span className="text-[10px] text-[var(--health-subtle)]">{formatPersianNumber(dropoff.count)} نشست</span></div></div>)}</div></div></Panel>;
}

function Retry({ result }: { result: PaymentHealthResult }) {
  return <Panel title="بازیابی با retry" description="نشست‌هایی که بعد از تلاش ناموفق اولیه در تلاش بعدی تایید شدند." className="h-full"><div className="grid grid-cols-3 divide-x divide-x-reverse divide-[var(--health-line)] text-center"><div><p className="text-[10px] text-[var(--health-subtle)]">نشست retry</p><strong className="text-lg">{formatPersianNumber(result.retry.sessions)}</strong></div><div><p className="text-[10px] text-[var(--health-subtle)]">بازیابی‌شده</p><strong className="text-lg text-[var(--health-green)]">{formatPersianNumber(result.retry.recovered)}</strong></div><div><p className="text-[10px] text-[var(--health-subtle)]">میانه تلاش</p><strong className="text-lg">{formatPersianNumber(result.retry.medianAttempts, { maximumFractionDigits: 1 })}</strong></div></div><div className="flex flex-col gap-2">{result.retry.buckets.map((bucket) => <div key={bucket.id}><div className="flex items-center justify-between text-[10px]"><span>{bucket.label}</span><span>{bucket.sessions >= 10 ? formatPersianPercent(bucket.rate) : "نمونه کم"}</span></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-[var(--health-wash)]"><span className="block h-full rounded-full bg-[var(--health-green)]" style={{ width: `${bucket.sessions >= 10 ? bucket.rate : 0}%` }} /></div></div>)}</div></Panel>;
}

function AmountComparison({ result }: { result: PaymentHealthResult }) {
  return <Panel title="موفقیت پس از ورود بر اساس مبلغ" description="مقایسه نرخ خام این پذیرنده با میانه همتا در هر بازه مبلغ." className="h-full"><div className="flex flex-1 flex-col justify-center gap-3">{result.amountBuckets.map((bucket) => <div key={bucket.id}><div className="flex items-center justify-between gap-2 text-xs"><span className="font-semibold">{bucket.label}</span><span className="text-[10px] text-[var(--health-subtle)]">{bucket.sample < 20 ? "نمونه ناکافی" : `شما ${formatPersianPercent(bucket.successRate)} · همتا ${formatPersianPercent(bucket.peerMedian)}`}</span></div><div className="relative mt-1.5 h-2 rounded-full bg-[var(--health-wash)]"><span className="absolute inset-y-0 start-0 rounded-full bg-[var(--health-blue-soft)]" style={{ width: `${bucket.sample >= 20 ? bucket.peerMedian : 0}%` }} /><span className="absolute inset-y-0 start-0 rounded-full bg-[var(--health-blue)]" style={{ width: `${bucket.sample >= 20 ? bucket.successRate : 0}%` }} /></div></div>)}</div></Panel>;
}

function Heatmap({ result }: { result: PaymentHealthResult }) {
  const color = (value: number) => value <= -8 ? "#d44c5c" : value <= -3 ? "#ef9a9a" : value >= 8 ? "#16865f" : value >= 3 ? "#79c7ae" : "#edf1f5";
  return <Panel title="ماتریس PSP و مبلغ" description="انحراف نرخ موفقیت هر سلول از سایر PSPها در همان بازه مبلغ؛ سلول خاکستری یعنی نمونه ناکافی." className="h-full"><div className="overflow-x-auto"><table className="w-full min-w-[31rem] border-separate border-spacing-1 text-center text-[10px]"><thead><tr><th className="p-1 text-start text-[var(--health-subtle)]">PSP</th>{result.pspAmountHeatmap.columns.map((column) => <th key={column.id} className="p-1 font-medium text-[var(--health-subtle)]">{column.label}</th>)}</tr></thead><tbody>{result.pspAmountHeatmap.rows.map((row) => <tr key={row.id}><th className="p-1 text-start text-xs font-bold">{row.id}</th>{row.cells.map((cell, index) => <td key={result.pspAmountHeatmap.columns[index].id} className="h-11 rounded-md font-bold" style={{ backgroundColor: cell ? color(cell.deviation) : "var(--health-wash)", color: cell && Math.abs(cell.deviation) >= 8 ? "white" : "var(--health-ink)" }} title={cell ? `${cell.sample} تلاش، نرخ ${cell.rate}٪` : "نمونه ناکافی"}>{cell ? `${cell.deviation > 0 ? "+" : ""}${formatPersianNumber(cell.deviation, { maximumFractionDigits: 1 })}` : "—"}</td>)}</tr>)}</tbody></table></div><div className="flex justify-end gap-3 text-[10px] text-[var(--health-subtle)]"><span className="flex items-center gap-1"><i className="size-2 rounded-sm bg-[var(--health-red)]" />افت</span><span className="flex items-center gap-1"><i className="size-2 rounded-sm bg-[#edf1f5]" />عادی</span><span className="flex items-center gap-1"><i className="size-2 rounded-sm bg-[var(--health-green)]" />بهتر</span></div></Panel>;
}

function AnomalyList({ title, items, emptyText }: { title: string; items: HealthAnomaly[]; emptyText: string }) {
  return <div className="flex flex-col gap-2"><h3 className="text-xs font-bold">{title}</h3>{items.length ? <ul className="divide-y divide-[var(--health-line)]">{items.slice(0, 4).map((item) => <li key={item.id} className="flex items-center justify-between gap-2 py-2"><div><p className="text-xs font-semibold">{item.label}</p><p className="text-[10px] text-[var(--health-subtle)]">{formatPersianNumber(item.sample)} تلاش · انتظار {formatPersianPercent(item.expected)}</p></div><strong className={item.deviation < -2 ? "text-[var(--health-red)]" : item.deviation > 2 ? "text-[var(--health-green)]" : "text-[var(--health-blue)]"}>{item.deviation > 0 ? "+" : ""}{formatPersianNumber(item.deviation, { maximumFractionDigits: 1 })} واحد</strong></li>)}</ul> : <p className="rounded-md bg-[var(--health-wash)] p-3 text-[10px] leading-5 text-[var(--health-subtle)]">{emptyText}</p>}</div>;
}

function Anomalies({ result }: { result: PaymentHealthResult }) {
  return <Panel title="ناهنجاری تعدیل‌شده" description="مقایسه درون‌پذیرنده پس از کنترل بازه مبلغ؛ رتبه خام PSP یا بانک نیست." className="h-full"><AnomalyList title="PSP" items={result.pspAnomalies} emptyText="PSP با حداقل نمونه لازم وجود ندارد." /><div className="border-t border-[var(--health-line)] pt-3"><AnomalyList title="بانک صادرکننده" items={result.issuerAnomalies} emptyText={result.issuerCoverage.analyzable ? "انحراف قابل توجهی دیده نشد." : `کد issuer برای خطاها پوشش کافی ندارد (${formatPersianNumber(result.issuerCoverage.failedKnown)} از ${formatPersianNumber(result.issuerCoverage.failed)} خطا)؛ تحلیل نمایش داده نمی‌شود.`} /></div></Panel>;
}

function OperationsTable({ result }: { result: PaymentHealthResult }) {
  return <Panel title="ترمینال و نوع verify" description="ترمینال‌های کمتر از ۳۰ نشست یا ۳۰ ورود برای نرخ‌گذاری کنار گذاشته می‌شوند." className="h-full"><div className="overflow-x-auto"><table className="w-full min-w-[24rem] text-xs"><thead><tr className="text-[var(--health-subtle)]"><th className="p-2 text-start font-medium">ترمینال</th><th className="p-2 text-end font-medium">موفقیت</th><th className="p-2 text-end font-medium">NoAttempt</th><th className="p-2 text-end font-medium">نشست</th></tr></thead><tbody>{result.terminals.length ? result.terminals.map((item) => <tr key={item.id} className="border-t border-[var(--health-line)]"><th className="p-2 text-start font-semibold">{item.id}</th><td className="p-2 text-end">{item.eligible ? formatPersianPercent(item.successRate) : "—"}</td><td className="p-2 text-end text-[var(--health-red)]">{formatPersianPercent(item.noAttempt)}</td><td className="p-2 text-end text-[var(--health-subtle)]">{formatPersianNumber(item.sessions)}</td></tr>) : <tr><td colSpan={4} className="p-4 text-center text-[var(--health-subtle)]">ترمینال واجد شرایط وجود ندارد.</td></tr>}</tbody></table></div><div className="grid gap-2 border-t border-[var(--health-line)] pt-3 sm:grid-cols-2">{result.verifyTypes.map((item) => <div key={item.id} className="rounded-md bg-[var(--health-wash)] p-2"><div className="flex items-center justify-between"><strong className="text-xs">verify {item.label}</strong><span className="text-[10px] text-[var(--health-subtle)]">{formatPersianNumber(item.sample)} تلاش</span></div><p className="mt-2 text-xs">موفقیت <strong>{formatPersianPercent(item.successRate)}</strong> · بدون تایید <strong className="text-[var(--health-red)]">{formatPersianPercent(item.paidIssue)}</strong></p></div>)}</div></Panel>;
}

function WeeklyTrend({ result }: { result: PaymentHealthResult }) {
  const { labels, success, noAttempt } = result.weeklyTrend;
  const width = 560;
  const height = 228;
  const padding = { top: 18, right: 16, bottom: 34, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const hasData = [...success, ...noAttempt].some((value) => value > 0);
  const maxValue = 100;
  const minValue = 0;
  const last = labels.length - 1;
  const xStep = last > 0 ? chartWidth / last : 0;

  const toX = (index: number) => padding.left + index * xStep;
  const toY = (value: number) =>
    padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;

  const line = (values: number[]) =>
    values
      .map((value, index) => `${index === 0 ? "M" : "L"}${toX(index)} ${toY(value)}`)
      .join(" ");

  const area = (values: number[]) => {
    if (!values.length) return "";
    const top = values
      .map((value, index) => `${index === 0 ? "M" : "L"}${toX(index)} ${toY(value)}`)
      .join(" ");
    return `${top} L${toX(values.length - 1)} ${toY(0)} L${toX(0)} ${toY(0)} Z`;
  };

  const successDelta = last > 0 ? success[last] - success[last - 1] : null;
  const noAttemptDelta = last > 0 ? noAttempt[last] - noAttempt[last - 1] : null;

  return (
    <Panel
      title="پایداری هفتگی مسیر"
      description="تغییر نرخ NoAttempt و موفقیت پس از ورود در طول ماه؛ جهش ناگهانی می‌تواند نشانه اختلال باشد."
    >
      {!hasData ? (
        <div className="flex min-h-44 items-center justify-center rounded-xl bg-[var(--health-wash)] px-4 text-center text-xs text-[var(--health-subtle)]">
          در این ماه روند هفتگی قابل‌نمایش نیست؛ نمونه کافی در هفته‌ها ثبت نشده است.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex gap-4 text-[10px] text-[var(--health-subtle)]">
              <span className="flex items-center gap-1.5">
                <i className="h-0.5 w-5 rounded-full bg-[var(--health-blue)]" />
                موفقیت پس از ورود
              </span>
              <span className="flex items-center gap-1.5">
                <i className="h-0.5 w-5 rounded-full border border-dashed border-[var(--health-red)] bg-[var(--health-red)]/30" />
                NoAttempt
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {successDelta !== null ? (
                <span className="rounded-full bg-[var(--health-blue-soft)] px-2.5 py-1 font-semibold text-[var(--health-blue)]">
                  موفقیت هفته آخر {formatPersianPercent(successDelta, true)}
                </span>
              ) : null}
              {noAttemptDelta !== null ? (
                <span className="rounded-full bg-[var(--health-red-soft)] px-2.5 py-1 font-semibold text-[var(--health-red)]">
                  NoAttempt هفته آخر {formatPersianPercent(noAttemptDelta, true)}
                </span>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[var(--health-line)] bg-[var(--health-wash)] px-1 pt-1">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="h-auto w-full max-h-56"
              role="img"
              aria-label="روند هفتگی موفقیت و NoAttempt"
            >
              <defs>
                <linearGradient id="health-success-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--health-blue)" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="var(--health-blue)" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="health-noattempt-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--health-red)" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="var(--health-red)" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
                const y = padding.top + chartHeight * (1 - tick);
                const value = minValue + (maxValue - minValue) * tick;
                return (
                  <g key={tick}>
                    <line
                      x1={padding.left}
                      x2={width - padding.right}
                      y1={y}
                      y2={y}
                      stroke="var(--health-line)"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={padding.left - 8}
                      y={y + 3}
                      textAnchor="end"
                      fill="var(--health-subtle)"
                      fontSize="10"
                    >
                      {formatPersianNumber(value, { maximumFractionDigits: 0 })}٪
                    </text>
                  </g>
                );
              })}

              <path d={area(success)} fill="url(#health-success-fill)" />
              <path d={area(noAttempt)} fill="url(#health-noattempt-fill)" />

              <path
                d={line(success)}
                fill="none"
                stroke="var(--health-blue)"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={line(noAttempt)}
                fill="none"
                stroke="var(--health-red)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="6 4"
              />

              {labels.map((label, index) => (
                <g key={label}>
                  <line
                    x1={toX(index)}
                    x2={toX(index)}
                    y1={padding.top}
                    y2={padding.top + chartHeight}
                    stroke="var(--health-line)"
                    strokeOpacity="0.45"
                  />
                  <circle cx={toX(index)} cy={toY(success[index] ?? 0)} r="4" fill="var(--health-blue)" stroke="white" strokeWidth="1.5">
                    <title>{`${label}: موفقیت ${formatPersianPercent(success[index] ?? 0)}`}</title>
                  </circle>
                  <circle
                    cx={toX(index)}
                    cy={toY(noAttempt[index] ?? 0)}
                    r="3.5"
                    fill="white"
                    stroke="var(--health-red)"
                    strokeWidth="2"
                  >
                    <title>{`${label}: NoAttempt ${formatPersianPercent(noAttempt[index] ?? 0)}`}</title>
                  </circle>
                  <text
                    x={toX(index)}
                    y={height - 10}
                    textAnchor="middle"
                    fill="var(--health-subtle)"
                    fontSize="10"
                  >
                    {label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {labels.map((label, index) => {
              const successValue = success[index] ?? 0;
              const noAttemptValue = noAttempt[index] ?? 0;
              const quiet = successValue === 0 && noAttemptValue === 0;
              return (
                <div
                  key={label}
                  className={cn(
                    "rounded-lg border px-2 py-2 text-center",
                    quiet ? "border-dashed border-[var(--health-line)] bg-white" : "border-[var(--health-line)] bg-[var(--health-wash)]",
                  )}
                >
                  <p className="text-[10px] font-semibold text-[var(--health-subtle)]">{label}</p>
                  {quiet ? (
                    <p className="mt-1 text-[10px] text-[var(--health-subtle)]">بدون نمونه</p>
                  ) : (
                    <div className="mt-1 space-y-0.5">
                      <p className="text-[11px] font-bold text-[var(--health-blue)]">
                        {formatPersianPercent(successValue)}
                      </p>
                      <p className="text-[10px] font-semibold text-[var(--health-red)]">
                        {formatPersianPercent(noAttemptValue)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Panel>
  );
}

function Methodology({ result }: { result: PaymentHealthResult }) {
  const labels: Record<string, string> = { session: "نشست", bankEntry: "ورود به بانک", bankPaid: "پرداخت بانکی", adjusted: "موفقیت تعدیل‌شده", retry: "Retry", anomaly: "ناهنجاری" };
  return <details className={cn(panel, "group p-3")}><summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-bold"><span className="flex items-center gap-2"><InfoIcon className="size-4 text-[var(--health-blue)]" />تعریف شاخص‌ها و محدودیت تحلیل</span><ArrowUpRightIcon className="size-4 transition-transform group-open:rotate-90" /></summary><dl className="mt-3 grid gap-2 border-t border-[var(--health-line)] pt-3 md:grid-cols-2">{Object.entries(result.methodology).map(([key, value]) => <div key={key} className="rounded-md bg-[var(--health-wash)] p-2"><dt className="text-[10px] font-bold text-[var(--health-blue)]">{labels[key]}</dt><dd className="mt-1 text-[10px] leading-5 text-[var(--health-subtle)]">{value}</dd></div>)}</dl><p className="mt-2 text-[10px] leading-5 text-[var(--health-subtle)]">نشست ناموفق الزاماً در صورت اصلاح به خرید تبدیل نمی‌شد؛ این صفحه گلوگاه و فرصت بررسی را نشان می‌دهد، نه درآمد قطعی ازدست‌رفته.</p></details>;
}

function Loading() { return <div className="grid gap-2"><Skeleton className="h-20" /><div className="grid grid-cols-2 gap-2 lg:grid-cols-6">{Array.from({ length: 6 }, (_, index) => <Skeleton key={index} className="h-32" />)}</div><Skeleton className="h-96" /></div>; }

export function PaymentHealthDashboard() {
  const [merchantId, setMerchantId] = useState(PAYMENT_HEALTH_INDEX.merchants[0].id);
  const [result, setResult] = useState<PaymentHealthResult | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(paymentHealthMerchantDataUrl(merchantId), { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<PaymentHealthResult>;
      })
      .then(setResult)
      .catch((reason) => {
        if (reason?.name !== "AbortError") setError(true);
      });
    return () => controller.abort();
  }, [merchantId]);

  const { action: liveAction, status: liveStatus } = useLiveAiAction({
    key: merchantId,
    enabled: Boolean(result && result.merchant.id === merchantId && result.eligible),
    fallback: result?.insight.action ?? "",
    stream: ({ signal, onText }) =>
      streamPaymentHealthAction({ result: result!, signal, onText }),
  });

  function changeMerchant(value: string | null) {
    if (!value || value === merchantId) return;
    setResult(null);
    setError(false);
    setMerchantId(value);
  }

  return (
    <div className="flex flex-col gap-2.5 text-[var(--health-ink)]" style={theme}>
      <Header merchantId={merchantId} onChange={changeMerchant} />
      {error ? (
        <div className={cn(panel, "flex min-h-40 items-center justify-center p-4 text-sm text-[var(--health-red)]")}>
          داده سلامت پرداخت این پذیرنده بارگذاری نشد.
        </div>
      ) : !result ? (
        <Loading />
      ) : (
        <>
          <Summary result={result} />
          <AiInsight
            headline={result.insight.headline}
            detail={result.insight.diagnosis}
            action={liveAction}
            status={liveStatus}
            loadingLabel="در حال تحلیل مسیر پرداخت…"
          />
          <Kpis result={result} />
          <section className="grid gap-2.5 xl:grid-cols-3">
            <Funnel result={result} />
            <Retry result={result} />
          </section>
          <section className="grid gap-2.5 xl:grid-cols-2">
            <AmountComparison result={result} />
            <Heatmap result={result} />
          </section>
          <section className="grid gap-2.5 xl:grid-cols-2">
            <Anomalies result={result} />
            <OperationsTable result={result} />
          </section>
          <WeeklyTrend result={result} />
          <Methodology result={result} />
        </>
      )}
    </div>
  );
}
