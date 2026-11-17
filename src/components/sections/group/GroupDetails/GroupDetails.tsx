import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";
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
            <p className={styles.eyebrow}>Очный формат</p>

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
            <Link href="/contacts" className={styles.telegramLink}>
              <ActionIcon name="calendar" />
              <span>Записаться</span>
            </Link>

            <p className={styles.hint}>
              Напишите, что вас интересует участие в очной групповой сессии.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
