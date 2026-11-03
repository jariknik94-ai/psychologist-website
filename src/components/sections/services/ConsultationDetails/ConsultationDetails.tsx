import { ConsultationFormat } from "@/components/shared/ConsultationFormat/ConsultationFormat";
import { Container } from "@/components/ui/Container/Container";
import { site } from "@/data/site";

import styles from "./ConsultationDetails.module.scss";

export function ConsultationDetails() {
  return (
    <Container>
      <div className={styles.formats}>
        <ConsultationFormat
          id="online"
          title={site.online.title}
          description={site.online.description}
          details={[
            {
              label: "Продолжительность",
              value: site.online.duration,
            },
            {
              label: "Стоимость",
              value: site.online.price,
            },
            {
              label: "Платформа",
              value: site.online.platform,
            },
          ]}
        />

        <ConsultationFormat
          id="group"
          title={site.group.title}
          description={site.group.description}
          details={[
            {
              label: "Продолжительность",
              value: site.group.duration,
            },
            {
              label: "Стоимость участия",
              value: site.group.price,
            },
            {
              label: "Место проведения",
              value: site.group.location,
            },
            {
              label: "Расписание",
              value: site.group.schedule,
            },
            {
              label: "Количество участников",
              value: site.group.participants,
            },
          ]}
        />
      </div>
    </Container>
  );
}