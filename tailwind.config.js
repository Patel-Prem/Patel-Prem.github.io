/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: "hsl(var(--destructive))",

        border: {
          DEFAULT: "hsl(var(--border))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--foreground))",
          border: "hsl(var(--card-border))"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          border: "hsl(var(--primary-border))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        }
      },
    },
  },
  plugins: [],
}
