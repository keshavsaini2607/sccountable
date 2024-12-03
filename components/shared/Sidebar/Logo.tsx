import { TfiDashboard } from "react-icons/tfi";
import { motion } from "framer-motion";

export const Logo = () => {
   return (
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         animate={{ opacity: 1, y: 0 }}
         className="p-6 flex items-center gap-3 mb-6 border-b border-gray-700/50"
      >
         <div className="p-2 bg-gray-700/30 rounded-lg">
            <TfiDashboard size={24} className="text-secondary" />
         </div>
         <h1 className="font-semibold text-xl text-white tracking-tight">
            accoun<span className="text-secondary">table</span>
         </h1>
      </motion.div>
   );
};
