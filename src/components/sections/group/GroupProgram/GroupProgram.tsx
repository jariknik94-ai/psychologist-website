import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./GroupProgram.module.scss";

export function GroupProgram() {
  const sections = [
    {
      id: "audience",
      title: "Для кого эти встречи",
      text: site.group.audience,
    },
    {
      id: "program",
      title: "Как проходит сессия",
      text: site.group.program,
    },
    {
      id: "preparation",
      title: "Как подготовиться",
      text: site.group.preparation,
    },
  ];

  return (
    <section
      className={styles.section}
      aria-labelledby="group-program-title"
    >
      <Container>
        <h2 id="group-program-title" className={styles.title}>
          О формате
        </h2>

        <div className={styles.grid}>
          {sections.map((section) => (
            <div key={section.id} className={styles.card}>
              <h3 className={styles.cardTitle}>
                {section.title}
              </h3>

              <p className={styles.description}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}