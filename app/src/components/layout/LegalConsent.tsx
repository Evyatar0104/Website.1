"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function LegalConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay to make it feel deliberate
        const timer = setTimeout(() => {
            const consent = localStorage.getItem("legal-consent-accepted-v5");
            if (!consent) {
                setIsVisible(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("legal-consent-accepted-v5", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-8"
                >
                    <div className="max-w-4xl mx-auto glass shadow-[0_0_50px_rgba(0,242,255,0.15)] border border-[#00F2FF]/20 rounded-2xl md:rounded-3xl overflow-hidden relative">
                        {/* Interactive scanning line decorative element */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#00F2FF] to-transparent opacity-30"
                        />

                        <div className="p-5 md:p-8 flex flex-col md:flex-row items-center md:items-start lg:items-center gap-5 md:gap-10">
                            <div className="flex-1 space-y-3 w-full">
                                <div className="flex items-center gap-3">
                                    <span className="flex h-2 w-2 rounded-full bg-[#00F2FF] shadow-[0_0_10px_#00F2FF]" />
                                    <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                        הסכמה לשימוש באתר
                                    </h4>
                                </div>
                                <p className="text-white/80 text-[13px] md:text-base leading-relaxed">
                                    האתר משתמש בעוגיות כדי לשפר את חוויית הגלישה, לצורכי אבטחה ולניתוח שימוש באתר. המשך גלישה או לחיצה על "מאשר/ת הכל" מהווים הסכמה לשימוש בעוגיות בהתאם ל
                                    <Link href="/privacy-policy" className="text-[#00F2FF] hover:text-[#00F2FF]/80 transition-colors font-semibold underline decoration-[#00F2FF]/30 underline-offset-4">
                                        {" "}מדיניות הפרטיות
                                    </Link>
                                    {", ולהשתמש באתר בהתאם ל"}
                                    <Link href="/terms" className="text-[#00F2FF] hover:text-[#00F2FF]/80 transition-colors font-semibold underline decoration-[#00F2FF]/30 underline-offset-4">
                                        תנאי השימוש
                                    </Link>.
                                </p>
                            </div>

                            <div className="w-full md:w-auto mt-2 md:mt-0">
                                <button
                                    onClick={handleAccept}
                                    className="w-full md:w-auto whitespace-nowrap bg-gradient-to-r from-[#007BFF] to-[#00F2FF] text-black font-black uppercase tracking-wider px-8 md:px-10 py-3.5 md:py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] active:scale-95 border border-white/20 text-sm md:text-base"
                                >
                                    מאשר/ת הכל
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
