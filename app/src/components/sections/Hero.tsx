"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FlickeringGrid } from "../ui/FlickeringGrid";
import { WordRotate } from "../ui/WordRotate";
import Image from "next/image";


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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRotation((prev) => prev - 45); // Rotate by 45 degrees (360/8)
        }, 3000); // Wait 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
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
            <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden perspective-[2500px] select-none pointer-events-none">
                <motion.div
                    className="relative w-[842px] h-[344px]"
                    style={{
                        transformStyle: "preserve-3d",
                        rotateY: currentRotation, // controlled by state
                    }}
                    animate={{ rotateY: currentRotation }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {[
                        "/hero/screenshot-1.png",
                        "/hero/screenshot-2.png",
                        "/hero/screenshot-3.png",
                        "/hero/screenshot-4.png",
                        "/hero/screenshot-1.png",
                        "/hero/screenshot-2.png",
                        "/hero/screenshot-3.png",
                        "/hero/screenshot-4.png",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="absolute inset-0 bg-black/40 border-[1px] border-white/10 rounded-3xl overflow-hidden backdrop-blur-md group"
                            style={{
                                transform: `rotateY(${i * 45}deg) translateZ(1148px)`,
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Project ${i + 1}`}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-110"
                                sizes="(max-width: 842px) 100vw, 842px"
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
            <div className="relative z-10 container mx-auto px-6 text-center flex-grow flex flex-col items-center justify-center">
                {/* Main Headline Wrapper */}
                <div className="flex flex-col gap-0 w-full">
                    <h2 className="text-[2vw] font-bold text-white tracking-tighter opacity-100">
                        אנחנו בונים אתרים ממירים
                    </h2>
                    <div className="flex justify-center w-full items-center -mt-2 md:-mt-4">
                        <WordRotate
                            words={morphingTexts}
                            duration={2500}
                            className="text-[7.5vw] font-black leading-none tracking-tighter bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent py-1 animate-gradient w-fit whitespace-nowrap"
                            style={{
                                backgroundSize: "200% 200%",
                                filter: "drop-shadow(0 0 60px rgba(0, 242, 255, 0.5))",
                                display: "inline-block"
                            }}
                        />
                    </div>
                </div>



            </div>

            {/* CTA Buttons */}
            <div className="relative z-20 pb-12 md:pb-20 w-full flex justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                    <button className="px-12 py-5 text-xl rounded-full border-2 border-white/20 hover:border-white/60 bg-black/50 backdrop-blur-md text-white font-bold transition-all duration-300 hover:scale-105 hover:bg-black/70 shadow-lg hover:shadow-white/10 min-w-[240px]">
                        איך זה קורה?
                    </button>

                    <button className="group relative px-12 py-5 text-xl rounded-full bg-black text-white font-bold transition-all duration-500 ease-out hover:scale-110 border-2 border-transparent hover:border-white/40 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] shadow-md min-w-[240px] overflow-hidden">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF] to-[#00F2FF] transition-opacity duration-500 group-hover:opacity-0" />

                        {/* Text */}
                        <span className="relative z-10 drop-shadow-md">
                            אני רוצה אתר!
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
