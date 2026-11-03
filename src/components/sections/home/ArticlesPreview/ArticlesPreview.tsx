import Link from "next/link";

import { ArticleCard } from "@/components/shared/ArticleCard/ArticleCard";
import { Container } from "@/components/ui/Container/Container";
import { articles } from "@/data/articles";

import styles from "./ArticlesPreview.module.scss";

export function ArticlesPreview() {
  const previewArticles = articles.slice(0, 2);

  if (previewArticles.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="articles-preview-title"
    >
      <Container>
        <div className={styles.heading}>
          <div>
            <h2
              id="articles-preview-title"
              className={styles.title}
            >
              Статьи
            </h2>

            <p className={styles.description}>
              О чувствах, отношениях и заботе о себе.
            </p>
          </div>

          <Link href="/articles" className={styles.allLink}>
            Все статьи
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <ul className={styles.grid}>
          {previewArticles.map((article) => (
            <li key={article.slug} className={styles.item}>
              <ArticleCard
                article={article}
                headingLevel="h3"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}