import { motion, AnimatePresence } from "framer-motion";
import type { MenuItem } from "../../../lib/menuItems";

interface SubMenuProps {
   item: MenuItem;
   isActive: boolean;
}

export const SubMenu = ({ item, isActive }: SubMenuProps) => {
   if (!item.childMenu) return null;

   return (
      <AnimatePresence>
         {isActive && (
            <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               transition={{ duration: 0.2 }}
               className="overflow-hidden"
            >
               <ul className="ml-12 mt-2 space-y-2">
                  {item.childMenu.map((child, idx) => (
                     <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative group"
                     >
                        <span className="text-accent text-sm group-hover:text-white transition-colors duration-200 cursor-not-allowed">
                           {child.name}
                           <span className="absolute -top-3 left-full ml-2 px-2 py-0.5 bg-secondary/20 text-secondary text-[0.6rem] rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              Coming Soon
                           </span>
                        </span>
                     </motion.li>
                  ))}
               </ul>
            </motion.div>
         )}
      </AnimatePresence>
   );
};
