"use client";

import {
  createContext,
  lazy,
  Suspense,
  use,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DatabaseIcon,
  GitBranchIcon,
  LoaderCircleIcon,
  SearchIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
} from "lucide-react";

import { AiInsight } from "@/components/dashboard/ai-insight";
import { streamBusinessGraphAction } from "@/lib/business-graph-ai-stream";
import { buildVisualGraph } from "@/lib/business-graph/graph-builders";
import { PAGE_TITLES } from "@/lib/dashboard";
import type {
  GlobalGraphKind,
  GraphKind,
  GraphPayload,
  Merchant,
  MerchantGraphKind,
  Scope,
  VisualGraph,
  VisualNode,
} from "@/lib/business-graph/types";
import { formatPersianNumber, formatPersianPercent } from "@/lib/format";
import { useLiveAiAction } from "@/hooks/use-live-ai-action";
import { cn } from "@/lib/utils";
import { PageHeading } from "@/components/dashboard/page-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GraphCanvas = lazy(() =>
  import("@/components/business-graph/graph-canvas").then((mod) => ({
    default: mod.GraphCanvas,
  })),
);

type GraphState = {
  payload: GraphPayload;
  graph: VisualGraph;
  scope: Scope;
  kind: GraphKind;
  merchant: Merchant;
  selectedNode: VisualNode | null;
};

type GraphActions = {
  onSelectNode: (node: VisualNode | null) => void;
  onScopeChange: (scope: Scope) => void;
  onKindChange: (kind: GraphKind) => void;
  onMerchantChange: (merchantId: string) => void;
};

type GraphContextValue = {
  state: GraphState;
  actions: GraphActions;
};

const GraphContext = createContext<GraphContextValue | null>(null);

function useGraph() {
  const value = use(GraphContext);
  if (!value) {
    throw new Error("useGraph must be used within BusinessGraphProvider");
  }
  return value;
}

function linkEndpointId(endpoint: string | VisualNode): string {
  return typeof endpoint === "string" ? endpoint : endpoint.id;
}

function Controls() {
  const { state, actions } = useGraph();
  const { scope, kind, merchant, payload } = state;
  const [merchantDraft, setMerchantDraft] = useState(merchant.id);

  useEffect(() => {
    setMerchantDraft(merchant.id);
  }, [merchant.id]);

  const submitMerchant = () => {
    actions.onMerchantChange(merchantDraft);
    const normalized = merchantDraft.trim().toUpperCase();
    if (!payload.merchantGraph.nodes.some((item) => item.id === normalized)) {
      setMerchantDraft(merchant.id);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div
        role="group"
        aria-label="دامنه گراف"
        className="inline-flex rounded-lg border border-border bg-muted p-[3px]"
      >
        <Button
          type="button"
          size="sm"
          variant={scope === "global" ? "default" : "ghost"}
          aria-pressed={scope === "global"}
          className="h-7"
          onClick={() => actions.onScopeChange("global")}
        >
          نمای کلی
        </Button>
        <Button
          type="button"
          size="sm"
          variant={scope === "merchant" ? "default" : "ghost"}
          aria-pressed={scope === "merchant"}
          className="h-7"
          onClick={() => actions.onScopeChange("merchant")}
        >
          یک پذیرنده
        </Button>
      </div>

      <div
        role="group"
        aria-label="نوع گراف"
        className="inline-flex rounded-lg border border-border bg-card p-[3px]"
      >
        {scope === "global" ? (
          <>
            <Button
              type="button"
              size="sm"
              variant={kind === "similarity" ? "secondary" : "ghost"}
              aria-pressed={kind === "similarity"}
              className="h-7"
              onClick={() => actions.onKindChange("similarity")}
            >
              شباهت
            </Button>
            <Button
              type="button"
              size="sm"
              variant={kind === "categories" ? "secondary" : "ghost"}
              aria-pressed={kind === "categories"}
              className="h-7"
              onClick={() => actions.onKindChange("categories")}
            >
              صنف‌ها
            </Button>
          </>
        ) : (
          <>
            <Button
              type="button"
              size="sm"
              variant={kind === "customers" ? "secondary" : "ghost"}
              aria-pressed={kind === "customers"}
              className="h-7"
              onClick={() => actions.onKindChange("customers")}
            >
              مشتری‌ها
            </Button>
            <Button
              type="button"
              size="sm"
              variant={kind === "flow" ? "secondary" : "ghost"}
              aria-pressed={kind === "flow"}
              className="h-7"
              onClick={() => actions.onKindChange("flow")}
            >
              مسیر پرداخت
            </Button>
          </>
        )}
      </div>

      {scope === "merchant" ? (
        <label className="flex h-8 min-w-36 items-center gap-1.5 rounded-lg border border-border bg-card px-2 text-muted-foreground">
          <SearchIcon className="size-3.5 shrink-0" aria-hidden="true" />
          <span className="sr-only">شناسه پذیرنده</span>
          <Input
            list="business-graph-merchant-options"
            value={merchantDraft}
            onChange={(event) =>
              setMerchantDraft(event.target.value.toUpperCase())
            }
            onBlur={submitMerchant}
            onKeyDown={(event) => {
              if (event.key === "Enter") submitMerchant();
            }}
            aria-label="شناسه پذیرنده"
            className="h-7 border-0 bg-transparent px-0 font-semibold tracking-wide shadow-none focus-visible:ring-0"
            dir="ltr"
          />
          <datalist id="business-graph-merchant-options">
            {payload.merchantGraph.nodes.map((item) => (
              <option key={item.id} value={item.id}>
                {item.category}
              </option>
            ))}
          </datalist>
        </label>
      ) : null}
    </div>
  );
}

function MetricStrip() {
  const { state } = useGraph();
  const { scope, merchant, graph } = state;

  const metrics =
    scope === "global"
      ? [
          {
            label: "گره قابل مشاهده",
            value: formatPersianNumber(graph.nodes.length),
          },
          {
            label: "ارتباط محاسبه‌شده",
            value: formatPersianNumber(graph.links.length),
          },
          { label: "پذیرنده منتخب", value: merchant.id },
        ]
      : [
          {
            label: "session",
            value: formatPersianNumber(merchant.sessions, {
              notation: "compact",
              maximumFractionDigits: 1,
            }),
          },
          {
            label: "موفقیت",
            value: formatPersianPercent(merchant.successRate * 100),
          },
          {
            label: "کارت بازگشتی",
            value: formatPersianPercent(merchant.repeatBuyerRate * 100),
          },
          {
            label: "بازیابی با retry",
            value: formatPersianNumber(merchant.laterVerified),
          },
        ];

  return (
    <div
      className="flex overflow-x-auto rounded-lg border border-border bg-border"
      role="list"
      aria-label="شاخص‌های گراف"
    >
      {metrics.map((metric) => (
        <div
          key={metric.label}
          role="listitem"
          className="grid min-w-28 flex-1 gap-1 bg-card px-3.5 py-2.5"
        >
          <span className="text-[10px] text-muted-foreground">{metric.label}</span>
          <strong className="text-sm font-extrabold tabular-nums" dir="auto">
            {metric.value}
          </strong>
        </div>
      ))}
    </div>
  );
}

function Legend() {
  const { state } = useGraph();
  return (
    <div
      className="flex max-w-[82%] flex-wrap items-center gap-x-3 gap-y-1.5 rounded-md bg-[rgba(15,21,38,0.78)] px-2.5 py-1.5 text-[10px] text-white/80 backdrop-blur-md"
      aria-label="راهنمای رنگ"
    >
      {state.graph.legend.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-1.5">
          <i
            className="size-1.5 rounded-full shadow-[0_0_10px_currentColor]"
            style={{ backgroundColor: item.color, color: item.color }}
            aria-hidden="true"
          />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function NodeInspector() {
  const { state } = useGraph();
  const { selectedNode: node, merchant } = state;

  if (!node) {
    return (
      <div className="grid min-h-36 place-content-center justify-items-center gap-2 text-center text-muted-foreground">
        <GitBranchIcon className="size-7 text-primary/70" aria-hidden="true" />
        <strong className="text-sm text-foreground">یک گره را انتخاب کنید</strong>
        <p className="max-w-56 text-[11px] leading-6">
          جزئیات محاسبه‌شده بدون خروج از گراف در این بخش نمایش داده می‌شود.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3.5">
      <div className="flex items-center gap-2.5">
        <i
          className="h-10 w-3 rounded-full shadow-[0_0_18px_rgba(23,79,214,0.28)]"
          style={{ background: node.color }}
          aria-hidden="true"
        />
        <div>
          <span className="text-[9px] font-bold tracking-[0.12em] text-muted-foreground uppercase">
            {node.type}
          </span>
          <h3 className="mt-1 text-right text-base font-extrabold" dir="ltr">
            {node.label}
          </h3>
        </div>
      </div>
      <dl className="grid gap-px overflow-hidden rounded-lg bg-border">
        {Object.entries(node.details).map(([label, value]) => (
          <div
            key={label}
            className="flex justify-between gap-3 bg-card px-2.5 py-2"
          >
            <dt className="text-[11px] text-muted-foreground">{label}</dt>
            <dd className="m-0 text-left text-[11px] font-bold tabular-nums">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      {node.type === "customer" ? (
        <p
          role="note"
          className="m-0 border-r-2 border-[var(--chart-3)] bg-[color-mix(in_oklch,var(--chart-3)_8%,white)] px-2.5 py-2 text-[10px] leading-6 text-foreground/80"
        >
          این گره یک شناسه کارت مشاهده‌شده است، نه هویت قطعی یک فرد.
        </p>
      ) : null}
      {node.type === "merchant" && node.id !== merchant.id ? (
        <p
          role="note"
          className="m-0 border-r-2 border-[var(--chart-3)] bg-[color-mix(in_oklch,var(--chart-3)_8%,white)] px-2.5 py-2 text-[10px] leading-6 text-foreground/80"
        >
          اتصال به معنی شباهت آماری است و رابطه تجاری واقعی را اثبات نمی‌کند.
        </p>
      ) : null}
    </div>
  );
}

function Evidence() {
  const { state } = useGraph();
  const { payload, merchant, kind } = state;
  const method =
    kind === "customers"
      ? payload.methodology.customerGraph
      : payload.methodology.merchantGraph;

  return (
    <details className="border-t border-border pt-3">
      <summary className="flex cursor-pointer items-center gap-1.5 text-[11px] font-semibold text-primary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <ShieldCheckIcon className="size-3.5" aria-hidden="true" />
        این گراف چگونه ساخته شد؟
      </summary>
      <div className="mt-2 text-[10px] leading-6 text-muted-foreground">
        <p>{method}</p>
        <ul className="my-2 list-disc pe-4">
          {payload.methodology.limitations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <code
          className="mt-1.5 block overflow-hidden rounded-md bg-muted px-2 py-1.5 text-[10px] text-foreground/70 text-ellipsis whitespace-nowrap"
          dir="ltr"
        >
          source: {payload.meta.source} · sha256:{" "}
          {payload.meta.sourceSha256.slice(0, 16)}…
        </code>
        {kind === "customers" ? (
          <code
            className="mt-1.5 block overflow-hidden rounded-md bg-muted px-2 py-1.5 text-[10px] text-foreground/70"
            dir="ltr"
          >
            merchant: {merchant.id} · population:{" "}
            {formatPersianNumber(merchant.observedCards)}
          </code>
        ) : null}
      </div>
    </details>
  );
}

function AdjacencyFallback() {
  const { state, actions } = useGraph();
  const { graph, selectedNode } = state;
  const nodeMap = useMemo(
    () => new Map(graph.nodes.map((node) => [node.id, node])),
    [graph.nodes],
  );

  const rows = useMemo(() => {
    return graph.links.slice(0, 80).map((link, index) => {
      const sourceId = linkEndpointId(link.source);
      const targetId = linkEndpointId(link.target);
      return {
        key: `${sourceId}-${targetId}-${index}`,
        sourceId,
        targetId,
        sourceLabel: nodeMap.get(sourceId)?.label ?? sourceId,
        targetLabel: nodeMap.get(targetId)?.label ?? targetId,
        weight: link.weight,
        label: link.label,
        reasons: link.reasons,
      };
    });
  }, [graph.links, nodeMap]);

  return (
    <details className="rail-panel p-3">
      <summary className="cursor-pointer text-sm font-medium text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        فهرست روابط (نمای دسترس‌پذیر)
      </summary>
      <p className="mt-2 text-xs text-muted-foreground">
        تا ۸۰ ارتباط اول این نما برای صفحه‌خوان و کیبورد؛ روی ردیف کلیک کنید تا گره
        مبدأ انتخاب شود.
      </p>
      <div className="mt-3 max-h-64 overflow-auto rounded-md border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>مبدأ</TableHead>
              <TableHead>مقصد</TableHead>
              <TableHead>وزن</TableHead>
              <TableHead>توضیح</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-muted-foreground">
                  ارتباطی برای نمایش نیست.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => {
                const active =
                  selectedNode?.id === row.sourceId ||
                  selectedNode?.id === row.targetId;
                return (
                  <TableRow
                    key={row.key}
                    data-state={active ? "selected" : undefined}
                    className="cursor-pointer"
                    onClick={() => {
                      const node = nodeMap.get(row.sourceId) ?? null;
                      actions.onSelectNode(node);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        const node = nodeMap.get(row.sourceId) ?? null;
                        actions.onSelectNode(node);
                      }
                    }}
                    tabIndex={0}
                    aria-label={`ارتباط ${row.sourceLabel} به ${row.targetLabel}`}
                  >
                    <TableCell dir="ltr">{row.sourceLabel}</TableCell>
                    <TableCell dir="ltr">{row.targetLabel}</TableCell>
                    <TableCell className="tabular-nums">
                      {formatPersianNumber(row.weight, {
                        maximumFractionDigits: 2,
                      })}
                    </TableCell>
                    <TableCell>
                      {row.label ??
                        (row.reasons?.length ? row.reasons.join("، ") : "—")}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </details>
  );
}

function GraphInsightBanner() {
  const { state } = useGraph();
  const { scope, kind, merchant, payload } = state;
  const insightKey = `${scope}:${kind}:${merchant.id}`;
  const fallback =
    scope === "merchant"
      ? `با تمرکز روی نرخ موفقیت ${formatPersianPercent(merchant.successRate * 100)} و کارت بازگشتی ${formatPersianPercent(merchant.repeatBuyerRate * 100)}، یک آزمایش محدود روی مسیر پرداخت یا بازگشت مشتری اجرا کنید.`
      : "الگوی شباهت شبکه را با یک نمونه کوچک از پذیرنده‌های هم‌دسته بررسی کنید و قبل از تعمیم، داده بیشتری جمع کنید.";

  const { action, status } = useLiveAiAction({
    key: insightKey,
    fallback,
    stream: ({ signal, onText }) =>
      streamBusinessGraphAction({
        scope,
        kind,
        merchant: scope === "merchant" ? merchant : null,
        meta: {
          sessions: payload.meta.sessions,
          merchants: payload.meta.merchants,
          observedCards: payload.meta.observedCards,
          dateFrom: payload.meta.dateFrom,
          dateTo: payload.meta.dateTo,
        },
        signal,
        onText,
      }),
  });

  return (
    <AiInsight
      surface="panel"
      className="border border-[#e6e8ec] border-s-[3px] border-s-[#ffd60a]"
      headline={
        scope === "merchant"
          ? `${merchant.id} · موفقیت ${formatPersianPercent(merchant.successRate * 100)}`
          : `${graphTitle(kind)} · ${formatPersianNumber(payload.meta.merchants)} پذیرنده`
      }
      detail={
        scope === "merchant"
          ? `کارت بازگشتی ${formatPersianPercent(merchant.repeatBuyerRate * 100)} · بازیابی retry ${formatPersianNumber(merchant.laterVerified)}`
          : `بازه ${payload.meta.dateFrom} تا ${payload.meta.dateTo}`
      }
      action={action}
      status={status}
      loadingLabel="در حال تحلیل گراف…"
    />
  );
}

function graphTitle(kind: GraphKind) {
  if (kind === "similarity") return "گراف شباهت پذیرندگان";
  if (kind === "categories") return "گراف دسته‌های کسب‌وکار";
  if (kind === "customers") return "گراف مشتریان پذیرنده";
  return "گراف مسیر پرداخت";
}

function DashboardShell() {
  const { state, actions } = useGraph();
  const { payload, graph, selectedNode } = state;

  return (
    <div className="flex flex-col gap-2.5">
      <PageHeading
        title={PAGE_TITLES["business-graph"]}
        subtitle="روابط پنهان بین فروش، پذیرنده، مشتری و مسیر پرداخت را روی یک نقشه عملیاتی ببینید"
        action={
          <Badge variant="outline" className="gap-1.5 font-normal" dir="ltr">
            <DatabaseIcon className="size-3.5" aria-hidden="true" />
            داده واقعی · {payload.meta.source}
          </Badge>
        }
      />
      <p className="max-w-3xl text-xs leading-5 text-muted-foreground sm:text-sm">
        گراف از داده‌های تجمیع‌شده ساخته می‌شود و هویت سایر پذیرنده‌ها یا خریداران
        افشا نمی‌شود.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 max-w-xl">
          <h2 className="font-heading text-base font-extrabold tracking-tight sm:text-lg">
            {graph.title}
          </h2>
          <p className="mt-1 text-xs leading-6 text-muted-foreground sm:text-sm">
            {graph.subtitle}
          </p>
        </div>
        <Controls />
      </div>

      <MetricStrip />
      <GraphInsightBanner />

      <div className="grid grid-cols-1 gap-2.5 lg:grid-cols-[minmax(0,1fr)_288px]">
        <section
          className={cn(
            "rail-panel relative min-h-[520px] overflow-hidden p-0",
            "bg-[radial-gradient(circle_at_45%_50%,rgba(23,79,214,0.14),transparent_45%),#0f1526]",
          )}
          aria-label="بوم گراف تعاملی"
        >
          <div className="pointer-events-none absolute end-3.5 top-3.5 z-2">
            <Legend />
          </div>
          <Suspense
            fallback={
              <div
                className="grid min-h-[520px] place-items-center gap-2 text-sm text-white/70"
                role="status"
                aria-live="polite"
              >
                <Spinner className="size-5 text-white" />
                در حال بارگذاری موتور گراف…
              </div>
            }
          >
            <GraphCanvas
              graph={graph}
              selectedNode={selectedNode}
              onSelectNode={actions.onSelectNode}
            />
          </Suspense>
        </section>

        <aside className="rail-panel flex flex-col gap-4 overflow-auto p-3.5">
          <div>
            <h3 className="mb-2 text-sm font-medium">جزئیات گره</h3>
            <NodeInspector />
          </div>
          <Evidence />
        </aside>
      </div>

      <AdjacencyFallback />
    </div>
  );
}

function BusinessGraphProvider({
  payload,
  children,
}: {
  payload: GraphPayload;
  children: ReactNode;
}) {
  const [scope, setScope] = useState<Scope>("global");
  const [globalKind, setGlobalKind] = useState<GlobalGraphKind>("similarity");
  const [merchantKind, setMerchantKind] =
    useState<MerchantGraphKind>("customers");
  const [merchantId, setMerchantId] = useState(
    () => payload.merchantGraph.nodes[0]?.id ?? "M1",
  );
  const [selectedNode, setSelectedNode] = useState<VisualNode | null>(null);

  const merchantById = useMemo(
    () =>
      new Map(payload.merchantGraph.nodes.map((merchant) => [merchant.id, merchant])),
    [payload],
  );
  const merchant =
    merchantById.get(merchantId) ?? payload.merchantGraph.nodes[0];
  const kind: GraphKind = scope === "global" ? globalKind : merchantKind;

  const graph = useMemo(
    () => (merchant ? buildVisualGraph(payload, kind, merchant) : null),
    [payload, merchant, kind],
  );

  useEffect(() => {
    setSelectedNode(null);
  }, [kind, merchantId]);

  if (!merchant || !graph) {
    return (
      <div
        className="rail-panel grid min-h-72 place-content-center justify-items-center gap-2 p-6 text-center"
        role="alert"
      >
        <TriangleAlertIcon className="size-6 text-[var(--chart-5)]" />
        <p className="text-sm font-medium">پذیرنده‌ای برای ساخت گراف یافت نشد.</p>
      </div>
    );
  }

  const value: GraphContextValue = {
    state: {
      payload,
      graph,
      scope,
      kind,
      merchant,
      selectedNode,
    },
    actions: {
      onSelectNode: setSelectedNode,
      onScopeChange: setScope,
      onKindChange: (nextKind) => {
        if (nextKind === "similarity" || nextKind === "categories") {
          setGlobalKind(nextKind);
        } else {
          setMerchantKind(nextKind);
        }
      },
      onMerchantChange: (nextMerchantId) => {
        const normalized = nextMerchantId.trim().toUpperCase();
        if (!merchantById.has(normalized)) return;
        setMerchantId(normalized);
      },
    },
  };

  return (
    <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
  );
}

export function BusinessGraphDashboard() {
  const [payload, setPayload] = useState<GraphPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    fetch("/data/graph-data.json", { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json() as Promise<GraphPayload>;
      })
      .then(setPayload)
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === "AbortError") {
          return;
        }
        setError(reason instanceof Error ? reason.message : "خطای ناشناخته");
      });
    return () => abortController.abort();
  }, []);

  if (error) {
    return (
      <div
        className="rail-panel grid min-h-72 place-content-center justify-items-center gap-2 p-6 text-center"
        role="alert"
      >
        <TriangleAlertIcon className="size-6 text-[var(--chart-5)]" aria-hidden="true" />
        <h2 className="text-sm font-extrabold">داده گراف بارگذاری نشد</h2>
        <p className="max-w-md text-xs leading-6 text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!payload) {
    return (
      <div
        className="rail-panel grid min-h-72 place-content-center justify-items-center gap-2 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <LoaderCircleIcon className="size-6 animate-spin text-primary motion-reduce:animate-none" aria-hidden="true" />
        <h2 className="text-sm font-extrabold">در حال بارگذاری شبکه واقعی…</h2>
        <p className="text-xs text-muted-foreground">
          خروجی پردازش‌شده‌ی challenge_data.csv خوانده می‌شود.
        </p>
      </div>
    );
  }

  return (
    <BusinessGraphProvider payload={payload}>
      <DashboardShell />
    </BusinessGraphProvider>
  );
}
