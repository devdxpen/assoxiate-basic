"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";
import {
  User,
  Building2,
  Package,
  Wrench,
  Briefcase,
  Link2,
} from "lucide-react";
import { AnimatedBeam } from "@/components/animation/animated-beam";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Heading } from "@/components/animation/Heading";
import { cn } from "@/lib/utils";

interface NodeProps {
  className?: string;
  children: React.ReactNode;
  label: string;
}

const CircleNode = forwardRef<HTMLDivElement, NodeProps>(
  ({ className, children, label }, ref) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <div
          ref={ref}
          className={cn(
            "z-100 flex size-14 items-center text-black justify-center rounded-full border-1 border-gray-200 bg-gray-200",
            className,
          )}
        >
          {children}
        </div>
        <span className="text-xs font-medium text-gray-700">{label}</span>
      </div>
    );
  },
);
CircleNode.displayName = "CircleNode";

const CenterNode = forwardRef<HTMLDivElement, Omit<NodeProps, "label">>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-20 items-center justify-center rounded-full border-1 border-neutral-300 bg-gray-200",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
CenterNode.displayName = "CenterNode";

export function NetworkBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // Outer nodes refs
  const userRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const jobRef = useRef<HTMLDivElement>(null);
  const connectionRef = useRef<HTMLDivElement>(null);

  const ICON_CLASS = "size-6 text-gray-700";

  return (
    <AnimatedSection className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left — Text Content */}
          <div>
            <Heading
              align="start"
              as="h2"
              paragraph="Your Professional Network Hub"
              className="mb-4"
            />
            <p className="text-gray-500 max-w-md">
              AssoXiate connects every piece of your professional ecosystem.
              From companies and services to jobs and products — everything
              links back to you.
            </p>
          </div>

          {/* Right — Animated Beam Diagram */}
          <div
            ref={containerRef}
            className="relative flex items-center justify-center w-full min-h-[380px] md:min-h-[420px]"
          >
            {/* ── Layout: 3 rows for radial positioning ── */}

            {/* Top row: User, Company */}
            <div className="absolute z-20 top-4 left-1/2 -translate-x-1/2 flex items-start justify-center gap-24 md:gap-32">
              <CircleNode ref={userRef} label="User">
                <User className={ICON_CLASS} />
              </CircleNode>
              <CircleNode ref={companyRef} label="Company">
                <Building2 className={ICON_CLASS} />
              </CircleNode>
            </div>

            {/* Middle row: Product — CENTER LOGO — Services */}
            <div className="flex items-center justify-center gap-20 md:gap-32">
              <CircleNode ref={productRef} label="Product">
                <Package className={ICON_CLASS} />
              </CircleNode>

              <CenterNode ref={centerRef}>
                <Image
                  src="/icon.png"
                  alt="AssoXiate Logo"
                  width={48}
                  height={48}
                  className="size-12 object-contain"
                />
              </CenterNode>

              <CircleNode ref={servicesRef} label="Services">
                <Wrench className={ICON_CLASS} />
              </CircleNode>
            </div>

            {/* Bottom row: Job, Connection */}
            <div className="absolute z-20  bottom-4 left-1/2 -translate-x-1/2 flex items-end justify-center gap-24 md:gap-32">
              <CircleNode ref={jobRef} label="Job">
                <Briefcase className={ICON_CLASS} />
              </CircleNode>
              <CircleNode ref={connectionRef} label="Assoxiate">
                <Link2 className={ICON_CLASS} />
              </CircleNode>
            </div>

            {/* ── Animated Beams (center → each node) ── */}

            {/* User */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={userRef}
              curvature={-40}
              duration={4}
              delay={0}
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />

            {/* Company */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={companyRef}
              curvature={40}
              duration={4}
              delay={0.4}
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />

            {/* Product (left) */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={productRef}
              curvature={0}
              duration={4}
              delay={0.8}
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />

            {/* Services (right) */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={servicesRef}
              curvature={0}
              duration={4}
              delay={1.2}
              reverse
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />

            {/* Job */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={jobRef}
              curvature={40}
              duration={4}
              delay={1.6}
              reverse
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />

            {/* Connection */}
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={centerRef}
              toRef={connectionRef}
              curvature={-40}
              duration={4}
              delay={2.0}
              reverse
              gradientStartColor="#e5e5e5"
              gradientStopColor="#737373"
              pathColor="#d4d4d4"
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
