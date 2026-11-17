import type { ArticleBlock } from "@/types/article";
import { getArticleHeadings } from "@/utils/article";

import styles from "./ArticleToc.module.scss";

type ArticleTocProps = {
  blocks: ArticleBlock[];
};

export function ArticleToc({ blocks }: ArticleTocProps) {
  const headings = getArticleHeadings(blocks);

  if (headings.length < 2) {
    return null;
  }

  return (
    <nav className={styles.toc} aria-label="Содержание статьи">
      <div className={styles.desktop}>
        <h2 className={styles.title}>В этой статье</h2>
        <HeadingList headings={headings} />
      </div>
      <details className={styles.mobile}>
        <summary className={styles.summary}>В этой статье <span aria-hidden="true">+</span></summary>
        <HeadingList headings={headings} />
      </details>
    </nav>
  );
}

function HeadingList({ headings }: { headings: ReturnType<typeof getArticleHeadings> }) {
  return (
    <ul className={styles.list}>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`} className={styles.link}>{heading.text}</a>
        </li>
      ))}
    </ul>
  );
}
