/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Palanquin", "sans-serif"],
      menu: ["Julius Sans One", "sans-serif"],
    },
    colors: {
      "accent-color": "#D5D5BD",
      "bg-content-color": "#FFFFF5",
      "bg-page-color": "#F4F4E2",

      // Menu colors
      "menu-top": "#FFFFF5",
      "menu-bottom": "#F5F5E4",
      "menu-subtitle": "#ACACAC",
    },
    outlineWidth: {
      normal: "3px",
      thick: "4px",
    },
  },
  plugins: [],
};
