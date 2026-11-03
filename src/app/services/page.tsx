import type { Metadata } from "next";

import { ConsultationDetails } from "@/components/sections/services/ConsultationDetails/ConsultationDetails";
import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Консультации | ${site.name}`,
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
          Чтобы узнать подробности и договориться о встрече,
          свяжитесь со мной.
        </p>
      </Container>
      <ConsultationDetails />
    </main>
  );
}