import type { FAQEntry } from "@/data/faq";

import styles from "./FAQItem.module.scss";

type FAQItemProps = {
  item: FAQEntry;
};

export function FAQItem({ item }: FAQItemProps) {
  return (
    <details className={styles.item}>
      <summary className={styles.question}>
        <span>{item.question}</span>

        <span className={styles.icon} aria-hidden="true" />
      </summary>

      <p className={styles.answer}>{item.answer}</p>
    </details>
  );
}