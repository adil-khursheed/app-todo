/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // Primary color
      "Bright-Blue": "hsl(220, 98%, 61%)",
      // "Check-Background":
      // "linear-gradient(180deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      "Gradient-Color-1": "hsl(192, 100%, 67%)",
      "Gradient-Color-2": "hsl(280, 87%, 65%)",
      transparent: "transparent",
      // Light Theme
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
      "Very-Light-Grayish-Blue": "hsl(236, 33%, 92%)",
      "Light-Grayish-Blue": "hsl(233, 11%, 84%)",
      "Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
      "Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
      // Dark theme
      "Very-Dark-Blue": "hsl(235, 21%, 11%)",
      "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
      "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
      "Light-Grayish-Blue-hover": "hsl(236, 33%, 92%)",
      "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
      "Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
      "Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
    },
    extend: {},
  },
  plugins: [],
};
