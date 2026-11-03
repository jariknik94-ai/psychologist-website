import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { site } from "@/data/site";

import styles from "./ContactDetails.module.scss";

export function ContactDetails() {
  return (
    <section
      className={styles.contacts}
      aria-labelledby="contacts-title"
    >
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Контакты</p>

          <h1 id="contacts-title" className={styles.title}>
            Давайте начнём с разговора
          </h1>

          <p className={styles.description}>
            Чтобы записаться на онлайн-консультацию или узнать
            об очных групповых сессиях, позвоните мне или
            напишите в Telegram.
          </p>

          <dl className={styles.list}>
            <div className={styles.item}>
              <dt className={styles.label}>Телефон</dt>

              <dd className={styles.value}>
                <a
                  href={site.phone.href}
                  className={styles.contactLink}
                >
                  <span className={styles.iconBadge}>
                    <Icon name="phone" />
                  </span>

                  <span>{site.phone.label}</span>
                </a>
              </dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.label}>Telegram</dt>

              <dd className={styles.value}>
                <a
                  href={site.telegram.href}
                  className={styles.contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram Анастасии — откроется в новой вкладке"
                >
                  <span className={styles.iconBadge}>
                    <Icon name="telegram" />
                  </span>

                  <span>Nastya_Niku</span>
                </a>
              </dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.label}>
                Формат консультаций
              </dt>

              <dd className={styles.value}>{site.format}</dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.label}>
                Онлайн-консультации
              </dt>

              <dd className={styles.value}>
                {site.online.price} {site.online.duration}
              </dd>
            </div>

            <div className={styles.item}>
              <dt className={styles.label}>
                Очные групповые сессии
              </dt>

              <dd className={styles.value}>
                {site.group.price} {site.group.duration}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}