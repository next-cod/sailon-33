import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/links";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: "Сейлон — AI-продавец, которого вы настраиваете под свой бизнес",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Сейлон — управляемый AI-продавец",
    description: siteConfig.description,
    url: "/",
    siteName: "Сейлон",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Сейлон — управляемый AI-продавец",
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#163d35",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
