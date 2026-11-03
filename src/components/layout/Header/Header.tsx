import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Container } from "@/components/ui/Container/Container";
import { Logo } from "@/components/ui/Logo/Logo";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
        </div>

        <Navigation />
      </Container>
    </header>
  );
}