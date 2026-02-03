import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "עיצוב אתרים", href: "#" },
            { label: "פיתוח אפליקציות", href: "#" },
            { label: "אופטימיזציה", href: "#" },
            { label: "ייעוץ דיגיטלי", href: "#" },
        ],
        company: [
            { label: "אודות", href: "#about" },
            { label: "פרויקטים", href: "#portfolio" },
            { label: "בלוג", href: "#" },
            { label: "קריירה", href: "#" },
        ],
        contact: [
            { label: "צור קשר", href: "#contact" },
            { label: "תמיכה", href: "#" },
            { label: "FAQ", href: "#" },
        ],
    };

    return (
        <footer className="bg-[#0A0A0A] border-t border-white/10 pt-10 md:pt-16 pb-8">
            <div className="container mx-auto px-6">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center place-items-center">
                    {/* Brand Column */}
                    <div className="flex flex-col items-center">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#007BFF] to-[#00F2FF] flex items-center justify-center">
                                <span className="text-black font-black text-lg">TP</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                Tech<span className="text-[#00F2FF]">-</span>Precision
                            </span>
                        </Link>
                        <p className="text-white/50 mb-6 leading-relaxed">
                            אנחנו בונים תשתיות דיגיטליות בביצועי קצה. דיוק, ביצועים ויוקרה בכל פרויקט.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {["linkedin", "twitter", "github"].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00F2FF] hover:border-[#00F2FF]/50 hover:shadow-[0_0_15px_rgba(0,242,255,0.3)] transition-all"
                                >
                                    <span className="text-sm uppercase">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">החברה</h4>
                        <ul className="space-y-3">
                            {footerLinks.company
                                .filter(link => link.label !== "בלוג")
                                .map((link) => (
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

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">יצירת קשר</h4>
                        <ul className="space-y-3">
                            {footerLinks.contact.map((link) => (
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
                        <div className="mt-6 text-white/50">
                            <p>info@tech-precision.co.il</p>
                            <p className="mt-2" dir="ltr">+972-3-XXX-XXXX</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        © {currentYear} Tech-Precision. כל הזכויות שמורות.
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
