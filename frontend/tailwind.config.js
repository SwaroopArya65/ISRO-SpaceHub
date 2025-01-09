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
        'bg2': '#F6ECFF',
        'bg3': '#f2f2ff',
        'text-color': '#663399',
        'text-color2': '#4609ae',
        'text-color3': '#f2f2ff',
      },
      height: {
        'h-100': '400px'
      },
    },
    screens: {
      // => @media (max-width: 1279px) { ... }
      lg: { min: "925px" },
    },
  },
  plugins: [],
}