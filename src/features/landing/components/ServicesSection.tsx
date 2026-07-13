"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code,
  Monitor,
  Palette,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: <Code className="size-5" />,
    title: "Web Development",
    description:
      "We build fast, sleek, and scalable websites that grow with your business.",
    gradient: "from-[#2f7cff] to-[#6f79ff]",
  },
  {
    icon: <Monitor className="size-5" />,
    title: "IT Support",
    description:
      "Reliable IT support that keeps your business running no matter what.",
    gradient: "from-[#6f79ff] to-[#8d5cf7]",
  },
  {
    icon: <Palette className="size-5" />,
    title: "Graphic Design",
    description: "Designs that make your ideas stand out.",
    gradient: "from-[#f6bd20] to-[#f59e0b]",
  },
  {
    icon: <Camera className="size-5" />,
    title: "Photography",
    description: "Capturing moments that last a lifetime.",
    gradient: "from-[#ec4899] to-[#8d5cf7]",
  },
];

export function ServicesSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_0%,rgba(47,124,255,0.05),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="Find the right services for you"
          subtitle="Connect with top-rated professionals, discover trusted services, and grow your business through meaningful collaboration."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 size-24 rounded-full bg-gradient-to-br opacity-[0.04] blur-2xl transition-opacity duration-700 group-hover:opacity-[0.1]" />
              <div
                className={`mb-5 flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#8d8d8d]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
          >
            Explore Services
            <ArrowRight className="size-[14px]" strokeWidth={2.6} />
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
