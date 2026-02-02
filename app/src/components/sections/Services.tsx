"use client";

import { Card } from "../ui/Card";

const services = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        title: "עיצוב אתרים",
        description: "עיצוב ממשק משתמש מודרני ויזואלי המשלב אסתטיקה יוקרתית עם חוויית משתמש אינטואיטיבית.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
                <path d="M14 4L10 20" />
            </svg>
        ),
        title: "פיתוח מתקדם",
        description: "פיתוח Full-Stack בטכנולוגיות מתקדמות. קוד נקי, מודולרי ומותאם לביצועים גבוהים.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "תשתיות ענן",
        description: "אירוח בענן עם זמינות גבוהה, אבטחה מתקדמת וסקלביליות אוטומטית.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "אופטימיזציה",
        description: "שיפור מהירות טעינה, SEO ונגישות. ביצועי קצה שממקסמים את החזר ההשקעה.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        ),
        title: "הנגשה גלובלית",
        description: "CDN עולמי, תמיכה ב-RTL ומספר שפות. הגעה לקהלים בכל מקום בעולם.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M12 22V12M3.27 6.96L12 12l8.73-5.04M7.5 4.21l9 5.2" />
            </svg>
        ),
        title: "ייעוץ דיגיטלי",
        description: "אסטרטגיה דיגיטלית מותאמת אישית. מעסקים קטנים ועד ארגונים גדולים.",
    },
];

export function Services() {
    return (
        <section id="services" className="py-12 md:py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-0 w-full h-px"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(0,242,255,0.3), transparent)",
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
                        כלים שעובדים.{" "}
                        <span className="bg-gradient-to-l from-[#007BFF] to-[#00F2FF] bg-clip-text text-transparent">
                            ביצועים שנמדדים.
                        </span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                        אנחנו מספקים פתרונות דיגיטליים מקצה לקצה - מעיצוב ופיתוח ועד אירוח ותחזוקה.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="group">
                            {/* Icon Container */}
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#007BFF]/20 to-[#00F2FF]/20 border border-white/10 flex items-center justify-center mb-6 text-[#00F2FF] group-hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] transition-shadow">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/50 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="mt-6 flex items-center gap-2 text-[#00F2FF] opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-sm font-medium">למידע נוסף</span>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="rotate-180"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
