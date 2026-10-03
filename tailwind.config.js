/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true, padding: "1.5rem" },
    extend: {
      colors: {
        charcoal: "#171C1A",
        ivory: "#F5F3EC",
        brass: "#AF9358",
        "brass-dim": "#7A6636", // darker brass for text on light backgrounds (AA contrast)
        slate: "#53615B",
      },
      fontFamily: {
        body: ["'Manrope Variable'", "Inter", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4 Variable'", "Georgia", "serif"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
