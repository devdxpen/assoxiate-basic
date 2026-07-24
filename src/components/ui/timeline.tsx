"use client";

import { useScroll, useTransform, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

function TimelineItem({ item, index }: { item: TimelineEntry; index: number }) {
	const itemRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(itemRef, { once: true, margin: "0px" });
	const isEven = index % 2 === 0;

	return (
		<div
			ref={itemRef}
			className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-0 md:gap-8"
		>
			{/* Left content (visible on even steps) */}
			<motion.div
				initial={{ opacity: 0, x: isEven ? -60 : 0 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
				className={`hidden md:block ${isEven ? "" : "pointer-events-none"}`}
			>
				{isEven ? (
					<div className="flex justify-end">
						<div className="w-full max-w-md">{item.content}</div>
					</div>
				) : (
					<div />
				)}
			</motion.div>

			{/* Center dot */}
			<div className="relative flex flex-col items-center">
				<motion.div
					initial={{ scale: 0 }}
					animate={isInView ? { scale: 1 } : {}}
					transition={{
						duration: 0.4,
						ease: [0.22, 1, 0.36, 1],
						delay: 0.05,
					}}
					className="relative z-10 flex size-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white shadow-md"
				>
					<span className="text-lg font-bold text-gray-900">
						{String(index + 1).padStart(2, "0")}
					</span>
				</motion.div>
			</div>

			{/* Right content (visible on odd steps) */}
			<motion.div
				initial={{ opacity: 0, x: isEven ? 0 : 60 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
				className={`hidden md:block ${!isEven ? "" : "pointer-events-none"}`}
			>
				{!isEven ? (
					<div className="flex justify-start">
						<div className="w-full max-w-md">{item.content}</div>
					</div>
				) : (
					<div />
				)}
			</motion.div>

			{/* Mobile content (always visible, below the dot) */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
				className="mt-4 md:hidden col-span-1"
			>
				{item.content}
			</motion.div>
		</div>
	);
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
	const ref = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 20%", "end 60%"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full font-sans" ref={containerRef}>
			<div ref={ref} className="relative mx-auto max-w-5xl space-y-16 pb-20 md:space-y-24">
				{data.map((item, index) => (
					<TimelineItem key={index} item={item} index={index} />
				))}

				{/* Centered animated line */}
				<div
					style={{ height: height + "px" }}
					className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 overflow-hidden md:block w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-gray-900 via-gray-400 to-transparent from-[0%] via-[10%]"
					/>
				</div>

				{/* Mobile left-aligned line */}
				<div
					style={{ height: height + "px" }}
					className="pointer-events-none absolute left-[27px] top-0 block overflow-hidden md:hidden w-[2px] bg-gradient-to-b from-transparent via-gray-200 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-gray-900 via-gray-400 to-transparent from-[0%] via-[10%]"
					/>
				</div>
			</div>
		</div>
	);
};
