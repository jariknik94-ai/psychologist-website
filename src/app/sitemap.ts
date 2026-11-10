import type { MetadataRoute } from "next";

import { articles } from "@/data/articles";
import { siteUrl } from "@/data/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/services/group",
    "/articles",
    "/contacts",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${siteUrl}${path}`,
  }));

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((article) => article.status === "published")
    .map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
    }));

  return [...staticPages, ...articlePages];
}