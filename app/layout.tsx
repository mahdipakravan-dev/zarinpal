import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZarinPal Dashboard",
  description: "A responsive fintech dashboard for transactions, discount codes, and payment links.",
  openGraph: {
    title: "ZarinPal Dashboard",
    description: "Transactions, discounts, and payment links — in one focused workspace.",
    url: "https://zarinpal-dashboard.mpakravan.chatgpt.site",
    siteName: "ZarinPal Dashboard",
    images: [{ url: "https://zarinpal-dashboard.mpakravan.chatgpt.site/og.png", width: 1731, height: 909, alt: "ZarinPal Dashboard" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZarinPal Dashboard",
    description: "Transactions, discounts, and payment links — in one focused workspace.",
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
    <html lang="fa" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  );
}
