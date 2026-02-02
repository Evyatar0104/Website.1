import type { Metadata } from "next";
import { Heebo, Assistant } from "next/font/google";
import "./globals.css";

// Hebrew-centric typography per brand identity
const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "האדריכל הדיגיטלי | Tech-Precision",
  description: "אנחנו בונים תשתיות דיגיטליות בביצועי קצה. עיצוב ופיתוח אתרים מקצועי עם דגש על ביצועים, דיוק ויוקרה.",
  keywords: ["עיצוב אתרים", "פיתוח אתרים", "דיגיטל", "ביצועים", "ישראל"],
  authors: [{ name: "Tech-Precision" }],
  openGraph: {
    title: "האדריכל הדיגיטלי | Tech-Precision",
    description: "אנחנו בונים תשתיות דיגיטליות בביצועי קצה",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${heebo.variable} ${assistant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
