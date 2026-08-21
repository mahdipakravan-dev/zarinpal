import { streamLiaraAction } from "@/lib/liara-ai-stream";
import type { GraphKind, Merchant } from "@/lib/business-graph/types";

type Options = {
  scope: "global" | "merchant";
  kind: GraphKind;
  merchant: Merchant | null;
  meta: {
    sessions: number;
    merchants: number;
    observedCards: number;
    dateFrom: string;
    dateTo: string;
  };
  signal: AbortSignal;
  onText: (text: string) => void;
};

function factsFor({ scope, kind, merchant, meta }: Omit<Options, "signal" | "onText">) {
  if (scope === "merchant" && merchant) {
    return {
      scope,
      kind,
      category: merchant.category,
      successRate: merchant.successRate,
      noAttemptRate: merchant.noAttemptRate,
      repeatBuyerRate: merchant.repeatBuyerRate,
      retryRate: merchant.retryRate,
      laterVerified: merchant.laterVerified,
      averageTicket: merchant.averageTicket,
      verified: merchant.verified,
      sessions: merchant.sessions,
      topPsps: merchant.paymentFlow.psps.slice(0, 3).map((psp) => ({
        id: psp.id,
        attempts: psp.attempts,
        eventualVerified: psp.eventualVerified ?? psp.directVerified ?? 0,
      })),
      customerSegments: merchant.segments,
    };
  }

  return {
    scope,
    kind,
    network: meta,
  };
}

export async function streamBusinessGraphAction(
  options: Options
): Promise<string> {
  const facts = factsFor(options);
  const focus =
    options.scope === "merchant"
      ? "عملکرد این پذیرنده در گراف مشتریان و مسیر پرداخت"
      : "الگوی شبکه پذیرندگان در گراف سراسری";

  return streamLiaraAction({
    logPrefix: "liara-graph-stream",
    signal: options.signal,
    onText: options.onText,
    system: [
      "شما دستیار تحلیل گراف کسب‌وکار برای پذیرندگان پرداخت هستید.",
      `تمرکز شما روی ${focus} است.`,
      "فقط براساس داده تجمیعی ورودی، یک اقدام عملی، کم‌ریسک و قابل‌آزمایش پیشنهاد کنید.",
      "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست نسازید.",
      "پاسخ باید فارسی روان، فقط یک جمله و حداکثر ۳۵ کلمه باشد.",
      "فقط خود جمله پیشنهاد را بنویسید؛ JSON، عنوان، Markdown یا توضیح اضافه ننویسید.",
    ].join("\n"),
    user: `برای این خلاصه گراف یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(facts)}`,
  });
}
