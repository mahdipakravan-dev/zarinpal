import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function DashboardPage() {
  return (
    <InsightPage
      title="پیشخوان"
      story="خلاصه وضعیت فروش، پرداخت و رشد کسب‌وکار در یک نگاه"
      note="داده‌های این صفحه از تحلیل‌های بخش رشد کسب‌وکار جمع‌بندی می‌شوند."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="خلاصه فروش ۳۰ روز اخیر"
        description="مبلغ فروش موفق، تعداد خرید و رشد نسبت به دوره قبل."
      />
      <AnalysisSlot
        title="نرخ موفقیت پرداخت"
        description="سهم نشست‌هایی که به خرید موفق رسیده‌اند."
      />
      <AnalysisSlot
        title="کارت‌های بازگشتی"
        description="سهم خرید از کارت‌هایی با سابقه خرید موفق از همین پذیرنده."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="فعالیت‌های پیشنهادی"
        description="اقدامات کوتاه‌مدت بر اساس تحلیل‌های اخیر."
      />
    </InsightPage>
  );
}
