import { ActionLink } from "@/components/ui/ActionLink/ActionLink";

import { Container } from "@/components/ui/Container/Container";

import styles from "./BookingSection.module.scss";

export function BookingSection() {
  return (
    <section
      className={styles.section}
      aria-labelledby="booking-title"
    >
      <Container>
        <div className={styles.content}>
          <h2 id="booking-title" className={styles.title}>
            Можно начать с первого сообщения
          </h2>

          <p className={styles.description}>
            Если вы хотите записаться на консультацию или
            уточнить условия, свяжитесь со мной удобным способом.
          </p>

          <div className={styles.action}>
            <ActionLink href="/contacts">
              Перейти к контактам
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
