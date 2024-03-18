/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": ["0.5rem", "0.75rem"],
      },
      animation: {
        "bubble-up": "bubble-up infinite",
        "slide-left": "slide-left infinite 5s linear 1.5s",
      },
      keyframes: {
        "bubble-up": {
          "0%": {
            transform: "scale(1)",
          },
          "10%": {
            transform: "scale(2)",
          },
          "30%, 100%": {
            transform: "scale(1)",
          },
        },
        "slide-left": {
          "0%": {
            transform: "translateX(0px)",
          },
          "100%": {
            transform: "translateX(-150px)",
          },
        },
      },
    },
  },
  plugins: [],
};
