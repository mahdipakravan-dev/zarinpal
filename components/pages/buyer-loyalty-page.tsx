import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function BuyerLoyaltyPage() {
  return (
    <InsightPage
      title="رفتار و وفاداری خریداران"
      story="خریداران من بازمی‌گردند یا فقط یک‌بار خرید می‌کنند؟"
      note="این تحلیل روی شناسه کارت است، نه لزوماً یک مشتری. «اولین خرید» یعنی اولین مشاهده در دیتاست فعلی."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="کارت‌های بازگشتی"
        description="درصد کارت‌های دارای خرید تکراری و سهم خریدهای دوم به بعد از فروش قابل‌شناسایی."
      />
      <AnalysisSlot
        title="فاصله بین دو خرید"
        description="میانه و متوسط فاصله زمانی بین خرید اول مشاهده‌شده و خرید بعدی همان کارت."
      />
      <AnalysisSlot
        title="خرید دوم در ۷ تا ۹۰ روز"
        description="سهم کارت‌هایی که طی ۷، ۳۰، ۶۰ و ۹۰ روز خرید دیگری انجام داده‌اند؛ با کنترل حق سانسور انتهای دیتاست."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="نسل ماه اولین مشاهده"
        description="cohort ماه اولین خرید مشاهده‌شده و نرخ بازگشت هر نسل، فقط برای کارت‌هایی که فرصت مشاهده کامل داشته‌اند."
      />
      <AnalysisSlot
        title="بخش‌بندی کارت‌ها"
        description="تک‌خریدی، تازه، وفادار و در معرض ریزش؛ همراه با درآمد مشاهده‌شده هر بخش."
      />
      <AnalysisSlot
        title="بازگشت در مناسبت‌ها"
        description="تغییر سهم کارت‌های بازگشتی در بازه‌های مناسبت نسبت به baseline همان پذیرنده."
      />
    </InsightPage>
  );
}
