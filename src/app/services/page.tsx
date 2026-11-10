import type { Metadata } from "next";
import Link from "next/link";
import { GroupBanner } from "@/components/sections/services/GroupBanner/GroupBanner";
import { ConsultationDetails } from "@/components/sections/services/ConsultationDetails/ConsultationDetails";
import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Консультации",

  description:
    "Онлайн-консультации и очные групповые сессии с психологом Анастасией Никуличевой.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/services",
    siteName: `${site.name} | Психолог`,
    title: `Консультации | ${site.name}`,
    description:
      "Узнайте об онлайн-консультациях и очных групповых сессиях.",
    images: [
      {
        url: "/images/social/services.jpg",
        alt: `${site.name} — психолог`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Консультации | ${site.name}`,
    description:
      "Узнайте об онлайн-консультациях и очных групповых сессиях.",
    images: ["/images/social/services.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <main id="main-content"
  className={styles.page}
  tabIndex={-1}>
      <Container className={styles.intro}>
        <h1 className={styles.title}>Консультации</h1>

        <p className={styles.description}>
          Онлайн-консультации и очные групповые сессии.
          Выберите формат, чтобы посмотреть условия
          и связаться со мной.
        </p>

        <nav
          className={styles.formats}
          aria-label="Форматы консультаций"
        >
          <Link href="#online" className={styles.formatLink}>
            Онлайн
            <span aria-hidden="true">↓</span>
          </Link>

          <Link href="#group" className={styles.formatLink}>
            Групповые сессии
            <span aria-hidden="true">↓</span>
          </Link>
        </nav>
      </Container>
      <ConsultationDetails />
      <GroupBanner />
    </main>
  );
}