"use client";

import gsap from "gsap";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.ComponentPropsWithoutRef<"div"> {
	children: React.ReactNode;
	durationSec?: number;
	reverse?: boolean;
	baseTimeScale?: number;
	maxTimeScale?: number;
	wheelGain?: number;
	touchGain?: number;
	gapPx?: number;
}

export function Marquee({
	className,
	children,
	durationSec = 80,
	reverse = false,
	baseTimeScale = 0.7,
	maxTimeScale = 6,
	wheelGain = 1 / 30,
	touchGain = 1 / 30,
	gapPx = 24,
	...props
}: MarqueeProps) {
	const trackRef = React.useRef<HTMLDivElement | null>(null);
	const clipRef = React.useRef<HTMLDivElement | null>(null);

	const xRef = React.useRef(0);
	const vRef = React.useRef(0);
	const vtRef = React.useRef(0);
	const lastYRef = React.useRef(0);
	const speedPxPerSecRef = React.useRef(80);
	const gapRef = React.useRef<number>(gapPx);

	const recalc = React.useCallback(() => {
		const track = trackRef.current;
		if (!track) return;

		const style = getComputedStyle(track);
		const gap = parseFloat(style.columnGap || "") || gapPx;
		gapRef.current = gap;

		let totalWidth = 0;
		Array.from(track.children).forEach((child) => {
			totalWidth += (child as HTMLElement).offsetWidth;
		});
		totalWidth += (track.children.length - 1) * gap;
		totalWidth = Math.max(totalWidth, 1);

		speedPxPerSecRef.current = totalWidth / Math.max(durationSec, 0.001);
	}, [durationSec, gapPx]);

	React.useLayoutEffect(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		if (mq.matches) return;

		recalc();
		const resizeObs = new ResizeObserver(recalc);
		if (trackRef.current) resizeObs.observe(trackRef.current);
		if (clipRef.current) resizeObs.observe(clipRef.current);

		const dir = reverse ? -1 : 1;
		const applyXAndRecycle = () => {
			const track = trackRef.current;
			const clip = clipRef.current;
			if (!track || !clip) return;

			gsap.set(track, { x: xRef.current, force3D: true });

			const children = Array.from(track.children) as HTMLElement[];
			if (children.length === 0) return;

			const wrapRect = clip.getBoundingClientRect();

			if (reverse) {
				// Right to Left
				const first = children[0];
				const firstRect = first.getBoundingClientRect();
				if (firstRect.right < wrapRect.left - 20) {
					const move = first.offsetWidth + gapRef.current;
					xRef.current += move;
					track.appendChild(first); // પહેલાને છેલ્લે મૂકો
					gsap.set(track, { x: xRef.current, force3D: true });
				}
			} else {
				// Left to Right
				const last = children[children.length - 1];
				const lastRect = last.getBoundingClientRect();
				if (lastRect.left > wrapRect.right + 20) {
					const move = last.offsetWidth + gapRef.current;
					xRef.current -= move;
					track.insertBefore(last, track.firstChild); // છેલ્લાને પહેલા મૂકો
					gsap.set(track, { x: xRef.current, force3D: true });
				}
			}
		};

		const tick = () => {
			vtRef.current *= 0.94;
			vRef.current += (vtRef.current - vRef.current) * 0.18;

			const timeScale = Math.min(
				maxTimeScale,
				Math.max(baseTimeScale, baseTimeScale + Math.abs(vRef.current)),
			);

			const delta = (gsap.ticker.deltaRatio() || 1) * (1 / 60);
			const dx = dir * speedPxPerSecRef.current * timeScale * delta;

			xRef.current += dx;
			applyXAndRecycle();
		};

		gsap.ticker.add(tick);

		const onWheel = (e: WheelEvent) => {
			vtRef.current += Math.abs(e.deltaY) * wheelGain;
		};
		const onTouchStart = (e: TouchEvent) => {
			lastYRef.current = e.touches[0]?.clientY ?? 0;
		};
		const onTouchMove = (e: TouchEvent) => {
			const y = e.touches[0]?.clientY ?? 0;
			vtRef.current += Math.abs(y - lastYRef.current) * touchGain;
			lastYRef.current = y;
		};

		window.addEventListener("wheel", onWheel, { passive: true });
		window.addEventListener("touchstart", onTouchStart, { passive: true });
		window.addEventListener("touchmove", onTouchMove, { passive: true });

		return () => {
			window.removeEventListener("wheel", onWheel);
			window.removeEventListener("touchstart", onTouchStart);
			window.removeEventListener("touchmove", onTouchMove);
			resizeObs.disconnect();
			gsap.ticker.remove(tick);
		};
	}, [reverse, baseTimeScale, maxTimeScale, wheelGain, touchGain, recalc]);

	return (
		<div ref={clipRef} className={cn("relative overflow-hidden group", className)} {...props}>
			<div
				ref={trackRef}
				className="flex w-max will-change-transform"
				style={{ columnGap: `${gapPx}px` } as React.CSSProperties}
			>
				{children}
			</div>
		</div>
	);
}
