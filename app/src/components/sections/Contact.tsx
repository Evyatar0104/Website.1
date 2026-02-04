"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { sendEmail } from "@/app/actions";
import { StatusModal } from "../ui/StatusModal";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        package: "",
        message: "",
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalState, setModalState] = useState<{
        isOpen: boolean;
        status: 'success' | 'error' | null;
        message?: string;
    }>({
        isOpen: false,
        status: null
    });

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.package-dropdown-container')) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDropdownOpen]);

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("package", formData.package);
        formDataToSend.append("message", formData.message);

        try {
            const result = await sendEmail(formDataToSend);

            if (result.success) {
                setModalState({
                    isOpen: true,
                    status: 'success',
                    message: "תודה שפנית אלינו! המייל נשלח בהצלחה וניצור קשר בקרוב."
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    package: "",
                    message: "",
                });
            } else {
                setModalState({
                    isOpen: true,
                    status: 'error',
                    message: "אירעה שגיאה בשליחת ההודעה. אנא נסו שוב מאוחר יותר."
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setModalState({
                isOpen: true,
                status: 'error',
                message: "אירעה שגיאה בלתי צפויה. אנא נסו שוב."
            });
        } finally {
            setIsSubmitting(false);
        }
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
                                        <div className="relative package-dropdown-container">
                                            <div
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className={`w-full px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white cursor-pointer transition-all duration-500 relative overflow-hidden flex items-center justify-between group ${formData.package === "אני מעוניין בחבילה בסיסית"
                                                    ? "bg-neutral-900/60"
                                                    : formData.package === "אני מעוניין בחבילת צמיחה"
                                                        ? "bg-gradient-to-b from-[#0f172a] to-[#020617]"
                                                        : formData.package === "אני מעוניין להיות לקוח מקס"
                                                            ? "bg-gradient-to-b from-[#1c1c1e] to-black"
                                                            : "hover:bg-white/10"
                                                    }`}
                                            >
                                                {/* Selected Tier Decoration */}
                                                {formData.package === "אני מעוניין בחבילה בסיסית" && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/20 via-neutral-300/20 to-neutral-600/20 bg-[length:200%_100%] animate-background-shine pointer-events-none" />
                                                )}
                                                {formData.package === "אני מעוניין להיות לקוח מקס" && (
                                                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%] animate-background-shine pointer-events-none" />
                                                )}
                                                {formData.package === "אני מעוניין בחבילת צמיחה" && (
                                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                                        {[...Array(6)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.2, 1] }}
                                                                transition={{
                                                                    duration: 3,
                                                                    repeat: Infinity,
                                                                    delay: i * 0.5,
                                                                    ease: "easeInOut"
                                                                }}
                                                                className="absolute w-0.5 h-0.5 bg-cyan-200 rounded-full blur-[0.5px]"
                                                                style={{
                                                                    top: `${Math.random() * 100}%`,
                                                                    left: `${Math.random() * 100}%`,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                )}

                                                <span className="relative z-10">
                                                    {formData.package || "בחר חבילה"}
                                                </span>
                                                <svg
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    className={`transition-transform duration-300 relative z-10 ${isDropdownOpen ? "rotate-180" : ""}`}
                                                >
                                                    <path d="M6 9l6 6 6-6" />
                                                </svg>
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="absolute top-full left-0 w-full mt-2 bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl">
                                                    {[
                                                        "אני מעוניין בחבילה בסיסית",
                                                        "אני מעוניין בחבילת צמיחה",
                                                        "אני מעוניין להיות לקוח מקס"
                                                    ].map((pkg) => (
                                                        <div
                                                            key={pkg}
                                                            onClick={() => {
                                                                setFormData(prev => ({ ...prev, package: pkg }));
                                                                setIsDropdownOpen(false);
                                                            }}
                                                            className={`px-6 py-3 text-white/80 hover:text-white hover:bg-white/5 cursor-pointer transition-colors ${formData.package === pkg ? "bg-white/10 text-white" : ""
                                                                }`}
                                                        >
                                                            {pkg}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
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

                                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                    {isSubmitting ? "שולח..." : "שליחת הודעה"}
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

            <StatusModal
                isOpen={modalState.isOpen}
                status={modalState.status}
                message={modalState.message}
                onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
            />
        </section>
    );
}
