"use client";

import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedBadgeProps {
  icon: LucideIcon;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  animateLine?: boolean;
}

export function AnimatedBadge({
  icon: Icon,
  text,
  className,
  iconClassName,
  textClassName,
  animateLine = true,
}: AnimatedBadgeProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 mb-4", className)}>
      <Icon className={cn("size-4 shrink-0 text-blue-400", iconClassName)} />

      <motion.div
        className="h-px rounded-full bg-gray-500"
        animate={{
          width: ["8px", "32px", "8px"],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      />

      <span
        className={cn(
          "whitespace-nowrap text-sm font-medium text-blue-400",
          textClassName,
        )}
      >
        {text}
      </span>
    </div>
  );
}
