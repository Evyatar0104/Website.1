"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FlickeringGrid } from "../ui/FlickeringGrid";
import { WordRotate } from "../ui/WordRotate";
import Image from "next/image";
import Link from "next/link";


const morphingTexts = [
    "במהירות",
    "לעורכי דין",
    "לבעלי מקצוע",
    "ביעילות",
    "ליועצים פיננסיים",
    "עם כלים חדשניים",
];

export function Hero() {
    const [currentRotation, setCurrentRotation] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Define images
    const desktopImages = [
        "/hero/screenshot-1.png",
        "/hero/screenshot-2.png",
        "/hero/screenshot-3.png",
        "/hero/screenshot-4.png",
        "/hero/screenshot-5.png",
    ];

    // Mobile: 3 distinct images as requested
    const mobileImages = [
        "/hero/mobile/mobile-1.webp",
        "/hero/mobile/mobile-3.webp",
        "/hero/mobile/mobile-4.webp",
    ];

    // Determine which set to use
    const baseImages = isMobile ? mobileImages : desktopImages;
    // Duplicate for seamless loop
    const images = [...baseImages, ...baseImages];
    const totalItems = images.length;
    const angleStep = 360 / totalItems;

    // Carousel Dimensions & Physics
    const itemWidth = isMobile ? 300 : 800;
    const itemHeight = isMobile ? 600 : 450;
    // Calculate radius to arrange items in a circle (Apothem)
    // r = w / (2 * tan(PI / n))
    const radius = Math.round(itemWidth / (2 * Math.tan(Math.PI / totalItems))) + 50; // +50 spacing


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRotation((prev) => prev - angleStep);
        }, 3000);
        return () => clearInterval(interval);
    }, [angleStep]);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
            {/* Flickering Grid Background */}
            <div className="absolute inset-0 z-0">
                <FlickeringGrid
                    className="absolute inset-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#00F2FF"
                    maxOpacity={0.27}
                    flickerChance={0.1}
                />
            </div>

            {/* Background 3D Carousel */}
            <div className="absolute inset-0 z-0 flex items-start pt-28 md:pt-0 md:items-center justify-center overflow-hidden perspective-[2500px] select-none pointer-events-none">
                <motion.div
                    className="relative scale-[0.55] md:scale-[0.75] lg:scale-100"
                    style={{
                        width: itemWidth,
                        height: itemHeight,
                        transformStyle: "preserve-3d",
                        rotateY: currentRotation, // controlled by state
                    }}
                    animate={{ rotateY: currentRotation }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 bg-black/40 border-[1px] border-white/10 rounded-3xl overflow-hidden backdrop-blur-md group"
                            style={{
                                transform: `rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Project ${i + 1}`}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100"
                                sizes="(max-width: 800px) 100vw, 800px"
                                priority={i < 4}
                            />
                            {/* Overlay glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Dark Overlay (Subtle) */}
            <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-[2px]" />

            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.027]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center pt-16 md:pt-0">
                {/* Main Headline Wrapper */}
                <div className="flex flex-col gap-0 w-full">
                    <h2 className="text-3xl md:text-[2vw] font-bold text-white tracking-tighter opacity-100">
                        אנחנו בונים אתרים ממירים
                    </h2>
                    <div className="flex justify-center w-full items-center -mt-2 md:-mt-4">
                        <WordRotate
                            words={morphingTexts}
                            duration={2500}
                            className="text-6xl sm:text-7xl md:text-[7.5vw] font-black leading-none tracking-tighter bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent py-1 animate-gradient w-fit whitespace-nowrap"
                            style={{
                                backgroundSize: "200% 200%",
                                filter: "drop-shadow(0 0 60px rgba(0, 242, 255, 0.5))",
                                display: "inline-block"
                            }}
                        />
                    </div>
                </div>

                {/* CTA Buttons - Centered Group */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-32 md:mt-28 z-20 w-full px-4 md:px-0">
                    {/* Right: How it works */}
                    <Link href="#about">
                        <button className="px-6 py-3 text-base md:px-10 md:py-5 md:text-xl rounded-full border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur-xl text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-black/60 shadow-xl min-w-[180px] md:min-w-[220px]">
                            איך זה קורה?
                        </button>
                    </Link>

                    {/* Center: Blue CTA */}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-8 py-4 text-lg md:px-14 md:py-6 md:text-2xl rounded-full bg-gradient-to-r from-[#007BFF] to-[#01F2FF] text-white font-black transition-all duration-500 ease-out hover:scale-110 shadow-[0_0_60px_-10px_rgba(0,123,255,0.8)] hover:shadow-[0_0_100px_-10px_rgba(0,242,255,0.9)] min-w-[220px] md:min-w-[280px] overflow-hidden border border-white/20"
                    >
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform skew-x-[-35deg] transition-all duration-1000 group-hover:left-[100%]" />
                        <span className="relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                            אני רוצה אתר!
                        </span>
                    </button>

                    {/* Left: See More */}
                    <Link href="#portfolio">
                        <button className="px-6 py-3 text-base md:px-10 md:py-5 md:text-xl rounded-full border border-white/10 hover:border-white/40 bg-black/40 backdrop-blur-xl text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-black/60 shadow-xl min-w-[180px] md:min-w-[220px]">
                            אני רוצה לראות עוד
                        </button>
                    </Link>
                </div>



            </div>


        </section>
    );
}
