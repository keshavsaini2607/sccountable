import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { motion } from "framer-motion";

interface NotificationBellProps {
  count?: number;
  onClick: () => void;
}

export const NotificationBell = ({ count, onClick }: NotificationBellProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
    >
      <IoIosNotifications className="w-6 h-6 text-gray-600" />
      {count !== undefined && count > 0 && (
        <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </motion.button>
  );
};