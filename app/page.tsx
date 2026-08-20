"use client";

import { useState } from "react";
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

import { AppSidebar, type DashboardPage } from "@/components/app-sidebar";
import { DashboardHeader } from "@/components/dashboard-header";
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

function PageHeading({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold tracking-tight">{title}</h1>
        {subtitle ? (
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

function SearchInput() {
  return (
    <div className="relative w-full sm:w-56">
      <SearchIcon className="pointer-events-none absolute top-1/2 start-2.5 -translate-y-1/2 text-muted-foreground" />
      <Input
        aria-label="جستجو"
        placeholder="جستجو"
        className="ps-8 pe-10"
      />
      <kbd className="pointer-events-none absolute top-1/2 end-2 -translate-y-1/2 rounded-full border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
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
      className="rounded-full"
    >
      {children}
      {active ? <XIcon data-icon="inline-end" /> : <ChevronDownIcon data-icon="inline-end" />}
    </Button>
  );
}

function TableFooterBar({ count }: { count: string }) {
  return (
    <div className="flex flex-col gap-3 border-t px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
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
    <div className="flex flex-col gap-6">
      <PageHeading
        title="تراکنش‌ها"
        action={
          <Button variant="outline">
            <DownloadIcon data-icon="inline-start" />
            ایجاد خروجی
          </Button>
        }
      />

      <Card className="min-h-[420px]">
        <CardContent className="flex flex-col gap-6 pt-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip active>وضعیت: موفق</FilterChip>
              <FilterChip>روش پرداخت</FilterChip>
              <FilterChip>تاریخ</FilterChip>
              <FilterChip>مبلغ</FilterChip>
            </div>
            <SearchInput />
          </div>

          <Empty className="min-h-[300px] border-none">
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
    <div className="flex flex-col gap-6">
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
    <div className="flex flex-col gap-6">
      <PageHeading
        title="لینک‌های پرداخت"
        subtitle="ایجاد و مدیریت لینک‌های پرداخت"
      />

      <Card>
        <CardHeader className="border-b pb-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3 rounded-full border bg-muted/30 px-3 py-2">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-background">
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

        <CardContent className="flex flex-col gap-4 pt-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              <FilterChip>نوع</FilterChip>
              <FilterChip>وضعیت</FilterChip>
              <FilterChip>مبلغ</FilterChip>
            </div>
            <SearchInput />
          </div>

          <div className="overflow-hidden rounded-lg border">
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
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
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

export default function Home() {
  const [page, setPage] = useState<DashboardPage>("transactions");

  return (
    <SidebarProvider>
      <AppSidebar activePage={page} onNavigate={setPage} />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
          {page === "transactions" ? (
            <TransactionsPage />
          ) : page === "discounts" ? (
            <DiscountsPage />
          ) : (
            <LinksPage />
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
