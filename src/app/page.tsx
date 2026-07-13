<<<<<<< HEAD
import { HeroSection } from "@/features/hero/components/HeroSection";
import { LandingSections } from "@/features/landing/components/LandingSections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <HeroSection />
      <LandingSections />
=======
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { WhyChooseUsSection } from "@/features/landing/components/WhyChooseUsSection";
import { NetworkBanner } from "@/features/landing/components/NetworkBanner";
import { JobsSection } from "@/features/landing/components/JobsSection";
import { ProfessionalsSection } from "@/features/landing/components/ProfessionalsSection";
import { ArticlesSection } from "@/features/landing/components/ArticlesSection";
import { TestimonialsSection } from "@/features/landing/components/TestimonialsSection";
import { CTASection } from "@/features/landing/components/CTASection";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <NetworkBanner />
      <JobsSection />
      <ProfessionalsSection />
      <ArticlesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
>>>>>>> dc0db1e61bdf7e9034fb64da12a071622db78145
    </main>
  );
}
