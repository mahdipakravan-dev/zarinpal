import { streamLiaraAction } from "@/lib/liara-ai-stream";
import type { PaymentHealthResult } from "@/lib/payment-health-data";

type Options = {
  result: PaymentHealthResult;
  signal: AbortSignal;
  onText: (text: string) => void;
};

function factsFor(result: PaymentHealthResult) {
  return {
    merchantCategory: result.merchant.categoryTitle,
    period: result.period.label,
    confidence: result.confidence,
    peerGroupSize: result.peerGroup.count,
    sample: result.sample,
    headline: result.insight.headline,
    diagnosis: result.insight.diagnosis,
    ruleSuggestion: result.insight.action,
    kpis: {
      bankReach: result.kpis.bankReach,
      postEntrySuccess: result.kpis.postEntrySuccess,
      retrySuccess: result.kpis.retrySuccess,
      noAttempt: result.kpis.noAttempt,
      verifyIssue: result.kpis.verifyIssue,
      terminalGap: result.kpis.terminalGap,
    },
    topDropoffs: result.dropoffs.slice(0, 3),
    retry: {
      sessions: result.retry.sessions,
      recovered: result.retry.recovered,
      successRate: result.retry.successRate,
    },
    weakestPsp: result.pspAnomalies.slice(0, 2),
    weakestIssuer: result.issuerAnomalies.slice(0, 2),
    weakestTerminals: result.terminals
      .filter((item) => item.eligible)
      .sort((left, right) => left.successRate - right.successRate)
      .slice(0, 2)
      .map((item) => ({
        id: item.id,
        successRate: item.successRate,
        noAttempt: item.noAttempt,
        sessions: item.sessions,
      })),
  };
}

export async function streamPaymentHealthAction({
  result,
  signal,
  onText,
}: Options): Promise<string> {
  return streamLiaraAction({
    logPrefix: "liara-health-stream",
    signal,
    onText,
    system: [
      "شما دستیار سلامت مسیر پرداخت برای پذیرندگان هستید.",
      "فقط براساس داده تجمیعی ورودی، یک اقدام عملی برای کاهش ریزش یا بهبود موفقیت پرداخت پیشنهاد کنید.",
      "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست نسازید.",
      "اگر اطمینان کم است یا نمونه ناکافی است، پیشنهاد را به بررسی محدود یا جمع‌آوری داده معطوف کنید.",
      "پاسخ باید فارسی روان، فقط یک جمله و حداکثر ۳۵ کلمه باشد.",
      "فقط خود جمله پیشنهاد را بنویسید؛ JSON، عنوان، Markdown یا توضیح اضافه ننویسید.",
    ].join("\n"),
    user: `برای این خلاصه سلامت پرداخت یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(factsFor(result))}`,
  });
}
