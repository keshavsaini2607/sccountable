"use client";

import React from "react";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { IoMdContacts } from "react-icons/io";
import { BiSolidReport } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaChevronRight, FaAngleDown } from "react-icons/fa6";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItem {
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

const Sidebar: React.FC = () => {
   const { homeActiveTab, setHomeActiveTab } = useGeneralContext();
   const router = useRouter();
   const handleMenuClick = (item: MenuItem) => {
      setHomeActiveTab(item.name);
      router.push(item.href);
   };

   return (
      <aside className="bg-primary text-white h-full relative">
         <div className="p-6 flex items-center gap-2 mb-4">
            <TfiDashboard size={30} className="text-secondary" />
            <h1 className="font-semibold text-xl text-white">
               accoun<span className="text-secondary">table</span>
            </h1>
         </div>
         <div>
            <span className="text-accent text-sm uppercase ml-6">Menu</span>
            <ul className="flex flex-col gap-6 mt-4 relative">
               {menuItems.map((item, idx: number) => (
                  <React.Fragment key={idx}>
                     <li
                        className="flex items-center justify-between pr-3 cursor-pointer"
                        onClick={() => handleMenuClick(item)}
                     >
                        <div className="flex gap-3 items-center h-[2rem] px-6 relative">
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
                              {item.icon()}
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
                        {item.childMenu ? (
                           homeActiveTab === item.name ? (
                              <FaAngleDown className="text-accent" />
                           ) : (
                              <FaChevronRight className="text-accent" />
                           )
                        ) : null}
                     </li>
                     {item.childMenu && homeActiveTab === item.name && (
                        <ol className="ml-6 flex flex-col gap-2">
                           {item.childMenu.map((child, childIdx) => (
                              <li
                                 key={childIdx}
                                 className="flex items-center h-[2rem] px-6"
                              >
                                 <span
                                    className={`text-accent text-sm relative`}
                                 >
                                    {child.name}
                                    <span className="bg-secondary text-white -top-3 px-2 text-[0.5rem] rounded-xl absolute w-max">
                                       Coming Soon
                                    </span>
                                 </span>
                              </li>
                           ))}
                        </ol>
                     )}
                  </React.Fragment>
               ))}
            </ul>
         </div>
         <div className="absolute bottom-0 w-full">
            <div className="divider"></div>
            <div className="p-6 flex items-center gap-4">
               <Avatar>
                  <AvatarImage src="https://github.com/shad.png" />
                  <AvatarFallback>KS</AvatarFallback>
               </Avatar>
               <span>Keshav Saini</span>
            </div>
         </div>
      </aside>
   );
};

export default Sidebar;
