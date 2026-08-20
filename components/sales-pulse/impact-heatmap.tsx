import {
  HEATMAP_BLOCKS,
  HEATMAP_DAYS,
  type HeatmapCell,
} from "@/lib/sales-pulse-data";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type ImpactHeatmapProps = {
  values: number[][];
};

function cellColor(value: number): string {
  if (value >= 6) return "bg-[var(--pulse-good)] text-white";
  if (value >= 4) return "bg-[color-mix(in_oklch,var(--pulse-good)_82%,white)] text-white";
  if (value >= 2) return "bg-[color-mix(in_oklch,var(--pulse-good)_48%,white)] text-[var(--pulse-ink)]";
  if (value >= 0.5) return "bg-[color-mix(in_oklch,var(--pulse-good)_28%,white)] text-[var(--pulse-ink)]";
  if (value >= 0) return "bg-[var(--pulse-wash)] text-[var(--pulse-ink)]";
  if (value >= -0.5) return "bg-[color-mix(in_oklch,var(--pulse-blue)_14%,white)] text-[var(--pulse-ink)]";
  return "bg-[color-mix(in_oklch,var(--pulse-blue)_32%,white)] text-[var(--pulse-ink)]";
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
        className="min-w-[360px]"
        role="grid"
        aria-label="ماتریس اثر رشد بر اساس روز و ساعت"
      >
        <div className="grid grid-cols-[3.75rem_repeat(8,minmax(2rem,1fr))] gap-0.5 text-[9px]">
          <div aria-hidden="true" />
          {HEATMAP_BLOCKS.map((block) => (
            <div
              key={block}
              className="pb-0.5 text-center font-medium text-muted-foreground"
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
                      "flex h-6 items-center justify-center rounded-sm text-[8px] font-medium tabular-nums motion-reduce:transition-none sm:h-7 sm:text-[9px]",
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

      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[10px] text-muted-foreground">
        <span>کمتر</span>
        <div className="flex gap-0.5" aria-hidden="true">
          <span className="size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-blue)_32%,white)]" />
          <span className="size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-blue)_14%,white)]" />
          <span className="size-2.5 rounded-sm bg-[var(--pulse-wash)]" />
          <span className="size-2.5 rounded-sm bg-[color-mix(in_oklch,var(--pulse-good)_48%,white)]" />
          <span className="size-2.5 rounded-sm bg-[var(--pulse-good)]" />
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
