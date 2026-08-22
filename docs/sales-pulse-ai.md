# Sales Pulse AI suggestions

Sales Pulse keeps all calculations and factual insight bullets deterministic. The external model
only rewrites the suggested action. It receives aggregated metrics, not raw transactions, card keys,
terminal keys, or customer data.

## Runtime streaming setup

Set `LIARA_AI_URL`, `LIARA_AI_API_KEY`, and optionally `LIARA_AI_MODEL` in `.env.local`, then
restart the server. Opening Sales Pulse sends one streaming request after the selected merchant's static
aggregate loads. Changing the merchant or period cancels the previous stream and starts another.

The streamed action progressively replaces the rule-based fallback. Calculations and factual
bullets remain deterministic. Failed or empty streams fall back to the rule-based action.

The browser calls the server-side `/api/liara-ai` proxy, so credentials remain on the server and
production values are read at runtime. The request contains aggregated metrics, not raw transactions,
card keys, terminal keys, or customer data.

Runtime request, chunk, response, and error records are printed in the browser DevTools Console with
the `[liara-ai-stream:*]` prefix. The Network panel also exposes the live SSE response.

## Optional offline enrichment

Generate the deterministic dataset first:

```bash
npm run data:sales-pulse
```

Preview the number of eligible requests without calling the API:

```bash
npm run data:sales-pulse:ai -- --merchant M250 --period nowruz-1405 --dry-run
```

Enrich one merchant and period before deployment:

```bash
npm run data:sales-pulse:ai -- --merchant M250 --period nowruz-1405
```

Use `--all` only when intentionally enriching every eligible merchant-period. `--limit 10` caps a
batch. `--force` bypasses the response cache. The cache avoids repeat charges when the model,
prompt, and aggregate facts are unchanged.

If the API is unavailable or a response is invalid, existing rule-based suggestions remain usable.

## Offline request and response audit log

Every real HTTP attempt is recorded as JSON Lines in `.sales-pulse-logs/liara-ai.jsonl`. The log
contains the complete request body, response status and headers, complete response body, duration,
merchant-period job key, and retry attempt. The authorization value is always redacted. Change the
location with `LIARA_AI_LOG_PATH`.

By default, the same complete audit records are also printed to stdout with the
`[liara-ai-audit]` prefix. Set `LIARA_AI_LOG_CONSOLE=false` to keep file-only logging.
