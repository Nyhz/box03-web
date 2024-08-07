import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    listStyleType: {
       none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       square: 'square',
       roman: 'upper-roman',
       alpha: 'lower-alpha'
    },
    extend: {
      colors: {
        primary: {
          bg: "rgb(var(--bg) / <alpha-value>)",
          "bg-component": "rgb(var(--bg-component) / <alpha-value>)",
          title: "rgb(var(--title) / <alpha-value>)",
          "title-hovered": "rgb(var(--title-hovered) / <alpha-value>)",
          text: "rgb(var(--text) / <alpha-value>)",
          "text-inverse": "rgb(var(--text-inverse) / <alpha-value>)",
          accent: "rgb(var(--accent) / <alpha-value>)",
          "accent-dark": "rgb(var(--accent-dark) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["Jost Variable", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
}
