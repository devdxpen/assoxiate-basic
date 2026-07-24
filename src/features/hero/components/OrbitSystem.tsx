"use client";

import React, { useEffect, useRef } from "react";
import { Key, User, Briefcase, Settings, Box, Folder } from "lucide-react";

interface OrbitNode {
	icon: React.ReactNode;
}

const orbitingIcons: OrbitNode[] = [
	{ icon: <Key className="size-5 text-white" /> },
	{ icon: <User className="size-5 text-white" /> },
	{ icon: <Briefcase className="size-5 text-white" /> },
	{ icon: <Settings className="size-5 text-white" /> },
	{ icon: <Box className="size-5 text-white" /> },
	{ icon: <Folder className="size-5 text-white" /> },
];

export function OrbitSystem() {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let animId: number;
		let t = 0;

		const container = containerRef.current;
		if (!container) return;
		const nodes = Array.from(container.querySelectorAll(".orbit-node")) as HTMLElement[];

		const tick = () => {
			t += 0.004;
			const width = container.clientWidth;
			const height = container.clientHeight;
			const cx = width / 2;
			const cy = height / 2;
			const rx = width * 0.46;
			const ry = height * 0.22;

			nodes.forEach((node, index) => {
				let theta = 0;
				let angle = 0;

				if (index === 0 || index === 1) {
					theta = (-30 * Math.PI) / 180;
					angle = t + (index === 1 ? Math.PI : 0);
				} else if (index === 2 || index === 3) {
					theta = (30 * Math.PI) / 180;
					angle = -t * 0.8 + (index === 3 ? Math.PI : 0) + 1;
				} else {
					theta = (80 * Math.PI) / 180;
					angle = t * 0.7 + (index === 5 ? Math.PI : 0) + 2;
				}
				const xPrime = rx * Math.cos(angle);
				const yPrime = ry * Math.sin(angle);
				const x = xPrime * Math.cos(theta) - yPrime * Math.sin(theta);
				const y = xPrime * Math.sin(theta) + yPrime * Math.cos(theta);
				node.style.left = `${cx + x - 24}px`;
				node.style.top = `${cy + y - 24}px`;
			});

			animId = requestAnimationFrame(tick);
		};

		animId = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(animId);
	}, []);

	return (
		<div ref={containerRef} className="absolute inset-0 z-20 pointer-events-none">
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{ transform: "rotate(-30deg) scaleY(0.48)" }}
			>
				<div className="absolute size-[92%] rounded-full border border-gray-600" />
			</div>
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{ transform: "rotate(30deg) scaleY(0.48)" }}
			>
				<div className="absolute size-[92%] rounded-full border border-gray-600" />
			</div>
			<div
				className="absolute inset-0 flex items-center justify-center"
				style={{ transform: "rotate(80deg) scaleY(0.48)" }}
			>
				<div className="absolute size-[92%] rounded-full border border-gray-600" />
			</div>
			{orbitingIcons.map((node, i) => (
				<div
					key={i}
					className="orbit-node absolute border border-gray-700 bg-gray-950 rounded-xl size-18 flex items-center justify-center shadow-md z-30 transition-transform duration-300 text-5xl pointer-events-auto hover:scale-110"
				>
					{node.icon}
				</div>
			))}
		</div>
	);
}
