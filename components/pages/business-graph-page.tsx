import { AnalysisSlot } from "@/components/dashboard/analysis-slot";
import { InsightPage } from "@/components/dashboard/insight-page";

export function BusinessGraphPage() {
  return (
    <InsightPage
      title="گراف هوشمند کسب و کار"
      story="روابط پنهان بین فروش، خریدار، زمان و مسیر پرداخت را ببینید"
      note="گراف از داده‌های تجمیع‌شده ساخته می‌شود و هویت سایر پذیرنده‌ها یا خریداران افشا نمی‌شود."
    >
      <AnalysisSlot
        className="md:col-span-2"
        title="نمای گراف تعاملی"
        description="گراف روابط بین شاخص‌های فروش، وفاداری، سلامت پرداخت و مناسبت‌ها."
      />
      <AnalysisSlot
        title="گره‌های پرتأثیر"
        description="مهم‌ترین متغیرها و ارتباط‌هایی که بیشترین سهم را در تغییر فروش دارند."
      />
      <AnalysisSlot
        title="مسیرهای علّی محتمل"
        description="زنجیره‌های محتمل از رویداد تا نتیجه، با سطح اطمینان آماری."
      />
      <AnalysisSlot
        className="md:col-span-2"
        title="پیشنهاد مداخله"
        description="اقداماتی که بیشترین اثر را بر اساس ساختار گراف دارند."
      />
    </InsightPage>
  );
}
