import { ActionLink } from "@/components/ui/ActionLink/ActionLink";

import { Container } from "@/components/ui/Container/Container";

import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main id="main-content"
  className={styles.page}
  tabIndex={-1}>
      <Container>
        <div className={styles.content}>
          <p className={styles.code}>404</p>

          <h1 className={styles.title}>
            Страница не найдена
          </h1>

          <p className={styles.description}>
            Возможно, в адресе опечатка или страница была
            перемещена. Вы можете вернуться на главную
            или связаться со мной.
          </p>

          <div className={styles.actions}>
            <div className={styles.actions}>
              <ActionLink href="/">На главную</ActionLink>

              <ActionLink href="/contacts" variant="secondary">
                Контакты
              </ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}