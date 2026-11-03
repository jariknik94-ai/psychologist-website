import Image from "next/image";
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
        {article.cover && (
          <div className={styles.cover}>
            <Image
              src={article.cover.src}
              alt={article.cover.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1248px) 50vw, 600px"
              className={styles.image}
            />
          </div>
        )}

        <div className={styles.content}>
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
        </div>
      </Link>
    </article>
  );
}