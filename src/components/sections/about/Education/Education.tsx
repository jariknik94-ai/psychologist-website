import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./Education.module.scss";

export function Education() {
  return (
    <section
      className={styles.section}
      aria-labelledby="education-title"
    >
      <Container>
        <div className={styles.content}>
          <h2 id="education-title" className={styles.title}>
            Образование и квалификация
          </h2>

          <div className={styles.placeholder}>
            <h3 className={styles.subtitle}>
              Профильное образование
            </h3>

            <p className={styles.description}>
              {site.education}
            </p>

            <h3 className={styles.subtitle}>
              Дополнительная подготовка
            </h3>

            <p className={styles.description}>
              {site.training}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}