import React from "react";
import { IconType } from "react-icons";

interface ActionButtonProps {
  icon: IconType;
  label: string;
  onClick: () => void;
}

export const ActionButton = ({ icon: Icon, label, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      <Icon className="text-primary w-5 h-5" />
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </button>
  );
};