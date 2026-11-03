import Link from "next/link";

import { site } from "@/data/site";

import styles from "./Logo.module.scss";

export function Logo() {
  return (
    <Link
      href="/"
      className={styles.logo}
      aria-label={`${site.name} — на главную`}
    >
      <svg
        className={styles.mark}
        width="64"
        height="56"
        viewBox="0 0 80 68"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M48 34
               C51 31 53 27 53 22
               C53 11 43 4 29 4
               C15 4 5 12 5 23
               C5 29 8 34 13 38
               L9 49
               L23 43
               C25 44 28 44 31 44"
          />

          <path
            d="M75 42
               C75 30 64 22 50 22
               C36 22 25 30 25 42
               C25 54 36 62 50 62
               C53 62 56 62 59 61
               L73 66
               L69 55
               C73 52 75 47 75 42Z"
          />
        </g>
      </svg>

      <span className={styles.text}>
        <span className={styles.name}>{site.name}</span>
        <span className={styles.caption}>{site.role}</span>
      </span>
    </Link>
  );
}