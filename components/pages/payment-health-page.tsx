import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function PaymentHealthPage() {
  return (
    <InsightPage
      title="سلامت مسیر پرداخت"
      story="در کدام مرحله پرداخت، فروش بالقوه از دست می‌رود؟"
      note="نشست ناموفق الزاماً با اصلاح مسیر به خرید موفق تبدیل نمی‌شد؛ اثر مالی را سناریویی بخوانید، نه درآمد قطعی ازدست‌رفته."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="قیف مسیر پرداخت"
        description="پیش از بانک (NoAttempt)، ورود به بانک و ناموفق ماندن، بازیابی با retry، و وضعیت Paid یا مشکل verify."
      />
      <AnalysisSlot
        title="ورود به مرحله بانکی"
        description="نرخ رسیدن کاربر به بانک در مقایسه با همتایان مشابه پس از تعدیل ترکیب مبلغ و PSP."
      />
      <AnalysisSlot
        title="موفقیت پس از ورود به بانک"
        description="افت موفقیت بعد از ورود به بانک، به‌تفکیک بازه مبلغ و در صورت نمونه کافی به‌تفکیک PSP."
      />
      <AnalysisSlot
        title="بازیابی با retry"
        description="سهم نشست‌هایی که پس از تلاش مجدد به خرید موفق رسیده‌اند."
      />
      <AnalysisSlot
        title="تفاوت ترمینال‌ها"
        description="نرخ موفقیت و NoAttempt بین ترمینال‌های همین پذیرنده، فقط با نمونه کافی."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="ناهنجاری PSP یا صادرکننده"
        description="انحراف تعدیل‌شده در PSP یا issuer نسبت به الگوی مورد انتظار همین پذیرنده و گروه همتا."
      />
    </InsightPage>
  );
}
