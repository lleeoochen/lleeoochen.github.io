/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Palanquin", "sans-serif"],
      menu: ["Julius Sans One", "sans-serif"],
    },
    colors: {
      "soft-white": "#F4F4E2",
      "menu-top": "#FFFFF5",
      "menu-bottom": "#F5F5E4",
      "menu-subtitle": "#ACACAC",
      "job-selected-bar": "#D5D5BD",
      "project-card": "#FFFFFF",
      "accent-color": "#C0C0A5",
    },
  },
  plugins: [],
};
