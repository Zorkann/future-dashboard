/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bubble-up": "bubble-up infinite",
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
      },
    },
  },
  plugins: [],
};
