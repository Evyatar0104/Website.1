"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#portfolio", label: "תיק עבודות" },
        { href: "#about", label: "איך זה קורה" },
        { href: "#contact", label: "צור קשר" },
    ];

    return (
        <header
            className={`
        fixed top-0 right-0 left-0 z-50
        transition-all duration-300
        ${scrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-3"
                    : "bg-transparent py-6"
                }
      `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo - Right side for RTL */}
                {/* Logo - Right side for RTL */}
                <Link
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 group"
                >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00F2FF] flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] transition-shadow">
                        <span className="text-black font-black text-lg">TP</span>
                    </div>
                    <span className="text-2xl font-bold text-white hidden sm:block">
                        Tech<span className="text-[#00F2FF]">-</span>Precision
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-white/70 hover:text-[#00F2FF] transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-gradient-to-r from-[#007BFF] to-[#01F2FF] text-black font-bold px-6 py-2 rounded-xl text-sm transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] hover:scale-105"
                    >
                        אני רוצה אתר!
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    aria-label="תפריט"
                >
                    <span
                        className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          md:hidden absolute top-full right-0 left-0
          bg-black/95 backdrop-blur-xl border-b border-white/10
          transition-all duration-300 overflow-hidden
          ${menuOpen ? "max-h-96 py-6" : "max-h-0 py-0"}
        `}
            >
                <nav className="container mx-auto px-6 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-[#00F2FF] transition-colors font-medium text-lg py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false); // Close menu on click
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-gradient-to-r from-[#007BFF] to-[#01F2FF] text-black font-bold px-6 py-2 rounded-xl text-sm transition-all text-center"
                    >
                        אני רוצה אתר!
                    </button>
                </nav>
            </div>
        </header>
    );
}
