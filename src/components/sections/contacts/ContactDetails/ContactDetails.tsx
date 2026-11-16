import { Container } from "@/components/ui/Container/Container";
import { ContactMethod } from "./ContactMethod/ContactMethod";
import { site } from "@/data/site";

import styles from "./ContactDetails.module.scss";

export function ContactDetails() {
  return (
    <section className={styles.contacts} aria-labelledby="contacts-title">
      <Container>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Контакты</p>
          <h1 id="contacts-title" className={styles.title}>
            Давайте начнём с разговора
          </h1>
          <p className={styles.description}>
            Чтобы записаться на онлайн-консультацию или узнать об очных
            групповых сессиях, выберите удобный способ связи.
          </p>
        </div>

        <div className={styles.layout}>
          <section className={styles.methods} aria-labelledby="methods-title">
            <h2 id="methods-title" className={styles.sectionTitle}>Связаться со мной</h2>
            <div className={styles.grid}>
              <ContactMethod name="phone" title="Телефон" value={site.phone.label} href={site.phone.href} hint="Позвонить" />
              <ContactMethod name="telegram" title="Telegram" value={site.telegram.label} href={site.telegram.href} hint="Написать" external />
              <ContactMethod name="vk" title="ВКонтакте" value={site.vk.label} href={site.vk.href} hint="Перейти в профиль" external />
              <ContactMethod name="max" title="MAX" value={site.max.label} href={site.max.href} hint="Написать" external />
              <ContactMethod name="email" title="Почта" value={site.email.label} href={site.email.href} hint="Написать" />
            </div>
          </section>

          <aside className={styles.info} aria-labelledby="formats-title">
            <p className={styles.eyebrow}>О встречах</p>
            <h2 id="formats-title" className={styles.infoTitle}>Форматы консультаций</h2>
            <dl className={styles.formats}>
              <div>
                <dt>Онлайн-консультации</dt>
                <dd>{site.online.price} {site.online.duration}</dd>
              </div>
              <div>
                <dt>Очные групповые сессии</dt>
                <dd>{site.group.price} {site.group.duration}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
