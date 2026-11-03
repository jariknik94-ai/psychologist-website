import type { ArticleBlock } from "@/types/article";

export function getArticleHeadingId(index: number) {
  return `article-section-${index + 1}`;
}

export function getArticleHeadings(blocks: ArticleBlock[]) {
  return blocks.flatMap((block, index) =>
    block.type === "heading"
      ? [
          {
            id: getArticleHeadingId(index),
            text: block.text,
          },
        ]
      : [],
  );
}