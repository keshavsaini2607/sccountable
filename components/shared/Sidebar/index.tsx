"use client";
import React, { useEffect, useState } from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import axios from "axios";
import { motion } from "framer-motion";
import { menuItems } from "@/lib/menuItems";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";
import { SubMenu } from "./SubMenu";
import { Button } from "@/components/ui/button";

const Sidebar: React.FC = () => {
   const session = useSession();
   const { homeActiveTab, setHomeActiveTab, setUser, user } =
      useGeneralContext();
   const router = useRouter();
   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

   const handleMenuClick = (item: (typeof menuItems)[0]) => {
      setHomeActiveTab(item.name);
      router.push(item.href);
   };

   const loadUserData = async (userId: string) => {
      const response: any = await axios.get(
         `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user/profile/${userId}`
      );
      if (response) {
         return response.data;
      }
      return null;
   };

   useEffect(() => {
      (async () => {
         if (session && session.data?.user?.id && !user) {
            const userData = await loadUserData(session.data?.user?.id);
            if (userData) {
               setUser(userData.data);
            }
         }
      })();
   }, [session]);

   return (
      <aside className="bg-primary text-white h-full relative w-64 transition-all duration-300 ease-in-out">
         <Logo />

         <div className="px-4">
            <span className="text-accent text-xs uppercase font-medium ml-2 tracking-wider">
               Menu
            </span>
            <nav className="mt-4 relative">
               <ul className="space-y-2">
                  {menuItems.map((item, idx) => (
                     <React.Fragment key={idx}>
                        <MenuItem
                           item={item}
                           isActive={homeActiveTab === item.name}
                           onClick={() => handleMenuClick(item)}
                           onHover={setHoveredItem}
                        />
                        <SubMenu
                           item={item}
                           isActive={homeActiveTab === item.name}
                        />
                     </React.Fragment>
                  ))}
               </ul>
            </nav>
         </div>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-0 w-full border-t border-gray-700/50"
         >
            {/* <UserProfileButton /> */}
            <Button onClick={() => signOut()}>Logout</Button>
         </motion.div>
      </aside>
   );
};

export default Sidebar;
