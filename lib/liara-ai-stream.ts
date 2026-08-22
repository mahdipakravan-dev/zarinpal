type StreamLiaraOptions = {
  system: string;
  user: string;
  signal: AbortSignal;
  onText: (text: string) => void;
  logPrefix?: string;
};

function logAudit(
  prefix: string,
  event: "request" | "chunk" | "response" | "error",
  payload: unknown
) {
  console.info(`[${prefix}:${event}] ${JSON.stringify(payload)}`);
}

function eventData(event: string): string | null {
  const data = event
    .split(/\r?\n/u)
    .filter((line) => line.startsWith("data:"))
    .map((line) => line.slice(5).trimStart())
    .join("\n");
  return data || null;
}

export async function streamLiaraAction({
  system,
  user,
  signal,
  onText,
  logPrefix = "liara-ai-stream",
}: StreamLiaraOptions): Promise<string> {
  const requestId = crypto.randomUUID();
  const body = { system, user };
  const startedAt = performance.now();
  logAudit(logPrefix, "request", {
    requestId,
    request: {
      url: "/api/liara-ai",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    },
  });

  try {
    const response = await fetch("/api/liara-ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal,
    });
    if (!response.ok || !response.body) {
      const responseText = await response.text();
      logAudit(logPrefix, "response", {
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
      };
      logAudit(logPrefix, "chunk", { requestId, body: chunk });
      const text = chunk.choices?.[0]?.delta?.content;
      if (text) {
        action += text;
        onText(action);
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
    logAudit(logPrefix, "response", {
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
    if (!signal.aborted) {
      logAudit(logPrefix, "error", {
        requestId,
        durationMs: Math.round(performance.now() - startedAt),
        message: error instanceof Error ? error.message : String(error),
      });
    }
    throw error;
  }
}
