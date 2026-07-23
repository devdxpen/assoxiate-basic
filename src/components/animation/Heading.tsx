"use client";
import { CharProps, HeadingProps, ParagraphProps, WordProps } from "@/types/animation.component.type";
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import React, { type ElementType, useRef } from "react";

export function Heading<Tag extends React.ElementType = "h2">({
    paragraph,
    heading,
    textColor = "text-black",
    align = "start",
    className = "",
    highlightedWord = "",
    highlightedColor = "text-primary",
    as,
}: HeadingProps<Tag extends React.ElementType ? Tag : "h2">) {
    const Component = (as || "h2") as ElementType;
    const containerRef = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"],
    });

    const alignmentClasses =
        align === "center" ? "mx-auto justify-center text-center" : "justify-start";

    const textContent = heading || paragraph || "";
    const placeholder = "___HIGHLIGHTED_PHRASE___";
    const modifiedParagraph = highlightedWord
        ? textContent.replace(
            new RegExp(
                highlightedWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                "gi"
            ),
            placeholder
        )
        : textContent;

    const parts = modifiedParagraph.split(placeholder);
    const wordSegments: { text: string; isHighlighted: boolean }[] = [];

    for (let i = 0; i < parts.length; i++) {
        // Add non-highlighted part
        if (parts[i].trim()) {
            const words = parts[i].trim().split(/\s+/);
            words.forEach((word) => {
                if (word) {
                    wordSegments.push({ text: word, isHighlighted: false });
                }
            });
        }

        // --- FIX START ---
        // Add highlighted phrase, splitting it into individual words
        if (i < parts.length - 1 && highlightedWord) {
            const highlightedWords = highlightedWord.trim().split(/\s+/);
            highlightedWords.forEach((hWord) => {
                if (hWord) {
                    wordSegments.push({ text: hWord, isHighlighted: true });
                }
            });
        }
        // --- FIX END ---
    }

    const childElements = wordSegments.flatMap((segment, i) => {
        const start = i / wordSegments.length;
        const end = start + 1 / wordSegments.length;

        const wordElement = (
            <Word
                key={`segment-${i}`}
                progress={scrollYProgress}
                range={[start, end]}
                textColor={textColor}
                isHighlighted={segment.isHighlighted}
                highlightedColor={highlightedColor}
            >
                {segment.text}
            </Word>
        );

        if (i < wordSegments.length - 1) {
            return [wordElement, " "];
        }
        return [wordElement];
    });

    const componentProps = {
        ref: containerRef,
        className: `${alignmentClasses} w-full max-w-full flex flex-wrap ${className}`,
    };

    return React.createElement(Component, componentProps, ...childElements);
}

const Word = ({
    children,
    progress,
    range,
    textColor,
    isHighlighted = false,
    highlightedColor = "text-primary",
}: WordProps) => {
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
        <span className="mr-2">
            {[...children].map((char, i) => {
                const start = range[0] + i * step;
                const end = range[0] + (i + 1) * step;
                return (
                    <Char
                        key={i}
                        progress={progress}
                        range={[start, end]}
                        textColor={isHighlighted ? highlightedColor : textColor}
                    >
                        {char}
                    </Char>
                );
            })}
        </span>
    );
};

const Char = ({ children, progress, range, textColor }: CharProps) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const displayChar = children === " " ? "\u00A0" : children;

    return (
        <motion.span style={{ opacity }} className={`inline-block ${textColor}`}>
            {displayChar}
        </motion.span>
    );
};

export { Heading as Paragraph };