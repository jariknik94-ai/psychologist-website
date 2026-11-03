import type { Metadata } from "next";

import { Biography } from "@/components/sections/about/Biography/Biography";
import { Education } from "@/components/sections/about/Education/Education";
import { WorkApproach } from "@/components/sections/about/WorkApproach/WorkApproach";
import { BookingSection } from "@/components/shared/BookingSection/BookingSection";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    `${site.name} — психолог. ${site.format}.`,
  alternates: {
    canonical: "/about",
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