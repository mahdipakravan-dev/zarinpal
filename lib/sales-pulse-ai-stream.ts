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

function messagesFor(facts: ReturnType<typeof factsFor>) {
  return [
    {
      role: "system",
      content: [
        "شما دستیار رشد کسب‌وکار پذیرندگان پرداخت هستید.",
        "فقط براساس داده تجمیعی ورودی، یک اقدام عملی، کم‌ریسک و قابل‌آزمایش پیشنهاد کنید.",
        "رابطه علّی، عدد، تخفیف یا واقعیتی که در ورودی نیست مب توانبد پیشنهاد دهید.",
        "اگر اطمینان کم است، پیشنهاد را به جمع‌آوری داده یا یک آزمایش محدود معطوف کنید.",
        "پاسخ باید فارسی روان، فقط یک جمله و حداکثر ۳۵ کلمه باشد.",
        "فقط خود جمله پیشنهاد را بنویسید؛ JSON، عنوان، Markdown یا توضیح اضافه ننویسید.",
      ].join("\n"),
    },
    {
      role: "user",
      content: `برای این خلاصه عملکرد یک پیشنهاد اجرایی بنویس:\n${JSON.stringify(facts)}`,
    },
  ];
}

function logAudit(event: "request" | "chunk" | "response" | "error", payload: unknown) {
  console.info(`[liara-ai-stream:${event}] ${JSON.stringify(payload)}`);
}

function eventData(event: string): string | null {
  const lines = event.split(/\r?\n/u);
  const data = lines
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart())
    .join("\n");
  return data || null;
}

export async function streamSalesPulseAction(
  options: StreamSalesPulseActionOptions
): Promise<string> {
  const url = import.meta.env.VITE_LIARA_AI_URL;
  const apiKey = import.meta.env.VITE_LIARA_AI_API_KEY;
  const model = import.meta.env.VITE_LIARA_AI_MODEL ?? "openai/gpt-5.6-luna";
  if (!url || !apiKey) throw new Error("تنظیمات سرویس پیشنهاد هوشمند کامل نیست.");

  const requestId = crypto.randomUUID();
  const body = {
    model,
    stream: true,
    messages: messagesFor(factsFor(options)),
  };
  const startedAt = performance.now();
  logAudit("request", {
    requestId,
    request: {
      url,
      method: "POST",
      headers: {
        Authorization: "Bearer [REDACTED]",
        "Content-Type": "application/json",
      },
      body,
    },
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: options.signal,
    });
    if (!response.ok || !response.body) {
      const responseText = await response.text();
      logAudit("response", {
        requestId,
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        body: responseText,
      });
      throw new Error(`سرویس پیشنهاد هوشمند با خطای ${response.status} پاسخ داد.`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let rawResponse = "";
    let action = "";
    let completed = false;

    function consume(event: string) {
      const data = eventData(event);
      if (!data) return;
      if (data === "[DONE]") {
        completed = true;
        return;
      }
      const chunk = JSON.parse(data) as {
        choices?: Array<{ delta?: { content?: string }; finish_reason?: string | null }>;
        usage?: unknown;
      };
      logAudit("chunk", { requestId, body: chunk });
      const text = chunk.choices?.[0]?.delta?.content;
      if (text) {
        action += text;
        options.onText(action);
      }
      if (chunk.choices?.[0]?.finish_reason) completed = true;
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const decoded = decoder.decode(value, { stream: true });
      rawResponse += decoded;
      buffer += decoded;
      const events = buffer.split(/\r?\n\r?\n/u);
      buffer = events.pop() ?? "";
      events.forEach(consume);
    }
    const tail = decoder.decode();
    rawResponse += tail;
    buffer += tail;
    if (buffer.trim()) consume(buffer);

    const normalizedAction = action.replace(/\s+/gu, " ").trim();
    logAudit("response", {
      requestId,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      durationMs: Math.round(performance.now() - startedAt),
      completed,
      rawBody: rawResponse,
      action: normalizedAction,
    });
    if (!normalizedAction) throw new Error("پیشنهادی از سرویس هوشمند دریافت نشد.");
    return normalizedAction;
  } catch (error) {
    if (!options.signal.aborted) {
      logAudit("error", {
        requestId,
        durationMs: Math.round(performance.now() - startedAt),
        message: error instanceof Error ? error.message : String(error),
      });
    }
    throw error;
  }
}
