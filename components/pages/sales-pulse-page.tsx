import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function SalesPulsePage() {
  return (
    <InsightPage
      title="نبض فروش و مناسبت‌ها"
      story="فروش من در حال رشد است یا نه، و چه چیزی این رشد را ساخته است؟"
      note="مقایسه مناسبت‌ها انحراف عملکرد نسبت به baseline مورد انتظار است؛ نه اثبات اثر قطعی فصلی. واحد مبلغ‌ها ریال است."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="روند فروش موفق"
        description="تعداد خرید موفق، مبلغ فروش موفق و متوسط مبلغ هر خرید نسبت به دوره مشابه و baseline شخصی."
      />
      <AnalysisSlot
        title="نرخ موفقیت پرداخت"
        description="سهم نشست‌هایی که به خرید موفق رسیده‌اند و تغییر آن در بازه انتخاب‌شده."
      />
      <AnalysisSlot
        title="سهم کارت‌های بازگشتی"
        description="سهم خرید از کارت‌هایی که قبلاً از همین پذیرنده خرید موفق داشته‌اند."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="تجزیه رشد مناسبت"
        description="رشد فروش به تغییر تعداد خرید، متوسط سبد، نرخ موفقیت پرداخت و سهم کارت‌های بازگشتی شکسته می‌شود."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="انحراف از baseline مورد انتظار"
        description="عملکرد بازه مناسبت در مقایسه با همان روزهای هفته، با کنترل مبلغ، ساعت و ترکیب خریدار تا حد ممکن."
      />
    </InsightPage>
  );
}
