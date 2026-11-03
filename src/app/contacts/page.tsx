import type { Metadata } from "next";

import { ContactDetails } from "@/components/sections/contacts/ContactDetails/ContactDetails";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Контакты | Психолог",
  description:
    "Контактная информация для записи на консультацию психолога.",
};

export default function ContactsPage() {
  return (
    <main className={styles.page}>
      <ContactDetails />
    </main>
  );
}