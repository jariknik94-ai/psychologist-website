import Link from "next/link";

import { Container } from "@/components/ui/Container/Container";
import { ActionIcon } from "@/components/ui/ActionIcon/ActionIcon";
import { site } from "@/data/site";

import styles from "./MeetingFormats.module.scss";

const formats = [
  {
    id: "online",
    title: site.online.title,
    description: "Индивидуальная встреча с психологом в онлайн-формате.",
    href: "/services#online",
  },
  {
    id: "group",
    title: site.group.title,
    description: "Очные встречи в групповом формате. Условия участия можно уточнить при записи.",
    href: "/services/group",
  },
];

export function MeetingFormats() {
  return (
    <section className={styles.section} aria-labelledby="meeting-formats-title">
      <Container>
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Выберите подходящий формат</p>
          <h2 id="meeting-formats-title" className={styles.title}>Как мы можем встретиться</h2>
          <p className={styles.description}>Если вы пока не знаете, какой формат выбрать, можно уточнить условия перед записью.</p>
        </div>
        <div className={styles.grid}>
          {formats.map((format) => (
            <article key={format.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{format.title}</h3>
              <p className={styles.cardDescription}>{format.description}</p>
              <Link href={format.href} className={styles.link}>
                <ActionIcon name="person" />
                <span>Подробнее о формате</span>
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
