import type { Service } from "@/types/service";

import { site } from "./site";

export const services: Service[] = [
  {
    id: "online",
    title: site.online.title,
    description: site.online.description,
    href: "/services#online",
  },
  {
    id: "group",
    title: site.group.title,
    description: site.group.description,
    href: "/services#group",
  },
];