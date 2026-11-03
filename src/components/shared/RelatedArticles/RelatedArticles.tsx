import { ArticleCard } from "@/components/shared/ArticleCard/ArticleCard";
import { articles } from "@/data/articles";

import styles from "./RelatedArticles.module.scss";

type RelatedArticlesProps = {
  currentSlug: string;
};

export function RelatedArticles({
  currentSlug,
}: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 2);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="related-articles-title"
    >
      <h2 id="related-articles-title" className={styles.title}>
        Другие материалы
      </h2>

      <ul className={styles.list}>
        {relatedArticles.map((article) => (
          <li key={article.slug} className={styles.item}>
            <ArticleCard article={article} headingLevel="h3" />
          </li>
        ))}
      </ul>
    </section>
  );
}