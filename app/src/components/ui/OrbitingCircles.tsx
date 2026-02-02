"use client";

import React from "react";

interface OrbitingCirclesProps {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    radius?: number;
    iconSize?: number;
    pathColor?: string;
    keepVertical?: boolean;
}

export function OrbitingCircles({
    className = "",
    children,
    reverse = false,
    duration = 20,
    radius = 100,
    iconSize = 30,
    pathColor = "rgba(0, 242, 255, 0.2)",
    keepVertical = true,
}: OrbitingCirclesProps) {
    const childArray = React.Children.toArray(children);
    const childCount = childArray.length;

    return (
        <div
            className={`absolute flex items-center justify-center ${className}`}
            style={{
                width: radius * 2,
                height: radius * 2,
            }}
        >
            {/* Orbit path circle */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox={`0 0 ${radius * 2} ${radius * 2}`}
            >
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius}
                    fill="none"
                    stroke={pathColor}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                />
            </svg>

            {/* Orbiting icons */}
            {childArray.map((child, index) => {
                return (
                    <div
                        key={index}
                        className="absolute flex items-center justify-center"
                        style={{
                            width: iconSize,
                            height: iconSize,
                            // Use the orbit animation with the correct direction
                            animation: `${reverse ? "orbit-reverse" : "orbit-forward"} ${duration}s linear infinite`,
                            // Use animation-delay to space the icons out perfectly
                            animationDelay: `${-(duration / childCount) * index}s`,
                            // Set the radius as a CSS variable for the animation
                            ["--orbit-radius" as string]: `${radius}px`,
                        }}
                    >
                        <div
                            className="flex items-center justify-center w-full h-full"
                            style={{
                                // Counter-rotate if requested to keep icons upright
                                animation: keepVertical ? `${reverse ? "counter-orbit-reverse" : "counter-orbit-forward"} ${duration}s linear infinite` : "none",
                                animationDelay: `${-(duration / childCount) * index}s`,
                            }}
                        >
                            {child}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
