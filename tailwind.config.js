/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backdropFilter: {
      blur: "blur(2px)",
    },
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "976px",
        xl: "1024px",
      },
      colors: {
        black: "#000000",
        blue: "#00AEFF",
        gray: {
          100: "#EBE9EA",
          200: "rgba(38, 38, 38, 0.4)",
          300: "rgba(115, 115, 115, 0.5)",
          400: "#868E96",
        },

        white: {
          100: "#ffffff",
          200: "#f9f9f9",
          300: "#F8F9FA",
        },
      },
      fontFamily: {
        mont: ["Montserrat Alternates", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
