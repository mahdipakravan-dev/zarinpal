# ZarinPal Insight Dashboard
UP
A Persian RTL merchant dashboard that turns payment telemetry into five growth views and one constrained AI agent. Charts, KPIs, and diagnoses are computed offline from real session data. The model only streams a single low-risk action sentence, with a rule-based fallback when the stream fails.

The UI stays inside a ZarinPal-shaped shell (sidebar, header, merchant account) so the insight layer feels like a product surface, not a separate analytics tool.

## What it does

| Page | Sidebar label | Question it answers |
| --- | --- | --- |
| Sales Pulse | نبض فروش | Did this period beat the merchant's own weekday-hour rhythm, especially on Fridays, holidays, and occasions? |
| Buyer Loyalty | وفاداری خریداران | Who returns, how long until the second purchase, and which segments carry the revenue? |
| Peer Position | جایگاه همتا | Where does this merchant sit among anonymous same-category peers? |
| Payment Health | سلامت پرداخت | Where does the path leak: no-attempt, bank entry, retry, verify, terminal? |
| Business Graph | گراف کسب‌وکار | What structure is visible in merchant similarity, categories, customers, and payment flow? |

Legacy ledger screens (transactions, discounts, payment links) still exist in `app/page.tsx` but are not in the growth sidebar.

## Architecture

The app is a single client-rendered workspace. `app/page.tsx` owns navigation state and swaps the active page. There is no per-page Next route for the dashboards.

```
challenge_data.csv
        │
        ▼
 scripts/generate-*-data.mjs          ← deterministic math, once
        │
        ▼
 public/data/{feature}/merchants/*.json
 lib/generated/*-index.json
        │
        ▼
 Dashboard (fetch JSON)               ← KPIs, charts, rule-based insight
        │
        ├── headline / bullets / diagnosis   (rules, never the model)
        └── useLiveAiAction
                 │
                 ▼
        lib/*-ai-stream.ts            ← page-specific prompt + aggregates
                 │
                 ▼
        lib/liara-ai-stream.ts        ← SSE chat completions
                 │
                 ▼
        AiInsight                     ← streamed one-sentence action
```

### Runtime stack

- **UI:** React 19, Next App Router on [vinext](https://github.com/cloudflare/vinext) (Vite + Cloudflare Worker)
- **Direction / type:** `dir="rtl"`, `lang="fa"`, IranYekan
- **Components:** Base UI / shadcn primitives under `components/ui`, insight chrome under `components/dashboard`
- **Graph canvas:** `react-force-graph-2d`, lazy-loaded from `components/business-graph/graph-canvas.tsx`
- **Agent transport:** browser `fetch` to Liara (OpenAI-compatible `/chat/completions` with `stream: true`)

### Data plane (deterministic)

Source file: `challenge_data.csv` (~2.21M rows, `2026-01-01` … `2026-06-30`). Generators run in Node, hash the source, and write versioned JSON.

| Script | Output | Role |
| --- | --- | --- |
| `npm run data:sales-pulse` | `public/data/sales-pulse/merchants/` | Weekday-hour baseline, calendar impact, growth decomposition |
| `npm run data:buyer-loyalty` | `public/data/buyer-loyalty/merchants/` | Retention curves, cohorts, segments |
| `npm run data:peer-position` | `public/data/peer-position/merchants/` | Anonymous peer percentiles and opportunities |
| `npm run data:payment-health` | `public/data/payment-health/merchants/` | Funnel, retry, PSP/amount matrix, anomalies |
| Graph payload | `public/data/graph-data.json` | Merchant / customer / flow graphs |

`predev` / `prebuild` regenerate datasets only when stale (`--if-stale`). Indexes in `lib/generated/` list merchants and source hashes so the UI can prove which snapshot it is showing.

Loaders in `lib/*-data.ts` are thin: they type the JSON and return a public URL. Dashboards `fetch` one merchant file at a time.

### Presentation plane

Shared chrome:

- `components/app-sidebar.tsx` — growth navigation
- `components/dashboard-header.tsx` — ZarinPal header
- `components/dashboard/page-heading.tsx` — titles
- `components/dashboard/analysis-toolbar.tsx` — merchant / period selects
- `components/dashboard/ai-insight.tsx` — insight + agent action
- `hooks/use-live-ai-action.ts` — stream lifecycle (start, abort, fallback)

Each feature folder owns its charts (`components/sales-pulse`, `buyer-loyalty`, `peer-position`, `payment-health`, `business-graph`). Page files under `components/pages/` are one-line wrappers.

### Agent plane

The agent is not a chatbot and does not compute metrics.

1. **Facts stay in code.** Generators produce KPIs, headlines, diagnosis bullets, and a `ruleAction`.
2. **The model rewrites one action.** On load (and on merchant/range/graph change) `useLiveAiAction` streams a replacement sentence. Changing context aborts the in-flight request.
3. **Prompts are specialists.** Each `lib/*-ai-stream.ts` file sends a compact aggregate JSON plus a Persian system prompt. Shared rules: one sentence, ≤35 words, no Markdown/JSON, no invented numbers or causal claims, no discounts unless present in the input.
4. **Transport is shared.** `lib/liara-ai-stream.ts` posts aggregate prompts to `/api/liara-ai`, which reads `LIARA_AI_URL`, `LIARA_AI_API_KEY`, and `LIARA_AI_MODEL` on the server and streams the upstream SSE response.
5. **Failure is silent to the merchant.** Empty or failed streams keep the rule-based action. `AiInsight` then labels it `پیشنهاد` instead of `پیشنهاد هوشمند`.

Optional offline enrichment for Sales Pulse (`npm run data:sales-pulse:ai`) can bake an AI action into the JSON cache. Live streaming is the runtime path used by all five pages.

**Privacy constraints the agent inherits:**

- Input is aggregates only (no raw rows, card dumps, or terminal secrets)
- Peer identities are never sent or rendered
- Customer nodes are `payer_card_key` observations inside one merchant
- Liara credentials remain in the server-side proxy and are never shipped in the client bundle

Details for the Sales Pulse prompt and audit log: [`docs/sales-pulse-ai.md`](docs/sales-pulse-ai.md).

## Repository map

```
app/                         layout, fonts, single Home workspace
components/
  app-sidebar.tsx            growth nav
  dashboard/                 shared insight chrome + agent panel
  sales-pulse/               pulse charts and calendar guide
  buyer-loyalty/             retention / cohort / segments
  peer-position/             percentiles, scatter, opportunities
  payment-health/            funnel, heatmap, anomalies
  business-graph/            canvas, inspector, graph insight banner
  pages/                     thin page adapters
  ui/                        primitives
hooks/use-live-ai-action.ts
lib/
  *-data.ts                  typed indexes + JSON URLs
  *-ai-stream.ts             per-page agent prompts
  liara-ai-stream.ts         SSE client
  business-graph/            graph types + visual builders
  generated/                 merchant indexes (build output)
scripts/                     dataset generators + Sites install/build helpers
public/data/                 static aggregates the dashboards fetch
data/iran-calendar-2026.json official calendar used by Sales Pulse
docs/                        agent prompt notes
```

## Setup

Prerequisites: Node.js `>=22.13.0`.

```bash
cp .env.example .env.local   # then fill Liara test credentials
npm install
npm run dev
```

Without `LIARA_AI_URL` and `LIARA_AI_API_KEY`, dashboards still render; the insight box stays on the rule-based action.

### Environment

| Variable | Where | Purpose |
| --- | --- | --- |
| `LIARA_AI_URL` | server | Streaming chat-completions endpoint |
| `LIARA_AI_API_KEY` | server | API credential (never bundled for the browser) |
| `LIARA_AI_MODEL` | server | Defaults to `openai/gpt-5.6-luna` |
| `LIARA_AI_*` safeguards | Node (enrich script) | Offline enrichment timeout and JSONL audit options |

Never commit `.env.local`.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite/Vinext dev server (datasets refresh if stale) |
| `npm run build` | Production Sites artifact |
| `npm run build:vercel` | Native Next.js production artifact (`.next`) for Vercel |
| `npm run start` | Serve the built app |
| `npm test` | Build + rendered HTML smoke test |
| `npm run data:*` | Force-regenerate a dataset |
| `npm run data:sales-pulse:ai` | Optional offline action enrichment |

## Design rules (product)

- **Math before language.** If the model is wrong, the charts remain auditable.
- **One action, not a report.** The agent returns a sentence the merchant can try this week.
- **Say “not enough data” instead of a pretty number.** Eligibility and confidence are first-class fields.
- **Correlation is not causation.** Calendar copy and prompts are forbidden from claiming that an occasion caused a sales move.
- **Privacy by construction.** Peer groups below the minimum size are not published; graph edges are statistical similarity, not business relationships.

## Hosting notes

This checkout still runs on the vinext Sites lifecycle (`scripts/install-ci.sh`, `scripts/build-verified.sh`, `scripts/sites-env.sh`). D1/R2 are declared in `.openai/hosting.json` but unused by the insight dashboards. Optional ChatGPT sign-in helpers live in `app/chatgpt-auth.ts` and are not required for the five growth pages.

Vercel uses the native Next.js build configured in `vercel.json`. Do not set an
Output Directory in the Vercel project settings; the Next.js framework adapter
reads `.next` itself. The default `npm run build` remains the Vinext/Cloudflare
build and emits `dist`.
