import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { services } from "@/data/services";
import { site } from "@/data/site";

import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <p className={styles.eyebrow}>{site.name} · психолог</p>
            <h1 id="hero-title" className={styles.title}>
              Пространство, где можно <em>быть собой</em>
            </h1>
            <p className={styles.description}>
              Поддерживающий разговор о важном — в вашем темпе и с
              уважением к вашим чувствам, опыту и границам.
            </p>
            <div className={styles.actions}>
              <Link href="/contacts" className={styles.primary}>
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 3v4M17 3v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span>Записаться</span>
              </Link>
            </div>
            <svg className={styles.line} viewBox="0 0 560 120" fill="none" aria-hidden="true" focusable="false">
              <path d="M1 112 C94 38 158 75 235 68 C283 64 312 51 337 77 C385 113 447 32 559 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M337 77 C324 66 312 47 314 33 C316 21 325 25 331 44 C338 29 349 20 352 29 C358 42 348 61 337 77" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className={styles.photoFrame}>
            <div className={styles.photo}>
              <Image src="/images/psychologist.jpg" alt="Психолог Анастасия Никуличева" fill sizes="(max-width: 800px) 90vw, (max-width: 1248px) 42vw, 500px" loading="eager" fetchPriority="high" className={styles.image} />
            </div>
          </div>
        </div>
        <nav className={styles.formats} aria-label="Форматы встреч">
          {services.slice(0, 2).map((service, index) => (
            <Link key={service.id} href={service.href} className={styles.format}>
              <span className={styles.formatIcon} aria-hidden="true">
                {index === 0 ? (
                  <svg viewBox="0 0 48 48" fill="none"><rect x="9" y="10" width="30" height="23" rx="2" /><path d="M5 37h38l-4-4H9z" /></svg>
                ) : (
                  <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="15" r="6" /><path d="M12 38v-3a12 12 0 0 1 24 0v3M10 20a5 5 0 0 0 0 10M38 20a5 5 0 0 1 0 10M4 38v-2a9 9 0 0 1 5-8M44 38v-2a9 9 0 0 0-5-8" /></svg>
                )}
              </span>
              <span className={styles.formatLabel}>{service.title}</span>
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
