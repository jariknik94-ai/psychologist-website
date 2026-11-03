import type { ArticleBlock } from "@/types/article";
import { getArticleHeadingId } from "@/utils/article";
import styles from "./ArticleContent.module.scss";

type ArticleContentProps = {
  blocks: ArticleBlock[];
};

export function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{block.text}</p>;

            case "heading":
            return (
                <h2
                key={index}
                id={getArticleHeadingId(index)}
                tabIndex={-1}
                >
                {block.text}
                </h2>
            );

          case "list":
            return (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            );

          case "quote":
            return (
              <blockquote key={index}>
                <p>{block.text}</p>
              </blockquote>
            );
        }
      })}
    </div>
  );
}