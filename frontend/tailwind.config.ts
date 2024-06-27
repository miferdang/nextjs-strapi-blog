import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "960px",
            xl: "1024px",
            xxl: "1280px",
            xxxl: "1536px",
        },
    },
    plugins: [],
};
export default config;
