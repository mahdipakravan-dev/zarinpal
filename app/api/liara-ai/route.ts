import { NextResponse } from "next/server";

type LiaraRequest = {
  system?: unknown;
  user?: unknown;
};

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const url = process.env.LIARA_AI_URL;
  const apiKey = process.env.LIARA_AI_API_KEY;
  const model = process.env.LIARA_AI_MODEL ?? "openai/gpt-5.6-luna";

  if (!url || !apiKey) {
    return NextResponse.json(
      { error: "LIARA_AI_URL and LIARA_AI_API_KEY are not configured." },
      { status: 503 }
    );
  }

  let input: LiaraRequest;
  try {
    input = (await request.json()) as LiaraRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (typeof input.system !== "string" || typeof input.user !== "string") {
    return NextResponse.json(
      { error: "system and user must be strings." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        stream: true,
        messages: [
          { role: "system", content: input.system },
          { role: "user", content: input.user },
        ],
      }),
      signal: request.signal,
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type":
          response.headers.get("Content-Type") ?? "text/event-stream; charset=utf-8",
      },
    });
  } catch (error) {
    if (request.signal.aborted) return new Response(null, { status: 499 });

    console.error("[liara-ai-proxy:error]", error);
    return NextResponse.json(
      { error: "The AI service could not be reached." },
      { status: 502 }
    );
  }
}
