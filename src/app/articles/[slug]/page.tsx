import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return {
    title: article.title,
    description: article.excerpt,
    robots:
      article.status === "draft"
        ? { index: false, follow: false }
        : undefined,
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

          <div className={styles.body}>
            {article.paragraphs.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className={styles.related}>
          <RelatedArticles currentSlug={article.slug} />
        </div>
      </Container>
    </main>
  );
}