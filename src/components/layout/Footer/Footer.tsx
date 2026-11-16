import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { FooterContact } from "./FooterContact/FooterContact";
import { Logo } from "@/components/ui/Logo/Logo";
import { site } from "@/data/site";

import styles from "./Footer.module.scss";

export function Footer() {
  const unavailableContacts = [
    !site.max.href && "MAX",
    !site.email.href && "почта",
  ].filter(Boolean);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.main}>
          <div className={styles.info}>
            <Logo />

            <p className={styles.description}>
              {site.format}.
            </p>
          </div>

          <nav aria-label="Навигация в подвале">
            <h2 className={styles.columnTitle}>Разделы</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/about" className={styles.link}>
                  Обо мне
                </Link>
              </li>

              <li>
                <Link href="/services" className={styles.link}>
                  Консультации
                </Link>
              </li>

              <li>
                <Link href="/articles" className={styles.link}>
                  Статьи
                </Link>
              </li>

              <li>
                <Link href="/contacts" className={styles.link}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.contacts}>
            <h2 className={styles.columnTitle}>Связаться со мной</h2>
            <div className={styles.contactList}>
              <FooterContact name="phone" title="Телефон" value={site.phone.label} href={site.phone.href} />
              <FooterContact name="telegram" title="Telegram" value={site.telegram.label} href={site.telegram.href} external />
              <FooterContact name="vk" title="ВКонтакте" value={site.vk.label} href={site.vk.href} external />
              <FooterContact name="max" title="MAX" value={site.max.label} href={site.max.href} external />
              <FooterContact name="email" title="Почта" value={site.email.label} href={site.email.href} />
            </div>
            {unavailableContacts.length > 0 && (
              <p className={styles.pendingNote}>
                {unavailableContacts.join(" и ")} — контакты уточняются
              </p>
            )}
            <Link href="/contacts" className={styles.allContacts}>
              Все контакты
            </Link>
          </div>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
