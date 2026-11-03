import { Container } from "@/components/ui/Container/Container";

import { StepCard } from "./StepCard/StepCard";

import styles from "./ConsultationSteps.module.scss";

const formats = [
  {
    id: "online",
    title: "Онлайн-консультации",
    steps: [
      {
        id: "contact",
        title: "Запись",
        description:
          "Напишите в Telegram или позвоните, чтобы уточнить условия онлайн-консультации.",
      },
      {
        id: "preparation",
        title: "Подготовка к встрече",
        description:
          "Информация о согласовании времени, платформе и подготовке будет добавлена позже.",
      },
      {
        id: "meeting",
        title: "Консультация",
        description:
          "Описание порядка проведения онлайн-встречи будет добавлено позже.",
      },
    ],
  },
  {
    id: "group",
    title: "Очные групповые сессии",
    steps: [
      {
        id: "request",
        title: "Заявка на участие",
        description:
          "Свяжитесь со мной, чтобы узнать о ближайших групповых сессиях.",
      },
      {
        id: "details",
        title: "Условия участия",
        description:
          "Информация о составе группы, месте проведения и подготовке будет добавлена позже.",
      },
      {
        id: "session",
        title: "Групповая сессия",
        description:
          "Описание порядка проведения групповой сессии будет добавлено позже.",
      },
    ],
  },
];

export function ConsultationSteps() {
  return (
    <section
      className={styles.section}
      aria-labelledby="consultation-steps-title"
    >
      <Container>
        <div className={styles.heading}>
          <h2
            id="consultation-steps-title"
            className={styles.title}
          >
            Как проходят встречи
          </h2>

          <p className={styles.description}>
            Порядок записи и проведения зависит от выбранного
            формата.
          </p>
        </div>

        <div className={styles.formats}>
          {formats.map((format) => (
            <section
              key={format.id}
              aria-labelledby={`steps-${format.id}-title`}
            >
              <h3
                id={`steps-${format.id}-title`}
                className={styles.formatTitle}
              >
                {format.title}
              </h3>

              <ol className={styles.list}>
                {format.steps.map((step, index) => (
                  <li key={step.id}>
                    <StepCard
                      number={index + 1}
                      title={step.title}
                      description={step.description}
                    />
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
}