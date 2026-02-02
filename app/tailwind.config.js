/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-base)",
                foreground: "var(--color-text-primary)",
            },
            fontFamily: {
                sans: ["var(--font-heebo)", "Arial", "sans-serif"],
                body: ["var(--font-assistant)", "Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
