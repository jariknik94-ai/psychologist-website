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
        url: "/images/social/services-rose.jpg",
        alt: `${site.name} — психолог`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Консультации | ${site.name}`,
    description:
      "Узнайте об онлайн-консультациях и очных групповых сессиях.",
    images: ["/images/social/services-rose.jpg"],
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
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="4" y="4" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" />
              <path d="M2 20h20l-2-4H4l-2 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span>Онлайн</span>
          </Link>

          <Link href="#group" className={styles.formatLink}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 21v-2a6 6 0 0 1 12 0v2M4 10a3 3 0 0 0 0 6M20 10a3 3 0 0 1 0 6M1 21v-1a5 5 0 0 1 3-5M23 21v-1a5 5 0 0 0-3-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Групповые сессии</span>
          </Link>
        </nav>
      </Container>
      <ConsultationDetails />
      <GroupBanner />
    </main>
  );
}
