import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";
import type { MenuItem as MenuItemType } from "../../../lib/menuItems";

interface MenuItemProps {
   item: MenuItemType;
   isActive: boolean;
   onClick: () => void;
   onHover: (name: string | null) => void;
}

export const MenuItem = ({
   item,
   isActive,
   onClick,
   onHover,
}: MenuItemProps) => {
   return (
      <motion.li
         initial={{ opacity: 0, x: -20 }}
         animate={{ opacity: 1, x: 0 }}
         className="group"
      >
         <button
            className={`w-full relative rounded-lg ${
               isActive ? "bg-gray-700/30" : "hover:bg-gray-700/20"
            } transition-all duration-200 ease-in-out`}
            onClick={onClick}
            onMouseEnter={() => onHover(item.name)}
            onMouseLeave={() => onHover(null)}
         >
            <div className="flex items-center justify-between p-3">
               <div className="flex items-center gap-3">
                  {isActive && (
                     <motion.div
                        layoutId="activeTab"
                        className="absolute left-0 top-0 h-full w-1 bg-secondary rounded-r"
                     />
                  )}
                  <span
                     className={`text-xl ${
                        isActive
                           ? "text-secondary"
                           : "text-accent group-hover:text-secondary"
                     } transition-colors duration-200`}
                  >
                     {item.icon()}
                  </span>
                  <span
                     className={`text-sm font-medium ${
                        isActive
                           ? "text-white"
                           : "text-accent group-hover:text-white"
                     } transition-colors duration-200`}
                  >
                     {item.name}
                  </span>
               </div>
               {item.childMenu && (
                  <motion.span
                     animate={{ rotate: isActive ? 180 : 0 }}
                     transition={{ duration: 0.2 }}
                     className="text-accent group-hover:text-white"
                  >
                     <FaChevronRight size={12} />
                  </motion.span>
               )}
            </div>
         </button>
      </motion.li>
   );
};
