"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
    words: string[];
    duration?: number;
    framerProps?: HTMLMotionProps<"span">;
    className?: string;
    style?: React.CSSProperties;
}

export function WordRotate({
    words,
    duration = 2500,
    framerProps = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5, ease: "easeInOut" },
    },
    className,
    style,
}: WordRotateProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <div className="relative overflow-visible inline-block">
            {/* Invisible spacer to maintain container width/height based on longest word */}
            <div
                className={cn("invisible pointer-events-none whitespace-nowrap px-4", className)}
                style={style}
            >
                {words.reduce((a, b) => (a.length > b.length ? a : b))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={words[index]}
                        className={cn("whitespace-nowrap", className)}
                        {...framerProps}
                        style={style}
                    >
                        {words[index]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </div>
    );
}
