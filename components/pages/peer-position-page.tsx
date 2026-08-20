import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function PeerPositionPage() {
  return (
    <InsightPage
      title="جایگاه در میان کسب‌وکارهای مشابه"
      story="در مقایسه با کسب‌وکارهای مشابه کجا قرار دارم؟"
      note="هویت سایر پذیرنده‌ها نمایش داده نمی‌شود. مقایسه فقط وقتی گروه همتا حداقل ۱۰ عضو داشته باشد."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="جایگاه صدکی"
        description="percentile مبلغ فروش موفق، رشد ماهانه، متوسط مبلغ خرید و نرخ خرید مجدد ۳۰روزه در گروه همتا."
      />
      <AnalysisSlot
        title="جذب در برابر نگهداشت"
        description="آیا مسئله اصلی جذب خریدار جدید است یا بازگشت کارت‌های دیده‌شده."
      />
      <AnalysisSlot
        title="سهم فروش بازگشتی"
        description="سهم فروش از کارت‌های بازگشتی در مقایسه با میانه همتایان مشابه."
      />
      <AnalysisSlot
        title="پایداری فروش"
        description="نوسان فروش و پایداری روند نسبت به کسب‌وکارهای هم‌اندازه و هم‌صنف."
      />
      <AnalysisSlot
        title="فشار کارمزد تعدیل‌شده"
        description="شاخص نسبی adjusted_fee در گروه همتا؛ بدون افشای پذیرنده دیگر."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="تعریف گروه همتا"
        description="دسته کسب‌وکار، اندازه بر اساس تعداد پرداخت، بازه متوسط مبلغ، الگوی زمانی، سهم بازگشت و نوع verify."
      />
    </InsightPage>
  );
}
