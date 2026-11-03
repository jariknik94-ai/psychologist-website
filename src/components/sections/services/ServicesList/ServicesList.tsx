import { ServiceCard } from "@/components/shared/ServiceCard/ServiceCard";
import { Container } from "@/components/ui/Container/Container";
import { services } from "@/data/services";

import styles from "./ServicesList.module.scss";

export function ServicesList() {
  return (
    <section
      className={styles.section}
      aria-labelledby="services-list-title"
    >
      <Container>
        <h2 id="services-list-title" className={styles.title}>
          Варианты встреч
        </h2>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.item}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}