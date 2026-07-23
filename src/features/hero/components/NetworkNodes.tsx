"use client";

import { motion } from "framer-motion";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { NETWORK_NODES } from "../constants/hero.constants";
import { PersonNodeData } from "../types/hero.types";

interface PersonNodeProps {
  data: PersonNodeData;
}

function PersonNode({ data }: PersonNodeProps) {
  const { name, designation, location, avatarUrl, initials, position, delay, isOnline } = data;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
      >
        <Tooltip>
          <TooltipTrigger className="focus:outline-none block cursor-pointer">
            <div className="relative group p-1.5 rounded-full bg-neutral-950/80 border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-115 hover:border-blue-400/50 hover:shadow-blue-500/20 hover:shadow-xl">
              <Avatar size="lg" className="size-9 sm:size-10">
                {avatarUrl && <AvatarImage src={avatarUrl} alt={name} />}
                <AvatarFallback className="bg-neutral-900 text-white text-xs font-semibold border border-neutral-800">
                  {initials || name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
                {isOnline && (
                  <AvatarBadge className="bg-emerald-500 ring-2 ring-neutral-950" />
                )}
              </Avatar>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="border border-neutral-800 bg-neutral-900/95 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl rounded-xl max-w-[210px] text-white"
          >
            <div className="flex flex-col text-left space-y-0.5">
              <span className="font-bold text-xs text-white leading-snug">
                {name}
              </span>
              <p className="text-[11px] font-medium text-neutral-400 leading-tight">
                {designation}
              </p>
              {location && (
                <p className="text-[10px] text-neutral-500 font-medium pt-0.5">
                  {location}
                </p>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </motion.div>
  );
}

export function NetworkNodes() {
  return (
    <TooltipProvider delay={100}>
      <div className="absolute inset-0 pointer-events-none z-20">
        {NETWORK_NODES.map((node) => (
          <PersonNode key={node.id} data={node} />
        ))}
      </div>
    </TooltipProvider>
  );
}
