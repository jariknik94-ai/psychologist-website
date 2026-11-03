export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  status: "draft" | "published";
  paragraphs: string[];
};