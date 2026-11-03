import type { ReactNode } from "react";

import styles from "./Container.module.scss";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({
  children,
  className,
}: ContainerProps) {
  const containerClassName = [
    styles.container,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      {children}
    </div>
  );
}