/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  theme: {
    container: {
      padding: {
        DEFAUT: "15px",
      },
    },
    // setting the screen sizes
    screens: {
      sm: "640px",
      md: "769px",
      lg: "960px",
      xl: "1310px",
    },
    extend: {
      // setting the background image
      backgroundImage: {
        singerOverlay: "url(/assets/hero/singer-overlay.png)",
        newsLetter: "url(/assets/newsletter/bg.png)",
      },
      // setting the fonts
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`,'sans-serif'],
        montserrat: [`var(--font-montserrat)`,'sans-serif'],
      },
      // setting the colors for the project
      colors: {
        primary: "#06062a",
        secondary: "#151538",
        tertiary: "#242445",
        accent: {
          DEFAULT: "#7f1cfc",
          hover: "#6519c6",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
