"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const MARKER_LOCATIONS: [number, number][] = [
  [14.5995, 120.9842],   // Manila
  [19.076, 72.8777],     // Mumbai
  [23.8103, 90.4125],    // Dhaka
  [30.0444, 31.2357],    // Cairo
  [39.9042, 116.4074],   // Beijing
  [-23.5505, -46.6333],  // São Paulo
  [19.4326, -99.1332],   // Mexico City
  [40.7128, -74.006],    // New York
  [34.6937, 135.5022],   // Osaka
  [41.0082, 28.9784],    // Istanbul
  [51.5074, -0.1278],    // London
  [48.8566, 2.3522],     // Paris
  [-33.8688, 151.2093],  // Sydney
  [1.3521, 103.8198],    // Singapore
  [55.7558, 37.6173],    // Moscow
  [35.6762, 139.6503],   // Tokyo
  [-1.2921, 36.8219],    // Nairobi
  [25.2048, 55.2708],    // Dubai
];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0.1, 0.6, 1],
  glowColor: [1, 1, 1],
  markers: MARKER_LOCATIONS.map((location) => ({
    location,
    size: 0.08,
  })),
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const lastRenderTime = useRef(0);

  const TARGET_FPS = 25;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state) => {
        const now = performance.now();
        if (now - lastRenderTime.current < FRAME_INTERVAL) return;
        lastRenderTime.current = now;

        if (!pointerInteracting.current) phiRef.current += 0.005;
        state.phi = phiRef.current + rs.get();
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;

        state.markers = MARKER_LOCATIONS.map((location, i) => ({
          location,
          size: 0.06 + Math.sin(now * 0.003 + i * 0.8) * 0.03,
        }));
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0);
    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
