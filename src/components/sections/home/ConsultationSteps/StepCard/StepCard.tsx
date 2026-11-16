import styles from "./StepCard.module.scss";

type StepCardProps = {
  number: number;
  title: string;
  description: string;
};

export function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.number} aria-hidden="true">
        {String(number).padStart(2, "0")}
      </span>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>
    </div>
  );
}
