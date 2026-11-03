import Link from "next/link";

import type { Service } from "@/types/service";

import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{service.title}</h3>

      <p className={styles.description}>
        {service.description}
      </p>
        <Link
          href={service.href}
          className={styles.link}
          aria-label={`Подробнее: ${service.title}`}
        >
          Подробнее
          <span aria-hidden="true"> →</span>
        </Link>
    </article>
  );
}