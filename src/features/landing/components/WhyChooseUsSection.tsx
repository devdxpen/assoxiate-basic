"use client";

import { GlowingEffect } from "@/components/3d/glowingEffect";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  UserCheck,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Globe,
  MessageSquare,
} from "lucide-react";

const features = [
  {
    icon: <UserCheck className="size-7" />,
    title: "Verified Professionals",
    description:
      "Connect with verified active experts and business professionals.",
    colorClass: "hover:border-blue-500/30 hover:bg-blue-950/10",
    iconBg: "border-blue-800/30 bg-blue-950/20",
  },
  {
    icon: <Sparkles className="size-7 " />,
    title: "Smart Job Matching",
    description:
      "AI-powered algorithms match you with opportunities that align with your skills and goals.",
    colorClass: "hover:border-indigo-500/30 hover:bg-indigo-950/10",
    iconBg: "border-indigo-800/30 bg-indigo-950/20",
  },
  {
    icon: <ShieldCheck className="size-7 " />,
    title: "Secure & Private",
    description:
      "Your data is secure with enterprise-grade security and privacy controls.",
    colorClass: "hover:border-emerald-500/30 hover:bg-emerald-950/10",
    iconBg: "border-emerald-800/30 bg-emerald-950/20",
  },
  // Row 2
  {
    icon: <TrendingUp className="size-7 " />,
    title: "Real-time Insights",
    description:
      "Track your profile views, connection requests, and job post performance stats.",
    colorClass: "hover:border-amber-500/30 hover:bg-amber-950/10",
    iconBg: "border-amber-800/30 bg-amber-950/20",
  },
  {
    icon: <Globe className="size-7 " />,
    title: "Global Networking",
    description:
      "Expand your reach and collaborate with professionals from all around the world.",
    colorClass: "hover:border-cyan-500/30 hover:bg-cyan-950/10",
    iconBg: "border-cyan-800/30 bg-cyan-950/20",
  },
  {
    icon: <MessageSquare className="size-7 " />,
    title: "Seamless Chat",
    description:
      "Communicate directly with connections and peers with built-in instant messaging.",
    colorClass: "hover:border-rose-500/30 hover:bg-rose-950/10",
    iconBg: "border-rose-800/30 bg-rose-950/20",
  },
];

export function WhyChooseUsSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="container-custom">
        <h2 className="text-4xl font-medium text-white sm:text-5xl">
          Why choose us?
        </h2>
        <p className="mt-4 text-lg font-medium text-gray-400 mb-8">
          Experience the future of professional networking with our innovative
          features.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative h-full border border-gray-700 bg-gray-950 p-7 flex flex-col justify-start gap-0 rounded-2xl"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                borderWidth={2}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="flex size-16 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/50 text-white mb-6">
                {feature.icon}
              </div>
              <div className="text-2xl font-medium text-white block w-full mb-2">
                {feature.title}
              </div>
              <div className="text-lg text-gray-400 block w-full">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
