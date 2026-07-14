"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Checkbox } from "@/components/ui/checkbox";

export function NetworkBanner() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [checkedStates, setCheckedStates] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    if (isSectionInView) {
      const timers = [
        setTimeout(() => setCheckedStates(prev => { const next = [...prev]; next[0] = true; return next; }), 500),
        setTimeout(() => setCheckedStates(prev => { const next = [...prev]; next[1] = true; return next; }), 800),
        setTimeout(() => setCheckedStates(prev => { const next = [...prev]; next[2] = true; return next; }), 1100),
        setTimeout(() => setCheckedStates(prev => { const next = [...prev]; next[3] = true; return next; }), 1400),
      ];
      return () => timers.forEach(clearTimeout);
    } else {
      const timer = setTimeout(() => {
        setCheckedStates(prev => prev.some(v => v) ? [false, false, false, false] : prev);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isSectionInView]);

  const getNodeCoords = (index: number) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    const x = col === 0 ? 18 : col === 1 ? 50 : 82;
    const y = row === 0 ? 18 : row === 1 ? 50 : 82;
    return { x, y };
  };

  const defaultConnections = [
    { from: 0, to: 4 },
    { from: 2, to: 4 },
    { from: 6, to: 4 },
    { from: 8, to: 4 },
  ];

  const activeConnections = [...defaultConnections];
  if (hoveredIndex !== null && ![0, 2, 4, 6, 8].includes(hoveredIndex)) {
    activeConnections.push({ from: hoveredIndex, to: 4 });
  }

  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
     
      <div ref={sectionRef} className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="max-w-xl">
            <h2 className="text-4xl font-medium text-white sm:text-5xl">
              Grow your professional network
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Build meaningful relationships with peers, industry leaders, and potential partners. Our platform enables seamless connection and collaboration.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "Connect with verified professionals globally",
                "Join industry-specific communities and groups",
                "Share insights, projects and expertise",
                "Get discovered by prospects, clients and companies"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 group/item">
                  <div className="pt-0.5 pointer-events-none">
                    <Checkbox
                      checked={checkedStates[index]}
                      className="size-5"
                    />
                  </div>
                  <span className="text-lg text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center items-center py-6">
            
            <div className="relative p-8 w-full max-w-[480px] aspect-square flex items-center justify-center">
              
              <div className="relative w-full h-full rounded-3xl border border-slate-800/80 bg-slate-950/40 backdrop-blur-md p-6 overflow-hidden flex items-center justify-center group shadow-2xl shadow-blue-950/10 hover:border-slate-700/80 transition-all duration-500">
                
                <motion.div 
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none"
                  animate={{
                    opacity: [0.8, 1.2, 0.8],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-full h-full">
                  
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" fill="none">
                    {/* Render connection lines */}
                    {activeConnections.map((conn, idx) => {
                      const from = getNodeCoords(conn.from);
                      const to = getNodeCoords(conn.to);
                      const isLineHighlighted = hoveredIndex === conn.from || hoveredIndex === conn.to;

                      return (
                        <g key={`${conn.from}-${conn.to}-${idx}`}>
                          {/* Outer glowing path */}
                          <line
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            className="stroke-blue-500/10 stroke-[4px] blur-[1px] transition-all duration-300"
                          />
                          {/* Inner line */}
                          <line
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            className={`transition-all duration-300 ${
                              isLineHighlighted
                                ? "stroke-blue-400 stroke-[1.8px]"
                                : "stroke-blue-500/30 stroke-[1.2px]"
                            }`}
                          />
                          {/* Glow under the particle */}
                          <motion.circle
                            r="2.5"
                            fill="#3b82f6"
                            opacity="0.4"
                            initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                            animate={{
                              cx: [from.x, to.x],
                              cy: [from.y, to.y],
                              opacity: [0, 0.4, 0.4, 0]
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.45
                            }}
                          />
                          {/* Core particle */}
                          <motion.circle
                            r="1.2"
                            fill="#60a5fa"
                            initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                            animate={{
                              cx: [from.x, to.x],
                              cy: [from.y, to.y],
                              opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.45
                            }}
                          />
                        </g>
                      );
                    })}
                  </svg>

                  <div className="absolute inset-0 w-full h-full z-10">
                    {Array.from({ length: 9 }).map((_, idx) => {
                      const isCornerOrCenter = [0, 2, 4, 6, 8].includes(idx);
                      const isHovered = hoveredIndex === idx;
                      const col = idx % 3;
                      const row = Math.floor(idx / 3);

                      // Absolute coordinates corresponding to the 18%, 50%, 82% lines
                      const leftPos = col === 0 ? "5%" : col === 1 ? "37%" : "69%";
                      const topPos = row === 0 ? "5%" : row === 1 ? "37%" : "69%";

                      return (
                        <motion.div
                          key={idx}
                          onMouseEnter={() => setHoveredIndex(idx)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className={`absolute w-[26%] h-[26%] rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 border ${
                            isHovered
                              ? "bg-slate-900/80 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                              : "bg-[#090F1C]/75 border-slate-800/80 hover:border-slate-700/80"
                          }`}
                          style={{
                            left: leftPos,
                            top: topPos,
                          }}
                          whileHover={{ scale: 1.08, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          {/* Centered Node Dot */}
                          <div className="relative flex items-center justify-center">
                            <div
                              className={`size-3 sm:size-3.5 rounded-full transition-all duration-300 ${
                                isHovered || (hoveredIndex === null && isCornerOrCenter)
                                  ? "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.85)] scale-110"
                                  : "bg-blue-800/50"
                              }`}
                            />
                            {/* Pulse ripple for active nodes */}
                            {(isHovered || (hoveredIndex === null && isCornerOrCenter)) && (
                              <span className="absolute inset-0 rounded-full bg-blue-400/40 animate-ping pointer-events-none scale-150" />
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </AnimatedSection>
  );
}
