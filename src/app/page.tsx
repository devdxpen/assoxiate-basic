// Server Component — no "use client" — fastest possible FCP
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { BelowFoldSections } from "./BelowFoldSections";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			{/* Above-fold — server-rendered for fastest FCP/LCP */}
			<Header />
			<HeroSection />

			{/* Below-fold — client-side lazy loaded via BelowFoldSections */}
			<BelowFoldSections />
		</main>
	);
}
