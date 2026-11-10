import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactDetails } from "@/components/sections/contacts/ContactDetails/ContactDetails";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Контактная информация для записи на консультацию психолога.",

  alternates: {
    canonical: "/contacts",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/contacts",
    siteName: `${site.name} | Психолог`,
    title: `Контакты | ${site.name}`,
    description:
      "Телефон и Telegram для связи и записи на встречу.",
    images: [{ url: "/images/social/contacts.png", alt: site.name }],
  },

  twitter: {
    card: "summary_large_image",
    title: `Контакты | ${site.name}`,
    description:
      "Телефон и Telegram для связи и записи на встречу.",
    images: ["/images/social/contacts.png"],
  },
};

export default function ContactsPage() {
  return (
    <main id="main-content"
  className={styles.page}
  tabIndex={-1}>
      <ContactDetails />
    </main>
  );
}