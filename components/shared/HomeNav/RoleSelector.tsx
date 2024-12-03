import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RoleSelectorProps {
   selectedRole: string;
   onRoleChange: (role: string) => void;
   roles: { name: string }[];
}

export const RoleSelector = ({
   selectedRole,
   onRoleChange,
   roles,
}: RoleSelectorProps) => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger className="focus:outline-none">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
               <span className="flex items-center gap-3 font-semibold text-gray-700">
                  {selectedRole}
                  <FaAngleDown className="text-gray-400" />
               </span>
            </div>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="text-gray-500">
               Switch Role
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {roles.map((role, idx) => (
               <DropdownMenuItem
                  key={idx}
                  onClick={() => onRoleChange(role.name)}
                  className="cursor-pointer"
               >
                  <span className="flex items-center gap-2">
                     {role.name}
                     {selectedRole === role.name && (
                        <span className="ml-auto text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                           Active
                        </span>
                     )}
                  </span>
               </DropdownMenuItem>
            ))}
         </DropdownMenuContent>
      </DropdownMenu>
   );
};
