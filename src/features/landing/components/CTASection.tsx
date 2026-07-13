"use client";

import React, { Suspense } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LiquidMetal from "@/components/ui/liquid-metal";

export function CTASection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-950 shadow-md">
          <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
            <Suspense fallback={<div className="size-full bg-gray-950" />}>
              <LiquidMetal
                colorBack="#030712"
                colorTint="#99A1AF"
                shape="none"
                speed={0.5}
                scale={1}
                softness={0.15}
                repetition={1.5}
                distortion={0.12}
                contour={0.4}
                shiftRed={0.3}
                shiftBlue={0.5}
                angle={90}
                style={{ width: "100%", height: "100%" }}
              />
            </Suspense>
          </div>
          <div className="relative flex flex-col items-center gap-6 px-8 py-16 text-center sm:px-12 sm:py-20 lg:py-24 z-10">
            <h2 className="text-4xl font-medium text-white sm:text-5xl">
              Ready to transform your
              <span className="mt-1 block">professional journey?</span>
            </h2>
            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-400">
              Join thousands of professionals who are already growing their careers, businesses, and networks on Assxiate.
            </p>
            <Button
              size="lg"
              className="mt-4"
            >
              Join Now — It&apos;s Free
              <ArrowRight className="size-4 ml-1.5" strokeWidth={2.6} />
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
