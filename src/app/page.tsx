import { HeroSection } from "@/features/hero/components/HeroSection";
import { LandingSections } from "@/features/landing/components/LandingSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <LandingSections />
    </main>
  );
}
