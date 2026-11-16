import { Icon } from "@/components/ui/Icon/Icon";

import styles from "./FooterContact.module.scss";

type FooterContactProps = {
  name: "phone" | "telegram" | "max" | "email" | "vk";
  title: string;
  value: string;
  href: string;
  external?: boolean;
};

export function FooterContact({ name, title, value, href, external = false }: FooterContactProps) {
  const icon = name === "max"
    ? <span className={styles.maxIcon} aria-hidden="true" />
    : <Icon name={name} />;

  if (!href) {
    return (
      <span className={`${styles.item} ${styles.pending}`} role="img" aria-label={`${title}: контакт пока уточняется`} title={`${title}: контакт уточняется`}>
        {icon}
      </span>
    );
  }

  return (
    <a
      className={styles.item}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${title}${value ? `: ${value}` : ""}${external ? " (откроется в новой вкладке)" : ""}`}
      title={title}
    >
      {icon}
    </a>
  );
}
