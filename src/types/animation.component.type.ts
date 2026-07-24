import { MotionValue } from "motion";
import { LinkProps } from "next/link";
export interface CharProps {
	children: string;
	progress: MotionValue<number>;
	range: [number, number];
	textColor: string;
}
export interface HeadingProps<Tag extends React.ElementType = "h2"> {
	paragraph?: string;
	heading?: string;
	textColor?: string;
	align?: "start" | "center";
	className?: string;
	highlightedWord?: string;
	highlightedColor?: string;
	as?: Tag;
}
export type ParagraphProps<Tag extends React.ElementType = "h2"> = HeadingProps<Tag>;
export interface WordProps {
	children: string;
	progress: MotionValue<number>;
	range: [number, number];
	textColor: string;
	isHighlighted?: boolean;
	highlightedColor?: string;
}
