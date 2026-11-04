import { ActionLink } from "@/components/ui/ActionLink/ActionLink";
import { Container } from "@/components/ui/Container/Container";

import styles from "./GroupBanner.module.scss";

export function GroupBanner() {
  return (
    <section
      className={styles.section}
      aria-labelledby="group-banner-title"
    >
      <Container>
        <div className={styles.banner}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Очный формат</p>

            <h2 id="group-banner-title" className={styles.title}>
              Групповые встречи
            </h2>

            <p className={styles.description}>
              Отдельная страница о групповых сессиях:
              программа, условия участия и информация
              о ближайшей встрече.
            </p>
          </div>

          <div className={styles.action}>
            <ActionLink href="/services/group">
              Посмотреть групповые встречи
              <span aria-hidden="true">→</span>
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}