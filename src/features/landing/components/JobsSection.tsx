"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Code2, Megaphone, Percent, Globe, Plus, GraduationCap, Mail, Zap } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { CardBody, CardContainer, CardItem } from "@/components/animation/3DCard.component";
import { Heading } from "@/components/animation/Heading";

const jobCategories = [
	{
		id: 1,
		name: "Technology",
		count: "5,400+ jobs",
		icon: <Code2 className="size-7" />,
	},
	{
		id: 2,
		name: "Marketing",
		count: "3,200+ jobs",
		icon: <Megaphone className="size-7" />,
	},
	{
		id: 3,
		name: "Finance",
		count: "1,700+ jobs",
		icon: <Percent className="size-7" />,
	},
	{
		id: 4,
		name: "Design",
		count: "4,300+ jobs",
		icon: <Globe className="size-7" />,
	},
	{
		id: 5,
		name: "Healthcare",
		count: "1,600+ jobs",
		icon: <Plus className="size-7" />,
	},
	{
		id: 6,
		name: "Education",
		count: "700+ jobs",
		icon: <GraduationCap className="size-7" />,
	},
	{
		id: 7,
		name: "Business",
		count: "1,100+ jobs",
		icon: <Mail className="size-7" />,
	},
	{
		id: 8,
		name: "Engineering",
		count: "1,800+ jobs",
		icon: <Zap className="size-7" />,
	},
];

interface CategoryCardProps {
	name: string;
	count: string;
	icon: React.ReactNode;
}

function CategoryCard({ name, count, icon }: CategoryCardProps) {
	return (
		<CardContainer
			containerClassName="h-full"
			className="h-full w-[300px] border border-gray-700 bg-gray-950 p-6 rounded-2xl"
		>
			<CardBody className="h-full w-full flex gap-4 items-center">
				<CardItem
					translateZ={30}
					className="flex h-16! w-16! items-center justify-center rounded-xl border border-gray-700 bg-black"
				>
					{icon}
				</CardItem>
				<CardItem translateZ={50} className="text-2xl font-medium block w-full">
					<h3 className="h5 text-white">{name}</h3>
					<p className="mt-1 text-sm text-gray-300">{count}</p>
				</CardItem>
			</CardBody>
		</CardContainer>
	);
}

export function JobsSection() {
	return (
		<section id="jobs" className="py-20 overflow-hidden container-custom ">
			<div className="bg-black p-20 rounded-2xl overflow-hidden">
				<div className=" mb-12  flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
					<div className="max-w-2xl">
						<Heading
							align="start"
							as="h2"
							textColor="text-white"
							paragraph="Find the right job or internship for you"
							className="mb-4"
						/>
						<p className="text-gray-300">
							Discover thousands of opportunities across diverse industries and find your perfect
							match.
						</p>
					</div>

					<Button variant="white" size="lg">
						Explore Jobs Now
						<ArrowRight className="ml-2 h-4 w-4" />
					</Button>
				</div>

				<Marquee reverse className="[--duration:35s] gap-6 overflow-visible">
					{[...jobCategories, ...jobCategories].map((category, index) => (
						<CategoryCard
							key={`${category.id}-${index}`}
							name={category.name}
							count={category.count}
							icon={category.icon}
						/>
					))}
				</Marquee>
			</div>
		</section>
	);
}
