import type { TrendPoint } from "@/lib/sales-pulse-data";
import { formatPersianNumber } from "@/lib/format";

type CumulativeTrendChartProps = {
  data: TrendPoint[];
};

export function CumulativeTrendChart({ data }: CumulativeTrendChartProps) {
  const width = 520;
  const height = 200;
  const padding = { top: 16, right: 12, bottom: 32, left: 40 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const values = data.flatMap((point) => [point.actual, point.baseline]);
  const maxValue = Math.max(...values, 1) * 1.08;
  const minValue = 0;

  const xStep = data.length > 1 ? chartWidth / (data.length - 1) : 0;

  const toX = (index: number) => padding.left + index * xStep;
  const toY = (value: number) =>
    padding.top + chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;

  const actualPath = data
    .map((point, index) => `${index === 0 ? "M" : "L"} ${toX(index)} ${toY(point.actual)}`)
    .join(" ");

  const baselinePath = data
    .map((point, index) => `${index === 0 ? "M" : "L"} ${toX(index)} ${toY(point.baseline)}`)
    .join(" ");

  return (
    <figure className="w-full">
      <figcaption className="sr-only">
        روند تجمعی فروش موفق در مقایسه با میانگین دوره‌های مشابه
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full max-h-52"
        role="img"
        aria-label="نمودار خطی روند تجمعی فروش موفق"
      >
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
          const y = padding.top + chartHeight * (1 - tick);
          const value = minValue + (maxValue - minValue) * tick;
          return (
            <g key={tick}>
              <line
                x1={padding.left}
                x2={width - padding.right}
                y1={y}
                y2={y}
                className="stroke-border"
                strokeDasharray="4 4"
              />
              <text
                x={padding.left - 6}
                y={y + 4}
                textAnchor="end"
                className="fill-muted-foreground text-[9px]"
              >
                {formatPersianNumber(value, { maximumFractionDigits: 0 })}
              </text>
            </g>
          );
        })}

        <path
          d={baselinePath}
          fill="none"
          className="stroke-muted-foreground/60"
          strokeWidth="2"
          strokeDasharray="6 4"
        />
        <path
          d={actualPath}
          fill="none"
          className="stroke-[var(--pulse-good)]"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {data.map((point, index) => (
          <g key={point.date}>
            <circle
              cx={toX(index)}
              cy={toY(point.actual)}
              r="3.5"
              className="fill-[var(--pulse-good)]"
            />
            <text
              x={toX(index)}
              y={height - 8}
              textAnchor="middle"
              className="fill-muted-foreground text-[9px]"
            >
              {point.date}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-0.5 w-5 rounded bg-[var(--pulse-good)]" aria-hidden="true" />
          عملکرد واقعی
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="inline-block h-0.5 w-5 rounded border-t-2 border-dashed border-muted-foreground/60"
            aria-hidden="true"
          />
          میانگین مشابه
        </span>
      </div>
    </figure>
  );
}
