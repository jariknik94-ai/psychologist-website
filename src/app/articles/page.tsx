import type { Metadata } from "next";

import { ArticlesEmpty } from "@/components/sections/articles/ArticlesEmpty/ArticlesEmpty";
import { ArticleCard } from "@/components/shared/ArticleCard/ArticleCard";
import { Container } from "@/components/ui/Container/Container";
import { articles } from "@/data/articles";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Статьи",
  description:
    "Материалы о чувствах, отношениях и заботе о себе.",
};

export default function ArticlesPage() {
  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>Статьи</h1>

          <p className={styles.description}>
            Пространство для размышлений и знакомства
            с психологией.
          </p>
        </div>

        {articles.length > 0 ? (
          <ul className={styles.grid}>
            {articles.map((article) => (
              <li key={article.slug} className={styles.item}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <ArticlesEmpty />
        )}
      </Container>
    </main>
  );
}