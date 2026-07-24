"use client";

import { gsap } from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";

import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";

// Global variable to store lenis instance
let lenisInstance: Lenis | null = null;

// Global function to refresh scroll height
export const refreshScrollHeight = () => {
  if (lenisInstance) {
    lenisInstance.resize();
  }
};

export function SmoothScroll() {
  useEffect(() => {
    let ScrollTrigger: typeof ScrollTriggerType | null = null;
    let rafId: number | null = null;
    let last = 0;

    // Lazy-load plugin on client to improve tree-shaking and SSR safety
    (async () => {
      const mod = await import("gsap/ScrollTrigger");
      ScrollTrigger = mod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
    })();

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - (1 - t) ** 3,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      if (ScrollTrigger && time - last > 50) {
        ScrollTrigger.update();
        last = time;
      }
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    resizeObserver.observe(document.body);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
      resizeObserver.disconnect();
    };
  }, []);

  return null;
}
