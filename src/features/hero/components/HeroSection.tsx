"use client";

import { Counter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NetworkGlobe } from "./NetworkGlobe";
import { NetworkNodes } from "./NetworkNodes";

const statsData = [
  { end: 18, suffix: "k", label: "Active Users" },
  { end: 5, suffix: "k", label: "Services Created" },
  { end: 1, suffix: "k", label: "Products Listed" },
  { end: 2, suffix: "k", label: "Jobs Posted" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="relative min-h-screen overflow-hidden flex items-center z-10 container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center w-full">
          <div className="flex flex-col items-start text-left max-w-xl">
            <h1 className="text-5xl font-extrabold text-white">
              One Platform
              <span className="mt-2 block text-gray-400">
                Endless Opportunities
              </span>
            </h1>
            <p className="mt-6 text-sm sm:text-lg font-regular leading-relaxed text-gray-400">
              A dynamic platform where professionals find opportunities, promote
              their skills, services and jobs, and grow through valuable
              connections.
            </p>

            <Button size="lg" variant="default" className="mt-8">
              Get Started
              <ArrowRight className="size-4 ml-1.5" strokeWidth={2} />
            </Button>
            <div className="mt-12 w-full border-t border-gray-700 pt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
              {statsData.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-black text-white flex items-center">
                    <Counter
                      end={stat.end}
                      duration={2}
                      fontSize={36}
                      className="bg-transparent text-white px-0"
                    />
                    <span className="text-white font-black">{stat.suffix}</span>
                    <span className="text-white font-extrabold ml-0.5">+</span>
                  </span>
                  <span className="mt-1 text-base uppercase text-gray-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center h-112 sm:h-128 lg:h-160 w-full z-10">
            <div className="relative w-full max-w-[560px] aspect-square animate-[netIn_1s_0.5s_cubic-bezier(0.22,1,0.36,1)_both]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,255,255,0.06)_55%,rgba(255,255,255,0.12)_68%,transparent_74%)] blur-[8px]" />
              <NetworkGlobe />
              <NetworkNodes />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
