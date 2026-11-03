import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleContent } from "@/components/shared/ArticleContent/ArticleContent";
import { ArticleToc } from "@/components/shared/ArticleToc/ArticleToc";
import { RelatedArticles } from "@/components/shared/RelatedArticles/RelatedArticles";
import { Container } from "@/components/ui/Container/Container";
import { articles } from "@/data/articles";
import { site } from "@/data/site";

import styles from "./page.module.scss";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const title = `${article.title} | ${site.name}`;
  const image = article.cover ?? {
    src: "/images/share.png",
    alt: `${site.name} — психолог`,
  };

  return {
    title: article.title,
    description: article.excerpt,

    alternates: {
      canonical: `/articles/${article.slug}`,
    },

    robots:
      article.status === "draft"
        ? { index: false, follow: false }
        : undefined,

    openGraph: {
      type: "article",
      locale: "ru_RU",
      siteName: `${site.name} | Психолог`,
      url: `/articles/${article.slug}`,
      title,
      description: article.excerpt,
      images: [
        {
          url: image.src,
          alt: image.alt || article.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description: article.excerpt,
      images: [image.src],
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const isDraft = article.status === "draft";

  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <Container>
        <article className={styles.article}>
          <Link href="/articles" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Все статьи
          </Link>

          <header className={styles.header}>
            {isDraft && (
              <p className={styles.notice}>
                Черновик. Демонстрационный материал для
                настройки сайта.
              </p>
            )}

            <h1 className={styles.title}>{article.title}</h1>

            <p className={styles.excerpt}>{article.excerpt}</p>

            {!isDraft && (
              <p className={styles.author}>
                Автор: {site.name}
              </p>
            )}
          </header>

          {article.cover && (
            <div className={styles.cover}>
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                sizes="(max-width: 808px) 100vw, 760px"
                className={styles.coverImage}
              />
            </div>
          )}

          <ArticleToc blocks={article.content} />
          <ArticleContent blocks={article.content} />
        </article>

        <div className={styles.related}>
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </Container>
    </main>
  );
}