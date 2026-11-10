import { Icon } from "@/components/ui/Icon/Icon";
import { site } from "@/data/site";

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
        <a
          href={site.telegram.href}
          className={styles.telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Написать в Telegram: ${title}. Откроется в новой вкладке`}
        >
          <Icon name="telegram" />
          <span>Написать в Telegram</span>
        </a>

        {/* <p className={styles.hint}>
          Откроется Telegram в новой вкладке. Укажите, какой
          формат встречи вас интересует.
        </p> */}
      </div>
    </section>
  );
}