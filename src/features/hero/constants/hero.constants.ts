import { HeroStat, GlobeMarker, PersonNodeData } from "../types/hero.types";

export const HERO_STATS: HeroStat[] = [
  { end: 18, suffix: "k", label: "Active Users" },
  { end: 5, suffix: "k", label: "Services Created" },
  { end: 1, suffix: "k", label: "Products Listed" },
  { end: 2, suffix: "k", label: "Jobs Posted" },
];

export const GLOBE_MARKERS: GlobeMarker[] = [
  { location: [19.076, 72.8777], size: 0.08 }, // Mumbai
  { location: [28.6139, 77.209], size: 0.07 }, // New Delhi
  { location: [12.9716, 77.5946], size: 0.07 }, // Bengaluru
  { location: [37.7749, -122.4194], size: 0.08 }, // San Francisco
  { location: [40.7128, -74.006], size: 0.07 }, // New York
  { location: [51.5074, -0.1278], size: 0.08 }, // London
  { location: [52.52, 13.405], size: 0.07 }, // Berlin
  { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
  { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
  { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
  { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
  { location: [-23.5505, -46.6333], size: 0.07 }, // São Paulo
];

export const NETWORK_NODES: PersonNodeData[] = [
  {
    id: "1",
    name: "Ananya Iyer",
    designation: "Lead Product Designer",
    location: "Mumbai, India",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
    initials: "AI",
    position: { left: "14%", top: "18%" },
    delay: 0,
    isOnline: true,
  },
  {
    id: "2",
    name: "Alex Rivera",
    designation: "Full-Stack Architect",
    location: "San Francisco, USA",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    initials: "AR",
    position: { left: "84%", top: "20%" },
    delay: 0.4,
    isOnline: true,
  },
  {
    id: "3",
    name: "Marcus Chen",
    designation: "Tech Lead @ TechNova",
    location: "London, UK",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    initials: "MC",
    position: { left: "84%", top: "78%" },
    delay: 0.8,
    isOnline: true,
  },
  {
    id: "4",
    name: "Sarah Jenkins",
    designation: "Product Strategist",
    location: "Berlin, Germany",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
    initials: "SJ",
    position: { left: "16%", top: "76%" },
    delay: 1.2,
    isOnline: true,
  },
];
