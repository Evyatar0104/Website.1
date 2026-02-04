"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "יועץ פיננסי",
        image: "/hero/screenshot-1.png",
        url: "https://finance-test-alpha.vercel.app/",
    },
    {
        id: 2,
        title: "חברת אינסטלציה",
        image: "/hero/screenshot-4.png",
        url: "https://plumbers123.vercel.app/",
    },
    {
        id: 3,
        title: "מורה פרטי",
        image: "/hero/screenshot-2.png",
        url: "https://uridavidteacher.vercel.app/",
    },
    {
        id: 4,
        title: "עורכת דין",
        image: "/hero/screenshot-5.png",
        url: "https://ziona-site.vercel.app/",
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-neutral-950">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-black bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent mb-8 leading-none tracking-wide whitespace-normal md:whitespace-nowrap"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 auto-rows-[250px] md:auto-rows-[350px] max-w-6xl mx-auto">
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
            className="group relative h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
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
            </Link>
        </motion.div>
    );
}
