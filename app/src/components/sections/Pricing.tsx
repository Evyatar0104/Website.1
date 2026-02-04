"use client";

import React from "react";

import { motion } from "framer-motion";

const tiers = [
    {
        name: "בסיסי",
        price: "850",
        features: [
            "עיצוב מותאם וממותג",
            "2 סבבי תיקונים ממוקדים",
            "השארת פנייה דרך ווצאפ ומייל",
            "עריכת תוכן האתר בלי הגבלה",
            "אתר גמור תוך 5 ימי עסקים"
        ],
        recommended: false,
    },
    {
        name: "צמיחה",
        price: "1450",
        features: [
            "כל מה שכלול בחבילה הבסיסית",
            "אפיון מותג מעמיק עם עיצוב אינטרקטיבי",
            "3 סבבי תיקונים ממוקדים",
            "סנכרון לוח שנה לקביעת פגישות דרך האתר"
        ],
        recommended: true,
    },
    {
        name: "Max",
        price: "2150",
        features: [
            "כל מה שכלול בחבילה הבסיסית ובצמיחה",
            "לקוח בעדיפות ראשונה",
            "סבבי תיקונים ללא הגבלה",
            "עריכת תוכן ועיצוב ללא הגבלה",
            "יצירת מדריך PDF חינמי לחלוקה באתר דרך מייל"
        ],
        recommended: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-20 md:py-20 relative overflow-hidden bg-[#0A0A0A] flex flex-col justify-start md:justify-center min-h-[90vh] scroll-mt-28">
            {/* Top Border Divider - Moved Down */}
            <div
                className="absolute top-12 left-0 w-full h-px z-20"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)",
                }}
            />

            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {[0, 1].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0.8, 1.4],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 2,
                            ease: "easeInOut",
                        }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/15 rounded-full blur-[100px]"
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-16 mt-0">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-black bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent mb-2 tracking-tighter animate-gradient"
                        style={{
                            fontSize: "clamp(2rem, 5vw, 5rem)",
                            lineHeight: "1.1",
                            backgroundSize: "200% 200%",
                            filter: "drop-shadow(0 0 40px rgba(0, 242, 255, 0.3))",
                            display: "inline-block"
                        }}
                    >
                        אז מה אנחנו מציעים?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white/60 text-xl font-medium"
                    >
                        מתמחרים כל צורך
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    {tiers.map((tier, index) => (
                        <PricingCard key={index} tier={tier} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ tier, index }: { tier: any, index: number }) {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative group ${tier.recommended
                ? "md:-mt-4 md:mb-4 lg:-mt-8 lg:mb-8"
                : ""
                }`}
        >
            {/* Card Decoration */}
            <div className={`absolute rounded-[2.5rem] transition-opacity duration-500 ${tier.recommended
                ? "inset-[-1px] bg-gradient-to-b from-cyan-400 to-blue-600 opacity-100 blur-sm"
                : tier.name === "בסיסי"
                    ? "inset-[-1px] bg-gradient-to-r from-neutral-600 via-neutral-300 to-neutral-600 bg-[length:200%_100%] animate-background-shine opacity-100 group-hover:animate-none"
                    : tier.name === "Max"
                        ? "inset-[-1px] bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-background-shine opacity-100"
                        : "inset-[-1px] bg-white/10 opacity-50 group-hover:opacity-100"
                }`} />


            <div className={`relative h-full rounded-[2.5rem] p-8 pb-10 flex flex-col items-center text-center backdrop-blur-3xl transition-all duration-500 overflow-hidden ${tier.recommended
                ? "bg-gradient-to-b from-[#0f172a] to-[#020617]"
                : tier.name === "Max"
                    ? "bg-gradient-to-b from-[#1c1c1e] to-black shadow-2xl border border-white/5"
                    : tier.name === "בסיסי"
                        ? "bg-neutral-900/60"
                        : "bg-white/5 hover:bg-white/10"
                }`}>

                {/* Animated Rocketship for Recommended Tier */}
                {tier.recommended && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
                        {/* Stars */}
                        {[
                            { top: "20%", left: "20%", delay: 0 },
                            { top: "30%", left: "80%", delay: 1 },
                            { top: "70%", left: "15%", delay: 2 },
                            { top: "80%", left: "85%", delay: 0.5 },
                            { top: "15%", left: "60%", delay: 1.5 },
                            { top: "60%", left: "40%", delay: 2.5 },
                        ].map((star, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.1, 0.6, 0.1], scale: [1, 1.2, 1] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: star.delay,
                                    ease: "easeInOut"
                                }}
                                className="absolute w-1 h-1 bg-cyan-200 rounded-full blur-[1px]"
                                style={{ top: star.top, left: star.left }}
                            />
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 0.15, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0"
                        >
                            <motion.div
                                animate={{
                                    x: [-3, 3, -3],
                                    y: [3, -3, 3],
                                    rotate: [43, 45, 43]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-full h-full text-cyan-400"
                            >
                                <svg viewBox="0 -2 24 36" fill="currentColor" className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                    {/* Rocket Body */}
                                    <path d="M12 2.5c-2.5 5-5 9-5 13.5 0 3 2 5 5 5s5-2 5-5c0-4.5-2.5-8.5-5-13.5z" opacity="0.9" />
                                    {/* Window */}
                                    <circle cx="12" cy="14" r="2.5" className="text-black" fill="currentColor" opacity="0.5" />
                                    {/* Fins */}
                                    <path d="M7 16l-3 4v1h3l3-3M17 16l3 4v1h-3l-3-3" opacity="0.8" />
                                    {/* Animated Flame Base */}
                                    <motion.path
                                        d="M12 21.5c-1.5 3-1.5 6 0 8 1.5-2 1.5-5 0-8z"
                                        animate={{
                                            opacity: [0.4, 0.8, 0.4],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                        style={{ originX: 0.5, originY: 0 }}
                                    />
                                    {/* Animated Flame Core */}
                                    <motion.path
                                        d="M12 21.5c-0.8 1.5 -0.8 3 0 4.5 0.8-1.5 0.8-3 0-4.5z"
                                        className="text-white"
                                        animate={{
                                            opacity: [0.6, 1, 0.6],
                                            scaleY: [1, 1.3, 1],
                                        }}
                                        transition={{
                                            duration: 0.1,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                        style={{ originX: 0.5, originY: 0 }}
                                    />
                                </svg>
                            </motion.div>
                        </motion.div>
                    </div>
                )}

                {tier.name === "Max" && (
                    <>
                        {/* Idle Inner Glow (Matches Frame) */}
                        <div className={`absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem] transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[200%] animate-background-shine" />
                        </div>

                        {/* Mouse Inner Glow (Spotlight) */}
                        <div
                            className={`absolute inset-0 rounded-[2rem] pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
                            style={{
                                background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`
                            }}
                        />
                    </>
                )}

                <div className="relative z-10 w-full flex flex-col items-center">
                    {tier.name === "Max" ? (
                        <div className="flex items-center justify-center mb-3 h-10" dir="ltr">
                            <span className="text-4xl font-sans font-bold bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent tracking-tight">
                                Max
                            </span>
                        </div>
                    ) : (
                        <h3 className={`mb-3 transition-all duration-300 ${tier.recommended
                            ? "text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-[length:200%_auto] animate-background-shine"
                            : "text-xl font-bold text-white drop-shadow-md"
                            }`}>
                            {tier.name}
                        </h3>
                    )}

                    <div className="mb-6">
                        <span className="text-4xl font-black text-white">₪{tier.price}</span>
                        <span className="text-white/40 text-base"> / פרויקט</span>
                    </div>

                    <ul className="space-y-3 mb-6 text-right w-full">
                        {tier.features.map((feature: string, i: number) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-start gap-3 text-white/80"
                            >
                                <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-colors ${tier.name === "Max"
                                    ? "bg-white/10 group-hover:bg-white/20"
                                    : tier.name === "בסיסי"
                                        ? "bg-gray-800 group-hover:bg-gray-700"
                                        : "bg-cyan-500/10 group-hover:bg-cyan-500/20"
                                    }`}>
                                    <svg viewBox="0 0 12 10" className={`w-2.5 h-2.5 ${tier.name === "Max" ? "text-white" : tier.name === "בסיסי" ? "text-gray-400" : "text-cyan-400"}`}>
                                        <motion.path
                                            d="M1 5L4.5 8.5L11 1.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            whileInView={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                        />
                                    </svg>
                                </div>
                                <span className="text-sm leading-5">{feature}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="mt-auto w-full">
                        <div className="h-[1px] w-full bg-white/10 mb-6" />

                        {tier.recommended && (
                            <div className="mb-4 flex justify-center">
                                <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.6)] animate-pulse">
                                    מומלץ!
                                </span>
                            </div>
                        )}

                        {tier.name === "Max" ? (
                            <button className="relative inline-flex w-full overflow-hidden rounded-full p-[1px] group/btn hover:scale-[1.02] transition-all duration-300">
                                <motion.span
                                    className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_0%,#ffffff_15%,#00000000_30%)]"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                                <span
                                    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950/90 px-3 py-3 text-sm font-bold text-white backdrop-blur-3xl"
                                    onClick={() => {
                                        const event = new CustomEvent('set-contact-package', {
                                            detail: { package: "אני רוצה להיות לקוח מקס" }
                                        });
                                        window.dispatchEvent(event);
                                    }}
                                >
                                    בואו נתחיל
                                </span>
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    const packageName = tier.name === "בסיסי"
                                        ? "אני מעוניין בחבילה בסיסית"
                                        : "אני מעוניין בחבילת צמיחה";
                                    const event = new CustomEvent('set-contact-package', {
                                        detail: { package: packageName }
                                    });
                                    window.dispatchEvent(event);
                                }}
                                className={`w-full py-3 rounded-full font-bold transition-all duration-300 relative overflow-hidden group/btn text-sm ${tier.recommended
                                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-[1.02]"
                                    : "bg-black/40 text-white hover:bg-black/60 border border-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.02)]"
                                    }`}>
                                <span className="relative z-10">בואו נתחיל</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

