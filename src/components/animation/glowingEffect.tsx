"use client";

import { cn } from "@/lib/utils";
import { animate } from "motion/react";
import { memo, useCallback, useEffect, useRef } from "react";

// ─── Shared global pointer state ──────────────────────────────────────────────
// Previously each GlowingEffect card added its own pointermove+scroll listener
// to document.body, leading to N×listeners (e.g. 6 on WhyChooseUs section).
// Now we maintain ONE shared module-level event and distribute to subscribers.
// ─────────────────────────────────────────────────────────────────────────────

type MoveHandler = (x: number, y: number) => void;

const subscribers = new Set<MoveHandler>();
let globalListenerActive = false;

function addGlobalSubscriber(fn: MoveHandler) {
	subscribers.add(fn);
	if (!globalListenerActive) {
		globalListenerActive = true;
		window.addEventListener("pointermove", onGlobalPointerMove, { passive: true });
		window.addEventListener("scroll", onGlobalScroll, { passive: true });
	}
}

function removeGlobalSubscriber(fn: MoveHandler) {
	subscribers.delete(fn);
	if (subscribers.size === 0 && globalListenerActive) {
		globalListenerActive = false;
		window.removeEventListener("pointermove", onGlobalPointerMove);
		window.removeEventListener("scroll", onGlobalScroll);
	}
}

let lastX = 0;
let lastY = 0;

function onGlobalPointerMove(e: PointerEvent) {
	lastX = e.clientX;
	lastY = e.clientY;
	for (const fn of subscribers) fn(lastX, lastY);
}

function onGlobalScroll() {
	for (const fn of subscribers) fn(lastX, lastY);
}

// ─── Component ────────────────────────────────────────────────────────────────

export interface GlowingEffectProps {
	blur?: number;
	inactiveZone?: number;
	proximity?: number;
	spread?: number;
	variant?: "default" | "white";
	glow?: boolean;
	className?: string;
	disabled?: boolean;
	movementDuration?: number;
	borderWidth?: number;
}

const GlowingEffect = memo(
	({
		blur = 0,
		inactiveZone = 0.7,
		proximity = 0,
		spread = 20,
		variant = "default",
		glow = false,
		className,
		movementDuration = 2,
		borderWidth = 1,
		disabled = true,
	}: GlowingEffectProps) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const lastPosition = useRef({ x: 0, y: 0 });
		const animationFrameRef = useRef<number>(0);

		const handleMove = useCallback(
			(x: number, y: number) => {
				if (!containerRef.current) return;

				if (animationFrameRef.current) {
					cancelAnimationFrame(animationFrameRef.current);
				}

				animationFrameRef.current = requestAnimationFrame(() => {
					const element = containerRef.current;
					if (!element) return;

					const { left, top, width, height } = element.getBoundingClientRect();
					lastPosition.current = { x, y };

					const center = [left + width * 0.5, top + height * 0.5];
					const distanceFromCenter = Math.hypot(x - center[0], y - center[1]);
					const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

					if (distanceFromCenter < inactiveRadius) {
						element.style.setProperty("--active", "0");
						return;
					}

					const isActive =
						x > left - proximity &&
						x < left + width + proximity &&
						y > top - proximity &&
						y < top + height + proximity;

					element.style.setProperty("--active", isActive ? "1" : "0");

					if (!isActive) return;

					const currentAngle = parseFloat(element.style.getPropertyValue("--start")) || 0;
					const targetAngle =
						(180 * Math.atan2(y - center[1], x - center[0])) / Math.PI + 90;

					const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
					const newAngle = currentAngle + angleDiff;

					animate(currentAngle, newAngle, {
						duration: movementDuration,
						ease: [0.16, 1, 0.3, 1],
						onUpdate: (value) => {
							element.style.setProperty("--start", String(value));
						},
					});
				});
			},
			[inactiveZone, proximity, movementDuration],
		);

		useEffect(() => {
			if (disabled) return;

			const subscriber: MoveHandler = (x, y) => handleMove(x, y);
			addGlobalSubscriber(subscriber);

			return () => {
				if (animationFrameRef.current) {
					cancelAnimationFrame(animationFrameRef.current);
				}
				removeGlobalSubscriber(subscriber);
			};
		}, [handleMove, disabled]);

		return (
			<>
				<div
					className={cn(
						"pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
						glow && "opacity-100",
						variant === "white" && "border-white",
						disabled && "!block",
					)}
				/>
				<div
					ref={containerRef}
					style={
						{
							"--blur": `${blur}px`,
							"--spread": spread,
							"--start": "0",
							"--active": "0",
							"--glowingeffect-border-width": `${borderWidth}px`,
							"--repeating-conic-gradient-times": "5",
							"--gradient":
								variant === "white"
									? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
									: `radial-gradient(circle, #0090F6 10%, #0090F600 20%),
                radial-gradient(circle at 40% 40%, #00B2F6 5%, #00B2F600 15%),
                radial-gradient(circle at 60% 60%, #0090F6 10%, #0090F600 20%), 
                radial-gradient(circle at 40% 60%, #00B2F6 10%, #00B2F600 20%),
                repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  #0090F6 0%,
                  #00B2F6 calc(25% / var(--repeating-conic-gradient-times)),
                  #0090F6 calc(50% / var(--repeating-conic-gradient-times)), 
                  #00B2F6 calc(75% / var(--repeating-conic-gradient-times)),
                  #0090F6 calc(100% / var(--repeating-conic-gradient-times))
                )`,
						} as React.CSSProperties
					}
					className={cn(
						"pointer-events-none absolute inset-0 rounded-[inherit] opacity-100 transition-opacity",
						glow && "opacity-100",
						blur > 0 && "blur-[var(--blur)]",
						className,
						disabled && "!hidden",
					)}
				>
					<div
						className={cn(
							"glow",
							"rounded-[inherit]",
							'after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:rounded-[inherit] after:content-[""]',
							"after:[border:var(--glowingeffect-border-width)_solid_transparent]",
							"after:[background-attachment:fixed] after:[background:var(--gradient)]",
							"after:opacity-[var(--active)] after:transition-opacity after:duration-300",
							"after:[mask-clip:padding-box,border-box]",
							"after:[mask-composite:intersect]",
							"after:[mask-image:linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
						)}
					/>
				</div>
			</>
		);
	},
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
