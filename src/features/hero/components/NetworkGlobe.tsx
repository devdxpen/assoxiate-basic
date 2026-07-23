"use client";

import dynamic from "next/dynamic";
import { GlobeConfig } from "@/components/3d/globe";

const World = dynamic(
  () => import("@/components/3d/globe").then((m) => m.World),
  { ssr: false }
);

const sampleArcs = [
  {
    order: 1,
    startLat: 28.6139,
    startLng: 77.209,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.3,
    color: "#38bdf8",
  },
  {
    order: 2,
    startLat: 19.076,
    startLng: 72.8777,
    endLat: 51.5074,
    endLng: -0.1278,
    arcAlt: 0.25,
    color: "#6366f1",
  },
  {
    order: 3,
    startLat: 51.5074,
    startLng: -0.1278,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.2,
    color: "#a855f7",
  },
  {
    order: 4,
    startLat: 35.6762,
    startLng: 139.6503,
    endLat: 1.3521,
    endLng: 103.8198,
    arcAlt: 0.15,
    color: "#38bdf8",
  },
  {
    order: 5,
    startLat: 25.2048,
    startLng: 55.2708,
    endLat: 52.52,
    endLng: 13.405,
    arcAlt: 0.22,
    color: "#6366f1",
  },
  {
    order: 6,
    startLat: -33.8688,
    startLng: 151.2093,
    endLat: 37.7749,
    endLng: -122.4194,
    arcAlt: 0.35,
    color: "#a855f7",
  },
  {
    order: 7,
    startLat: 12.9716,
    startLng: 77.5946,
    endLat: 25.2048,
    endLng: 55.2708,
    arcAlt: 0.18,
    color: "#38bdf8",
  },
  {
    order: 8,
    startLat: -23.5505,
    startLng: -46.6333,
    endLat: 40.7128,
    endLng: -74.006,
    arcAlt: 0.3,
    color: "#6366f1",
  },
];

const globeConfig: GlobeConfig = {
  pointSize: 1,
  globeColor: "#030712",
  showAtmosphere: true,
  atmosphereColor: "#38bdf8",
  atmosphereAltitude: 0.18,
  polygonColor: "rgba(56, 189, 248, 0.45)",
  emissive: "#030712",
  emissiveIntensity: 0.1,
  shininess: 0.9,
  ambientLight: "#38bdf8",
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
  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
      <World globeConfig={globeConfig} data={sampleArcs} />
    </div>
  );
}
