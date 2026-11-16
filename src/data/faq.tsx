import type { ReactNode } from "react";

import { site } from "@/data/site";

export type FAQEntry = {
  id: string;
  question: string;
  answer: ReactNode;
};

export const faq: FAQEntry[] = [
  {
    id: "formats",
    question: "В каком формате проходят встречи?",
    answer:
      "Доступны онлайн-консультации и очные групповые сессии. Условия каждого формата можно посмотреть в разделе «Консультации».",
  },
  {
    id: "booking",
    question: "Как записаться?",
    answer: (
      <>
        Свяжитесь с Анастасией:{" "}
        <a
          href={site.telegram.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram Анастасии — откроется в новой вкладке"
        >
          Telegram
        </a>,{" "}
        <a href={site.phone.href}>{site.phone.label}</a>,{" "}
        <a href={site.vk.href} target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте — откроется в новой вкладке">ВКонтакте</a>,{" "}
        {site.max.href ? (
          <a href={site.max.href} target="_blank" rel="noopener noreferrer" aria-label="MAX — откроется в новой вкладке">MAX</a>
        ) : (
          <>MAX (контакт уточняется)</>
        )}
        {" "}или{" "}
        {site.email.href ? (
          <a href={site.email.href}>почта</a>
        ) : (
          <>почта (контакт уточняется)</>
        )}
        . Укажите, какой формат встречи вас интересует.
      </>
    ),
  },
  {
    id: "online-platform",
    question: "Где проходит онлайн-консультация?",
    answer:
      "Платформу и порядок подключения можно уточнить при записи.",
  },
  {
    id: "group-location",
    question: "Где и когда проходят групповые сессии?",
    answer:
      "Уточнить место проведения, расписание и информацию о ближайших встречах можно у Анастасии.",
  },
  {
    id: "price-duration",
    question: "Сколько стоит встреча и как долго она длится?",
    answer:
      "Стоимость и продолжительность онлайн-консультации или групповой сессии можно уточнить перед записью.",
  },
  {
    id: "preparation",
    question: "Как подготовиться к встрече?",
    answer:
      "Если у вас есть вопросы о подготовке, задайте их при записи на встречу.",
  },
];
