"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";

const productsBgImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=80";

export function ProductsBanner() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.06]">
          <Image
            src={productsBgImage}
            alt="Digital products and analytics dashboard"
            fill
            className="object-cover opacity-15"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/90 via-black/70 to-black/50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(141,92,247,0.12),transparent_50%)]" />

          <div className="relative flex flex-col items-end gap-6 p-8 text-right sm:p-12 lg:p-16">
            <div className="flex size-12 items-center justify-center rounded-xl bg-[#8d5cf7]/10 text-[#8d5cf7]">
              <Package className="size-6" />
            </div>
            <div className="max-w-xl">
              <h2 className="text-4xl font-medium text-white sm:text-5xl">
                Showcase your products to a professional network
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#8d8d8d] sm:text-lg">
                Highlight your products directly on your profile to increase
                visibility, attract potential buyers, and build credibility
                within your network.
              </p>
            </div>
            <div className="mt-2 flex flex-wrap justify-end gap-3">
              <Button
                size="lg"
              >
                Explore Products
                <ArrowRight className="size-[14px]" strokeWidth={2.6} />
              </Button>
              <Button
                size="lg"
                variant="outline"
              >
                Add Your Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
