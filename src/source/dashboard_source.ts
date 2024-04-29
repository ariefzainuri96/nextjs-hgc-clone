import { IcMasterData } from "@/components/Icons";

export interface MenuItem {
  content: string;
  key?: string;
  href?: string;
  image?: "master-data" | "tournament" | "blogging";
  menus?: MenuItem[];
}

export const menus: MenuItem[] = [
  {
    content: "Master Data",
    key: "master-data",
    image: "master-data",
    menus: [
      {
        content: "User Management",
        href: "/dashboard/user-management",
      },
      {
        content: "Venue",
        href: "/dashboard/venue",
      },
    ],
  },
  {
    content: "Tournament",
    key: "tournament",
    image: "tournament",
    menus: [
      {
        content: "List Tournament",
        href: "/dashboard/list-tournament",
      },
      {
        content: "Player Standing",
        href: "/dashboard/player-standing",
      },
    ],
  },
  {
    content: "Blogging",
    key: "blogging",
    image: "blogging",
    menus: [
      {
        content: "Blogging",
        href: "/dashboard/blogging",
      },
    ],
  },
];
