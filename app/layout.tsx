import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";

import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZarinPal Dashboard",
  description:
    "A responsive fintech dashboard for transactions, discount codes, and payment links.",
  openGraph: {
    title: "ZarinPal Dashboard",
    description:
      "Transactions, discounts, and payment links — in one focused workspace.",
    url: "https://zarinpal-dashboard.mpakravan.chatgpt.site",
    siteName: "ZarinPal Dashboard",
    images: [
      {
        url: "https://zarinpal-dashboard.mpakravan.chatgpt.site/og.png",
        width: 1731,
        height: 909,
        alt: "ZarinPal Dashboard",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZarinPal Dashboard",
    description:
      "Transactions, discounts, and payment links — in one focused workspace.",
    images: ["https://zarinpal-dashboard.mpakravan.chatgpt.site/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={cn("font-sans", notoSansArabic.variable)}>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
