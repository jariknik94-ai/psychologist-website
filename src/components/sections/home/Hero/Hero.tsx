import Image from "next/image";

import { ActionLink } from "@/components/ui/ActionLink/ActionLink";
import { Container } from "@/components/ui/Container/Container";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              Индивидуальные консультации психолога
            </p>

            <h1 id="hero-title" className={styles.title}>
              Пространство, где можно быть собой
            </h1>

            <p className={styles.description}>
              Иногда бывает непросто разобраться в своих чувствах
              и найти опору. На консультациях мы сможем уделить
              внимание тому, что важно для вас.
            </p>

            <div className={styles.actions}>
              <ActionLink href="/contacts">
                Записаться на консультацию
              </ActionLink>

              <ActionLink href="/about" variant="secondary">
                Познакомиться со мной
              </ActionLink>
            </div>
          </div>

          <div className={styles.photo}>
            <Image
              src="/images/psychologist.jpg"
              alt="Психолог Анастасия Никуличева"
              fill
              sizes="(max-width: 800px) 100vw, 45vw"
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}