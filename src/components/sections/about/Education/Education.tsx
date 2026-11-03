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
            <p className={styles.description}>
              {site.education}
            </p>

            <p className={styles.note}>
              Здесь появятся сведения о профессиональном
              образовании, дополнительной подготовке
              и повышении квалификации.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}