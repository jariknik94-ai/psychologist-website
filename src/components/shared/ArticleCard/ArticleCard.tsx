import Link from "next/link";

import type { Article } from "@/types/article";

import styles from "./ArticleCard.module.scss";

type ArticleCardProps = {
  article: Article;
  headingLevel?: "h2" | "h3";
};

export function ArticleCard({
  article,
  headingLevel = "h2",
}: ArticleCardProps) {
  const isDraft = article.status === "draft";
  const Heading = headingLevel;

  return (
    <article className={styles.card}>
      <Link
        href={`/articles/${article.slug}`}
        className={styles.link}
        aria-labelledby={`article-${article.slug}-title`}
      >
        <span className={styles.badge}>
          {isDraft ? "Черновик" : "Статья"}
        </span>

        <Heading
          id={`article-${article.slug}-title`}
          className={styles.title}
        >
          {article.title}
        </Heading>

        <p className={styles.excerpt}>{article.excerpt}</p>

        <span className={styles.caption}>
          {isDraft
            ? "Демонстрационный материал"
            : "Материал психолога"}
        </span>
      </Link>
    </article>
  );
}