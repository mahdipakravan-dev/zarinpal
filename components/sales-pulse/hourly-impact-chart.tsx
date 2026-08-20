import type { HourlyImpact } from "@/lib/sales-pulse-mock-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type HourlyImpactChartProps = {
  data: HourlyImpact[];
};

export function HourlyImpactChart({ data }: HourlyImpactChartProps) {
  const width = 320;
  const height = 200;
  const padding = { top: 18, right: 12, bottom: 28, left: 12 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const midY = padding.top + chartHeight / 2;

  const maxAbs = Math.max(...data.map((item) => Math.abs(item.value)), 1);
  const slotWidth = chartWidth / data.length;
  const barWidth = Math.min(36, slotWidth * 0.55);

  return (
    <figure className="flex h-full min-h-0 w-full flex-1 items-center">
      <figcaption className="sr-only">
        توزیع اثر خالص رشد فروش بر اساس ساعت روز
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-full max-h-52 w-full"
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
          const barHeight =
            (Math.abs(item.value) / maxAbs) * (chartHeight / 2 - 8);
          const x = padding.left + index * slotWidth + (slotWidth - barWidth) / 2;
          const y = item.value >= 0 ? midY - barHeight : midY;
          const positive = item.value >= 0;

          return (
            <g key={item.hour}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={Math.max(barHeight, 2)}
                rx={4}
                className={cn(
                  positive ? "fill-[var(--pulse-good)]" : "fill-[var(--pulse-blue)]"
                )}
              />
              <text
                x={x + barWidth / 2}
                y={height - 10}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                {item.label}
              </text>
              {Math.abs(item.value) >= 1 ? (
                <text
                  x={x + barWidth / 2}
                  y={positive ? y - 6 : y + barHeight + 14}
                  textAnchor="middle"
                  className={cn(
                    "text-[10px] font-medium",
                    positive
                      ? "fill-[var(--pulse-good)]"
                      : "fill-[var(--pulse-blue)]"
                  )}
                >
                  {item.value > 0 ? "+" : ""}
                  {formatPersianNumber(item.value, {
                    maximumFractionDigits: 1,
                  })}
                  ٪
                </text>
              ) : null}
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
