"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import {
  AlertTriangleIcon,
  Building2Icon,
  CalendarDaysIcon,
  CheckCircle2Icon,
  InfoIcon,
  RefreshCwIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  StoreIcon,
  TargetIcon,
  TerminalIcon,
  type LucideIcon,
} from "lucide-react";

import {
  AMOUNT_BUCKETS,
  FUNNEL_DROPOFFS,
  FUNNEL_SUMMARY,
  PAYMENT_FUNNEL,
  PAYMENT_HEALTH_KPIS,
  PAYMENT_HEALTH_MERCHANTS,
  PAYMENT_HEALTH_PERIODS,
  PSP_ANOMALIES,
  RETRY_STATS,
  TERMINAL_ROWS,
  type FunnelStage,
  type HealthKpi,
  type HealthTone,
} from "@/lib/payment-health-mock-data";
import { formatPersianNumber, formatPersianPercent, toPersianDigits } from "@/lib/format";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const healthTheme = {
  "--health-ink": "#1a2148",
  "--health-subtle": "#6b7590",
  "--health-line": "#e4e9f3",
  "--health-wash": "#f6f8fc",
  "--health-violet": "#5b4cdb",
  "--health-violet-soft": "#efecff",
  "--health-violet-line": "#d5ceff",
  "--health-lavender": "#8b7cf0",
  "--health-indigo": "#6e8cff",
  "--health-teal": "#0f9a84",
  "--health-good": "#119a6c",
  "--health-good-soft": "#e6f7ef",
  "--health-warn": "#e25555",
  "--health-warn-soft": "#ffeded",
  "--health-amber": "#e8892d",
  "--health-amber-soft": "#fff6ea",
} as CSSProperties;

const panelClass =
  "rounded-xl border border-[var(--health-line)] bg-card shadow-[0_12px_36px_rgba(26,33,72,0.05)] transition-shadow duration-200 hover:shadow-[0_16px_40px_rgba(26,33,72,0.08)] motion-reduce:transition-none";

const kpiIconMap: Record<HealthKpi["icon"], LucideIcon> = {
  bank: Building2Icon,
  check: CheckCircle2Icon,
  refresh: RefreshCwIcon,
  terminal: TerminalIcon,
  alert: AlertTriangleIcon,
  shield: ShieldAlertIcon,
};

const toneIconClass: Record<HealthTone, string> = {
  good: "bg-[var(--health-good-soft)] text-[var(--health-good)]",
  warn: "bg-[var(--health-warn-soft)] text-[var(--health-warn)]",
  neutral: "bg-[var(--health-wash)] text-[var(--health-subtle)]",
  violet: "bg-[var(--health-violet-soft)] text-[var(--health-violet)]",
};

const funnelFill: Record<FunnelStage["tone"], string> = {
  violet: "var(--health-violet)",
  lavender: "var(--health-lavender)",
  indigo: "var(--health-indigo)",
  green: "var(--health-good)",
};

function Panel({
  title,
  description,
  children,
  className,
  headingId,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  headingId?: string;
}) {
  return (
    <article className={cn(panelClass, "flex flex-col gap-3 p-3 sm:p-4", className)}>
      <header className="flex flex-col gap-0.5">
        <h2
          id={headingId}
          className="text-sm font-bold text-[var(--health-ink)] sm:text-base"
        >
          {title}
        </h2>
        {description ? (
          <p className="text-xs leading-5 text-[var(--health-subtle)]">{description}</p>
        ) : null}
      </header>
      {children}
    </article>
  );
}

function HealthHeader() {
  const [periodId, setPeriodId] = useState<string>(PAYMENT_HEALTH_PERIODS[0].id);
  const [merchantId, setMerchantId] = useState<string>(
    PAYMENT_HEALTH_MERCHANTS[0].id
  );

  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--health-violet)] text-white shadow-[0_10px_24px_rgba(91,76,219,0.25)] sm:size-11">
          <ShieldCheckIcon className="size-5" aria-hidden="true" />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <h1 className="text-lg font-extrabold tracking-tight text-[var(--health-ink)] sm:text-xl">
            سلامت مسیر پرداخت
          </h1>
          <p className="text-xs text-[var(--health-subtle)] sm:text-sm">
            کجا فروش بالقوه از دست می‌رود؟ · قیف NoAttempt تا verify
          </p>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-2 sm:w-auto sm:grid-cols-2 sm:gap-3">
        <div className="flex min-w-0 flex-col gap-1 sm:min-w-40">
          <span className="text-[11px] text-[var(--health-subtle)]">پذیرنده</span>
          <Select
            value={merchantId}
            onValueChange={(value) => value && setMerchantId(value)}
          >
            <SelectTrigger
              className="h-9 w-full border-[var(--health-line)] bg-card"
              aria-label="انتخاب پذیرنده"
            >
              <StoreIcon className="size-4 text-[var(--health-subtle)]" aria-hidden="true" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAYMENT_HEALTH_MERCHANTS.map((merchant) => (
                <SelectItem key={merchant.id} value={merchant.id}>
                  {merchant.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex min-w-0 flex-col gap-1 sm:min-w-44">
          <span className="text-[11px] text-[var(--health-subtle)]">بازه زمانی</span>
          <Select
            value={periodId}
            onValueChange={(value) => value && setPeriodId(value)}
          >
            <SelectTrigger
              className="h-9 w-full border-[var(--health-line)] bg-card"
              aria-label="انتخاب بازه زمانی"
            >
              <CalendarDaysIcon
                className="size-4 text-[var(--health-subtle)]"
                aria-hidden="true"
              />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAYMENT_HEALTH_PERIODS.map((period) => (
                <SelectItem key={period.id} value={period.id}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </header>
  );
}

/**
 * Signature funnel: stacked trapezoids that taper, with side labels + rates.
 * Uses geometric narrowing (not just bar widths) so the path reads as a funnel.
 */
function PaymentFunnelDiagram() {
  const stages = PAYMENT_FUNNEL;
  const width = 320;
  const stageH = 46;
  const gap = 6;
  const topPad = 8;
  const sidePad = 8;
  const height = topPad + stages.length * stageH + (stages.length - 1) * gap + 8;

  function stageGeometry(index: number) {
    const t = index / (stages.length - 1);
    const inset = sidePad + t * 52;
    const nextT = (index + 1) / (stages.length - 1);
    const nextInset = sidePad + nextT * 52;
    const y = topPad + index * (stageH + gap);
    return {
      y,
      topLeft: inset,
      topRight: width - inset,
      bottomLeft: nextInset,
      bottomRight: width - nextInset,
    };
  }

  return (
    <figure className="flex flex-col gap-3">
      <figcaption className="sr-only">
        قیف مسیر پرداخت از نمایش درگاه تا پرداخت موفق.
        {stages
          .map(
            (stage) =>
              ` ${stage.label}: ${formatPersianNumber(stage.count)} نشست، ${formatPersianPercent(stage.rate)} از کل.`
          )
          .join("")}
      </figcaption>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_11rem] lg:items-center">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="mx-auto h-auto w-full max-w-md"
          role="img"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="funnel-shine" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.22" />
              <stop offset="55%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          {stages.map((stage, index) => {
            const g = stageGeometry(index);
            const points = [
              `${g.topLeft},${g.y}`,
              `${g.topRight},${g.y}`,
              `${g.bottomRight},${g.y + stageH}`,
              `${g.bottomLeft},${g.y + stageH}`,
            ].join(" ");
            const midY = g.y + stageH / 2;
            return (
              <g key={stage.id}>
                <polygon
                  points={points}
                  fill={funnelFill[stage.tone]}
                  className="transition-[filter] duration-200"
                />
                <polygon points={points} fill="url(#funnel-shine)" />
                <text
                  x={width / 2}
                  y={midY - 6}
                  textAnchor="middle"
                  className="fill-white text-[11px] font-semibold"
                >
                  {stage.label}
                </text>
                <text
                  x={width / 2}
                  y={midY + 10}
                  textAnchor="middle"
                  className="fill-white/95 text-[12px] font-extrabold"
                >
                  {formatPersianNumber(stage.count)}
                </text>
              </g>
            );
          })}
        </svg>

        <ol className="flex flex-col gap-2">
          {stages.map((stage, index) => (
            <li
              key={stage.id}
              className="flex items-center justify-between gap-2 rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] px-2.5 py-2"
            >
              <span className="flex min-w-0 items-center gap-2 text-xs text-[var(--health-ink)]">
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ background: funnelFill[stage.tone] }}
                  aria-hidden="true"
                />
                <span className="truncate font-medium">{stage.label}</span>
              </span>
              <span className="shrink-0 text-xs font-extrabold tabular-nums text-[var(--health-ink)]">
                {formatPersianPercent(stage.rate)}
                <span className="sr-only">
                  {index === 0
                    ? " از کل نشست‌ها"
                    : ` نسبت به نمایش درگاه؛ افت از مرحله قبل ${formatPersianPercent(stages[index - 1].rate - stage.rate)}`}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

function FunnelHero() {
  return (
    <Panel
      title="قیف مسیر پرداخت"
      description="از نمایش درگاه تا پرداخت موفق؛ ریزش بین مراحل مسیر فروش بالقوه را نشان می‌دهد"
      headingId="payment-funnel-heading"
      className="lg:col-span-2"
    >
      <PaymentFunnelDiagram />

      <div className="grid gap-2 rounded-xl bg-[var(--health-warn-soft)] p-3 sm:grid-cols-[auto_1fr] sm:items-center">
        <p className="text-2xl font-extrabold tabular-nums text-[var(--health-warn)]">
          {formatPersianPercent(FUNNEL_SUMMARY.postEntrySuccess)}
        </p>
        <div className="flex flex-col gap-0.5 text-xs sm:text-sm">
          <p className="font-semibold text-[var(--health-ink)]">
            نرخ موفقیت پس از ورود به بانک
          </p>
          <p className="text-[var(--health-warn)]">
            {toPersianDigits(Math.abs(FUNNEL_SUMMARY.vsPeerPoints))} واحد درصد کمتر از
            همتایان مشابه (میانه {formatPersianPercent(FUNNEL_SUMMARY.peerMedian)})
          </p>
        </div>
      </div>

      <aside
        className="relative overflow-hidden rounded-xl bg-[linear-gradient(135deg,#151d48_0%,#2a2470_55%,#3b2f8f_100%)] p-3 text-white sm:p-4"
        aria-labelledby="funnel-insight-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30 motion-reduce:hidden"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 20%, rgba(91,76,219,0.45), transparent 42%), radial-gradient(circle at 85% 0%, rgba(15,154,132,0.22), transparent 36%)",
          }}
        />
        <div className="relative flex items-center gap-2 text-[var(--health-teal)]">
          <TargetIcon className="size-3.5" aria-hidden="true" />
          <h3 id="funnel-insight-heading" className="text-sm font-bold text-white">
            بینش کلیدی قیف
          </h3>
        </div>
        <p className="relative mt-1.5 text-sm leading-6 text-white/90">
          {FUNNEL_SUMMARY.headline}{" "}
          <span className="font-medium text-[var(--health-teal)]">
            {FUNNEL_SUMMARY.takeaway}
          </span>
        </p>
      </aside>
    </Panel>
  );
}

function DropOffPanel() {
  return (
    <Panel
      title="ریزش بین مراحل"
      description="بزرگ‌ترین گلوگاه مسیر را اول هدف بگیرید"
      headingId="payment-dropoff-heading"
    >
      <ul className="flex flex-col gap-2">
        {FUNNEL_DROPOFFS.map((step) => (
          <li
            key={step.id}
            className={cn(
              "rounded-xl border p-3",
              step.severity === "high"
                ? "border-[var(--health-warn)]/25 bg-[var(--health-warn-soft)]"
                : step.severity === "medium"
                  ? "border-[var(--health-amber)]/30 bg-[var(--health-amber-soft)]"
                  : "border-[var(--health-line)] bg-[var(--health-wash)]"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[var(--health-ink)]">
                  {step.from}
                  <span className="mx-1 text-[var(--health-subtle)]">→</span>
                  {step.to}
                </p>
                <p className="mt-1 text-[11px] text-[var(--health-subtle)]">
                  {formatPersianNumber(step.lostCount)} نشست از دست‌رفته
                </p>
              </div>
              <p
                className={cn(
                  "text-sm font-extrabold tabular-nums",
                  step.severity === "high"
                    ? "text-[var(--health-warn)]"
                    : step.severity === "medium"
                      ? "text-[var(--health-amber)]"
                      : "text-[var(--health-ink)]"
                )}
              >
                {formatPersianPercent(step.lostRate)}-
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function KpiCard({ kpi }: { kpi: HealthKpi }) {
  const Icon = kpiIconMap[kpi.icon];
  return (
    <article className={cn(panelClass, "flex flex-col gap-2 p-3")}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[11px] font-semibold leading-4 text-[var(--health-ink)]">
          {kpi.label}
        </h3>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg",
            toneIconClass[kpi.tone]
          )}
        >
          <Icon className="size-3.5" aria-hidden="true" />
        </span>
      </div>
      <p
        className={cn(
          "text-xl font-extrabold tracking-tight",
          kpi.tone === "warn" ? "text-[var(--health-warn)]" : "text-[var(--health-ink)]"
        )}
      >
        {kpi.value}
      </p>
      <p className="text-[11px] text-[var(--health-subtle)]">{kpi.caption}</p>
    </article>
  );
}

function AmountSuccessChart() {
  const max = 100;
  return (
    <Panel
      title="موفقیت پس از ورود به بانک"
      description="به‌تفکیک بازه مبلغ، در برابر میانه همتایان"
      headingId="amount-success-heading"
    >
      <ul className="flex flex-col gap-3" aria-label="نرخ موفقیت بر اساس مبلغ">
        {AMOUNT_BUCKETS.map((bucket) => (
          <li key={bucket.id} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2 text-xs">
              <span className="font-medium text-[var(--health-ink)]">{bucket.label}</span>
              <span className="tabular-nums text-[var(--health-subtle)]">
                شما {formatPersianPercent(bucket.bankSuccess)} · همتا{" "}
                {formatPersianPercent(bucket.peerMedian)}
              </span>
            </div>
            <div className="relative h-2.5 overflow-hidden rounded-full bg-[var(--health-wash)]">
              <span
                className="absolute inset-y-0 start-0 rounded-full bg-[var(--health-violet-line)]"
                style={{ width: `${(bucket.peerMedian / max) * 100}%` }}
                aria-hidden="true"
              />
              <span
                className="absolute inset-y-0 start-0 rounded-full bg-[var(--health-violet)]"
                style={{ width: `${(bucket.bankSuccess / max) * 100}%` }}
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="text-[11px] text-[var(--health-subtle)]">
        نوار بنفش تیره = شما · نوار روشن = میانه همتا
      </p>
    </Panel>
  );
}

function RetryPanel() {
  return (
    <Panel
      title="بازیابی با Retry"
      description="نشست‌هایی که پس از تلاش مجدد به خرید موفق رسیدند"
      headingId="retry-heading"
    >
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-[var(--health-good-soft)] p-3">
          <p className="text-[11px] text-[var(--health-subtle)]">سهم بازیابی</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--health-good)]">
            {formatPersianPercent(RETRY_STATS.recoveredShare)}
          </p>
        </div>
        <div className="rounded-xl bg-[var(--health-wash)] p-3">
          <p className="text-[11px] text-[var(--health-subtle)]">نشست بازیابی‌شده</p>
          <p className="mt-1 text-2xl font-extrabold text-[var(--health-ink)]">
            {formatPersianNumber(RETRY_STATS.recoveredSessions)}
          </p>
        </div>
      </div>
      <p className="rounded-lg border border-[var(--health-line)] bg-[var(--health-wash)] px-3 py-2 text-xs leading-5 text-[var(--health-subtle)]">
        میانگین تلاش تا موفقیت:{" "}
        <span className="font-semibold text-[var(--health-ink)]">
          {toPersianDigits(RETRY_STATS.medianAttempts)}
        </span>
        . {RETRY_STATS.note}
      </p>
    </Panel>
  );
}

function TerminalTable() {
  return (
    <Panel
      title="تفاوت ترمینال‌ها"
      description="فقط ترمینال‌هایی با نمونه کافی"
      headingId="terminal-heading"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[22rem] border-separate border-spacing-0 text-xs">
          <caption className="sr-only">
            مقایسه نرخ موفقیت و NoAttempt بین ترمینال‌های پذیرنده
          </caption>
          <thead>
            <tr className="text-[var(--health-subtle)]">
              <th scope="col" className="p-2 text-start font-medium">
                ترمینال
              </th>
              <th scope="col" className="p-2 text-end font-medium">
                موفقیت
              </th>
              <th scope="col" className="p-2 text-end font-medium">
                NoAttempt
              </th>
              <th scope="col" className="p-2 text-end font-medium">
                نمونه
              </th>
            </tr>
          </thead>
          <tbody>
            {TERMINAL_ROWS.map((row) => (
              <tr key={row.id}>
                <th
                  scope="row"
                  className="border-t border-[var(--health-line)] p-2 text-start font-semibold text-[var(--health-ink)]"
                >
                  {row.name}
                </th>
                <td className="border-t border-[var(--health-line)] p-2 text-end tabular-nums font-bold text-[var(--health-ink)]">
                  {formatPersianPercent(row.successRate)}
                </td>
                <td className="border-t border-[var(--health-line)] p-2 text-end tabular-nums text-[var(--health-warn)]">
                  {formatPersianPercent(row.noAttempt)}
                </td>
                <td className="border-t border-[var(--health-line)] p-2 text-end text-[var(--health-subtle)]">
                  {row.sample}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

function PspAnomalyPanel() {
  return (
    <Panel
      title="ناهنجاری PSP یا صادرکننده"
      description="انحراف تعدیل‌شده نسبت به الگوی مورد انتظار"
      headingId="psp-anomaly-heading"
    >
      <ul className="flex flex-col gap-2">
        {PSP_ANOMALIES.map((item) => (
          <li
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-xl border border-[var(--health-line)] bg-[var(--health-wash)] px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-xs font-bold text-[var(--health-ink)]">{item.label}</p>
              <p className="mt-0.5 text-[11px] leading-5 text-[var(--health-subtle)]">
                {item.note}
              </p>
            </div>
            <span
              className={cn(
                "shrink-0 text-sm font-extrabold tabular-nums",
                item.tone === "warn"
                  ? "text-[var(--health-warn)]"
                  : item.tone === "good"
                    ? "text-[var(--health-good)]"
                    : "text-[var(--health-ink)]"
              )}
            >
              {item.deviation > 0 ? "+" : ""}
              {toPersianDigits(item.deviation.toFixed(1))}
              <span className="text-[10px] font-medium"> واحد</span>
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function Disclaimer() {
  return (
    <p className="flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--health-subtle)] sm:text-xs">
      <InfoIcon className="mt-0.5 size-3.5 shrink-0 text-[var(--health-violet)]" aria-hidden="true" />
      <span>
        نشست ناموفق الزاماً با اصلاح مسیر به خرید موفق تبدیل نمی‌شد؛ اثر مالی را
        سناریویی بخوانید، نه درآمد قطعی ازدست‌رفته.
      </span>
    </p>
  );
}

export function PaymentHealthDashboard() {
  return (
    <div className="flex flex-col gap-3 text-[var(--health-ink)]" style={healthTheme}>
      <HealthHeader />

      <section
        aria-label="شاخص‌های سلامت مسیر"
        className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 xl:grid-cols-6"
      >
        {PAYMENT_HEALTH_KPIS.map((kpi) => (
          <KpiCard key={kpi.id} kpi={kpi} />
        ))}
      </section>

      <section
        aria-label="قیف و ریزش مسیر پرداخت"
        className="grid grid-cols-1 gap-3 lg:grid-cols-3"
      >
        <FunnelHero />
        <DropOffPanel />
      </section>

      <section
        aria-label="تحلیل‌های تکمیلی مسیر پرداخت"
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      >
        <AmountSuccessChart />
        <RetryPanel />
        <TerminalTable />
        <PspAnomalyPanel />
      </section>

      <Disclaimer />
    </div>
  );
}
