"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const contactInfo = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            ),
            title: "טלפון",
            value: "+972-3-XXX-XXXX",
            href: "tel:+97231234567",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            title: "אימייל",
            value: "info@tech-precision.co.il",
            href: "mailto:info@tech-precision.co.il",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            title: "כתובת",
            value: "תל אביב, ישראל",
            href: "#",
        },
    ];

    return (
        <section id="contact" className="py-16 md:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)",
                    }}
                />
                <div
                    className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px]"
                    style={{
                        background: "radial-gradient(circle, #00F2FF 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[#00F2FF] text-sm font-semibold tracking-wide mb-4 block">
                        צור קשר
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        בואו נבנה משהו{" "}
                        <span className="bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent">
                            יוצא דופן
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        יש לכם פרויקט בראש? נשמח לשמוע ולהציע את הפתרון המושלם עבורכם.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card hover={false} className="p-8 md:p-10">
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
                                <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                                    הודעה
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
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

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.href}
                                className="block group"
                            >
                                <Card className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007BFF]/20 to-[#00F2FF]/20 border border-white/10 flex items-center justify-center text-[#00F2FF] flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-shadow">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white/50 text-sm mb-1">
                                            {info.title}
                                        </h3>
                                        <p className="text-white text-lg font-medium" dir={info.title === "טלפון" || info.title === "אימייל" ? "ltr" : "rtl"}>
                                            {info.value}
                                        </p>
                                    </div>
                                </Card>
                            </a>
                        ))}

                        {/* Additional CTA */}
                        <Card className="bg-gradient-to-br from-[#007BFF]/10 to-[#00F2FF]/10 border-[#00F2FF]/20">
                            <div className="text-center py-4">
                                <h3 className="text-white text-xl font-bold mb-2">
                                    מעדיפים לדבר ישירות?
                                </h3>
                                <p className="text-white/50 mb-4">
                                    קבעו שיחת ייעוץ חינמית עם הצוות שלנו
                                </p>
                                <Button variant="secondary">
                                    קביעת פגישה
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
