"use client";

import Image from "next/image";
<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { cn } from "@/lib/utils";
import type { COBEOptions } from "cobe";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";

const stars = [
  [4, 12, 0.42],
  [12, 31, 0.58],
  [18, 55, 0.34],
  [26, 14, 0.38],
  [31, 41, 0.5],
  [39, 10, 0.46],
  [47, 29, 0.62],
  [58, 18, 0.35],
  [68, 38, 0.54],
  [77, 11, 0.44],
  [86, 33, 0.7],
  [96, 18, 0.48],
  [2, 72, 0.4],
  [14, 84, 0.66],
  [29, 79, 0.44],
  [41, 94, 0.58],
  [53, 71, 0.36],
  [63, 88, 0.5],
  [74, 75, 0.42],
  [83, 96, 0.58],
  [95, 78, 0.35],
  [7, 43, 0.28],
  [20, 23, 0.4],
  [35, 61, 0.52],
  [51, 7, 0.3],
  [70, 58, 0.5],
  [91, 50, 0.38],
] as const;

const heroGlobeConfig: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
=======
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
>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
  phi: 0,
  theta: 0.28,
  dark: 1,
  diffuse: 1.1,
<<<<<<< HEAD
  mapSamples: 16000,
  mapBrightness: 4.2,
  baseColor: [0.12, 0.22, 0.52],
  markerColor: [0.98, 0.62, 0.2],
  glowColor: [0.22, 0.42, 0.9],
=======
  mapSamples: 6000, // Reduced from 16000 to 6000 (62% reduction in WebGL vertex processor load)
  mapBrightness: 4.2,
  baseColor: [0.3, 0.35, 0.4],
  markerColor: [0.7, 0.72, 0.78],
  glowColor: [0.35, 0.38, 0.45],
>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
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

<<<<<<< HEAD
const heroBackgroundImage =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=80";

type FeatureCardProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon, ...props }, ref) => (
    <Card
      ref={ref}
      className={cn(
        "relative z-20 w-[260px] gap-0 border-white/12 bg-card/90 py-0 shadow-none transition-all duration-300",
        className
      )}
      {...props}
    >
      <CardHeader className="gap-0 p-4">
        <div className="mb-3 flex size-[34px] items-center justify-center rounded-lg border border-white/[0.03] bg-white/[0.075] text-white">
          {icon}
        </div>
        <CardTitle className="text-base text-card-foreground">{title}</CardTitle>
        <CardDescription className="mt-2 font-medium leading-snug">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
);

FeatureCard.displayName = "FeatureCard";

type ConnectionLineProps = {
  active: boolean;
  className?: string;
  color: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  curvature: number;
  endXOffset?: number;
  endYOffset?: number;
  fromRef: React.RefObject<HTMLDivElement | null>;
  glowColor: string;
  startXOffset?: number;
  startYOffset?: number;
  toRef: React.RefObject<HTMLDivElement | null>;
};

function ConnectionLine({
  active,
  className,
  color,
  containerRef,
  curvature,
  endXOffset = 0,
  endYOffset = 0,
  fromRef,
  glowColor,
  startXOffset = 0,
  startYOffset = 0,
  toRef,
}: ConnectionLineProps) {
  const gradientId = React.useId();
  const [path, setPath] = useState("");
  const [points, setPoints] = useState({
    endX: 0,
    endY: 0,
    startX: 0,
    startY: 0,
  });
  const [svgDimensions, setSvgDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();
      const startX =
        fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
      const startY =
        fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
      const endX =
        toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
      const endY =
        toRect.top - containerRect.top + toRect.height / 2 + endYOffset;
      const controlX = (startX + endX) / 2;
      const controlY = startY - curvature;

      setSvgDimensions({
        height: containerRect.height,
        width: containerRect.width,
      });
      setPoints({ endX, endY, startX, startY });
      setPath(`M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`);
    };

    updatePath();

    const resizeObserver = new ResizeObserver(updatePath);
    const observedElements = [
      containerRef.current,
      fromRef.current,
      toRef.current,
    ].filter((element): element is HTMLDivElement => element !== null);

    observedElements.forEach((element) => resizeObserver.observe(element));
    window.addEventListener("resize", updatePath);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [
    containerRef,
    curvature,
    endXOffset,
    endYOffset,
    fromRef,
    startXOffset,
    startYOffset,
    toRef,
  ]);

  if (!active || !path || svgDimensions.width === 0) return null;

  return (
    <svg
      className={className}
      fill="none"
      height={svgDimensions.height}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
      width={svgDimensions.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={gradientId}
          x1={points.startX}
          x2={points.endX}
          y1={points.startY}
          y2={points.endY}
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="45%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0.92" />
        </linearGradient>
        <filter
          colorInterpolationFilters="sRGB"
          height="220%"
          id={`${gradientId}-glow`}
          width="220%"
          x="-60%"
          y="-60%"
        >
          <feGaussianBlur stdDeviation="3.5" />
        </filter>
      </defs>
      <path
        className="hero-line-base"
        d={path}
        pathLength={1}
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1}
      />
      <path
        className="hero-line-glow"
        d={path}
        filter={`url(#${gradientId}-glow)`}
        pathLength={1}
        stroke={glowColor}
        strokeLinecap="round"
        strokeWidth={3}
      />
      <path
        className="hero-line-fill"
        d={path}
        pathLength={1}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth={1.6}
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="grid size-[34px] place-items-center rounded-lg bg-[linear-gradient(135deg,#6f79ff_0%,#8d5cf7_100%)] text-sm font-extrabold text-white shadow-[0_0_22px_rgba(117,112,255,0.42)]">
        Ax
      </div>
      <div>
        <div className="text-lg font-extrabold leading-none text-white">
          AssoXiate
        </div>
        <div className="mt-1 text-xs font-semibold uppercase tracking-[0.42em] text-white/42">
          Pure Professional
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const associatesRef = useRef<HTMLDivElement>(null);
  const jobsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const [visibleLineCount, setVisibleLineCount] = useState(0);

  useEffect(() => {
    const timers = [1, 2, 3, 4].map((count, index) =>
      window.setTimeout(() => setVisibleLineCount(count), 500 + index * 850)
    );

    return () => {
      timers.forEach(window.clearTimeout);
    };
=======
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
>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
<<<<<<< HEAD
      <Image
        alt="Professionals collaborating in a modern workspace"
        className="object-cover opacity-25"
        fill
        priority
        sizes="100vw"
        src={heroBackgroundImage}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/70" />
      <header className="relative z-30 flex h-[72px] items-center justify-between border-b border-white/[0.075] bg-black px-5 sm:px-8 lg:px-[55px]">
        <BrandMark />

        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#737373] lg:flex">
          <a className="transition hover:text-white" href="#">
            Home
          </a>
          <a className="transition hover:text-white" href="#">
            AssoXiate
          </a>
          <a className="transition hover:text-white" href="#">
            Jobs
          </a>
          <a className="flex items-center gap-[5px] transition hover:text-white" href="#">
            Solutions
            <ChevronDown className="size-[12px]" strokeWidth={2.6} />
          </a>
          <a className="transition hover:text-white" href="#">
            Articles
          </a>
        </nav>

        <div className="flex items-center gap-[10px]">
          <Button
            variant="outline"
            size="default"
            className="hidden border-white/15 bg-black px-5 text-sm font-bold text-white hover:border-white/28 hover:bg-white/[0.04] sm:inline-flex"
          >
            Sign In
          </Button>
          <Button
            size="default"
            className="min-w-[114px] bg-white px-4 text-sm font-extrabold text-black shadow-[0_0_18px_rgba(255,255,255,0.12)] hover:bg-[#ededed]"
          >
            Join Now
            <ArrowRight className="size-[13px]" strokeWidth={2.5} />
          </Button>
        </div>
      </header>

      <div
        ref={containerRef}
        className="relative min-h-[calc(100vh-72px)] overflow-hidden px-5"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(29,84,177,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.08),transparent_1px),linear-gradient(180deg,#010101_0%,#000_100%)]" />
        <div className="star-dust absolute inset-0">
          {stars.map(([left, top, opacity], index) => (
            <span
              key={`${left}-${top}-${index}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                opacity,
                animationDelay: `${(index % 8) * 0.6}s`,
              }}
            />
          ))}
        </div>

        <div
          ref={planetRef}
          className="absolute left-1/2 top-[42.2%] z-10 size-[270px] -translate-x-1/2 -translate-y-1/2 sm:size-[340px] lg:size-[430px]"
        >
          <div className="pointer-events-none absolute inset-[-18%] rounded-full bg-[radial-gradient(circle,rgba(54,113,232,0.36),transparent_66%)] blur-2xl" />
          <Globe
            className="max-w-none opacity-95"
            config={heroGlobeConfig}
          />
        </div>

        <div className="absolute left-[5.1%] top-[7.4%] z-20 hidden lg:block">
          <FeatureCard
            ref={associatesRef}
            title="Associates"
            description="Build meaningful relationships"
            icon={<UsersRound className="size-[16px]" strokeWidth={2.4} />}
          />
        </div>

        <div className="absolute right-[4%] top-[12.1%] z-20 hidden lg:block">
          <FeatureCard
            ref={jobsRef}
            title="Jobs"
            description="Find the right opportunities"
            icon={<BriefcaseBusiness className="size-[16px] text-[#d7903a]" strokeWidth={2.5} />}
          />
        </div>

        <div className="absolute bottom-[40.7%] left-[5.1%] z-20 hidden lg:block">
          <FeatureCard
            ref={servicesRef}
            title="Services"
            description="Hire or offer expert skills"
            icon={<Zap className="size-[16px] fill-[#f6bd20] text-[#f6bd20]" strokeWidth={2.2} />}
          />
        </div>

        <div className="absolute bottom-[30.1%] right-[4%] z-20 hidden lg:block">
          <FeatureCard
            ref={solutionsRef}
            title="Solutions"
            description="Products for your growth"
            icon={<Wrench className="size-[16px]" strokeWidth={2.5} />}
          />
        </div>

        <ConnectionLine
          active={visibleLineCount >= 1}
          className="pointer-events-none absolute left-0 top-0 z-[5] hidden lg:block"
          color="#2f7cff"
          containerRef={containerRef}
          curvature={-34}
          endXOffset={-96}
          fromRef={associatesRef}
          glowColor="#76a8ff"
          startXOffset={96}
          toRef={planetRef}
        />
        <ConnectionLine
          active={visibleLineCount >= 2}
          className="pointer-events-none absolute left-0 top-0 z-[5] hidden lg:block"
          color="#8934e8"
          containerRef={containerRef}
          curvature={52}
          endXOffset={96}
          fromRef={jobsRef}
          glowColor="#c066ff"
          startXOffset={-96}
          toRef={planetRef}
        />
        <ConnectionLine
          active={visibleLineCount >= 3}
          className="pointer-events-none absolute left-0 top-0 z-[5] hidden lg:block"
          color="#2f7cff"
          containerRef={containerRef}
          curvature={78}
          endXOffset={-104}
          fromRef={servicesRef}
          glowColor="#78a9ff"
          startXOffset={88}
          toRef={planetRef}
        />
        <ConnectionLine
          active={visibleLineCount >= 4}
          className="pointer-events-none absolute left-0 top-0 z-[5] hidden lg:block"
          color="#9b3df2"
          containerRef={containerRef}
          curvature={-70}
          endXOffset={104}
          fromRef={solutionsRef}
          glowColor="#c56cff"
          startXOffset={-88}
          toRef={planetRef}
        />

        <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] flex-col items-center justify-start px-1 pb-8 pt-[42vh] text-center sm:pt-[44vh] lg:justify-end lg:px-0 lg:pt-0">
          <h1 className="text-xl font-bold leading-none text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            One Platform.
            <span className="mt-[4px] block opacity-60">
              Endless Opportunities.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-gray-300 lg:text-lg">
            A dynamic platform where professionals find opportunities, promote
            their skills, provide and hire services, and grow through valuable
            connections.
          </p>

          <Button
            size="lg"
            variant="default"
            className="mt-7"
          >
            Get Started
            <ArrowRight className="size-[14px]" strokeWidth={2.6} />
          </Button>
        </div>

        <div className="relative z-20 mx-auto grid max-w-[560px] grid-cols-1 gap-3 pb-8 sm:grid-cols-2 lg:hidden">
          <FeatureCard
            title="Associates"
            description="Build meaningful relationships"
            icon={<UsersRound className="size-[16px]" strokeWidth={2.4} />}
            className="w-full"
          />
          <FeatureCard
            title="Jobs"
            description="Find the right opportunities"
            icon={<BriefcaseBusiness className="size-[16px] text-[#d7903a]" strokeWidth={2.5} />}
            className="w-full"
          />
          <FeatureCard
            title="Services"
            description="Hire or offer expert skills"
            icon={<Zap className="size-[16px] fill-[#f6bd20] text-[#f6bd20]" strokeWidth={2.2} />}
            className="w-full"
          />
          <FeatureCard
            title="Solutions"
            description="Products for your growth"
            icon={<Wrench className="size-[16px]" strokeWidth={2.5} />}
            className="w-full"
          />
        </div>
      </div>
=======
      <div className="pointer-events-none absolute inset-0 bg-black/80 z-0" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="stars-layer absolute inset-0" />
        <ShootingStars
          starColor="#99A1AF"
          trailColor="#374151"
          minSpeed={15}
          maxSpeed={35}
          minDelay={2500}
          maxDelay={5500}
        />
        <ShootingStars
          starColor="#94A3B8"
          trailColor="#0F172A"
          minSpeed={20}
          maxSpeed={40}
          minDelay={3000}
          maxDelay={7000}
        />
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
>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
    </section>
  );
}
