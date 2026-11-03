import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { site } from "@/data/site";

import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://psychologist-website-brown.vercel.app",
  ),

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
        url: "/images/share.png",
        alt: "Анастасия Никуличева — психолог",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Психолог`,
    description:
      "Онлайн-консультации и очные групповые сессии.",
    images: ["/images/share.png"],
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
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