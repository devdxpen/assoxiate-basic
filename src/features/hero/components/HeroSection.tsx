"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { NetworkGlobe } from "./NetworkGlobe";
import { NetworkNodes } from "./NetworkNodes";
import { HERO_STATS } from "../constants/hero.constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center">
      {/* Subtle radial glow background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative min-h-screen flex items-center z-10 container-custom py-16 lg:py-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-12 items-center w-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start text-left max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-400 mb-6 backdrop-blur-md">
              <Sparkles className="size-3.5 text-blue-400" />
              <span>Next Generation Professional Network</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              One Platform
              <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600">
                Endless Opportunities
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg font-normal leading-relaxed text-gray-400">
              A dynamic platform where professionals find opportunities, promote
              their skills, services and jobs, and grow through valuable
              connections.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                variant="default"
                className="rounded-xl px-6 font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all"
              >
                Get Started
                <ArrowRight className="size-4 ml-2" strokeWidth={2} />
              </Button>
            </div>

            {/* Stats Section */}
            <div className="mt-12 w-full border-t border-gray-800/80 pt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-black text-white flex items-center">
                    <Counter
                      end={stat.end}
                      duration={2}
                      fontSize={32}
                      className="bg-transparent text-white px-0"
                    />
                    <span className="text-white font-black">{stat.suffix}</span>
                    <span className="text-blue-400 font-extrabold ml-0.5">
                      +
                    </span>
                  </span>
                  <span className="mt-1.5 text-xs font-medium tracking-wider uppercase text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Globe Container with constrained size */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center w-full z-10"
          >
            {/* Constrained compact size container */}
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
