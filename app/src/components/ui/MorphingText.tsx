"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
    texts: string[];
    className?: string;
    interval?: number;
    style?: React.CSSProperties;
}

export function MorphingText({
    texts,
    className,
    interval = 3000,
    style,
}: MorphingTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, interval);
        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, filter: "blur(10px)" }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                    className={cn("absolute whitespace-nowrap", className)}
                    style={style}
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>

            {/* Invisible spacer with same styling to dictate container size */}
            <span
                className={cn("invisible pointer-events-none whitespace-nowrap", className)}
                style={style}
            >
                {texts.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>
        </div>
    );
}
