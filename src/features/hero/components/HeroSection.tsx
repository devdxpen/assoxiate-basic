"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Counter } from "@/components/ui/animated-counter";
import type { COBEOptions } from "cobe";
import { ArrowRight, Key, User, Briefcase, Settings, Box, Folder } from "lucide-react";

const statsData = [
  { end: 18, suffix: "k", label: "Active Users" },
  { end: 5, suffix: "k", label: "Services Created" },
  { end: 1, suffix: "k", label: "Products Listed" },
  { end: 2, suffix: "k", label: "Jobs Posted" },
];

const orbitingIcons = [
  { icon: <Key className="size-5 text-white" /> },
  { icon: <User className="size-5 text-white" /> },
  { icon: <Briefcase className="size-5 text-white" /> },
  { icon: <Settings className="size-5 text-white" /> },
  { icon: <Box className="size-5 text-white" /> },
  { icon: <Folder className="size-5 text-white" /> },
];

// GPU-Optimized config for low-end machines / integrated graphics
const heroGlobeConfig: COBEOptions = {
  width: 750, // Reduced pixel resolution for better rasterizer fill-rate
  height: 750,
  onRender: () => {},
  devicePixelRatio: 2.0, // Set to 2.0 to match Globe.tsx internal width multiplier and fix canvas clipping
  phi: 0,
  theta: 0.28,
  dark: 1,
  diffuse: 1.1,
  mapSamples: 6000, // Reduced from 16000 to 6000 (62% reduction in WebGL vertex processor load)
  mapBrightness: 4.2,
  baseColor: [0.3, 0.35, 0.4],
  markerColor: [0.7, 0.72, 0.78],
  glowColor: [0.35, 0.38, 0.45],
  markers: [
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [28.6139, 77.209], size: 0.07 },
    { location: [25.2048, 55.2708], size: 0.07 },
    { location: [51.5072, -0.1276], size: 0.06 },
    { location: [40.7128, -74.006], size: 0.09 },
    { location: [1.3521, 103.8198], size: 0.06 },
    { location: [35.6762, 139.6503], size: 0.06 },
  ],
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animId: number;
    let t = 0;

    const container = containerRef.current;
    if (!container) return;

    // PERFORMANCE OPTIMIZATION: Cache elements once, avoiding querySelectorAll on every frame (60fps)
    const nodes = Array.from(container.querySelectorAll(".orbit-node")) as HTMLElement[];

    const tick = () => {
      t += 0.004; // Animation speed
      const width = container.clientWidth;
      const height = container.clientHeight;
      const cx = width / 2;
      const cy = height / 2;

      // Orbit radii (scaled responsive to current container size)
      const rx = width * 0.46;
      const ry = height * 0.22;

      nodes.forEach((node, index) => {
        let theta = 0;
        let angle = 0;

        if (index === 0 || index === 1) {
          theta = (-30 * Math.PI) / 180; // Tilted -30deg
          angle = t + (index === 1 ? Math.PI : 0);
        } else if (index === 2 || index === 3) {
          theta = (30 * Math.PI) / 180;  // Tilted 30deg
          angle = -t * 0.8 + (index === 3 ? Math.PI : 0) + 1;
        } else {
          theta = (80 * Math.PI) / 180;  // Tilted 80deg
          angle = t * 0.7 + (index === 5 ? Math.PI : 0) + 2;
        }

        // Circular coordinates
        const xPrime = rx * Math.cos(angle);
        const yPrime = ry * Math.sin(angle);

        // Rotated elliptical coordinates
        const x = xPrime * Math.cos(theta) - yPrime * Math.sin(theta);
        const y = xPrime * Math.sin(theta) + yPrime * Math.cos(theta);

        // Translate the node element directly
        node.style.left = `${cx + x - 24}px`;
        node.style.top = `${cy + y - 24}px`;
      });

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-black/80 z-0" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="stars-layer absolute inset-0" />
      </div>

      {/* Hero Content Container */}
      <div className="relative min-h-screen overflow-hidden flex items-center z-10 container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-center w-full">
            
            {/* Left Column: Text + Stats */}
            <div className="flex flex-col items-start text-left max-w-xl">
              <h1 className="text-5xl font-extrabold  text-white ">
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

              <Button
                size="lg"
                variant="default"
                className="mt-8"
              >
                Get Started
                <ArrowRight className="size-4 ml-1.5" strokeWidth={2} />
              </Button>

              {/* Stats Grid */}
              <div className="mt-12 w-full border-t border-gray-700 pt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 sm:gap-x-8">
                {statsData.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-4xl font-black text-white flex items-center">
                      <Counter end={stat.end} duration={2} fontSize={36} className="bg-transparent text-white px-0" />
                      <span className="text-white font-black">{stat.suffix}</span>
                      <span className="text-blue-400 font-extrabold ml-0.5">+</span>
                    </span>
                    <span className="mt-1 text-base uppercase text-gray-400">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Bigger Globe & Orbiting Nodes */}
            <div className="relative flex justify-center items-center h-112 sm:h-128 lg:h-160 w-full z-10">
              <div className="relative size-80 sm:size-100 lg:size-160 flex items-center justify-center">
                
                <Globe
                  className="max-w-none opacity-95 w-full h-full z-10"
                  config={heroGlobeConfig}
                />

                {/* 3D Orbit Lines and Nodes System */}
                <div ref={containerRef} className="absolute inset-0 z-20 pointer-events-none">
                  
                  {/* Orbit A Visual: Tilted -30deg */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(-30deg) scaleY(0.48)" }}>
                    <div className="absolute size-[92%] rounded-full border border-gray-600" />
                  </div>

                  {/* Orbit B Visual: Tilted 30deg */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(30deg) scaleY(0.48)" }}>
                    <div className="absolute size-[92%] rounded-full border border-gray-600" />
                  </div>

                  {/* Orbit C Visual: Tilted 80deg */}
                  <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(80deg) scaleY(0.48)" }}>
                    <div className="absolute size-[92%] rounded-full border border-gray-600" />
                  </div>

                  {/* Mapped Orbiting Nodes (Positioned dynamically via requestAnimationFrame) */}
                  {orbitingIcons.map((node, i) => (
                    <div
                      key={i}
                      className="orbit-node absolute border border-gray-700 bg-gray-950 rounded-xl size-18 flex items-center justify-center shadow-md z-30 transition-transform duration-300 text-5xl pointer-events-auto hover:scale-110"
                    >
                      {node.icon}
                    </div>
                  ))}

                </div>
              </div>
            </div>
            
          </div>
      </div>

      <style>{`
        .stars-layer {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.4;
        }

        @keyframes twinkle {
          0% { opacity: 0.4; }
          50% { opacity: 0.7; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
