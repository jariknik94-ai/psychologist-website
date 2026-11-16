import { AboutPreview } from "@/components/sections/home/AboutPreview/AboutPreview";
import { ArticlesPreview } from "@/components/sections/home/ArticlesPreview/ArticlesPreview";
import { ConsultationSteps } from "@/components/sections/home/ConsultationSteps/ConsultationSteps";
import { Hero } from "@/components/sections/home/Hero/Hero";
import { MeetingFormats } from "@/components/sections/home/MeetingFormats/MeetingFormats";
import { BookingSection } from "@/components/shared/BookingSection/BookingSection";
import { FAQ } from "@/components/shared/FAQ/FAQ";

import styles from "./page.module.scss";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <Hero />
      <AboutPreview />
      <MeetingFormats />
      <ConsultationSteps />
      <FAQ />
      <ArticlesPreview />
      <BookingSection />
    </main>
  );
}
