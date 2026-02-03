"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        id: 1,
        title: "יועץ פיננסי",
        image: "/hero/screenshot-1.png",
        span: "lg:col-span-2"
    },
    {
        id: 2,
        title: "חברת אינסטלציה",
        image: "/hero/screenshot-4.png",
        span: "lg:col-span-2"
    },
    {
        id: 3,
        title: "מורה פרטי",
        image: "/hero/screenshot-2.png",
        span: "lg:col-span-2"
    },
    {
        id: 4,
        title: "בקרוב...",
        image: null,
        span: "lg:col-span-2"
    },
    {
        id: 5,
        title: "בקרוב...",
        image: null,
        span: "lg:col-span-2"
    },
];

export function Portfolio() {
    // ... (Portfolio component logic) ...
    return (
        <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
            {/* ... (background and header) ... */}
            <div className="container mx-auto px-6 relative">
                {/* ... (header content) ... */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-black bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent mb-8 leading-none tracking-wide whitespace-nowrap"
                        style={{
                            fontSize: "clamp(3rem, 6.5vw, 8rem)",
                            filter: "drop-shadow(0 0 50px rgba(0, 242, 255, 0.4))",
                            display: "inline-block"
                        }}
                    >
                        העבודות שלנו
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/70 max-w-2xl mx-auto text-xl md:text-2xl font-medium"
                    >
                        איכות מקצועית והתאמה אישית בחצי ממחיר השוק
                    </motion.p>
                </div>

                {/* Squircle Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-6 auto-rows-[180px]">
                    {projects.map((project, index) => (
                        <PortfolioCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PortfolioCard({ project, index }: { project: any, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
                group relative 
                ${project.span}
                ${index === 3 ? 'lg:col-start-2' : ''}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={isHovered ? {
                    scale: 1.02,
                } : {
                    scale: 1
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="w-full h-full relative bg-neutral-900 overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
                {/* Background Image Container */}
                {project.image ? (
                    <div className="absolute inset-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={true}
                        />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                        <span className="text-white/20 font-bold text-xl">בקרוב</span>
                    </div>
                )}

                {/* Black Overlay Slide-in */}
                <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center"
                    initial={{ y: "100%" }}
                    animate={{ y: isHovered ? 0 : "100%" }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {/* Title Fade-in */}
                    <motion.span
                        className="text-white font-black text-2xl md:text-3xl tracking-wide uppercase"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 10
                        }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                    >
                        {project.title}
                    </motion.span>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
