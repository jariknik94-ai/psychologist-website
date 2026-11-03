import Link from "next/link";

import { Navigation } from "@/components/layout/Navigation/Navigation";
import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Link
          href="/"
          className={styles.logo}
          aria-label={`${site.name} — на главную`}
        >
          <span className={styles.name}>{site.name}</span>
          <span className={styles.caption}>{site.role}</span>
        </Link>
        <Navigation />
      </Container>
    </header>
  );
}