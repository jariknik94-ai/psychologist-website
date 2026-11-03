import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./Biography.module.scss";

export function Biography() {
  return (
    <section
      className={styles.biography}
      aria-labelledby="biography-title"
    >
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Обо мне</p>

          <h1 id="biography-title" className={styles.title}>
            Давайте познакомимся
          </h1>
            <p className={styles.intro}>
              Меня зовут {site.name}. Я психолог.
            </p>

            <div className={styles.text}>
              <p>{site.approach}</p>
              <p>{site.requests}</p>
            </div>
          <Link href="/contacts" className={styles.contactLink}>
            Связаться со мной
            <span aria-hidden="true"> →</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}