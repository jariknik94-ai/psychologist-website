import Link from "next/link";

import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";
import { Container } from "@/components/ui/Container/Container";
import { services } from "@/data/services";

import styles from "./ServicesPreview.module.scss";

export function ServicesPreview() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-preview-title"
    >
      <Container>
        <div className={styles.heading}>
          <div>
            <h2
              id="services-preview-title"
              className={styles.title}
            >
              Консультации
            </h2>

            <p className={styles.description}>
              Можно начать со знакомства и обсуждения того,
              что сейчас для вас важно.
            </p>
          </div>

          <Link href="/services" className={styles.link}>
            Все консультации
            <span aria-hidden="true"> →</span>
          </Link>
        </div>

        <ul className={styles.grid}>
          {services.slice(0, 2).map((service) => (
            <li key={service.id} className={styles.item}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}