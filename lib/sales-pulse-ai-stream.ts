import { streamLiaraAction } from "@/lib/liara-ai-stream";
import type { SalesPulseResult } from "@/lib/sales-pulse-data";

type StreamSalesPulseActionOptions = {
  merchantCategory: string;
  periodLabel: string;
  result: SalesPulseResult;
  signal: AbortSignal;
  onText: (text: string) => void;
};

function strongestByAbsoluteValue<T extends { value: number }>(items: T[]): T {
  return [...items].sort((left, right) => Math.abs(right.value) - Math.abs(left.value))[0];
}

function factsFor({ merchantCategory, periodLabel, result }: StreamSalesPulseActionOptions) {
  const strongestFactor = strongestByAbsoluteValue(result.growthFactors);
  const strongestHour = [...result.hourlyImpact].sort((left, right) => right.value - left.value)[0];

  return {
    period: periodLabel,
    merchantCategory,
    confidence: result.confidence,
    sessions: result.sampleSize,
    successfulPurchases: result.verifiedPurchases,
    changes: {
      successfulSalesPercent: result.totalGrowth,
      successfulPurchaseCountPercent: result.kpis.successfulCount.change,
      averagePurchasePercent: result.kpis.avgBasket.change,
      paymentSuccessRatePoints: result.kpis.successRate.change,
      returningCardSharePoints: result.kpis.returningShare.change,
    },
    strongestGrowthFactor: {
      label: strongestFactor.label,
      contributionPoints: strongestFactor.value,
    },
    strongestThreeHourWindow: {
      label: strongestHour.label,
      contributionPoints: strongestHour.value,
    },
    ruleBasedSuggestion: result.insight.ruleAction,
  };
}

export async function streamSalesPulseAction(
  options: StreamSalesPulseActionOptions
): Promise<string> {
  return streamLiaraAction({
    logPrefix: "liara-ai-stream",
    signal: options.signal,
    onText: options.onText,
    system: [
      "شما دستیار رشد کسب‌وکار پذیرندگان پرداخت هستید.",
      "فقط براساس داده تجمیعی ورودی، یک اقدام عملی، کم‌ریسک و قابل‌آزمایش پیشنهاد کنید.",
      "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست مب توانبد پیشنهاد دهید.",
      "اگر اطمینان کم است، پیشنهاد را به جمع‌آوری داده یا یک آزمایش محدود معطوف کنید.",
      "پاسخ باید فارسی روان، فقط یک جمله و حداکثر ۳۵ کلمه باشد.",
      "فقط خود جمله پیشنهاد را بنویسید؛ JSON، عنوان، Markdown یا توضیح اضافه ننویسید.",
    ].join("\n"),
    user: `برای این خلاصه عملکرد یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(factsFor(options))}`,
  });
}
