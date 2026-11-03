import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer/Footer";
import { site } from "@/data/site";
import { Header } from "@/components/layout/Header/Header";

import "./globals.scss";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Психолог`,
    template: `%s | ${site.name}`,
  },
  description:
    `${site.name}. ${site.format}. Контакты для записи и информация о работе.`,
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