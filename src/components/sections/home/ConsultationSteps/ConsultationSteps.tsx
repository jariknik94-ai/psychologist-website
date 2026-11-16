import { Container } from "@/components/ui/Container/Container";
import { StepCard } from "./StepCard/StepCard";

import styles from "./ConsultationSteps.module.scss";

const steps = [
  {
    id: "contact",
    title: "Свяжитесь со мной",
    description: "Напишите в Telegram, ВКонтакте или позвоните и расскажите, какой формат встречи вас интересует.",
  },
  {
    id: "details",
    title: "Уточните условия",
    description: "Можно задать вопросы о формате, стоимости и продолжительности встречи.",
  },
  {
    id: "meeting",
    title: "Договоритесь о встрече",
    description: "Уточните возможность записи на онлайн-консультацию или участия в групповой сессии.",
  },
];

export function ConsultationSteps() {
  return (
    <section className={styles.section} aria-labelledby="consultation-steps-title">
      <Container>
        <div className={styles.heading}>
          <h2 id="consultation-steps-title" className={styles.title}>Как записаться на встречу</h2>
          <p className={styles.description}>Начать можно с сообщения или звонка — чтобы сначала уточнить всё важное.</p>
        </div>
        <ol className={styles.list}>
          {steps.map((step, index) => (
            <li key={step.id}>
              <StepCard number={index + 1} title={step.title} description={step.description} />
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
