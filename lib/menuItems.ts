import { LuLayoutPanelLeft } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";

import { IconType } from "react-icons";

export interface MenuItem {
   name: string;
   icon: IconType;
   href: string;
   childMenu?: {
      name: string;
   }[];
}

export const menuItems: MenuItem[] = [
   {
      name: "Overview",
      icon: LuLayoutPanelLeft,
      href: "/home/overview",
   },
   {
      name: "Transactions",
      icon: VscGraph,
      href: "/home/transactions",
   },
   {
      name: "Customers",
      icon: IoMdContacts,
      href: "/home/customers",
   },
   {
      name: "Statements",
      icon: BiSolidReport,
      href: "/home/statements",
      childMenu: [
         {
            name: "P&L Statement",
         },
         {
            name: "Balance Sheet",
         },
         {
            name: "Cash Flow Statement",
         },
      ],
   },
];
