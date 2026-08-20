"use client";

import { memo, useEffect, useRef, useState } from "react";
import ForceGraph2D, {
  type ForceGraphMethods,
  type NodeObject,
} from "react-force-graph-2d";

import type { VisualGraph, VisualLink, VisualNode } from "@/lib/business-graph/types";

interface GraphCanvasProps {
  graph: VisualGraph;
  selectedNode: VisualNode | null;
  onSelectNode: (node: VisualNode | null) => void;
}

function getNodeId(endpoint: string | VisualNode): string {
  return typeof endpoint === "string" ? endpoint : endpoint.id;
}

function GraphCanvasComponent({
  graph,
  selectedNode,
  onSelectNode,
}: GraphCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<ForceGraphMethods<VisualNode, VisualLink> | undefined>(
    undefined,
  );
  const [size, setSize] = useState({ width: 900, height: 520 });
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const observer = new ResizeObserver(([entry]) => {
      setSize({
        width: Math.max(280, Math.floor(entry.contentRect.width)),
        height: Math.max(420, Math.floor(entry.contentRect.height)),
      });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const delay = reduceMotion ? 0 : 700;
    const timer = window.setTimeout(
      () => graphRef.current?.zoomToFit(reduceMotion ? 0 : 500, 56),
      delay,
    );
    return () => window.clearTimeout(timer);
  }, [graph, reduceMotion]);

  if (graph.nodes.length === 0) {
    return (
      <div
        className="grid h-full min-h-[420px] place-content-center justify-items-center gap-2 px-8 text-center text-white/65"
        role="status"
      >
        <strong className="text-sm text-white">
          داده کافی برای ساخت این گراف وجود ندارد
        </strong>
        <p className="m-0 max-w-md text-[11px] leading-7">
          این پذیرنده در بازه دیتاست خرید Verified دارای payer_card_key ندارد.
          گراف مصنوعی نمایش داده نمی‌شود.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[520px] w-full overflow-hidden"
      dir="ltr"
      role="img"
      aria-label={`${graph.title}. ${graph.subtitle}`}
    >
      <ForceGraph2D<VisualNode, VisualLink>
        ref={graphRef}
        graphData={graph}
        width={size.width}
        height={size.height}
        backgroundColor="rgba(0,0,0,0)"
        nodeVal="val"
        nodeLabel={(node) => `${node.label} · ${node.type}`}
        nodeCanvasObject={(node, context, globalScale) => {
          const radius = Math.sqrt(node.val ?? 4) * 2.2;
          const isSelected = selectedNode?.id === node.id;
          context.beginPath();
          context.arc(
            node.x ?? 0,
            node.y ?? 0,
            radius + (isSelected ? 2.5 : 0),
            0,
            2 * Math.PI,
          );
          context.fillStyle = isSelected ? "#ffffff" : node.color;
          context.fill();
          context.lineWidth = isSelected ? 2.4 / globalScale : 1 / globalScale;
          context.strokeStyle = isSelected ? node.color : "rgba(255,255,255,.28)";
          context.stroke();

          const shouldLabel =
            isSelected ||
            node.type === "category" ||
            (node.val ?? 0) >= 10 ||
            globalScale > 2.3;
          if (shouldLabel) {
            const fontSize = Math.max(3, 11 / globalScale);
            context.font = `600 ${fontSize}px Vazirmatn, IRANSans, Tahoma, sans-serif`;
            context.textAlign = "center";
            context.textBaseline = "top";
            context.fillStyle = "rgba(248,251,255,.92)";
            context.fillText(node.label, node.x ?? 0, (node.y ?? 0) + radius + 2);
          }
        }}
        nodePointerAreaPaint={(node, color, context) => {
          context.beginPath();
          context.arc(
            node.x ?? 0,
            node.y ?? 0,
            Math.sqrt(node.val ?? 4) * 2.8,
            0,
            2 * Math.PI,
          );
          context.fillStyle = color;
          context.fill();
        }}
        linkColor={(link) =>
          link.dashed ? "rgba(107,92,255,.36)" : "rgba(126,162,255,.28)"
        }
        linkLineDash={(link) => (link.dashed ? [3, 4] : null)}
        linkWidth={(link) =>
          Math.max(0.4, Math.min(3.2, 0.4 + Math.log10(Number(link.weight) + 1) * 0.42))
        }
        linkLabel={(link) => {
          const source = getNodeId(link.source);
          const target = getNodeId(link.target);
          const reasons = link.reasons?.length
            ? ` · ${link.reasons.join("، ")}`
            : "";
          return `${source} ← ${target}${reasons}`;
        }}
        linkDirectionalArrowLength={(link) => (link.directed ? 4 : 0)}
        linkDirectionalArrowRelPos={0.8}
        linkDirectionalArrowColor={(link) =>
          link.directed ? "rgba(126,162,255,.75)" : "rgba(0,0,0,0)"
        }
        onNodeClick={(node) =>
          onSelectNode(node as NodeObject<VisualNode> as VisualNode)
        }
        onBackgroundClick={() => onSelectNode(null)}
        cooldownTicks={reduceMotion ? 0 : 100}
        onEngineStop={() =>
          graphRef.current?.zoomToFit(reduceMotion ? 0 : 450, 80)
        }
        d3VelocityDecay={0.35}
        minZoom={0.25}
        maxZoom={8}
      />
    </div>
  );
}

export const GraphCanvas = memo(GraphCanvasComponent);
