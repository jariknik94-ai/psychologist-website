import styles from "./Icon.module.scss";

type IconProps = {
  name: "phone" | "telegram";
};

export function Icon({ name }: IconProps) {
  return (
    <svg
      className={styles.icon}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {name === "phone" && (
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2
             19.79 19.79 0 0 1-8.63-3.07
             19.5 19.5 0 0 1-6-6
             19.79 19.79 0 0 1-3.07-8.67
             A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
             c.13.96.36 1.9.69 2.79
             a2 2 0 0 1-.45 2.11L8.08 9.89
             a16 16 0 0 0 6 6l1.27-1.27
             a2 2 0 0 1 2.11-.45
             c.89.33 1.83.56 2.79.69
             A2 2 0 0 1 22 16.92Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}

      {name === "telegram" && (
        <>
          <path
            d="m21 3-7 18-4-7-7-4L21 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m10 14 6-6"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}