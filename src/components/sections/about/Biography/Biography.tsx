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
            {site.name}
          </h1>

          <p className={styles.intro}>
            Психолог. Онлайн-консультации и очные групповые
            сессии.
          </p>

          <div className={styles.text}>
            <p>{site.biography}</p>
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