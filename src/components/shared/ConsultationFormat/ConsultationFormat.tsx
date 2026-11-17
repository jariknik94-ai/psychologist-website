import Link from "next/link";

import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";

import styles from "./ConsultationFormat.module.scss";

type ConsultationFormatProps = {
  id: string;
  title: string;
  description: string;
  details: {
    label: string;
    value: string;
  }[];
};

export function ConsultationFormat({
  id,
  title,
  description,
  details,
}: ConsultationFormatProps) {
  return (
    <section
      id={id}
      className={styles.section}
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`} className={styles.title}>
        {title}
      </h2>

      <p className={styles.description}>{description}</p>

      <dl className={styles.list}>
        {details.map((detail) => (
          <div key={detail.label} className={styles.item}>
            <dt className={styles.label}>{detail.label}</dt>
            <dd className={styles.value}>{detail.value}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.action}>
        {id === "group" && (
          <Link href="/services/group" className={styles.telegramLink}>
            <ActionIcon name="group" />
            <span>Подробнее о групповых встречах</span>
          </Link>
        )}
        <Link href="/contacts" className={styles.telegramLink}>
          <ActionIcon name="calendar" />
          <span>Записаться</span>
        </Link>
      </div>
    </section>
  );
}
