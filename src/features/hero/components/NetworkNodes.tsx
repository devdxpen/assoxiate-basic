"use client";

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

interface PersonNodeProps {
  initials?: string;
  avatarUrl?: string;
  name: string;
  designation: string;
  location?: string;
  position: string;
  delay: string;
  isOnline?: boolean;
}

function PersonNode({
  initials,
  avatarUrl,
  name,
  designation,
  location,
  position,
  delay,
  isOnline = true,
}: PersonNodeProps) {
  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
      style={{
        left: position.split(" ")[0],
        top: position.split(" ")[1],
      }}
    >
      <div
        className="animate-[bob_6s_ease-in-out_infinite]"
        style={{ animationDelay: delay }}
      >
        <Tooltip>
          <TooltipTrigger className="focus:outline-none block cursor-pointer">
            <div className="relative group p-1 rounded-full bg-neutral-950/80 border border-neutral-800/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/30 hover:shadow-white/5">
              <Avatar size="lg" className="size-10 sm:size-11">
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
            className="border border-neutral-200 bg-white px-3 py-2 shadow-2xl backdrop-blur-md rounded-xl max-w-[200px] text-neutral-900"
          >
            <div className="flex flex-col text-left space-y-0.5">
              <span className="font-bold text-xs text-neutral-950 leading-snug">
                {name}
              </span>
              <p className="text-[11px] font-medium text-neutral-600 leading-tight">
                {designation}
              </p>
              {location && (
                <p className="text-[10px] text-neutral-400 font-medium">
                  {location}
                </p>
              )}
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export function NetworkNodes() {
  return (
    <TooltipProvider delay={100}>
      <PersonNode
        avatarUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
        name="Ananya Iyer"
        designation="Lead Product Designer"
        location="Mumbai, India"
        position="18% 18%"
        delay="0.9s"
        isOnline
      />
      <PersonNode
        avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
        name="Alex Rivera"
        designation="Full-Stack Architect"
        location="San Francisco, USA"
        position="80% 22%"
        delay="0.6s"
        isOnline
      />
      <PersonNode
        avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300"
        name="Marcus Chen"
        designation="Tech Lead @ TechNova"
        location="London, UK"
        position="82% 78%"
        delay="1.4s"
        isOnline
      />
      <PersonNode
        avatarUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300"
        name="Sarah Jenkins"
        designation="Product Strategist"
        location="Berlin, Germany"
        position="20% 75%"
        delay="1.8s"
        isOnline
      />
    </TooltipProvider>
  );
}
