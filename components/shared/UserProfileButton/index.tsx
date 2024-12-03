"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useContext } from "react";
import { signOut } from "next-auth/react";
import { GeneralContext } from "@/app/context/GeneralContext";

const UserProfileButton: React.FC = () => {
   const { user } = useContext(GeneralContext);
   return (
      <DropdownMenu>
         <DropdownMenuTrigger>
            <div className="w-full">
               <div className="px-6 pb-6 flex items-center gap-4 relative">
                  <Avatar>
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>KS</AvatarFallback>
                  </Avatar>
                  <span>{user?.firstName + " " + user?.lastName}</span>
               </div>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent>
            <DropdownMenuLabel>
               Hi, {`${user?.firstName} ${user?.lastName}`}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>
               <span
                  className="text-red-600 font-medium"
                  onClick={() => signOut()}
               >
                  Logout
               </span>
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};

export default UserProfileButton;
