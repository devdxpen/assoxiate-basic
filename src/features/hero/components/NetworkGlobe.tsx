"use client";

import { useEffect, useRef, useState } from "react";
import type { GlobeConfig } from "@/components/animation/globe";

// Globe is only loaded when the component enters the viewport
// This prevents Three.js from blocking the main thread on initial load

const sampleArcs = [
  { order: 1, startLat: 28.6139, startLng: 77.209,   endLat: 37.7749, endLng: -122.4194, arcAlt: 0.3,  color: "#38bdf8" },
  { order: 2, startLat: 19.076,  startLng: 72.8777,  endLat: 51.5074, endLng: -0.1278,   arcAlt: 0.25, color: "#6366f1" },
  { order: 3, startLat: 51.5074, startLng: -0.1278,  endLat: 40.7128, endLng: -74.006,   arcAlt: 0.2,  color: "#a855f7" },
  { order: 4, startLat: 35.6762, startLng: 139.6503, endLat: 1.3521,  endLng: 103.8198,  arcAlt: 0.15, color: "#38bdf8" },
  { order: 5, startLat: 25.2048, startLng: 55.2708,  endLat: 52.52,   endLng: 13.405,    arcAlt: 0.22, color: "#6366f1" },
];

const globeConfig: GlobeConfig = {
  pointSize: 1,
  globeColor: "#9ca3af",
  showAtmosphere: true,
  atmosphereColor: "#d1d5db",
  atmosphereAltitude: 0.15,
  polygonColor: "#000000",
  emissive: "#6b7280",
  emissiveIntensity: 0.2,
  shininess: 0.9,
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
  arcTime: 1200,
  arcLength: 0.85,
  rings: 1,
  maxRings: 3,
  autoRotate: true,
  autoRotateSpeed: 0.8,
};

export function NetworkGlobe() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [GlobeComponent, setGlobeComponent] = useState<React.ComponentType<{ globeConfig: GlobeConfig; data: typeof sampleArcs }> | null>(null);

  // Step 1: Detect when the component enters the viewport
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before entering viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Step 2: Only load the Globe module when visible
  useEffect(() => {
    if (!isVisible) return;

    import("@/components/animation/globe").then((mod) => {
      setGlobeComponent(() => mod.World);
    });
  }, [isVisible]);

  return (
    <div
      ref={wrapperRef}
      className="w-full h-full relative flex items-center justify-center overflow-hidden"
    >
      {GlobeComponent ? (
        <GlobeComponent globeConfig={globeConfig} data={sampleArcs} />
      ) : (
        // Skeleton placeholder — prevents CLS, shows loading state
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80%] aspect-square rounded-full border border-white/10 animate-pulse bg-white/5">
            <div className="absolute inset-4 rounded-full border border-white/5 bg-white/3" />
            <div className="absolute inset-8 rounded-full border border-white/5" />
          </div>
        </div>
      )}
    </div>
  );
}
