import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";
import { site } from "@/data/site";

import styles from "./AboutPreview.module.scss";

export function AboutPreview() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-preview-title"
    >
      <Container>
        <div className={styles.content}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>О психологе</p>

            <h2 id="about-preview-title" className={styles.title}>
              Давайте познакомимся
            </h2>
          </div>

          <div className={styles.details}>
            <p className={styles.intro}>
              Меня зовут {site.name}. Я психолог.
            </p>

            <p className={styles.description}>
              {site.approach}
            </p>
            <Link href="/about" className={styles.link}>
              <ActionIcon name="person" />
              <span>Подробнее обо мне</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
