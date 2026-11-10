import type { Metadata } from "next";

import { Biography } from "@/components/sections/about/Biography/Biography";
import { Education } from "@/components/sections/about/Education/Education";
import { WorkApproach } from "@/components/sections/about/WorkApproach/WorkApproach";
import { BookingSection } from "@/components/shared/BookingSection/BookingSection";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Обо мне",
  description: `${site.name} — психолог. ${site.format}.`,

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/about",
    siteName: `${site.name} | Психолог`,
    title: `Обо мне | ${site.name}`,
    description:
      "Знакомство с психологом: образование, подход к работе и форматы встреч.",
    images: [{ url: "/images/social/about.jpg", alt: site.name }],
  },

  twitter: {
    card: "summary_large_image",
    title: `Обо мне | ${site.name}`,
    description:
      "Знакомство с психологом: образование, подход к работе и форматы встреч.",
    images: ["/images/social/about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <Biography />
      <Education />
      <WorkApproach />
      <BookingSection />
    </main>
  );
}