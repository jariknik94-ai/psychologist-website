export type ArticleBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
    };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  status: "draft" | "published";
  content: ArticleBlock[];
  cover?: {
    src: string;
    alt: string;
  };
};