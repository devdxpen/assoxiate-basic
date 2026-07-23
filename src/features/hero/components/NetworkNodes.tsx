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
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay, ease: "easeOut" }}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay,
        }}
      >
        <Tooltip>
          <TooltipTrigger className="focus:outline-none block cursor-pointer group">
            <div className="relative p-1 rounded-full bg-neutral-950/80 border border-blue-500/20 backdrop-blur-xl shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-400/60 group-hover:shadow-cyan-500/25 group-hover:shadow-xl">
              {/* Subtle outer pulse ring */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-sm opacity-60 group-hover:opacity-100 transition-opacity" />
              
              <Avatar size="lg" className="relative size-9 sm:size-10 ring-1 ring-white/10">
                {avatarUrl && <AvatarImage src={avatarUrl} alt={name} className="object-cover" />}
                <AvatarFallback className="bg-neutral-900 text-white text-xs font-bold border border-neutral-800">
                  {initials || name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
                {isOnline && (
                  <AvatarBadge className="bg-emerald-500 ring-2 ring-neutral-950 size-2.5" />
                )}
              </Avatar>
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="border border-neutral-800/90 bg-neutral-950/95 px-3.5 py-2.5 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl rounded-xl max-w-[220px] text-white"
          >
            <div className="flex flex-col text-left space-y-0.5">
              <span className="font-bold text-xs text-white leading-snug">
                {name}
              </span>
              <p className="text-[11px] font-medium text-cyan-400 leading-tight">
                {designation}
              </p>
              {location && (
                <p className="text-[10px] text-neutral-400 font-medium pt-0.5">
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
        {/* Subtle Tech Connecting Lines SVG connecting floating nodes toward globe area */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" aria-hidden="true">
          <defs>
            <linearGradient id="nodeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <line x1="14%" y1="18%" x2="35%" y2="35%" stroke="url(#nodeLineGrad)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="84%" y1="20%" x2="65%" y2="35%" stroke="url(#nodeLineGrad)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="84%" y1="78%" x2="65%" y2="65%" stroke="url(#nodeLineGrad)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="16%" y1="76%" x2="35%" y2="65%" stroke="url(#nodeLineGrad)" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        {NETWORK_NODES.map((node) => (
          <PersonNode key={node.id} data={node} />
        ))}
      </div>
    </TooltipProvider>
  );
}
