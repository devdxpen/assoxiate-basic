"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Activity, Briefcase, Package, ShoppingBag } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView, duration]);

  return count;
}

function StatItem({ icon, value, suffix, label, delay }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const count = useCountUp(value, isInView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] sm:p-8"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex size-12 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.05] text-white/70 transition-colors group-hover:border-[#6f79ff]/30 group-hover:text-[#6f79ff]">
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        {count}
        <span className="text-[#6f79ff]">{suffix}</span>
      </div>
      <p className="text-sm font-semibold text-[#737373]">{label}</p>
    </div>
  );
}

const stats = [
  {
    icon: <Activity className="size-5" />,
    value: 18,
    suffix: "k+",
    label: "Active Users",
  },
  {
    icon: <Briefcase className="size-5" />,
    value: 5,
    suffix: "k+",
    label: "Services Listed",
  },
  {
    icon: <Package className="size-5" />,
    value: 1,
    suffix: "k+",
    label: "Products Listed",
  },
  {
    icon: <ShoppingBag className="size-5" />,
    value: 2,
    suffix: "k+",
    label: "Jobs Posted",
  },
];

export function StatsSection() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-black py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(111,121,255,0.06),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          label="Live insights business"
          title="Real-time statistics showcasing our growing community"
          subtitle="Real-time statistics showcasing our growing community and success stories."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
