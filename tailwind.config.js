/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: "var(--neutral-10)",
          40: "var(--neutral-40)",
          foreground: "var(--neutral-foreground)",
        },
        primary: {
          20: "var(--primary-20)",
          40: "var(--primary-40)",
          80: "var(--primary-80)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          20: "var(--secondary-20)",
          40: "var(--secondary-40)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          20: "var(--destructive-20)",
          40: "var(--destructive-40)",
          foreground: "var(--destructive-foreground)",
        },
      },
    },
  },
  plugins: [],
};
