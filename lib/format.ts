const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;

export function toPersianDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) => persianDigits[Number(digit)] ?? digit);
}

export function formatPersianNumber(value: number, options?: Intl.NumberFormatOptions): string {
  return toPersianDigits(value.toLocaleString("fa-IR", options));
}

export function formatPersianPercent(value: number, signed = false): string {
  const prefix = signed && value > 0 ? "+" : "";
  return `${prefix}${formatPersianNumber(value, { maximumFractionDigits: 1 })}٪`;
}

export function formatPersianPoints(value: number, signed = false): string {
  const prefix = signed && value > 0 ? "+" : "";
  return `${prefix}${formatPersianNumber(value, { maximumFractionDigits: 1 })}`;
}
