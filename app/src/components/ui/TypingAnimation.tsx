"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    children: string;
    className?: string;
    duration?: number;
    delay?: number;
    style?: React.CSSProperties;
}

export function TypingAnimation({
    children,
    className,
    duration = 50,
    delay = 0,
    style,
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [i, setI] = useState<number>(0);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            const typingEffect = setInterval(() => {
                if (i < children.length) {
                    setDisplayedText((prevState) => prevState + children.charAt(i));
                    setI(i + 1);
                } else {
                    clearInterval(typingEffect);
                }
            }, duration);

            return () => {
                clearInterval(typingEffect);
            };
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [children, duration, i, delay]);

    return (
        <h1
            className={cn(
                "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]",
                className,
            )}
            style={style}
        >
            {displayedText ? displayedText : ""}
        </h1>
    );
}
