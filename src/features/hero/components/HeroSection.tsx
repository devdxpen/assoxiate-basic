"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Astroid, Sparkles } from "lucide-react";
import { NetworkGlobe } from "./NetworkGlobe";
import { HERO_STATS } from "../constants/hero.constants";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { AnimatedBadge } from "@/components/animation/ShinyText";

// Lazy-load NetworkNodes — heavy component with many motion elements
const NetworkNodes = dynamic(
  () => import("./NetworkNodes").then((m) => m.NetworkNodes),
  {
    ssr: false,
    loading: () => null,
  },
);

// Lazy-load Counter — avoids bundling animation library in critical path
const Counter = dynamic(
  () => import("@/components/ui/animated-counter").then((m) => m.Counter),
  {
    ssr: false,
    loading: () => <span className="h2 text-white">0</span>,
  },
);

export function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Only start counters when user can actually see them
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center pt-28 pb-8">
      <div className="relative flex items-center z-10 container-custom py-16 lg:py-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            <AnimatedBadge
              icon={Sparkles}
              text="AI Powered Professional Platform"
              iconClassName="text-blue-500"
              textClassName="text-gray-400"
            />

            <h1 className="h2 text-white">
              One Platform Endless Opportunities
            </h1>

            <p className="mt-6 text-gray-400">
              A dynamic platform where professionals find opportunities, promote
              their skills, services and jobs, and grow through valuable
              connections.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button size="xl" variant="white">
                Get Started
                <ArrowRight className="size-4 ml-2" strokeWidth={2} />
              </Button>
            </div>

            {/* Stats Section */}
            <div
              ref={statsRef}
              className="mt-12 w-full border-t border-gray-800/80 pt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8"
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white flex items-center text-3xl sm:text-4xl font-bold tracking-tight">
                    {statsVisible ? (
                      <Counter
                        end={stat.end}
                        duration={2}
                        fontSize={36}
                        className="bg-transparent text-white px-0"
                      />
                    ) : (
                      <span className="text-white font-bold">0</span>
                    )}
                    <span className="text-white font-bold text-[36px]">{stat.suffix}</span>
                    <span className="text-blue-400 ml-0.5 font-bold">+</span>
                  </span>
                  <span className="mt-1.5 text-xs font-medium tracking-wider uppercase text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center w-full z-10"
          >
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square mx-auto flex items-center justify-center">
              <NetworkGlobe />
              <NetworkNodes />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
