import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { siteUrl } from "@/data/config";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { site } from "@/data/site";

import "./globals.scss";

const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const lora = localFont({
  src: [
    { path: "./fonts/Lora-Variable.ttf", style: "normal", weight: "400 700" },
    { path: "./fonts/Lora-Italic-Variable.ttf", style: "italic", weight: "400 700" },
  ],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${site.name} | Психолог`,
    template: `%s | ${site.name}`,
  },

  description:
    `${site.name}. ${site.format}. Контакты для записи и информация о работе.`,
    
    alternates: {
      canonical: "/",
    },
    
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: `${site.name} | Психолог`,
    title: `${site.name} | Психолог`,
    description:
      "Онлайн-консультации и очные групповые сессии. Информация о психологе и контакты для записи.",
    images: [
      {
        url: "/images/share-preview.jpg",
        alt: "Анастасия Никуличева — психолог",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Психолог`,
    description:
      "Онлайн-консультации и очные групповые сессии.",
    images: ["/images/share-preview.jpg"],
  },

  icons: {
  icon: [
    {
      url: "/icons/favicon.ico",
      sizes: "16x16 32x32 48x48",
      type: "image/x-icon",
    },
    {
      url: "/icons/favicon-32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      url: "/icons/icon-192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/icons/icon-512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  apple: [
    {
      url: "/icons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
},
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" data-scroll-behavior="smooth" className={`${manrope.variable} ${lora.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Перейти к содержимому
        </a>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
