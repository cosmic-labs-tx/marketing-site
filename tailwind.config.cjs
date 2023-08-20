const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
    extend: {
      spacing: {
        4.5: "1.125rem",
      },
      fontFamily: {
        sans: ["Work Sans Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          dark: "hsl(var(--accent-dark) / <alpha-value>)",
          light: "hsl(var(--accent-light) / <alpha-value>)",
        },
        "muted-bg": "hsl(var(--muted-bg) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        destructive: "hsl(var(--destructive) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
