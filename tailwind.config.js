/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee_violet_dark: "#2E2B55",
        coffee_violet_light: "#7448AF",
        coffee_violet_darker: "#232245",
        coffee_green_aqua: "#00AAAA",
        coffee_text_pale_blue: "#B3EBF1",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        wallpaper1: "url('src/assets/images/wallpaper1.jpg')",
      },
    },
  },
  plugins: [],
};
