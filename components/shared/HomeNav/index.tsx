"use client";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { SiCashapp } from "react-icons/si";
import { MdOutlineWidgets } from "react-icons/md";
import { useAuth } from "@/app/context/AuthContext";

const businessRoles = [
   {
      name: "Proprietor",
   },
   {
      name: "Accounts",
   },
   {
      name: "Other",
   },
];

const HomeNav = () => {
   const { isAuthenticated } = useAuth();
   const [selectedRole, setSelectedRole] = useState("Proprietor");

   return (
      <nav className="p-4 border-b-2 w-full flex items-center justify-between">
         {isAuthenticated ? (
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <span className="flex items-center gap-3 font-semibold">
                     {selectedRole}
                     <FaAngleDown />
                  </span>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>I Am</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {businessRoles.map((role, idx) => (
                     <DropdownMenuItem
                        key={idx}
                        onClick={() => setSelectedRole(role.name)}
                     >
                        {role.name}
                     </DropdownMenuItem>
                  ))}
               </DropdownMenuContent>
            </DropdownMenu>
         ) : null}
         <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
               <SiCashapp className="text-primary" />
               <span className="text-sm">Upgrade Plan</span>
            </span>
            <span className="flex items-center gap-2 cursor-pointer hover:bg-gray-200 p-2 rounded">
               <MdOutlineWidgets className="text-primary" />
               <span className="text-sm">Add New Widget</span>
            </span>
         </div>
         <div>
            <IoIosNotifications
               size={30}
               className="border border-accent rounded-full p-1 cursor-pointer"
            />
         </div>
      </nav>
   );
};

export default HomeNav;
