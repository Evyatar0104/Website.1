import { Metadata } from "next";

export const metadata: Metadata = {
    title: "תנאי שימוש | BlueShor",
    description: "תנאי השימוש באתר BlueShor - בלו שור. הכללים וההתחייבויות לשימוש באתר ובשירותים שלנו.",
};

export default function TermsOfUse() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-8">תנאי שימוש</h1>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. הסכמה לתנאים</h2>
                        <p>
                            השימוש באתר זה מעיד על הסכמתכם לתנאי השימוש המפורטים להלן. אם אינכם מסכימים לתנאים אלו, אנא הימנעו משימוש באתר.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. קניין רוחני</h2>
                        <p>
                            כל התכנים המופיעים באתר, לרבות טקסטים, תמונות, גרפיקה, ועיצובים, הינם קניינה הבלעדי של BlueShor ומוגנים על ידי דיני זכויות יוצרים.
                            אין להעתיק, לשכפל, להפיץ או לעשות שימוש מסחרי בתוכן ללא אישור בכתב ומראש.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. הגבלת אחריות</h2>
                        <p>
                            השימוש באתר הינו באחריות המשתמש בלבד. אנו עושים מאמץ להבטיח שהמידע באתר מדויק ומעודכן, אך איננו נושאים באחריות לשגיאות או השמטות.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. שינויים בתנאים</h2>
                        <p>
                            אנו שומרים לעצמנו את הזכות לעדכן את תנאי השימוש מעת לעת. המשך השימוש באתר לאחר ביצוע שינויים מהווה הסכמה לתנאים המעודכנים.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
