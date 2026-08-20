import {
  HEATMAP_BLOCKS,
  HEATMAP_DAYS,
  type HeatmapCell,
} from "@/lib/sales-pulse-mock-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type ImpactHeatmapProps = {
  values: number[][];
};

function cellColor(value: number): string {
  if (value >= 6) return "bg-emerald-600 text-white";
  if (value >= 4) return "bg-emerald-500/80 text-white";
  if (value >= 2) return "bg-emerald-400/70 text-emerald-950";
  if (value >= 0.5) return "bg-emerald-300/60 text-emerald-950";
  if (value >= 0) return "bg-emerald-100 text-emerald-900";
  if (value >= -0.5) return "bg-violet-100 text-violet-900";
  return "bg-violet-300/70 text-violet-950";
}

export function ImpactHeatmap({ values }: ImpactHeatmapProps) {
  const cells: HeatmapCell[] = HEATMAP_DAYS.flatMap((day, dayIndex) =>
    HEATMAP_BLOCKS.map((block, blockIndex) => ({
      day,
      block,
      value: values[dayIndex]?.[blockIndex] ?? 0,
    }))
  );

  return (
    <figure className="w-full overflow-x-auto">
      <figcaption className="sr-only">
        ماتریس اثر خالص رشد بر اساس روز هفته و بازه ساعتی
      </figcaption>

      <div
        className="min-w-[420px]"
        role="grid"
        aria-label="ماتریس اثر رشد بر اساس روز و ساعت"
      >
        <div className="grid grid-cols-[4.5rem_repeat(8,minmax(2.5rem,1fr))] gap-1 text-[10px]">
          <div aria-hidden="true" />
          {HEATMAP_BLOCKS.map((block) => (
            <div
              key={block}
              className="pb-1 text-center font-medium text-muted-foreground"
              role="columnheader"
            >
              {block}
            </div>
          ))}

          {HEATMAP_DAYS.map((day, dayIndex) => (
            <div key={day} className="contents" role="row">
              <div
                className="flex items-center font-medium text-muted-foreground"
                role="rowheader"
              >
                {day}
              </div>
              {HEATMAP_BLOCKS.map((block, blockIndex) => {
                const value = values[dayIndex]?.[blockIndex] ?? 0;
                const sign = value > 0 ? "+" : "";
                return (
                  <div
                    key={`${day}-${block}`}
                    role="gridcell"
                    title={`${day} · ${block}: ${sign}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`}
                    className={cn(
                      "flex aspect-square items-center justify-center rounded-md text-[9px] font-medium tabular-nums motion-reduce:transition-none",
                      cellColor(value)
                    )}
                  >
                    {Math.abs(value) >= 1
                      ? `${sign}${formatPersianNumber(value, { maximumFractionDigits: 1 })}`
                      : ""}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-muted-foreground">
        <span>کمتر</span>
        <div className="flex gap-0.5" aria-hidden="true">
          <span className="size-3 rounded-sm bg-violet-300/70" />
          <span className="size-3 rounded-sm bg-violet-100" />
          <span className="size-3 rounded-sm bg-emerald-100" />
          <span className="size-3 rounded-sm bg-emerald-400/70" />
          <span className="size-3 rounded-sm bg-emerald-600" />
        </div>
        <span>بیشتر</span>
      </div>

      <p className="sr-only">
        {cells
          .filter((cell) => Math.abs(cell.value) >= 2)
          .map((cell) => `${cell.day} ${cell.block}: ${cell.value}٪`)
          .join("؛ ")}
      </p>
    </figure>
  );
}
