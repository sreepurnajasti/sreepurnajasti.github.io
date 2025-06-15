
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#00f5ff',
        secondary: '#ff006e',
        accent: '#8338ec',
        dark: '#0a0a0a',
        light: '#ffffff',
        glass: 'rgba(255,255,255,0.07)',
        muted: '#1a1a2e',
      },
      boxShadow: {
        glow: '0 0 20px #00f5ff60',
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.1" },
          "50%": { transform: "translateY(-100px) rotate(180deg)", opacity: "0.3" },
          "100%": { transform: "translateY(0px) rotate(360deg)", opacity: "0.1" }
        },
        logoGlow: {
          "0%": { filter: "drop-shadow(0 0 5px #00f5ff)" },
          "100%": { filter: "drop-shadow(0 0 20px #00f5ff)" }
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulse: {
          "0%,100%": { opacity: 1 },
          "50%": { opacity: 0.5 }
        }
      },
      animation: {
        float: "float 20s linear infinite",
        logoGlow: "logoGlow 3s ease-in-out infinite alternate",
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) forwards",
        pulse: "pulse 2s infinite",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

