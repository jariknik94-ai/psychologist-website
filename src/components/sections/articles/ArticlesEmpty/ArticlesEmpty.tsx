import Link from "next/link";

import styles from "./ArticlesEmpty.module.scss";

export function ArticlesEmpty() {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>
        Здесь скоро появятся первые материалы
      </h2>

      <p className={styles.description}>
        В этом разделе будут статьи о чувствах, отношениях
        и заботе о себе.
      </p>

      <Link href="/contacts" className={styles.link}>
        Задать вопрос
        <span aria-hidden="true"> →</span>
      </Link>
    </div>
  );
}