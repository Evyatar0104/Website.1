"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: "",
    });

    useEffect(() => {
        const handleSetPackage = (e: CustomEvent<{ package: string }>) => {
            setFormData(prev => ({ ...prev, package: e.detail.package }));
            const element = document.getElementById("contact");
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        };

        window.addEventListener("set-contact-package" as any, handleSetPackage);
        return () => window.removeEventListener("set-contact-package" as any, handleSetPackage);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contact" className="py-16 md:py-32 relative overflow-x-clip">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
                    style={{
                        background: "radial-gradient(circle, #00F2FF 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="font-black text-white mb-6"
                        style={{
                            fontSize: "clamp(1.75rem, 7vw, 5rem)",
                            lineHeight: "1.2",
                        }}
                    >
                        בואו נבנה משהו{" "}
                        <span className="bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] inline-block">
                            יוצא דופן
                        </span>
                    </motion.h2>
                </div>

                <div className="flex justify-center w-full">
                    <div className="w-full max-w-3xl">
                        {/* Contact Form */}
                        <Card hover={false} className="p-6 md:p-10 border-white/10 bg-white/[0.02] w-full">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                                            שם מלא
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00F2FF] focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 transition-colors"
                                            placeholder="השם שלך"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-white/80 mb-2 text-sm font-medium">
                                            טלפון
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00F2FF] focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 transition-colors"
                                            placeholder="052-XXX-XXXX"
                                            dir="ltr"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                                            אימייל
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00F2FF] focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 transition-colors"
                                            placeholder="your@email.com"
                                            dir="ltr"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="package" className="block text-white/80 mb-2 text-sm font-medium">
                                            באיזו חבילה אתה מעוניין?
                                        </label>
                                        <select
                                            id="package"
                                            name="package"
                                            value={formData.package}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00F2FF] focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 transition-colors appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left 1rem center', backgroundSize: '1.2rem' }}
                                        >
                                            <option value="" disabled className="bg-[#0A0A0A]">בחר חבילה</option>
                                            <option value="אני מעוניין בחבילה בסיסית" className="bg-[#0A0A0A]">אני מעוניין בחבילה בסיסית</option>
                                            <option value="אני מעוניין בחבילת צמיחה" className="bg-[#0A0A0A]">אני מעוניין בחבילת צמיחה</option>
                                            <option value="אני רוצה להיות לקוח מקס" className="bg-[#0A0A0A]">אני רוצה להיות לקוח מקס</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                                        הודעה
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-[#00F2FF] focus:outline-none focus:ring-1 focus:ring-[#00F2FF]/50 transition-colors resize-none"
                                        placeholder="ספרו לנו על הפרויקט שלכם..."
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg">
                                    שליחת הודעה
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="rotate-180"
                                    >
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
