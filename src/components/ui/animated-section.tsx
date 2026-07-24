"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	id?: string;
}

export function AnimatedSection({ children, className, delay = 0, id }: AnimatedSectionProps) {
	const ref = useRef<HTMLDivElement>(null);
	// margin: "-50px" — fires when 50px of element is inside viewport (avoids premature trigger)
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<motion.section
			ref={ref}
			id={id}
			initial={{ opacity: 0, y: 24 }}
			animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
			transition={{
				duration: 0.5,
				delay,
				ease: [0.16, 1, 0.3, 1],
			}}
			className={cn(className)}
		>
			{children}
		</motion.section>
	);
}
