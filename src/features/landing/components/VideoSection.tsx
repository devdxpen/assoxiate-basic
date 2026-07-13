"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Play } from "lucide-react";

const videoThumbnail =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80";

export function VideoSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(141,92,247,0.04),transparent_50%)]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          title="See it in action"
          subtitle="Watch how professionals are transforming their careers with our platform."
        />
        <div className="group relative overflow-hidden rounded-2xl border border-white/[0.06]">
          <div className="relative aspect-video">
            <Image
              src={videoThumbnail}
              alt="Platform demo video preview"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 960px"
            />
            <div className="pointer-events-none absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/30" />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                type="button"
                className="flex size-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-white/50 hover:bg-white/20 sm:size-20"
                aria-label="Watch Demo"
              >
                <Play className="size-6 fill-white sm:size-8" />
              </button>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md sm:bottom-6 sm:left-6">
              <div className="size-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-xs font-semibold text-white">
                Watch Demo
              </span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
