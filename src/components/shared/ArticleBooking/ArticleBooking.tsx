import Link from "next/link";

import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";
import styles from "./ArticleBooking.module.scss";

export function ArticleBooking() {
  return (
    <aside className={styles.panel} aria-labelledby="article-booking-title">
      <h2 id="article-booking-title" className={styles.title}>Можно обсудить важное</h2>
      <p className={styles.description}>
        Если вы хотите задать вопрос или узнать об условиях встречи,
        свяжитесь с Анастасией удобным способом.
      </p>
      <Link href="/contacts" className={styles.link}>
        <ActionIcon name="calendar" />
        <span>Записаться</span>
      </Link>
    </aside>
  );
}
