import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./WorkApproach.module.scss";

export function WorkApproach() {
  return (
    <section
      className={styles.section}
      aria-labelledby="work-approach-title"
    >
      <Container>
        <div className={styles.content}>
          <h2 id="work-approach-title" className={styles.title}>
            Подход к работе
          </h2>

          <p className={styles.description}>
            {site.approach}
          </p>

          <h3 className={styles.subtitle}>
            С какими запросами можно обратиться
          </h3>

          <p className={styles.description}>
            {site.requests}
          </p>
        </div>
      </Container>
    </section>
  );
}