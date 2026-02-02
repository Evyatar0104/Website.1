"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    icon?: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    children,
    icon,
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-[14px] border-none cursor-pointer
    transition-all duration-200 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: `
      bg-gradient-to-br from-[#007BFF] to-[#00F2FF]
      text-black
      hover:translate-y-[-2px]
      hover:shadow-[0_0_20px_rgba(0,242,255,0.5),0_4px_12px_rgba(0,123,255,0.4)]
    `,
        secondary: `
      bg-transparent text-white
      border-2 border-white/20
      hover:border-[#00F2FF] hover:text-[#00F2FF]
      hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]
    `,
        ghost: `
      bg-transparent text-white/70
      hover:text-white hover:bg-white/5
    `,
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
            {icon && <span className="inline-flex">{icon}</span>}
        </button>
    );
}
