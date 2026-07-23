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

export const NETWORK_NODES: NetworkNodeData[] = [
  {
    id: "1",
    type: "user",
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
    type: "job",
    jobTitle: "Sr. Full-Stack Engineer",
    companyName: "TechNova Systems",
    location: "San Francisco, USA",
    salaryRange: "$140k - $180k",
    jobType: "Remote • Full-time",
    avatarUrl:
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=300",
    position: { left: "84%", top: "20%" },
    delay: 0.4,
    badgeText: "Hiring Now",
  },
  {
    id: "3",
    type: "company",
    companyName: "Nexus AI Labs",
    industry: "Enterprise AI & Cloud",
    location: "London, UK",
    employeesCount: "50-200 Employees",
    avatarUrl:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300",
    position: { left: "84%", top: "78%" },
    delay: 0.8,
    isVerified: true,
  },
  {
    id: "4",
    type: "product",
    productName: "CloudFlow Analytics",
    category: "SaaS Platform",
    price: "$49 / month",
    rating: "★ 4.9 (120+ reviews)",
    tagline: "Real-time Telemetry Dashboard",
    avatarUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300",
    position: { left: "16%", top: "76%" },
    delay: 1.2,
  },
];
