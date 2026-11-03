"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

import { navigation } from "@/data/navigation";

import styles from "./Navigation.module.scss";

export function Navigation() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isOpen = openPath === pathname;

  function closeMenu() {
    setOpenPath(null);
  }

  function handleEscape(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && isOpen) {
      closeMenu();
      buttonRef.current?.focus();
    }
  }

  return (
    <nav
      className={styles.navigation}
      aria-label="Основная навигация"
      onKeyDown={handleEscape}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="main-navigation-list"
        onClick={() => setOpenPath(isOpen ? null : pathname)}
      >
        {isOpen ? "Закрыть" : "Меню"}
      </button>

      <ul
        id="main-navigation-list"
        className={`${styles.list} ${isOpen ? styles.open : ""}`}
      >
        {navigation.map((item) => {
          const isCurrentPage = pathname === item.href;
          const isActive =
            isCurrentPage ||
            pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link} ${
                  isActive ? styles.active : ""
                }`}
                aria-current={isCurrentPage ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}