import type { Metadata } from "next";

import { ArticlesEmpty } from "@/components/sections/articles/ArticlesEmpty/ArticlesEmpty";
import { ArticleCard } from "@/components/shared/ArticleCard/ArticleCard";
import { Container } from "@/components/ui/Container/Container";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Статьи",

  description:
    "Материалы о чувствах, отношениях и заботе о себе.",

  alternates: {
    canonical: "/articles",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/articles",
    siteName: `${site.name} | Психолог`,
    title: `Статьи | ${site.name}`,
    description:
      "Материалы о чувствах, отношениях и заботе о себе.",
    images: [
      {
        url: "/images/social/articles.jpg",
        alt: `${site.name} — психолог`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Статьи | ${site.name}`,
    description:
      "Материалы о чувствах, отношениях и заботе о себе.",
    images: ["/images/social/articles.jpg"],
  },
};

export default function ArticlesPage() {
  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <Container>
        <div className={styles.heading}>
          <h1 className={styles.title}>Статьи</h1>

          <p className={styles.description}>
            Пространство для размышлений и знакомства
            с психологией.
          </p>
        </div>

        {articles.length > 0 ? (
          <ul className={styles.grid}>
            {articles.map((article) => (
              <li key={article.slug} className={styles.item}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        ) : (
          <ArticlesEmpty />
        )}
      </Container>
    </main>
  );
}