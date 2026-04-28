import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        clinic: {
          50: "#eef9ff",
          100: "#d9f0ff",
          200: "#b9e5ff",
          300: "#88d6ff",
          400: "#50bdfa",
          500: "#2aa3e4",
          600: "#1684c2",
          700: "#13699d",
          800: "#155a82",
          900: "#174b6d"
        },
        mint: {
          100: "#d8fbef",
          500: "#28c997",
          700: "#148665"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 82, 115, 0.12)",
        card: "0 14px 40px rgba(11, 84, 124, 0.10)"
      },
      animation: {
        "fade-up": "fadeUp 0.55s ease-out both",
        "badge-pop": "badgePop 0.45s cubic-bezier(.2,.8,.2,1) both"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        badgePop: {
          "0%": { opacity: "0", transform: "scale(.92)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
