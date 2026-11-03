import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { Icon } from "@/components/ui/Icon/Icon";
import { Logo } from "@/components/ui/Logo/Logo";
import { site } from "@/data/site";

import styles from "./Footer.module.scss";

export function Footer() {
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
            <h2 className={styles.contactsTitle}>
              Связаться со мной
            </h2>

            <a
              href={site.phone.href}
              className={`${styles.link} ${styles.contactLink}`}
            >
              <span className={styles.iconBadge}>
                <Icon name="phone" />
              </span>

              <span>{site.phone.label}</span>
            </a>

            <a
              href={site.telegram.href}
              className={`${styles.link} ${styles.contactLink}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram Анастасии — откроется в новой вкладке"
            >
              <span className={styles.iconBadge}>
                <Icon name="telegram" />
              </span>

              <span>{site.telegram.label}</span>
            </a>
          </div>
        </div>

        <p className={styles.copyright}>
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}