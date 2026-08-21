import { streamLiaraAction } from "@/lib/liara-ai-stream";
import type { BuyerLoyaltyResult } from "@/lib/buyer-loyalty-data";

type Options = {
  result: BuyerLoyaltyResult;
  signal: AbortSignal;
  onText: (text: string) => void;
};

export async function streamBuyerLoyaltyAction({ result, signal, onText }: Options) {
  const facts = {
    merchantCategory: result.merchant.categoryTitle,
    observation: result.observation,
    confidence: result.confidence,
    retention30: result.retentionCurve.find((item) => item.horizon === 30),
    returningCardRate: result.kpis.returningCardRate,
    repeatPurchaseShare: result.kpis.repeatPurchaseShare,
    repeatAmountShare: result.kpis.repeatAmountShare,
    returnIntervalDays: result.intervalStats,
    singlePurchaseCards: result.segments.find((item) => item.id === "single"),
    loyalCards: result.segments.find((item) => item.id === "loyal"),
    firstPurchaseAverageIRR: result.valueComparison.firstPurchaseAverage,
    repeatPurchaseAverageIRR: result.valueComparison.repeatPurchaseAverage,
    ruleSuggestion: result.insight.ruleAction,
  };

  return streamLiaraAction({
    logPrefix: "liara-loyalty-stream",
    signal,
    onText,
    system: [
      "شما دستیار رشد وفاداری برای پذیرندگان پرداخت هستید.منظور از وفاداری مشتریانی هستند که به کسب و کار شما وفادار هستند و بیش از یکبار از شما خرید کرده اند.",
      "براساس داده تجمیعی، فقط یک اقدام عملی و کم‌ریسک برای افزایش خرید دوم پیشنهاد کنید.",
      "در متن خروجی از واژه مشتری استفاده کنید؛ هر مشتری در ورودی با payer_card_key قابل‌شناسایی شده است.",
      "هیچ رابطه علّی، تخفیف، عدد یا واقعیت خارج از ورودی نسازید.",
      "پاسخ یک جمله فارسی و حداکثر ۳۵ کلمه باشد؛ JSON، Markdown و عنوان ننویسید.",
    ].join("\n"),
    user: `پیشنهاد اجرایی را برای این خلاصه بنویس:\n${JSON.stringify(facts)}`,
  });
}
