"use client";

import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function Card({
    children,
    className = "",
    hover = true,
    glow = false,
}: CardProps) {
    const baseStyles = `
    bg-[rgba(26,26,26,0.7)]
    backdrop-blur-xl
    border border-white/10
    rounded-[20px]
    p-6 md:p-8
    transition-all duration-400 ease-out
  `;

    const hoverStyles = hover
        ? `
      hover:border-[rgba(0,242,255,0.3)]
      hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]
      hover:translate-y-[-4px]
    `
        : "";

    const glowStyles = glow
        ? "shadow-[0_0_20px_rgba(0,242,255,0.3)] animate-pulse"
        : "";

    return (
        <div className={`${baseStyles} ${hoverStyles} ${glowStyles} ${className}`}>
            {children}
        </div>
    );
}
