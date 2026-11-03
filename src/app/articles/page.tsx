import type { Metadata } from "next";

import { ArticlesEmpty } from "@/components/sections/articles/ArticlesEmpty/ArticlesEmpty";
import { Container } from "@/components/ui/Container/Container";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Статьи | Психолог",
  description:
    "Материалы о чувствах, отношениях и заботе о себе.",
};

export default function ArticlesPage() {
  return (
    <main className={styles.page}>
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>Статьи</h1>

          <p className={styles.description}>
            Пространство для размышлений и знакомства
            с психологией.
          </p>
        </div>

        <ArticlesEmpty />
      </Container>
    </main>
  );
}