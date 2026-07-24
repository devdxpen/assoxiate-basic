"use client";

import type React from "react";
import {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import { cn } from "@/lib/utils";

export interface CardItemProps {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	translateX?: number | string;
	translateY?: number | string;
	translateZ?: number | string;
	rotateX?: number | string;
	rotateY?: number | string;
	rotateZ?: number | string;
	[key: string]: unknown;
}
// Context type define
type MouseEnterContextType = [boolean, Dispatch<SetStateAction<boolean>>];

// Context create
const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

export const CardContainer = ({
	children,
	className,
	containerClassName,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isMouseEntered, setIsMouseEntered] = useState(false);

	// Mouse move effect
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		const { left, top, width, height } = containerRef.current.getBoundingClientRect();
		const x = (e.clientX - left - width / 2) / 25;
		const y = (e.clientY - top - height / 2) / 25;
		containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
	};

	// Mouse enter
	const handleMouseEnter = (_e: React.MouseEvent<HTMLDivElement>) => {
		setIsMouseEntered(true);
		if (!containerRef.current) return;
	};

	// Mouse leave
	const handleMouseLeave = (_e: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) return;
		setIsMouseEntered(false);
		containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
	};

	return (
		<MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
			<div className={cn(containerClassName)} style={{ perspective: "1000px" }}>
				<div
					ref={containerRef}
					onMouseEnter={handleMouseEnter}
					onMouseMove={handleMouseMove}
					onMouseLeave={handleMouseLeave}
					role="presentation"
					className={cn("relative transition-all duration-200 ease-linear", className)}
					style={{ transformStyle: "preserve-3d" }}
				>
					{children}
				</div>
			</div>
		</MouseEnterContext.Provider>
	);
};

// Card Body
export const CardBody = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}
		>
			{children}
		</div>
	);
};

// Card Item
export const CardItem = ({
	as: Tag = "div",
	children,
	className,
	translateX = 0,
	translateY = 0,
	translateZ = 0,
	rotateX = 0,
	rotateY = 0,
	rotateZ = 0,
	...rest
}: CardItemProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMouseEntered] = useMouseEnter();

	useEffect(() => {
		if (!ref.current) return;
		if (isMouseEntered) {
			ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
		} else {
			ref.current.style.transform =
				"translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
		}
	}, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

	const TagComponent = Tag as any;

	return (
		<TagComponent
			ref={ref}
			className={cn("w-fit transition duration-200 ease-linear", className)}
			{...rest}
		>
			{children}
		</TagComponent>
	);
};

// Hook for Context
export const useMouseEnter = (): MouseEnterContextType => {
	const context = useContext(MouseEnterContext);
	if (context === undefined) {
		throw new Error("useMouseEnter must be used within a MouseEnterProvider");
	}
	return context;
};
