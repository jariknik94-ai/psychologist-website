import { Icon } from "@/components/ui/Icon/Icon";

import styles from "./ContactMethod.module.scss";

type ContactMethodProps = {
  name: "phone" | "telegram" | "max" | "email" | "vk";
  title: string;
  value: string;
  href: string;
  hint: string;
  external?: boolean;
};

export function ContactMethod({ name, title, value, href, hint, external = false }: ContactMethodProps) {
  const icon = name === "max" ? <span className={styles.maxIcon} aria-hidden="true" /> : <Icon name={name} />;

  return (
    <div className={styles.card}>
      <span className={`${styles.icon}${href ? "" : ` ${styles.pending}`}`} aria-hidden="true">{icon}</span>
      <span className={styles.text}>
        <span className={styles.name}>{title}</span>
        {href ? (
        <a
          className={styles.valueLink}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={`${hint}: ${title}${value ? ` — ${value}` : ""}${external ? " (откроется в новой вкладке)" : ""}`}
          title={`${hint}: ${title}`}
        >
          {value || hint}
        </a>
        ) : (
          <span className={styles.value}>Контакт уточняется</span>
        )}
      </span>
    </div>
  );
}
