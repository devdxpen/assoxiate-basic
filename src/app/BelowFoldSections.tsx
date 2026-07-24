"use client";

// This wrapper is a Client Component — required because ssr: false is only
// allowed inside Client Components in Next.js App Router (v16+).
// page.tsx stays a pure Server Component for the fastest FCP.

import dynamic from "next/dynamic";

function SectionSkeleton({ height = "py-20" }: { height?: string }) {
	return <div className={`${height} bg-transparent`} aria-hidden="true" />;
}

const WhyChooseUsSection = dynamic(
	() =>
		import("@/features/landing/components/WhyChooseUsSection").then((m) => m.WhyChooseUsSection),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const NetworkBanner = dynamic(
	() => import("@/features/landing/components/NetworkBanner").then((m) => m.NetworkBanner),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const JobsSection = dynamic(
	() => import("@/features/landing/components/JobsSection").then((m) => m.JobsSection),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const ProfessionalsSection = dynamic(
	() =>
		import("@/features/landing/components/ProfessionalsSection").then(
			(m) => m.ProfessionalsSection,
		),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const ArticlesSection = dynamic(
	() => import("@/features/landing/components/ArticlesSection").then((m) => m.ArticlesSection),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const TestimonialsSection = dynamic(
	() =>
		import("@/features/landing/components/TestimonialsSection").then((m) => m.TestimonialsSection),
	{ ssr: false, loading: () => <SectionSkeleton /> },
);

const CTASection = dynamic(
	() => import("@/features/landing/components/CTASection").then((m) => m.CTASection),
	{ ssr: false, loading: () => <SectionSkeleton height="py-16" /> },
);

const Footer = dynamic(() => import("@/components/layout/footer").then((m) => m.Footer), {
	ssr: false,
	loading: () => <SectionSkeleton height="py-12" />,
});

export function BelowFoldSections() {
	return (
		<>
			<WhyChooseUsSection />
			<NetworkBanner />
			<JobsSection />
			<ProfessionalsSection />
			<ArticlesSection />
			<TestimonialsSection />
			<CTASection />
			<Footer />
		</>
	);
}
