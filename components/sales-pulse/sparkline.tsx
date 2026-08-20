import { cn } from "@/lib/utils";

const accentStroke: Record<string, string> = {
  emerald: "stroke-emerald-500",
  violet: "stroke-violet-500",
  blue: "stroke-blue-500",
  amber: "stroke-amber-500",
};

type SparklineProps = {
  data: number[];
  accent?: keyof typeof accentStroke;
  className?: string;
  width?: number;
  height?: number;
};

export function Sparkline({
  data,
  accent = "emerald",
  className,
  width = 88,
  height = 36,
}: SparklineProps) {
  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width;
      const y = height - ((value - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      className={cn("overflow-visible", className)}
    >
      <polyline
        fill="none"
        className={cn(accentStroke[accent], "motion-reduce:transition-none")}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
    </svg>
  );
}
