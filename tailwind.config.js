/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light-Mode
        "light-primary": "#BEA4EA", // Lavender
        "light-secondary": "#E9C1F0", // Light Pink
        "light-accent": "#2B3FBB", // Blue
        "light-text": "#0C1104", // Black (greenish hue)
        "light-background": "#F4FAEA", // Off-white

        // Dark Mode
        "dark-primary": "#BEA4EA", // Lavender
        "dark-secondary": "#120514", // Dark Purple
        "dark-secondary": "#98A2E7", // Light Purple (bluish hue)
        "dark-text": "#F4FAEA", // Off-white
        "dark-background": "#0C1104", // Black (greenish hue)
      },
      aspectRatio : {
        '4/3': '4 / 3'
      }
    },
    plugins: [],
  },
};
