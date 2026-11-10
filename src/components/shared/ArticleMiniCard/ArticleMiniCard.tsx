import Image from "next/image";
import Link from "next/link";
import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";

import type { Article } from "@/types/article";

import styles from "./ArticleMiniCard.module.scss";

type ArticleMiniCardProps = {
  article: Article;
};

export function ArticleMiniCard({
  article,
}: ArticleMiniCardProps) {
  return (
    <article className={styles.card}>
      <Link
        href={`/articles/${article.slug}`}
        className={styles.link}
        aria-labelledby={`related-${article.slug}-title`}
      >
        <div className={styles.cover}>
          <Image
            src={article.cover?.src ?? "/icons/icon-192.png"}
            alt=""
            fill
            sizes="96px"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.status}>
            {article.status === "draft" ? "Черновик" : "Статья"}
          </span>

          <h3
            id={`related-${article.slug}-title`}
            className={styles.title}
          >
            {article.title}
          </h3>

          <span className={styles.readMore}>
            <ActionIcon name="book" />
            <span>Читать</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
