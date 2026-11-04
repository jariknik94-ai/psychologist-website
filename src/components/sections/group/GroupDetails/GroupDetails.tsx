import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { site } from "@/data/site";

import styles from "./GroupDetails.module.scss";

export function GroupDetails() {
  const details = [
    { label: "Тема", value: site.group.topic },
    { label: "Дата", value: site.group.date },
    { label: "Город", value: site.group.city },
    { label: "Место", value: site.group.location },
    { label: "Продолжительность", value: site.group.duration },
    { label: "Стоимость участия", value: site.group.price },
    { label: "Количество участников", value: site.group.participants },
  ];

  return (
    <section
      id="group-booking"
      className={styles.section}
      aria-labelledby="group-details-title"
    >
      <Container>
        <div className={styles.panel}>
          <div>
            <p className={styles.eyebrow}>Ближайшая встреча</p>

            <h2 id="group-details-title" className={styles.title}>
              Условия участия
            </h2>
          </div>

          <dl className={styles.list}>
            {details.map((detail) => (
              <div key={detail.label} className={styles.item}>
                <dt className={styles.label}>{detail.label}</dt>
                <dd className={styles.value}>{detail.value}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.action}>
            <a
              href={site.telegram.href}
              className={styles.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="telegram" />
              <span>Узнать о групповых встречах</span>
            </a>

            <p className={styles.hint}>
              Напишите, что вас интересует участие в очной групповой сессии.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}