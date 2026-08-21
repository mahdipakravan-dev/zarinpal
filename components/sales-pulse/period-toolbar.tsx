"use client";

import { InfoIcon } from "lucide-react";

import {
  AnalysisToolbar,
  type AnalysisToolbarMerchant,
  type AnalysisToolbarPeriod,
} from "@/components/dashboard/analysis-toolbar";
import { formatPersianNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

type PeriodToolbarProps = {
  periodId: string;
  merchantId: string;
  periods: AnalysisToolbarPeriod[];
  merchants: AnalysisToolbarMerchant[];
  onPeriodChange: (periodId: string | null) => void;
  onMerchantChange: (merchantId: string | null) => void;
  variant?: "panel" | "inline";
};

export function PeriodToolbar({
  periodId,
  merchantId,
  periods,
  merchants,
  onPeriodChange,
  onMerchantChange,
  variant = "panel",
}: PeriodToolbarProps) {
  const isInline = variant === "inline";
  const period = periods.find((item) => item.id === periodId);

  return (
    <div
      className={cn(
        isInline
          ? "flex w-full flex-col gap-2 lg:w-auto"
          : "rail-panel flex flex-col gap-2 p-2.5 [--rail-line:var(--pulse-line)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2.5 sm:p-3"
      )}
    >
      <AnalysisToolbar
        merchantId={merchantId}
        merchants={merchants}
        periodId={periodId}
        periods={periods}
        onMerchantChange={onMerchantChange}
        onPeriodChange={onPeriodChange}
        className={isInline ? "md:w-[24rem]" : "sm:w-[24rem]"}
      />

      {period && !isInline ? (
        <p className="rounded-md bg-[var(--pulse-wash)] px-2.5 py-1.5 text-xs text-[var(--pulse-subtle)] sm:text-sm">
          بازه:{" "}
          <span className="font-semibold text-[var(--pulse-ink)]">{period.range}</span>
        </p>
      ) : null}
    </div>
  );
}

export function DataLimitNote({
  eligible,
  confidence,
  sampleSize,
  sourceHash,
}: {
  eligible: boolean;
  confidence: "high" | "medium" | "low";
  sampleSize: number;
  sourceHash: string;
}) {
  const confidenceLabel =
    confidence === "high" ? "زیاد" : confidence === "medium" ? "متوسط" : "کم";

  return (
    <p className="flex items-start justify-center gap-2 px-1 text-center text-[11px] leading-5 text-[var(--pulse-subtle)] sm:text-xs">
      <InfoIcon
        className="mt-0.5 size-3.5 shrink-0 text-[var(--pulse-violet)]"
        aria-hidden="true"
      />
      <span>
        منبع: challenge_data.csv · {formatPersianNumber(sampleSize)} نشست · اطمینان {confidenceLabel}
        {!eligible ? " (نمونه ناکافی برای توصیه قطعی)" : ""} · مقایسه با میانگین همان روز و ساعت در ۸
        هفته گذشته · مبالغ منبع ریال و نمایش به تومان · نسخه داده {sourceHash.slice(0, 8)}
      </span>
    </p>
  );
}
