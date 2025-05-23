// Define hacker color palette:
// - Matrix green gradients
// - CRT scanline effects
// - Glitchy pink/blue accents
// Add custom animations:
// - Text glitch
// - Terminal cursor blink
// - Button pulse effects
// Configure dark mode as default

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        hacker: {
          black: "#0a0a0a",
          green: "#00ff41",
          cyan: "#00fff7",
          pink: "#ff00c8",
          red: "#ff003c",
        },
      },
      boxShadow: {
        glow: "0 0 8px 2px #00fff7, 0 0 16px 4px #ff00c8",
      },
      fontFamily: {
        mono: ["Share Tech Mono", "Orbitron", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};