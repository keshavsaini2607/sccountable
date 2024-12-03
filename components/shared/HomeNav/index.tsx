"use client";
import React, { useState } from "react";
import { SiCashapp } from "react-icons/si";
import { MdOutlineWidgets } from "react-icons/md";
import { RoleSelector } from "./RoleSelector";
import { ActionButton } from "./ActionButton";
import { NotificationBell } from "./NotificationBell";
import { motion } from "framer-motion";

const businessRoles = [
   { name: "Proprietor" },
   { name: "Accounts" },
   { name: "Other" },
];

const HomeNav = () => {
   const [selectedRole, setSelectedRole] = useState("Proprietor");
   const [notificationCount] = useState(3); // Example notification count

   const handleUpgrade = () => {
      // Handle upgrade action
      console.log("Upgrade clicked");
   };

   const handleAddWidget = () => {
      // Handle add widget action
      console.log("Add widget clicked");
   };

   const handleNotifications = () => {
      // Handle notifications action
      console.log("Notifications clicked");
   };

   return (
      <motion.nav
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="px-6 py-4 border-b border-gray-200 bg-white shadow-sm"
      >
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <RoleSelector
               selectedRole={selectedRole}
               onRoleChange={setSelectedRole}
               roles={businessRoles}
            />

            <div className="flex items-center gap-2">
               <div className="flex items-center gap-1">
                  <ActionButton
                     icon={SiCashapp}
                     label="Upgrade Plan"
                     onClick={handleUpgrade}
                  />
                  <ActionButton
                     icon={MdOutlineWidgets}
                     label="Add Widget"
                     onClick={handleAddWidget}
                  />
               </div>

               <div className="h-6 w-px bg-gray-200 mx-2" />

               <NotificationBell
                  count={notificationCount}
                  onClick={handleNotifications}
               />
            </div>
         </div>
      </motion.nav>
   );
};

export default HomeNav;
