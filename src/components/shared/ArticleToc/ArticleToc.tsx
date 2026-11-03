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
    <nav
      className={styles.toc}
      aria-labelledby="article-toc-title"
    >
      <h2 id="article-toc-title" className={styles.title}>
        В этой статье
      </h2>

      <ul className={styles.list}>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className={styles.link}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}