"use client";
import { useMemo } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
	Briefcase,
	Building2,
	CheckCircle2,
	DollarSign,
	MapPin,
	Package,
	Tag,
	User,
	Users,
} from "lucide-react";
// Entry animation only — no infinite JS-driven motion loop
import { motion } from "motion/react";
import { NETWORK_NODES } from "../constants/hero.constants";
import {
	CompanyNodeData,
	JobNodeData,
	NetworkNodeData,
	ProductNodeData,
	UserNodeData,
} from "../types/hero.types";

interface NodeProps {
	data: NetworkNodeData;
	index: number;
}

function SingleNetworkNode({ data, index }: NodeProps) {
	const { type, position, delay } = data;

	const getNodeConfig = () => {
		switch (type) {
			case "user":
				return {
					glow: "from-white/30 to-neutral-300/30 group-hover:border-white/80 group-hover:shadow-white/20",
					border: "border-white/30",
					BadgeIcon: User,
					badgeBg: "text-white",
					tagLabel: "User Profile",
					tagBg: "bg-white/10 text-white border-white/20",
				};
			case "job":
				return {
					glow: "from-emerald-500/30 to-teal-500/30 group-hover:border-emerald-400/80 group-hover:shadow-emerald-500/30",
					border: "border-emerald-500/30",
					BadgeIcon: Briefcase,
					badgeBg: "text-emerald-300",
					tagLabel: "Job Hiring",
					tagBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
				};
			case "company":
				return {
					glow: "from-white/30 to-neutral-300/30 group-hover:border-white/80 group-hover:shadow-white/20",
					border: "border-white/30",
					BadgeIcon: Building2,
					badgeBg: "text-white",
					tagLabel: "Company Profile",
					tagBg: "bg-white/10 text-white border-white/20",
				};
			case "product":
				return {
					glow: "from-teal-500/30 to-cyan-500/30 group-hover:border-teal-400/80 group-hover:shadow-teal-500/30",
					border: "border-teal-500/30",
					BadgeIcon: Package,
					badgeBg: "text-teal-300",
					tagLabel: "Product",
					tagBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
				};
		}
	};

	const config = getNodeConfig();
	const BadgeIconComponent = config.BadgeIcon;

	// CSS animation class — each node gets a staggered delay via inline style
	// This replaces 8 JS-driven RAF motion.div float loops with pure CSS
	const floatDuration = 4 + (index % 3) * 0.8; // slight variation per node

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.85, y: 12 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
			className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
			style={{
				left: position.left,
				top: position.top,
			}}
		>
			{/* CSS float animation — zero JS cost at runtime vs motion infinite loop */}
			<div
				style={{
					animation: `nodeFloat ${floatDuration}s ease-in-out infinite`,
					animationDelay: `${delay}s`,
				}}
			>
				<Tooltip>
					<TooltipTrigger className="focus:outline-none block cursor-pointer group">
						<div
							className={`relative p-1 rounded-full bg-neutral-950/85 ${config.border} backdrop-blur-xl shadow-lg transition-all duration-300 group-hover:scale-110 ${config.glow}`}
						>
							{/* Subtle outer pulse ring */}
							<span
								className={`absolute -inset-1 rounded-full bg-gradient-to-r ${config.glow} blur-sm opacity-60 group-hover:opacity-100 transition-opacity`}
							/>

							<Avatar size="xl" className="relative size-10 sm:size-11 ring-1 ring-white/10">
								{data.avatarUrl && (
									<AvatarImage
										src={data.avatarUrl}
										alt={
											type === "user"
												? data.name
												: type === "job"
													? data.jobTitle
													: type === "company"
														? data.companyName
														: data.productName
										}
										className="object-cover"
									/>
								)}
								<AvatarFallback className="bg-neutral-900 text-white text-xs font-bold border border-neutral-800 flex items-center justify-center">
									<BadgeIconComponent className="size-4 text-neutral-300" />
								</AvatarFallback>
								<div
									className={`absolute -bottom-1 -right-1 p-1.5 rounded-full border bg-background shadow-sm ${config.badgeBg}`}
								>
									<BadgeIconComponent className="size-2.5 sm:size-3" />
								</div>
							</Avatar>
						</div>
					</TooltipTrigger>

					<TooltipContent
						side="top"
						className="border border-neutral-800/90 bg-neutral-950/95 px-3.5 py-3 shadow-2xl shadow-blue-500/10 backdrop-blur-2xl rounded-xl max-w-[250px] text-white"
					>
						{type === "user" && (
							<UserTooltipContent data={data} tagBg={config.tagBg} tagLabel={config.tagLabel} />
						)}
						{type === "job" && (
							<JobTooltipContent data={data} tagBg={config.tagBg} tagLabel={config.tagLabel} />
						)}
						{type === "company" && (
							<CompanyTooltipContent data={data} tagBg={config.tagBg} tagLabel={config.tagLabel} />
						)}
						{type === "product" && (
							<ProductTooltipContent data={data} tagBg={config.tagBg} tagLabel={config.tagLabel} />
						)}
					</TooltipContent>
				</Tooltip>
			</div>
		</motion.div>
	);
}

// ─── Tooltip Content Components ───────────────────────────────────────────────

function UserTooltipContent({
	data,
	tagBg,
	tagLabel,
}: {
	data: UserNodeData;
	tagBg: string;
	tagLabel: string;
}) {
	return (
		<div className="flex flex-col text-left space-y-1.5">
			<div className="flex items-center justify-between gap-2">
				<span
					className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagBg}`}
				>
					<User className="size-3" />
					{tagLabel}
				</span>
				{data.isOnline && (
					<span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
						<span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
						Online
					</span>
				)}
			</div>
			<div>
				<h4 className="font-bold text-xs text-white leading-snug">{data.name}</h4>
				<p className="text-[11px] font-medium text-neutral-300 leading-tight">{data.designation}</p>
			</div>
			<div className="flex items-center gap-1 text-[10px] text-neutral-400 font-medium pt-0.5 border-t border-neutral-800/80">
				<MapPin className="size-3 text-neutral-500 shrink-0" />
				<span className="truncate">{data.location}</span>
			</div>
		</div>
	);
}

function JobTooltipContent({
	data,
	tagBg,
	tagLabel,
}: {
	data: JobNodeData;
	tagBg: string;
	tagLabel: string;
}) {
	return (
		<div className="flex flex-col text-left space-y-1.5">
			<div className="flex items-center justify-between gap-2">
				<span
					className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagBg}`}
				>
					<Briefcase className="size-3" />
					{tagLabel}
				</span>
				{data.badgeText && (
					<span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
						{data.badgeText}
					</span>
				)}
			</div>
			<div>
				<h4 className="font-bold text-xs text-white leading-snug">{data.jobTitle}</h4>
				<p className="text-[11px] font-medium text-emerald-300 leading-tight">{data.companyName}</p>
			</div>
			<div className="space-y-1 pt-0.5 border-t border-neutral-800/80 text-[10px]">
				<div className="flex items-center justify-between text-neutral-300 font-medium">
					<span className="inline-flex items-center gap-1">
						<DollarSign className="size-3 text-emerald-400 shrink-0" />
						{data.salaryRange}
					</span>
					<span className="text-neutral-400">{data.jobType}</span>
				</div>
				<div className="flex items-center gap-1 text-neutral-400">
					<MapPin className="size-3 text-neutral-500 shrink-0" />
					<span className="truncate">{data.location}</span>
				</div>
			</div>
		</div>
	);
}

function CompanyTooltipContent({
	data,
	tagBg,
	tagLabel,
}: {
	data: CompanyNodeData;
	tagBg: string;
	tagLabel: string;
}) {
	return (
		<div className="flex flex-col text-left space-y-1.5">
			<div className="flex items-center justify-between gap-2">
				<span
					className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagBg}`}
				>
					<Building2 className="size-3" />
					{tagLabel}
				</span>
				{data.isVerified && (
					<span className="inline-flex items-center gap-0.5 text-[10px] text-neutral-300 font-medium">
						<CheckCircle2 className="size-3 text-white" />
						Verified
					</span>
				)}
			</div>
			<div>
				<h4 className="font-bold text-xs text-white leading-snug flex items-center gap-1">
					{data.companyName}
				</h4>
				<p className="text-[11px] font-medium text-neutral-300 leading-tight">{data.industry}</p>
			</div>
			<div className="space-y-0.5 pt-0.5 border-t border-neutral-800/80 text-[10px] text-neutral-400">
				<div className="flex items-center gap-1">
					<Users className="size-3 text-neutral-500 shrink-0" />
					<span>{data.employeesCount}</span>
				</div>
				<div className="flex items-center gap-1">
					<MapPin className="size-3 text-neutral-500 shrink-0" />
					<span className="truncate">{data.location}</span>
				</div>
			</div>
		</div>
	);
}

function ProductTooltipContent({
	data,
	tagBg,
	tagLabel,
}: {
	data: ProductNodeData;
	tagBg: string;
	tagLabel: string;
}) {
	return (
		<div className="flex flex-col text-left space-y-1.5">
			<div className="flex items-center justify-between gap-2">
				<span
					className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${tagBg}`}
				>
					<Package className="size-3" />
					{tagLabel}
				</span>
				<span className="inline-flex items-center gap-0.5 text-[10px] text-teal-400 font-semibold">
					{data.rating}
				</span>
			</div>
			<div>
				<h4 className="font-bold text-xs text-white leading-snug">{data.productName}</h4>
				<p className="text-[11px] font-medium text-teal-300 leading-tight">{data.category}</p>
			</div>
			<div className="space-y-0.5 pt-0.5 border-t border-neutral-800/80 text-[10px]">
				{data.tagline && (
					<p className="text-neutral-400 italic text-[10px] leading-tight">
						&ldquo;{data.tagline}&rdquo;
					</p>
				)}
				<div className="flex items-center gap-1 text-teal-400 font-semibold pt-0.5">
					<Tag className="size-3 shrink-0" />
					<span>{data.price}</span>
				</div>
			</div>
		</div>
	);
}

export function NetworkNodes() {
	const nodes = useMemo(() => {
		return NETWORK_NODES.map((node, i) => {
			// Distribute nodes roughly in 4 quadrants but with random offsets
			const angleBase = (i * Math.PI) / 2;
			// Random angle within the quadrant (15 to 75 degrees offset)
			const angleOffset = (15 + Math.random() * 60) * (Math.PI / 180);
			const angle = angleBase + angleOffset;

			// Radius between 38% and 46% to stay within container but outside globe
			const radius = 38 + Math.random() * 8;
			const x = 50 + radius * Math.cos(angle);
			const y = 50 + radius * Math.sin(angle);

			// Line end at the edge of the globe (approx 22% radius)
			const globeRadius = 22;
			const lineX2 = 50 + globeRadius * Math.cos(angle);
			const lineY2 = 50 + globeRadius * Math.sin(angle);

			return {
				data: node,
				x,
				y,
				lineX2,
				lineY2,
			};
		});
	}, []);

	return (
		<TooltipProvider delay={100}>
			<div className="absolute inset-0 pointer-events-none z-20">
				{/* SVG connecting lines */}
				<svg
					className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
					aria-hidden="true"
				>
					<defs>
						<linearGradient id="nodeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
							<stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
						</linearGradient>
					</defs>

					{nodes.map((node) => (
						<motion.line
							key={`line-${node.data.id}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: node.data.delay, ease: "easeOut" }}
							x1={`${node.x}%`}
							y1={`${node.y}%`}
							x2={`${node.lineX2}%`}
							y2={`${node.lineY2}%`}
							stroke="url(#nodeLineGrad)"
							strokeWidth="1"
							strokeDasharray="3 3"
						/>
					))}
				</svg>

				{nodes.map((node, i) => (
					<SingleNetworkNode
						key={node.data.id}
						data={{ ...node.data, position: { left: `${node.x}%`, top: `${node.y}%` } }}
						index={i}
					/>
				))}
			</div>
		</TooltipProvider>
	);
}
