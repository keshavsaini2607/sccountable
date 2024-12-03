"use client";

import React, { useEffect, useMemo, useState } from "react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { FaChevronRight, FaAngleDown } from "react-icons/fa6";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import {
   Sidebar,
   SidebarContent,
   SidebarMenu,
   SidebarMenuItem,
} from "@/components/ui/sidebar";
import { IconType } from "react-icons";

interface ChildMenu {
   name: string;
}

interface MenuItem {
   name: string;
   icon: IconType;
   href: string;
   childMenu?: ChildMenu[];
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
         { name: "P&L Statement" },
         { name: "Balance Sheet" },
         { name: "Cash Flow Statement" },
      ],
   },
];

export function AppSidebar() {
   const session = useSession();
   const { homeActiveTab, setHomeActiveTab, setUser, user } =
      useGeneralContext();
   const router = useRouter();

   const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

   const handleMenuClick = (item: MenuItem) => {
      setHomeActiveTab(item.name);
      router.push(item.href);
   };

   const handleChildMenuToggle = (menuName: string) => {
      setExpandedMenu((prev) => (prev === menuName ? null : menuName));
   };

   const loadUserData = async (userId: string) => {
      try {
         const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/profile/${userId}`
         );
         return response.data;
      } catch (error) {
         console.error("Failed to load user data:", error);
         return null;
      }
   };

   useEffect(() => {
      if (session?.data?.user?.id && !user) {
         loadUserData(session.data.user.id).then((userData) => {
            if (userData) {
               setUser(userData.data);
            }
         });
      }
   }, [session, user, setUser]);

   const renderedMenuItems = useMemo(
      () =>
         menuItems.map((item) => (
            <SidebarMenuItem key={item.name}>
               <li
                  className="flex flex-col gap-2"
                  onClick={() => handleMenuClick(item)}
               >
                  <div className="flex items-center justify-between pr-3 cursor-pointer">
                     <div className="flex items-center gap-3 h-[2rem] px-6 relative">
                        {homeActiveTab === item.name && (
                           <div className="absolute left-0 top-0 h-full w-[4px] bg-secondary rounded-tr-lg rounded-br-lg"></div>
                        )}
                        <span
                           className={`text-2xl ${
                              homeActiveTab === item.name
                                 ? "text-secondary"
                                 : "text-accent"
                           }`}
                        >
                           <item.icon />
                        </span>
                        <span
                           className={`${
                              homeActiveTab === item.name
                                 ? "text-white"
                                 : "text-accent"
                           } text-sm`}
                        >
                           {item.name}
                        </span>
                     </div>
                     {item.childMenu && (
                        <button
                           onClick={() => handleChildMenuToggle(item.name)}
                           aria-expanded={expandedMenu === item.name}
                           className="flex items-center"
                        >
                           {expandedMenu === item.name ? (
                              <FaAngleDown className="text-accent" />
                           ) : (
                              <FaChevronRight className="text-accent" />
                           )}
                        </button>
                     )}
                  </div>
                  {item.childMenu && expandedMenu === item.name && (
                     <ul className="ml-10 mt-2 flex flex-col gap-2">
                        {item.childMenu.map((child) => (
                           <li
                              key={child.name}
                              className="cursor-pointer text-accent hover:text-white"
                              onClick={() => handleMenuClick(item)}
                           >
                              {child.name}
                           </li>
                        ))}
                     </ul>
                  )}
               </li>
            </SidebarMenuItem>
         )),
      [homeActiveTab, expandedMenu]
   );

   return (
      <Sidebar className="bg-primary" variant="sidebar" collapsible="icon">
         <SidebarContent className="bg-primary h-screen">
            <SidebarMenu>
               <ul className="flex flex-col gap-6 mt-4">{renderedMenuItems}</ul>
            </SidebarMenu>
         </SidebarContent>
      </Sidebar>
   );
}
