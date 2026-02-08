import { Metadata } from "next";

export const metadata: Metadata = {
    title: "מדיניות פרטיות | BlueShor",
    description: "מדיניות הפרטיות של BlueShor - בלו שור. שקיפות מלאה לגבי המידע שאנו אוספים וכיצד אנו משתמשים בו.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-8">מדיניות פרטיות</h1>

                <div className="space-y-8 text-white/80 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. כללי</h2>
                        <p>
                            ברוכים הבאים לאתר של BlueShor. אנו מכבדים את פרטיות המשתמשים שלנו ומחויבים להגן על המידע האישי שלכם.
                            מסמך זה מסביר כיצד אנו אוספים, משתמשים ושומרים על המידע שלכם בעת השימוש באתר.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. איסוף מידע</h2>
                        <p>
                            אנו עשויים לאסוף מידע אישי כגון שם, כתובת אימייל, ומספר טלפון כאשר אתם יוצרים איתנו קשר דרך הטפסים באתר.
                            כמו כן, אנו אוספים מידע טכני אוטומטי לצורך שיפור חווית המשתמש וניתוח ביצועי האתר.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. שימוש במידע</h2>
                        <p>
                            המידע שאנו אוספים משמש אותנו לצורך מתן שירות, יצירת קשר, ושיפור האתר.
                            איננו מוכרים או מעבירים את המידע האישי שלכם לצדדים שלישיים ללא הסכמתכם, למעט כנדרש על פי חוק.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. עוגיות (Cookies)</h2>
                        <p>
                            האתר עושה שימוש בעוגיות על מנת לאפשר תפעול תקין ומאובטח, וכן לצורך איסוף נתונים סטטיסטיים.
                            באפשרותכם לשנות את הגדרות הדפדפן שלכם בכל עת ולחסום קבצי עוגיות.
                            [כאן יופיע טקסט משפטי מלא בהמשך]
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
