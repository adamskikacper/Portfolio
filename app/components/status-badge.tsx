"use client";

import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

export type StatusType = "ongoing" | "recent" | "legacy";

interface StatusBadgeProps {
  status?: StatusType;
  className?: string;
}

export const StatusBadge = ({ status, className = "" }: StatusBadgeProps) => {
  if (!status) return null;

  const statusConfig = {
    ongoing: {
      icon: Clock,
      text: "Ongoing",
      classes:
        "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/70 dark:text-blue-400 dark:border-blue-800/50",
    },
    recent: {
      icon: CheckCircle2,
      text: "Recent",
      classes:
        "bg-green-100 text-green-800 border-green-300 dark:bg-green-900/70 dark:text-green-400 dark:border-green-800/50",
    },
    legacy: {
      icon: AlertTriangle,
      text: "Legacy",
      classes:
        "bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/70 dark:text-amber-400 dark:border-amber-800/50",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${config.classes} ${className}`}
    >
      <Icon className="h-3.5 w-3.5" />
      <span>{config.text}</span>
    </div>
  );
};

export default StatusBadge;
