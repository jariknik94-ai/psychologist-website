import Link from "next/link";
import type { ReactNode } from "react";

import styles from "./ActionLink.module.scss";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ActionLink({
  href,
  children,
  variant = "primary",
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}