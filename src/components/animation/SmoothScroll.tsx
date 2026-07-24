"use client";

import { useEffect } from "react";

// ─── Global lenis reference — accessed without importing lenis at module level ─
let lenisInstance: { resize: () => void } | null = null;

export const refreshScrollHeight = () => {
  lenisInstance?.resize();
};

export function SmoothScroll() {
  useEffect(() => {
    // All heavy imports are deferred inside useEffect.
    // This prevents GSAP (~170KB) and Lenis (~30KB) from blocking the main thread.
    let cleanup: (() => void) | null = null;

    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("lenis"),
    ]).then(([{ gsap }, { ScrollTrigger }, { default: Lenis }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 0.9,
        easing: (t: number) => 1 - (1 - t) ** 3,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      lenisInstance = lenis;

      const tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      const resizeObserver = new ResizeObserver(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      });

      resizeObserver.observe(document.body);

      cleanup = () => {
        gsap.ticker.remove(tickerCallback);
        lenis.destroy();
        lenisInstance = null;
        resizeObserver.disconnect();
      };
    }).catch(console.error);

    return () => {
      cleanup?.();
    };
  }, []);

  return null;
}
