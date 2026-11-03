import type { Metadata } from "next";

import { Biography } from "@/components/sections/about/Biography/Biography";
import { Education } from "@/components/sections/about/Education/Education";
import { BookingSection } from "@/components/shared/BookingSection/BookingSection";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: `Обо мне | ${site.name}`,
  description:
    `Информация о психологе ${site.name}: образование и подход к работе.`,
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <Biography />
      <Education />
      <BookingSection />
    </main>
  );
}