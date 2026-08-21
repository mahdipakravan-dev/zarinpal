"use client";

import { useEffect, useRef, useState } from "react";

export type LiveAiStatus = "idle" | "streaming" | "complete" | "error";

type LiveAiAction = {
  key: string;
  text: string;
  status: Exclude<LiveAiStatus, "idle">;
};

type UseLiveAiActionOptions = {
  key: string;
  enabled?: boolean;
  fallback: string;
  stream: (options: {
    signal: AbortSignal;
    onText: (text: string) => void;
  }) => Promise<string>;
};

export function useLiveAiAction({
  key,
  enabled = true,
  fallback,
  stream,
}: UseLiveAiActionOptions): {
  action: string;
  status: LiveAiStatus;
} {
  const [live, setLive] = useState<LiveAiAction | null>(null);
  const streamRef = useRef(stream);
  const fallbackRef = useRef(fallback);
  streamRef.current = stream;
  fallbackRef.current = fallback;

  useEffect(() => {
    if (!enabled || !key) return;

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      setLive({ key, text: "", status: "streaming" });
      streamRef
        .current({
          signal: controller.signal,
          onText: (text) => setLive({ key, text, status: "streaming" }),
        })
        .then((text) => setLive({ key, text, status: "complete" }))
        .catch(() => {
          if (controller.signal.aborted) return;
          setLive({ key, text: fallbackRef.current, status: "error" });
        });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [enabled, key]);

  const active = live?.key === key ? live : null;
  return {
    action: active?.text || (active?.status === "streaming" ? "" : fallback),
    status: active?.status ?? (enabled ? "idle" : "error"),
  };
}
