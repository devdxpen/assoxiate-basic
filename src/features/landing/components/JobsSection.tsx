"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Code2,
  Megaphone,
  Percent,
  Globe,
  Plus,
  GraduationCap,
  Mail,
  Zap,
} from "lucide-react";
import { GlowingEffect } from "@/components/3d/glowingEffect";

const jobCategories = [
  { name: "Technology", count: "5,400+ jobs", icon: <Code2 className="size-7" /> },
  { name: "Marketing", count: "3,200+ jobs", icon: <Megaphone className="size-7" /> },
  { name: "Finance", count: "1,700+ jobs", icon: <Percent className="size-7" /> },
  { name: "Design", count: "4,300+ jobs", icon: <Globe className="size-7" /> },
  { name: "Healthcare", count: "1,600+ jobs", icon: <Plus className="size-7" /> },
  { name: "Education", count: "700+ jobs", icon: <GraduationCap className="size-7" /> },
  { name: "Business", count: "1,100+ jobs", icon: <Mail className="size-7" /> },
  { name: "Engineering", count: "1,800+ jobs", icon: <Zap className="size-7" /> },
];

export function JobsSection() {
  return (
   <div className="container-custom">
        <SectionHeading
          title=""
          subtitle=""
        />
         <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="mb-3 text-4xl font-medium text-white sm:text-5xl">
             Find the right job or internship for you
            </h2>
            <p className="text-gray-400">Discover thousands of opportunities across diverse industries and find your perfect match</p>
          </div>
          <Button
            variant="default"
            size="lg"
          >
            Explore Jobs Now
            <ArrowRight className="size-4 ml-1.5" strokeWidth={2.6} />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {jobCategories.map((category) => (
            <div
              key={category.name}
              className="group relative rounded-xl bg-gray-950 p-7"
            >
               <GlowingEffect
                  spread={40}
                  glow={true}
                  borderWidth={2}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                />
              <div className="mb-5 flex size-16 items-center justify-center rounded-xl border border-gray-800 text-white">
                {category.icon}
              </div>
              <h3 className="text-2xl font-medium text-white">
                {category.name}
              </h3>
              <p className="mt-1 text-xs text-gray-400">
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
}
