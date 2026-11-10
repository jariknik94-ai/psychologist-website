import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: `${site.name} — психолог`,
    short_name: "Психолог",
    description: site.format,
    lang: "ru",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#faf5f1",
    theme_color: "#965b5f",

    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
