/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Pinks
        "retro-pink-light": "#FFA6C1", // Light pink
        "retro-pink": "#FF80AB", // Main pink
        "retro-pink-dark": "#FF4081", // Dark pink

        // Blues
        "retro-blue-light": "#B3E5FC", // Light blue
        "retro-blue": "#03A9F4", // Main blue
        "retro-blue-dark": "#0288D1", // Dark blue
      },
    },
    plugins: [],
  },
};
