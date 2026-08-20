import type { HourlyImpact } from "@/lib/sales-pulse-mock-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type HourlyImpactChartProps = {
  data: HourlyImpact[];
};

export function HourlyImpactChart({ data }: HourlyImpactChartProps) {
  const width = 360;
  const height = 136;
  const padding = { top: 10, right: 8, bottom: 24, left: 8 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const midY = padding.top + chartHeight / 2;

  const maxAbs = Math.max(...data.map((item) => Math.abs(item.value)), 1);
  const barWidth = chartWidth / data.length - 6;

  return (
    <figure className="w-full">
      <figcaption className="sr-only">
        توزیع اثر خالص رشد فروش بر اساس ساعت روز
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-h-36"
        role="img"
        aria-label="نمودار میله‌ای اثر رشد بر اساس ساعت"
      >
        <line
          x1={padding.left}
          x2={width - padding.right}
          y1={midY}
          y2={midY}
          className="stroke-border"
        />

        {data.map((item, index) => {
          const barHeight = (Math.abs(item.value) / maxAbs) * (chartHeight / 2 - 4);
          const x = padding.left + index * (chartWidth / data.length) + 3;
          const y = item.value >= 0 ? midY - barHeight : midY;
          const positive = item.value >= 0;

          return (
            <g key={item.hour}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(barHeight, 2)}
                rx={3}
                className={cn(positive ? "fill-[var(--pulse-good)]" : "fill-[var(--pulse-blue)]")}
              />
              <text
                x={x + barWidth / 2}
                y={height - 8}
                textAnchor="middle"
                className="fill-muted-foreground text-[9px]"
              >
                {item.label}
              </text>
              {Math.abs(item.value) >= 3 ? (
                <text
                  x={x + barWidth / 2}
                  y={positive ? y - 4 : y + barHeight + 12}
                  textAnchor="middle"
                  className={cn(
                    "text-[8px] font-medium",
                    positive ? "fill-[var(--pulse-good)]" : "fill-[var(--pulse-blue)]"
                  )}
                >
                  {item.value > 0 ? "+" : ""}
                  {formatPersianNumber(item.value, { maximumFractionDigits: 1 })}٪
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
