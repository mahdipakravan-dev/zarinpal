import type { BuyerLoyaltyResult } from "@/lib/buyer-loyalty-data";

type Options = {
  result: BuyerLoyaltyResult;
  signal: AbortSignal;
  onText: (text: string) => void;
};

function log(event: "request" | "chunk" | "response" | "error", value: unknown) {
  console.info(`[liara-loyalty-stream:${event}] ${JSON.stringify(value)}`);
}

function dataFromEvent(event: string) {
  const value = event
    .split(/\r?\n/u)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart())
    .join("\n");
  return value || null;
}

export async function streamBuyerLoyaltyAction({ result, signal, onText }: Options) {
  const url = import.meta.env.VITE_LIARA_AI_URL;
  const apiKey = import.meta.env.VITE_LIARA_AI_API_KEY;
  const model = import.meta.env.VITE_LIARA_AI_MODEL ?? "openai/gpt-5.6-luna";
  if (!url || !apiKey) throw new Error("تنظیمات سرویس پیشنهاد هوشمند کامل نیست.");

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
  const body = {
    model,
    stream: true,
    messages: [
      {
        role: "system",
        content: [
          "شما دستیار رشد وفاداری برای پذیرندگان پرداخت هستید.منظور از وفاداری مشتریانی هستند که به کسب و کار شما وفادار هستند و بیش از یکبار از شما خرید کرده اند.",
          "براساس داده تجمیعی، فقط یک اقدام عملی و کم‌ریسک برای افزایش خرید دوم پیشنهاد کنید.",
          "در متن خروجی از واژه مشتری استفاده کنید؛ هر مشتری در ورودی با payer_card_key قابل‌شناسایی شده است.",
          "هیچ رابطه علّی، تخفیف، عدد یا واقعیت خارج از ورودی نسازید.",
          "پاسخ یک جمله فارسی و حداکثر ۳۵ کلمه باشد؛ JSON، Markdown و عنوان ننویسید.",
        ].join("\n"),
      },
      { role: "user", content: `پیشنهاد اجرایی را برای این خلاصه بنویس:\n${JSON.stringify(facts)}` },
    ],
  };
  const requestId = crypto.randomUUID();
  const startedAt = performance.now();
  log("request", { requestId, url, body });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal,
    });
    if (!response.ok || !response.body) throw new Error(`HTTP ${response.status}`);
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let raw = "";
    let action = "";

    function consume(event: string) {
      const data = dataFromEvent(event);
      if (!data || data === "[DONE]") return;
      const chunk = JSON.parse(data) as { choices?: Array<{ delta?: { content?: string } }> };
      log("chunk", { requestId, body: chunk });
      const content = chunk.choices?.[0]?.delta?.content;
      if (content) {
        action += content;
        onText(action);
      }
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const decoded = decoder.decode(value, { stream: true });
      raw += decoded;
      buffer += decoded;
      const events = buffer.split(/\r?\n\r?\n/u);
      buffer = events.pop() ?? "";
      events.forEach(consume);
    }
    if (buffer.trim()) consume(buffer);
    const normalized = action.replace(/\s+/gu, " ").trim();
    log("response", {
      requestId,
      status: response.status,
      durationMs: Math.round(performance.now() - startedAt),
      rawBody: raw,
      action: normalized,
    });
    if (!normalized) throw new Error("Empty streamed action");
    return normalized;
  } catch (error) {
    if (!signal.aborted) log("error", { requestId, message: error instanceof Error ? error.message : String(error) });
    throw error;
  }
}
