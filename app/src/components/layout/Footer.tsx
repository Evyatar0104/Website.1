import Link from "next/link";
import Image from "next/image";

export function Footer() {

    const footerLinks = {
        navigation: [
            { label: "בית", href: "#hero" },
            { label: "תיק עבודות", href: "#portfolio" },
            { label: "מידע נוסף", href: "#about" },
            { label: "מחירון", href: "#pricing" },
        ],
    };

    return (
        <footer className="bg-[#0A0A0A] border-t border-white/10 pt-10 md:pt-16 pb-8">
            <div className="container mx-auto px-6">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center place-items-center">
                    {/* Brand Column */}
                    <div className="flex flex-col items-center">
                        <Link href="/" className="flex items-center gap-3 mb-6 relative hover:scale-105 transition-transform">
                            <div className="relative w-[280px] h-[85px]">
                                <Image
                                    src="/NewColorLogo.png"
                                    alt="BlueShor"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-white/50 mb-4 leading-relaxed">
                            אתרים מקצועיים במחירים שוברי שוק
                        </p>
                        <div className="text-[#00F2FF]/80 hover:text-[#00F2FF] transition-colors">
                            blue.shor.company@gmail.com
                        </div>
                    </div>

                    {/* Quick Navigation Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">ניווט מהיר</h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/50 hover:text-[#00F2FF] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        © 2026 BlueShor. כל הזכויות שמורות.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="#" className="text-white/30 hover:text-white/60 transition-colors">
                            מדיניות פרטיות
                        </Link>
                        <Link href="#" className="text-white/30 hover:text-white/60 transition-colors">
                            תנאי שימוש
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
