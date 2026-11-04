import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./GroupIntro.module.scss";

export function GroupIntro() {
  return (
    <section
      className={styles.section}
      aria-labelledby="group-title"
    >
      <Container>
        <div className={styles.content}>
          <Link href="/services" className={styles.backLink}>
            <span aria-hidden="true">←</span>
            Все консультации
          </Link>

          <p className={styles.eyebrow}>
            {site.name} · {site.role}
          </p>

          <h1 id="group-title" className={styles.title}>
            {site.group.title}
          </h1>

          <p className={styles.description}>
            {site.group.description}
          </p>

          <a href="#group-booking" className={styles.link}>
            Узнать об участии
            <span aria-hidden="true"> ↓</span>
          </a>
        </div>
      </Container>
    </section>
  );
}