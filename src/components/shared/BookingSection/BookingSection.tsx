import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { site } from "@/data/site";

import styles from "./BookingSection.module.scss";

export function BookingSection() {
  const pendingContacts = [
    !site.max.href && "MAX",
    !site.email.href && "почты",
  ].filter(Boolean);

  return (
    <section className={styles.section} aria-labelledby="booking-title">
      <Container>
        <div className={styles.content}>
          <h2 id="booking-title" className={styles.title}>
            Можно начать с первого сообщения
          </h2>
          <p className={styles.description}>
            Напишите или позвоните, чтобы уточнить условия и узнать о записи
            на онлайн-консультацию или групповую встречу.
          </p>
          <div className={styles.actions}>
            <a href={site.telegram.href} className={styles.contactAction} target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram — откроется в новой вкладке">
              <Icon name="telegram" />
              <span>Написать в Telegram</span>
            </a>
            <a href={site.phone.href} className={styles.contactAction}>
              <Icon name="phone" />
              <span>Позвонить</span>
            </a>
            <a href={site.vk.href} className={styles.contactAction} target="_blank" rel="noopener noreferrer" aria-label="Открыть профиль ВКонтакте — откроется в новой вкладке">
              <Icon name="vk" />
              <span>ВКонтакте</span>
            </a>
            {site.max.href ? (
              <a href={site.max.href} className={styles.contactAction} target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX — откроется в новой вкладке">
                <span className={styles.maxIcon} aria-hidden="true" />
                <span>Написать в MAX</span>
              </a>
            ) : (
              <span className={`${styles.contactAction} ${styles.pending}`}>
                <span className={styles.maxIcon} aria-hidden="true" />
                <span>Написать в MAX</span>
              </span>
            )}
            {site.email.href ? (
              <a href={site.email.href} className={styles.contactAction}>
                <Icon name="email" />
                <span>Написать на почту</span>
              </a>
            ) : (
              <span className={`${styles.contactAction} ${styles.pending}`}>
                <Icon name="email" />
                <span>Написать на почту</span>
              </span>
            )}
          </div>
          {pendingContacts.length > 0 && (
            <p className={styles.pendingNote}>Контакты {pendingContacts.join(" и ")} уточняются.</p>
          )}
          <Link href="/contacts" className={styles.contactsLink}>Все контакты</Link>
        </div>
      </Container>
    </section>
  );
}
