import { streamLiaraAction } from "@/lib/liara-ai-stream";
import type { PeerPositionResult } from "@/lib/peer-position-data";

type Options = {
  result: PeerPositionResult;
  signal: AbortSignal;
  onText: (text: string) => void;
};

function factsFor(result: PeerPositionResult) {
  const metrics = result.metrics.map((metric) => ({
    id: metric.id,
    label: metric.label,
    percentile: metric.percentile,
    tone: metric.tone,
    value: metric.value,
    median: metric.median,
  }));
  const weakest = [...result.metrics]
    .sort((left, right) => left.percentile - right.percentile)
    .slice(0, 3)
    .map((metric) => ({
      label: metric.label,
      percentile: metric.percentile,
      gapToMedian: metric.value === null ? null : metric.value - metric.median,
    }));

  return {
    merchantCategory: result.merchant.categoryTitle,
    period: result.period.label,
    confidence: result.confidence,
    peerGroupSize: result.peerGroup.count,
    sample: result.sample,
    headline: result.insight.headline,
    diagnosis: result.insight.diagnosis,
    ruleSuggestion: result.insight.action,
    weakestMetrics: weakest,
    opportunities: result.opportunities.slice(0, 3).map((item) => ({
      label: item.label,
      percentile: item.percentile,
      action: item.action,
    })),
    growthVsRetention: {
      you: result.scatter.you,
      peerMedian: { x: result.scatter.xMedian, y: result.scatter.yMedian },
    },
    metrics,
  };
}

export async function streamPeerPositionAction({
  result,
  signal,
  onText,
}: Options): Promise<string> {
  return streamLiaraAction({
    logPrefix: "liara-peer-stream",
    signal,
    onText,
    system: [
      "شما دستیار بهبود عملکرد پذیرندگان در مقایسه با همتایان هستید.",
      "فقط براساس داده تجمیعی ورودی، یک اقدام عملی، کم‌ریسک و قابل‌آزمایش پیشنهاد کنید.",
      "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست نسازید.",
      "اگر اطمینان کم است، پیشنهاد را به جمع‌آوری داده یا یک آزمایش محدود معطوف کنید.",
      "پاسخ باید فارسی روان، فقط یک جمله و حداکثر ۳۵ کلمه باشد.",
      "فقط خود جمله پیشنهاد را بنویسید؛ JSON، عنوان، Markdown یا توضیح اضافه ننویسید.",
    ].join("\n"),
    user: `برای این خلاصه جایگاه در میان همتاها یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(factsFor(result))}`,
  });
}
