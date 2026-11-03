import type { Metadata } from "next";
import Link from "next/link";

import { ConsultationDetails } from "@/components/sections/services/ConsultationDetails/ConsultationDetails";
import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Консультации",
  description:
    `${site.format}. Информация о консультациях и запись к психологу.`,
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
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
    </main>
  );
}