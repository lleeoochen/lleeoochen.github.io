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
    },
    extend: {
      boxShadow: {
        lg: "0px 2px 5.7px rgba(110,110,110,.43)",
        xl: "0px 5px 10px rgba(110,110,110,.43)",
      },
    },
  },
  plugins: [],
};
