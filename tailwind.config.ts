// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        inter: ["var(--font-inter)", "serif"]
      },
      screens: {
        "3xl": "1920px"
      }
    },
    
  },

  safelist: [
    "scrollbar",
    "scrollbar-thin",
    "scrollbar-thumb-gray-600",
    "scrollbar-track-gray-800",
    "scrollbar-thumb-rounded-full",
    "scrollbar-track-rounded-full",
  ],
  plugins: [
    require("tailwind-scrollbar")({nocompatible: true})
  ],
};
