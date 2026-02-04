"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
            <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-8 md:px-8 pl-[max(2rem,env(safe-area-inset-left))] pr-[max(2rem,env(safe-area-inset-right))]">
                {/* Logo - Right side for RTL */}
                {/* Logo - Right side for RTL */}
                <Link
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-3 group relative z-50"
                >
                    {/* Mobile Logo */}
                    <div className="relative w-11 h-11 md:hidden hover:scale-105 transition-transform rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-white/10">
                        <Image
                            src="/favicon.png"
                            alt="BlueShor"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Desktop Logo */}
                    <div className="relative w-[300px] h-[75px] hidden md:block hover:brightness-110 transition-all">
                        <Image
                            src="/FullLogo.png"
                            alt="Tech-Precision"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
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
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 ml-2 relative z-50"
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
                <nav className="flex flex-col gap-6 py-8 px-8 pl-[max(2rem,env(safe-area-inset-left))] pr-[max(2rem,env(safe-area-inset-right))] items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-white/70 hover:text-[#00F2FF] transition-colors font-medium text-2xl py-2 text-center"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#pricing"
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuOpen(false);
                            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-white/70 hover:text-[#00F2FF] transition-colors font-medium text-2xl py-2 text-center"
                    >
                        מחירון
                    </Link>
                </nav>
            </div>
        </header>
    );
}
