import { AboutPreview } from "@/components/sections/home/AboutPreview/AboutPreview";
import { ConsultationSteps } from "@/components/sections/home/ConsultationSteps/ConsultationSteps";
import { Hero } from "@/components/sections/home/Hero/Hero";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview/ServicesPreview";
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
      <ServicesPreview />
      <ConsultationSteps />
      <FAQ />
      <BookingSection />
    </main>
  );
}