import { Container } from "@/components/ui/Container/Container";
import { faq } from "@/data/faq";

import { FAQItem } from "./FAQItem/FAQItem";

import styles from "./FAQ.module.scss";

export function FAQ() {
  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <Container>
        <div className={styles.content}>
          <h2 id="faq-title" className={styles.title}>
            Частые вопросы
          </h2>

          <div className={styles.list}>
            {faq.map((item) => (
              <FAQItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}