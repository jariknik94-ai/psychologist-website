import type { MetadataRoute } from "next";

import { articles } from "@/data/articles";

const baseUrl = "https://psychologist-website-brown.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/articles",
    "/contacts",
  ];

  const staticPages: MetadataRoute.Sitemap = pages.map((path) => ({
    url: `${baseUrl}${path}`,
  }));

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((article) => article.status === "published")
    .map((article) => ({
      url: `${baseUrl}/articles/${article.slug}`,
    }));

  return [...staticPages, ...articlePages];
}