import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/ui/Container/Container";
import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";
import { site } from "@/data/site";

import styles from "./Biography.module.scss";

export function Biography() {
  return (
    <section
      className={styles.biography}
      aria-labelledby="biography-title"
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Обо мне</p>

            <h1 id="biography-title" className={styles.title}>
              {site.name}
            </h1>

            <p className={styles.intro}>
              Психолог. Онлайн-консультации и очные групповые сессии.
            </p>

            <div className={styles.text}>
              <p>{site.biography}</p>
            </div>

            <Link href="/contacts" className={styles.contactLink}>
              <ActionIcon name="conversation" />
              <span>Связаться со мной</span>
            </Link>
          </div>
          <div className={styles.photoFrame}>
            <div className={styles.photo}>
              <Image
                src="/images/about-psychologist.webp"
                alt="Психолог Анастасия Никуличева"
                fill
                sizes="(max-width: 800px) 80vw, 420px"
                className={styles.image}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
