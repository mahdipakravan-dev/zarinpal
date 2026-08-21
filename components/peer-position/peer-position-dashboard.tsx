"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  ActivityIcon, ArrowUpRightIcon, BadgePercentIcon, CheckCircle2Icon,
  CircleDollarSignIcon, Clock3Icon, InfoIcon, LightbulbIcon, LockKeyholeIcon,
  ReceiptTextIcon, RefreshCwIcon, ShieldCheckIcon, StoreIcon, TargetIcon,
  TrendingUpIcon, TrophyIcon, UsersIcon, WalletCardsIcon, type LucideIcon,
} from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "@/components/ui/select";
import { formatPersianNumber, formatPersianPercent } from "@/lib/format";
import {
  PEER_POSITION_INDEX, peerPositionMerchantDataUrl, type PeerMetric,
  type PeerMetricId, type PeerPositionResult, type PeerTone,
} from "@/lib/peer-position-data";
import { cn } from "@/lib/utils";

const theme = {
  "--peer-ink": "#17191d", "--peer-subtle": "#68707d", "--peer-line": "#e3e7ed",
  "--peer-wash": "#f7f8fa", "--peer-blue": "#174fd6", "--peer-blue-soft": "#edf3ff",
  "--peer-teal": "#0f907d", "--peer-teal-soft": "#e9f7f3", "--peer-green": "#16865f",
  "--peer-amber": "#d97720", "--peer-amber-soft": "#fff2e3", "--peer-red": "#d44c5c",
  "--peer-red-soft": "#fdecef", "--peer-yellow": "#ffd60a",
} as CSSProperties;

const panel = "rail-panel rail-panel-interactive [--rail-accent:var(--peer-blue)] [--rail-line:var(--peer-line)]";

const metricIcons: Record<PeerMetricId, LucideIcon> = {
  sales: CircleDollarSignIcon, growth: TrendingUpIcon, adjustedSuccess: ShieldCheckIcon,
  avgTicket: ReceiptTextIcon, retention30: RefreshCwIcon, returningSales: UsersIcon,
  noAttempt: WalletCardsIcon, retrySuccess: CheckCircle2Icon, feePressure: BadgePercentIcon,
  volatility: ActivityIcon,
};

const toneClasses: Record<PeerTone, { text: string; soft: string; dot: string }> = {
  good: { text: "text-[var(--peer-green)]", soft: "bg-[var(--peer-teal-soft)]", dot: "bg-[var(--peer-green)]" },
  warn: { text: "text-[var(--peer-red)]", soft: "bg-[var(--peer-red-soft)]", dot: "bg-[var(--peer-red)]" },
  neutral: { text: "text-[var(--peer-blue)]", soft: "bg-[var(--peer-blue-soft)]", dot: "bg-[var(--peer-blue)]" },
};

function formatMetric(metric: PeerMetric, value = metric.value): string {
  if (value === null) return "داده کافی نیست";
  if (metric.format === "money") {
    const toman = value / 10;
    if (Math.abs(toman) >= 1_000_000_000) return `${formatPersianNumber(toman / 1_000_000_000, { maximumFractionDigits: 1 })} میلیارد تومان`;
    if (Math.abs(toman) >= 1_000_000) return `${formatPersianNumber(toman / 1_000_000, { maximumFractionDigits: 1 })} میلیون تومان`;
    return `${formatPersianNumber(toman, { maximumFractionDigits: 0 })} تومان`;
  }
  if (metric.format === "basis") return `${formatPersianNumber(value, { maximumFractionDigits: 1 })} در ده‌هزار`;
  return formatPersianPercent(value);
}

function Panel({ title, description, children, className }: { title: string; description?: string; children: ReactNode; className?: string }) {
  return <article className={cn(panel, "flex min-w-0 flex-col gap-3 p-3", className)}>
    <header className="flex flex-col gap-0.5"><h2 className="text-sm font-bold text-[var(--peer-ink)] sm:text-base">{title}</h2>{description ? <p className="text-xs leading-5 text-[var(--peer-subtle)]">{description}</p> : null}</header>{children}
  </article>;
}

function DashboardHeader({ merchantId, onMerchantChange }: { merchantId: string; onMerchantChange: (value: string | null) => void }) {
  return <header className="flex flex-col gap-2.5 md:flex-row md:items-start md:justify-between">
    <div className="flex min-w-0 items-center gap-2.5"><span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-[var(--peer-yellow)] text-[var(--peer-ink)]"><TrophyIcon className="size-5" aria-hidden="true" /></span><div className="min-w-0"><h1 className="text-lg font-extrabold text-[var(--peer-ink)] sm:text-xl">جایگاه در میان کسب‌وکارهای مشابه</h1><p className="text-xs leading-5 text-[var(--peer-subtle)] sm:text-sm">مقایسه محرمانه با همتاهای هم‌دسته و هم‌پروفایل</p></div></div>
    <div className="grid w-full gap-2 sm:grid-cols-[minmax(0,1fr)_auto] md:w-auto md:min-w-[24rem]">
      <Select value={merchantId} onValueChange={onMerchantChange}><SelectTrigger className="h-10 w-full border-[var(--peer-line)] bg-card" aria-label="انتخاب پذیرنده"><StoreIcon className="size-4 text-[var(--peer-blue)]" aria-hidden="true" /><span className="min-w-0 flex-1 truncate text-start text-xs font-bold">{merchantId}</span></SelectTrigger><SelectContent><SelectGroup>{PEER_POSITION_INDEX.merchants.map((merchant) => <SelectItem key={merchant.id} value={merchant.id}>{merchant.label}</SelectItem>)}</SelectGroup></SelectContent></Select>
      <div className="flex h-10 items-center gap-2 rounded-lg border border-[var(--peer-line)] bg-card px-3 text-xs"><Clock3Icon className="size-4 text-[var(--peer-teal)]" aria-hidden="true" /><strong className="whitespace-nowrap text-[var(--peer-ink)]">{PEER_POSITION_INDEX.period.label}</strong></div>
    </div>
  </header>;
}

function SummaryStrip({ result }: { result: PeerPositionResult }) {
  const confidence = result.confidence === "high" ? "زیاد" : result.confidence === "medium" ? "متوسط" : "کم";
  return <section aria-label="خلاصه مقایسه" className={cn(panel, "grid divide-y divide-[var(--peer-line)] sm:grid-cols-4 sm:divide-x sm:divide-x-reverse sm:divide-y-0")}>
    <SummaryItem label="گروه همتا" value={`${formatPersianNumber(result.peerGroup.count)} پذیرنده`} icon={UsersIcon} />
    <SummaryItem label="دسته کسب‌وکار" value={result.merchant.categoryTitle} icon={StoreIcon} />
    <SummaryItem label="نمونه این بازه" value={`${formatPersianNumber(result.sample.sessions)} نشست · ${formatPersianNumber(result.sample.purchases)} خرید`} icon={ReceiptTextIcon} />
    <SummaryItem label="اطمینان تحلیل" value={confidence} icon={ShieldCheckIcon} tone={result.confidence === "low" ? "warn" : "good"} />
  </section>;
}

function SummaryItem({ label, value, icon: Icon, tone = "neutral" }: { label: string; value: string; icon: LucideIcon; tone?: PeerTone }) {
  return <div className="flex min-w-0 items-center gap-2.5 px-3 py-2.5"><span className={cn("flex size-8 shrink-0 items-center justify-center rounded-md", toneClasses[tone].soft, toneClasses[tone].text)}><Icon className="size-4" aria-hidden="true" /></span><div className="min-w-0"><p className="text-[10px] text-[var(--peer-subtle)]">{label}</p><p className="truncate text-xs font-bold text-[var(--peer-ink)]" title={value}>{value}</p></div></div>;
}

function InsightBanner({ result }: { result: PeerPositionResult }) {
  return <aside className="rail-banner grid gap-3 p-3 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.42fr)]"><div className="relative flex min-w-0 gap-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-[var(--peer-teal-soft)] text-[var(--peer-teal)]"><LightbulbIcon className="size-4" aria-hidden="true" /></span><div className="min-w-0"><p className="mb-1 text-xs font-bold text-[var(--peer-teal)]">بینش کلیدی</p><p className="text-sm font-semibold leading-6 text-[var(--peer-ink)]">{result.insight.headline}</p><p className="mt-1 text-xs leading-5 text-[var(--peer-subtle)]">{result.insight.diagnosis}</p></div></div><div className="relative flex gap-2 border-t border-[var(--peer-line)] pt-3 md:border-s md:border-t-0 md:ps-3 md:pt-0"><TargetIcon className="mt-0.5 size-4 shrink-0 text-[var(--peer-amber)]" aria-hidden="true" /><p className="text-xs leading-5 text-[var(--peer-ink)]"><strong className="text-[var(--peer-amber)]">اقدام پیشنهادی: </strong>{result.insight.action}</p></div></aside>;
}

function MetricCard({ metric }: { metric: PeerMetric }) {
  const Icon = metricIcons[metric.id], tone = toneClasses[metric.tone];
  return <article className={cn(panel, "flex min-h-36 flex-col gap-2.5 p-3")}><div className="flex items-start justify-between gap-2"><span className={cn("flex size-9 items-center justify-center rounded-md", tone.soft, tone.text)}><Icon className="size-4" aria-hidden="true" /></span><span className={cn("text-lg font-extrabold tabular-nums", tone.text)}>صدک {formatPersianNumber(metric.percentile)}</span></div><div><h3 className="text-xs font-bold leading-5 text-[var(--peer-ink)]">{metric.label}</h3><p className="mt-0.5 text-base font-extrabold text-[var(--peer-ink)]">{formatMetric(metric)}</p></div><p className="mt-auto border-t border-[var(--peer-line)] pt-2 text-[10px] text-[var(--peer-subtle)]">میانه همتا: <strong className="text-[var(--peer-ink)]">{formatMetric(metric, metric.median)}</strong></p></article>;
}

function KpiHighlights({ metrics }: { metrics: PeerMetric[] }) {
  const ids: PeerMetricId[] = ["growth", "adjustedSuccess", "retention30", "volatility"];
  return <section aria-label="شاخص‌های برجسته" className="grid grid-cols-2 gap-2 lg:grid-cols-4">{ids.map((id) => <MetricCard key={id} metric={metrics.find((metric) => metric.id === id)!} />)}</section>;
}

function PercentileTrack({ metric }: { metric: PeerMetric }) {
  const tone = toneClasses[metric.tone];
  return <div className="grid min-w-0 gap-2 border-b border-[var(--peer-line)] py-2.5 last:border-0 sm:grid-cols-[11rem_minmax(0,1fr)_6rem] sm:items-center"><div className="flex min-w-0 items-center gap-2"><span className={cn("size-2 shrink-0 rounded-full", tone.dot)} /><span className="truncate text-xs font-semibold text-[var(--peer-ink)]">{metric.label}</span></div><div className="relative h-2 rounded-full bg-[var(--peer-wash)]" role="img" aria-label={`${metric.label}، صدک ${metric.percentile}`}><span className="absolute inset-y-0 start-1/4 w-1/2 rounded-full bg-[var(--peer-blue-soft)]" aria-hidden="true" /><span className="absolute inset-y-[-3px] start-1/2 w-px bg-[var(--peer-subtle)]/50" aria-hidden="true" /><span className={cn("absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white", tone.dot)} style={{ left: `${metric.percentile}%` }} aria-hidden="true" /></div><div className="flex items-baseline justify-between gap-2 sm:justify-end"><span className="text-[10px] text-[var(--peer-subtle)]">صدک</span><strong className={cn("text-sm tabular-nums", tone.text)}>{formatPersianNumber(metric.percentile)}</strong></div></div>;
}

function PercentileMap({ metrics }: { metrics: PeerMetric[] }) {
  return <Panel title="نقشه جایگاه عملکرد" description="صدک بالاتر همیشه بهتر است؛ برای NoAttempt، کارمزد و نوسان، مقدار کمتر به صدک بالاتر تبدیل شده است."><div className="flex items-center justify-end gap-4 text-[10px] text-[var(--peer-subtle)]"><span>ضعیف‌تر</span><span className="h-px flex-1 bg-[var(--peer-line)]" /><span>میانه</span><span className="h-px flex-1 bg-[var(--peer-line)]" /><span>بهتر</span></div><div>{metrics.map((metric) => <PercentileTrack key={metric.id} metric={metric} />)}</div></Panel>;
}

function scale(value: number, min: number, max: number, start: number, end: number) {
  return start + ((value - min) / Math.max(max - min, 1)) * (end - start);
}

function GrowthRetentionScatter({ result }: { result: PeerPositionResult }) {
  const points = [...result.scatter.peers, { id: "شما", ...result.scatter.you }];
  const xValues = points.map((point) => point.x), yValues = points.map((point) => point.y);
  const xMin = Math.min(...xValues, result.scatter.xMedian), xMax = Math.max(...xValues, result.scatter.xMedian);
  const yMin = Math.min(...yValues, result.scatter.yMedian), yMax = Math.max(...yValues, result.scatter.yMedian);
  const width = 440, height = 250, left = 42, right = 16, top = 18, bottom = 34;
  const medianX = scale(result.scatter.xMedian, xMin, xMax, left, width - right), medianY = scale(result.scatter.yMedian, yMin, yMax, height - bottom, top);
  return <Panel title="رشد در برابر نگهداشت" description="هر نقطه یک پذیرنده ناشناس است؛ خطوط، میانه گروه همتا را نشان می‌دهند." className="h-full"><div className="flex items-center justify-between text-[10px] text-[var(--peer-subtle)]"><span>نگهداشت بیشتر ↑</span><span>ناحیه عملکرد برتر</span></div><figure className="min-h-0 flex-1"><figcaption className="sr-only">نمودار پراکندگی رشد فروش ماهانه و نرخ خرید مجدد سی‌روزه</figcaption><svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-hidden="true"><rect x={medianX} y={top} width={width - right - medianX} height={medianY - top} fill="var(--peer-teal-soft)" rx="4" /><line x1={medianX} y1={top} x2={medianX} y2={height - bottom} stroke="var(--peer-subtle)" strokeDasharray="4 4" /><line x1={left} y1={medianY} x2={width - right} y2={medianY} stroke="var(--peer-subtle)" strokeDasharray="4 4" />{result.scatter.peers.map((point) => <circle key={point.id} cx={scale(point.x, xMin, xMax, left, width - right)} cy={scale(point.y, yMin, yMax, height - bottom, top)} r="4" fill="var(--peer-blue)" opacity="0.28" />)}<circle cx={scale(result.scatter.you.x, xMin, xMax, left, width - right)} cy={scale(result.scatter.you.y, yMin, yMax, height - bottom, top)} r="7" fill="var(--peer-amber)" stroke="white" strokeWidth="3" /><text x={scale(result.scatter.you.x, xMin, xMax, left, width - right)} y={scale(result.scatter.you.y, yMin, yMax, height - bottom, top) - 11} textAnchor="middle" className="fill-[var(--peer-ink)] text-[10px] font-bold">شما</text></svg></figure><p className="text-end text-[10px] text-[var(--peer-subtle)]">رشد بیشتر ←</p><div className="grid grid-cols-2 gap-2 text-center text-[10px]"><span className="rounded-md bg-[var(--peer-wash)] px-2 py-1.5">میانه رشد: {formatPersianPercent(result.scatter.xMedian)}</span><span className="rounded-md bg-[var(--peer-wash)] px-2 py-1.5">میانه نگهداشت: {formatPersianPercent(result.scatter.yMedian)}</span></div></Panel>;
}

function linePath(values: number[], width: number, height: number, padding: number, min: number, max: number) {
  return values.map((value, index) => `${index ? "L" : "M"}${padding + (index / Math.max(values.length - 1, 1)) * (width - padding * 2)} ${height - padding - ((value - min) / Math.max(max - min, 1)) * (height - padding * 2)}`).join(" ");
}

function WeeklyTrend({ trend }: { trend: PeerPositionResult["weeklyTrend"] }) {
  const width = 440, height = 220, padding = 24, all = [...trend.you, ...trend.peerMedian];
  const max = Math.max(...all, 120), min = Math.min(...all, 80);
  const y = (value: number) => height - padding - ((value - min) / Math.max(max - min, 1)) * (height - padding * 2);
  return <Panel title="ریتم فروش در طول ماه" description="فروش هر هفته نسبت به میانگین همان پذیرنده نرمال شده است؛ ۱۰۰ یعنی هفته معمول." className="h-full"><div className="flex gap-4 text-[10px] text-[var(--peer-subtle)]"><span className="flex items-center gap-1.5"><i className="h-0.5 w-5 bg-[var(--peer-blue)]" />شما</span><span className="flex items-center gap-1.5"><i className="h-px w-5 border-t border-dashed border-[var(--peer-teal)]" />میانه همتا</span></div><figure className="min-h-0 flex-1"><figcaption className="sr-only">روند هفتگی فروش نرمال‌شده شما و میانه همتایان</figcaption><svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-hidden="true"><line x1={padding} x2={width - padding} y1={y(100)} y2={y(100)} stroke="var(--peer-line)" strokeDasharray="4 4" /><path d={linePath(trend.peerMedian, width, height, padding, min, max)} fill="none" stroke="var(--peer-teal)" strokeWidth="2" strokeDasharray="5 4" /><path d={linePath(trend.you, width, height, padding, min, max)} fill="none" stroke="var(--peer-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />{trend.you.map((value, index) => { const x = padding + (index / Math.max(trend.you.length - 1, 1)) * (width - padding * 2); return <g key={trend.labels[index]}><circle cx={x} cy={y(value)} r="4" fill="var(--peer-blue)" /><text x={x} y={height - 4} textAnchor="middle" className="fill-[var(--peer-subtle)] text-[9px]">{trend.labels[index]}</text></g>; })}</svg></figure></Panel>;
}

function OpportunityList({ result }: { result: PeerPositionResult }) {
  if (!result.opportunities.length) return null;
  return <section className="flex flex-col gap-2" aria-labelledby="peer-opportunity-heading"><header><h2 id="peer-opportunity-heading" className="text-sm font-bold text-[var(--peer-ink)] sm:text-base">اولویت‌های بهبود</h2><p className="text-xs text-[var(--peer-subtle)]">بزرگ‌ترین فاصله‌ها تا میانه گروه، به ترتیب اولویت</p></header><div className="grid gap-2 md:grid-cols-3">{result.opportunities.map((item, index) => <article key={item.id} className={cn(panel, "flex min-h-32 flex-col gap-2.5 p-3")}><div className="flex items-center justify-between gap-2"><span className="flex size-7 items-center justify-center rounded-md bg-[var(--peer-amber-soft)] text-xs font-extrabold text-[var(--peer-amber)]">{formatPersianNumber(index + 1)}</span><strong className="text-xs text-[var(--peer-red)]">صدک {formatPersianNumber(item.percentile)}</strong></div><h3 className="text-sm font-bold text-[var(--peer-ink)]">{item.label}</h3><p className="text-xs leading-5 text-[var(--peer-subtle)]">{item.action}</p></article>)}</div></section>;
}

function PeerGroupAside({ result }: { result: PeerPositionResult }) {
  return <aside className={cn(panel, "flex h-fit flex-col gap-3 p-3 lg:sticky lg:top-4")}><div><div className="flex items-center gap-2"><UsersIcon className="size-4 text-[var(--peer-blue)]" aria-hidden="true" /><h2 className="text-sm font-bold text-[var(--peer-ink)]">پروفایل گروه همتا</h2></div><p className="mt-1 text-[10px] leading-5 text-[var(--peer-subtle)]">{result.peerGroup.method}</p></div><dl className="divide-y divide-[var(--peer-line)]">{result.peerGroup.criteria.map((criterion) => <div key={criterion.id} className="py-2"><dt className="text-[10px] text-[var(--peer-subtle)]">{criterion.label}</dt><dd className="mt-0.5 text-xs font-semibold leading-5 text-[var(--peer-ink)]">{criterion.value}</dd></div>)}</dl><p className="flex gap-2 border-t border-[var(--peer-line)] pt-2 text-[10px] leading-5 text-[var(--peer-subtle)]"><LockKeyholeIcon className="mt-0.5 size-3.5 shrink-0 text-[var(--peer-teal)]" aria-hidden="true" />هویت همتایان نمایش داده نمی‌شود و گروه کمتر از {formatPersianNumber(result.peerGroup.minimum)} پذیرنده منتشر نمی‌شود.</p></aside>;
}

function Methodology({ result }: { result: PeerPositionResult }) {
  const labels: Record<string, string> = { success: "موفقیت تعدیل‌شده", noAttempt: "NoAttempt", retry: "Retry", retention: "خرید مجدد", fee: "فشار کارمزد", stability: "پایداری" };
  return <details className={cn(panel, "group p-3")}><summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-bold text-[var(--peer-ink)]"><span className="flex items-center gap-2"><InfoIcon className="size-4 text-[var(--peer-blue)]" />تعریف شاخص‌ها و محدودیت تحلیل</span><ArrowUpRightIcon className="size-4 transition-transform group-open:rotate-90" /></summary><dl className="mt-3 grid gap-2 border-t border-[var(--peer-line)] pt-3 md:grid-cols-2">{Object.entries(result.methodology).map(([key, value]) => <div key={key} className="rounded-md bg-[var(--peer-wash)] p-2"><dt className="text-[10px] font-bold text-[var(--peer-blue)]">{labels[key]}</dt><dd className="mt-1 text-[10px] leading-5 text-[var(--peer-subtle)]">{value}</dd></div>)}</dl><p className="mt-2 text-[10px] leading-5 text-[var(--peer-subtle)]">این مقایسه توصیفی است و اثر علّی اقدام‌ها را اثبات نمی‌کند. نرخ وفاداری از کل بازه مشاهده و شاخص‌های عملیاتی از {result.period.range} محاسبه شده‌اند.</p></details>;
}

function LoadingState() {
  return <div className="grid gap-2"><Skeleton className="h-20" /><div className="grid grid-cols-2 gap-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton key={index} className="h-36" />)}</div><Skeleton className="h-80" /></div>;
}

export function PeerPositionDashboard() {
  const [merchantId, setMerchantId] = useState(PEER_POSITION_INDEX.merchants[0].id);
  const [result, setResult] = useState<PeerPositionResult | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    fetch(peerPositionMerchantDataUrl(merchantId), { signal: controller.signal })
      .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json() as Promise<PeerPositionResult>; })
      .then(setResult).catch((reason) => { if (reason?.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, [merchantId]);
  function changeMerchant(value: string | null) {
    if (!value || value === merchantId) return;
    setResult(null);
    setError(false);
    setMerchantId(value);
  }
  return <div className="flex flex-col gap-2.5 text-[var(--peer-ink)]" style={theme}><DashboardHeader merchantId={merchantId} onMerchantChange={changeMerchant} />{error ? <div className={cn(panel, "flex min-h-40 items-center justify-center p-4 text-sm text-[var(--peer-red)]")}>داده جایگاه این پذیرنده بارگذاری نشد.</div> : !result ? <LoadingState /> : <><SummaryStrip result={result} /><InsightBanner result={result} /><div className="grid gap-2.5 lg:grid-cols-[minmax(0,1fr)_16rem]"><main className="flex min-w-0 flex-col gap-2.5"><KpiHighlights metrics={result.metrics} /><PercentileMap metrics={result.metrics} /><section className="grid gap-2.5 xl:grid-cols-2" aria-label="نمودارهای تحلیلی"><GrowthRetentionScatter result={result} /><WeeklyTrend trend={result.weeklyTrend} /></section><OpportunityList result={result} /></main><PeerGroupAside result={result} /></div><Methodology result={result} /></>}</div>;
}
