import { cn } from "@/lib/utils";

type QuickComparisonProps = {
  items: { label: string; value: string }[];
};

export function QuickComparisonList({ items }: QuickComparisonProps) {
  return (
    <section aria-labelledby="quick-comparison-heading">
      <h3
        id="quick-comparison-heading"
        className="mb-3 font-heading text-sm font-medium"
      >
        مقایسه سریع
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between gap-3 rounded-lg bg-muted/40 px-3 py-2 text-sm"
          >
            <span className="text-muted-foreground">{item.label}</span>
            <span
              className={cn(
                "font-semibold tabular-nums",
                item.value.startsWith("+") ? "text-emerald-600" : "text-foreground"
              )}
            >
              {item.value}
              {!item.value.includes("٪") ? (
                <span className="text-xs font-normal text-muted-foreground">
                  {" "}
                  واحد درصدی
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
