import type { Metadata } from "next";

import { GroupDetails } from "@/components/sections/group/GroupDetails/GroupDetails";
import { GroupIntro } from "@/components/sections/group/GroupIntro/GroupIntro";
import { GroupProgram } from "@/components/sections/group/GroupProgram/GroupProgram";
import { site } from "@/data/site";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Очные групповые сессии",

  description:
    `Очные групповые сессии с психологом ${site.name}. Информация о формате и контакты для записи.`,

  alternates: {
    canonical: "/services/group",
  },

  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/services/group",
    siteName: `${site.name} | Психолог`,
    title: `Очные групповые сессии | ${site.name}`,
    description:
      "Информация о групповых встречах и контакты для записи.",
    images: [
      {
        url: "/images/social/group-rose.jpg",
        alt: `${site.name} — психолог`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Очные групповые сессии | ${site.name}`,
    description:
      "Информация о групповых встречах и контакты для записи.",
    images: ["/images/social/group-rose.jpg"],
  },
};

export default function GroupPage() {
  return (
    <main
      id="main-content"
      className={styles.page}
      tabIndex={-1}
    >
      <GroupIntro />
      <GroupDetails />
      <GroupProgram />
    </main>
  );
}
