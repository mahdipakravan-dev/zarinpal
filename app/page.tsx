"use client";

import { type ComponentType, useRef, useState } from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  DownloadIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ReceiptIcon,
  SearchIcon,
  Share2Icon,
  XIcon,
} from "lucide-react";
import { toast } from "sonner";

import { AppSidebar } from "@/components/app-sidebar";
import { PageHeading } from "@/components/dashboard/page-heading";
import { DashboardHeader } from "@/components/dashboard-header";
import { BusinessGraphPage } from "@/components/pages/business-graph-page";
import { BuyerLoyaltyPage } from "@/components/pages/buyer-loyalty-page";
import { PaymentHealthPage } from "@/components/pages/payment-health-page";
import { PeerPositionPage } from "@/components/pages/peer-position-page";
import { SalesPulsePage } from "@/components/pages/sales-pulse-page";
import { type DashboardPage, PAGE_TITLES } from "@/lib/dashboard";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const linkRows = [
  ["منتورشیپ کدریویو", "۶۷۳۹۹", "۲,۰۰۰,۰۰۰", "۰۹ بهمن ۱۴۰۳، ۱۴:۵۰"],
  ["منتورشیپ فوری", "۶۷۳۹۹", "۵,۰۰۰,۰۰۰", "۰۷ بهمن ۱۴۰۳، ۱۹:۱۷"],
  ["منتورشیپ آموزشی", "۶۷۳۹۲", "۱۰,۰۰۰,۰۰۰", "۰۷ بهمن ۱۴۰۳، ۱۹:۱۳"],
] as const;

function SearchInput() {
  return (
    <div className="relative w-full sm:w-52">
      <SearchIcon className="pointer-events-none absolute top-1/2 start-2.5 -translate-y-1/2 text-muted-foreground" />
      <Input
        aria-label="جستجو"
        placeholder="جستجو"
        className="ps-8 pe-10"
      />
      <kbd className="pointer-events-none absolute top-1/2 end-2 -translate-y-1/2 rounded border px-1.5 py-0.5 text-[10px] text-muted-foreground">
        /
      </kbd>
    </div>
  );
}

function FilterChip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      className="rounded-md"
    >
      {children}
      {active ? <XIcon data-icon="inline-end" /> : <ChevronDownIcon data-icon="inline-end" />}
    </Button>
  );
}

function TableFooterBar({ count }: { count: string }) {
  return (
    <div className="flex flex-col gap-2 border-t px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>تعداد سطر در صفحه:</span>
        <Select defaultValue="15">
          <SelectTrigger className="h-8 w-20">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15">۱۵</SelectItem>
            <SelectItem value="25">۲۵</SelectItem>
            <SelectItem value="50">۵۰</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <span className="text-sm text-muted-foreground">{count}</span>
    </div>
  );
}

function TransactionsPage() {
  return (
    <div className="flex flex-col gap-2">
      <PageHeading
        title="تراکنش‌ها"
        action={
          <Button variant="outline">
            <DownloadIcon data-icon="inline-start" />
            ایجاد خروجی
          </Button>
        }
      />

      <Card>
        <CardContent className="flex flex-col gap-2.5 pt-2.5">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip active>وضعیت: موفق</FilterChip>
              <FilterChip>روش پرداخت</FilterChip>
              <FilterChip>تاریخ</FilterChip>
              <FilterChip>مبلغ</FilterChip>
            </div>
            <SearchInput />
          </div>

          <Empty className="min-h-28 gap-2 border-none p-3">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <ReceiptIcon />
              </EmptyMedia>
              <EmptyTitle>آخرین تراکنش‌های درگاه</EmptyTitle>
              <EmptyDescription>
                تاکنون تراکنشی در این درگاه انجام نشده است
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        </CardContent>
      </Card>
    </div>
  );
}

function DiscountsPage() {
  return (
    <div className="flex flex-col gap-2">
      <PageHeading
        title="کدهای تخفیف"
        subtitle="ایجاد و مدیریت کدهای تخفیف برای لینک‌های پرداخت"
        action={
          <Button>
            <PlusIcon data-icon="inline-start" />
            ایجاد کد تخفیف
          </Button>
        }
      />

      <Card>
        <CardHeader className="border-b">
          <div className="flex flex-wrap gap-2">
            <FilterChip>وضعیت</FilterChip>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>کد تخفیف</TableHead>
                <TableHead>دفعات استفاده شده</TableHead>
                <TableHead>حداکثر قابل استفاده</TableHead>
                <TableHead>تاریخ و ساعت انقضا</TableHead>
                <TableHead>وضعیت</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code className="text-sm font-medium" dir="ltr">
                    webinar30
                  </code>
                  <p className="text-xs text-muted-foreground">
                    ۳۰ درصد · تمام لینک‌های پرداخت
                  </p>
                </TableCell>
                <TableCell>۰</TableCell>
                <TableCell>نامحدود</TableCell>
                <TableCell>–</TableCell>
                <TableCell>
                  <Badge>فعال</Badge>
                </TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code className="text-sm font-medium" dir="ltr">
                    webinar_30
                  </code>
                  <p className="text-xs text-muted-foreground">
                    ۳۰ درصد · تمام لینک‌های پرداخت
                  </p>
                </TableCell>
                <TableCell>۰</TableCell>
                <TableCell>نامحدود</TableCell>
                <TableCell>۱۲ بهمن ۱۴۰۳، ۱۸:۲۰</TableCell>
                <TableCell>
                  <Badge variant="secondary">غیرفعال</Badge>
                </TableCell>
                <TableCell>
                  <RowActions />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TableFooterBar count="۲ نتیجه" />
        </CardContent>
      </Card>
    </div>
  );
}

function LinksPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard?.writeText("https://zarinp.al/mahdipakravan");
    setCopied(true);
    toast.success("لینک کپی شد");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col gap-2">
      <PageHeading
        title="لینک‌های پرداخت"
        subtitle="ایجاد و مدیریت لینک‌های پرداخت"
      />

      <Card>
        <CardHeader className="border-b pb-2.5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <div className="flex size-7 shrink-0 items-center justify-center text-muted-foreground">
                <ReceiptIcon className="text-muted-foreground" />
              </div>
              <div className="min-w-0 text-sm">
                <span className="font-medium">لینک پرداخت سریع: </span>
                <span className="text-muted-foreground" dir="ltr">
                  https://zarinp.al/mahdipakravan
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon-sm" onClick={handleCopy}>
                {copied ? <CheckIcon /> : <CopyIcon />}
                <span className="sr-only">کپی</span>
              </Button>
              <Button variant="outline" size="icon-sm">
                <Share2Icon />
                <span className="sr-only">اشتراک‌گذاری</span>
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-2.5 pt-2.5">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip>نوع</FilterChip>
              <FilterChip>وضعیت</FilterChip>
              <FilterChip>مبلغ</FilterChip>
            </div>
            <SearchInput />
          </div>

          <div className="overflow-hidden border-t">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>عنوان</TableHead>
                  <TableHead>
                    مبلغ <span className="text-xs font-normal text-muted-foreground">ریال</span>
                  </TableHead>
                  <TableHead>موجودی/ظرفیت</TableHead>
                  <TableHead>تاریخ ایجاد</TableHead>
                  <TableHead>وضعیت</TableHead>
                  <TableHead className="w-10" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {linkRows.map((row) => (
                  <TableRow key={row[0]}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex size-8 shrink-0 items-center justify-center text-muted-foreground">
                          <ReceiptIcon className="text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{row[0]}</p>
                          <p className="text-xs text-muted-foreground">
                            {row[1]} · لینک فروش محصول
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{row[2]}</TableCell>
                    <TableCell className="text-muted-foreground">تعیین نشده</TableCell>
                    <TableCell>{row[3]}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">غیرفعال</Badge>
                    </TableCell>
                    <TableCell>
                      <RowActions />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableFooterBar count="۳ نتیجه" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon-sm">
            <MoreHorizontalIcon />
            <span className="sr-only">عملیات</span>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuItem>ویرایش</DropdownMenuItem>
        <DropdownMenuItem>غیرفعال‌سازی</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const pages: Record<DashboardPage, ComponentType> = {
  "business-graph": BusinessGraphPage,
  "sales-pulse": SalesPulsePage,
  "buyer-loyalty": BuyerLoyaltyPage,
  "peer-position": PeerPositionPage,
  "payment-health": PaymentHealthPage,
  transactions: TransactionsPage,
  discounts: DiscountsPage,
  links: LinksPage,
};

export default function Home() {
  const [page, setPage] = useState<DashboardPage>("sales-pulse");
  const mainRef = useRef<HTMLElement>(null);
  const ActivePage = pages[page];

  const handleNavigate = (nextPage: DashboardPage) => {
    setPage(nextPage);
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      mainRef.current?.scrollTo(0, 0);
      mainRef.current?.focus({ preventScroll: true });
    });
  };

  return (
    <SidebarProvider>
      <AppSidebar activePage={page} onNavigate={handleNavigate} />
      <SidebarInset className={page === "business-graph" ? undefined : "premium-dashboard"}>
        <DashboardHeader compact={page !== "business-graph"} />
        <main
          ref={mainRef}
          id="dashboard-main"
          tabIndex={-1}
          aria-label={PAGE_TITLES[page]}
          data-page={page}
          className={cn(
            "dashboard-shell flex flex-1 flex-col outline-none",
            page === "business-graph"
              ? "gap-3 px-3 pb-3 pt-4 md:px-4 md:pb-4 md:pt-5 xl:px-5 xl:pb-5 xl:pt-6"
              : "gap-2 px-2.5 pb-2.5 pt-3 md:px-3 md:pb-3 md:pt-3.5 xl:px-4 xl:pb-4 xl:pt-4"
          )}
        >
          <ActivePage />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
