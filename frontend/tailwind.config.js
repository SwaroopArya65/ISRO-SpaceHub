/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        publicSans: ["Public Sans", "serif"],
      },
      fontWeight: {
        'extra-bold': '800',
      },
      maxWidth: {
        customeweight: '680px',
      },
      colors: {
        'bg': '#4509ae',
      }
    },
    screens: {
      // => @media (max-width: 1279px) { ... }
      lg: { min: "925px" },
    },
  },
  plugins: [],
}