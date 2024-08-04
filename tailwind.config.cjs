/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Puoi aggiungere altri percorsi di file qui se necessario
  ],
  theme: {
    extend: {
      spacing: {
        "9/10": "90%",
      },
      height: {
        "90vh": "90vh",
      },
      brightness: {
        35: ".35",
        40: "0.4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "overflow-y": "scroll",
          "-ms-overflow-style": "none" /* IE e Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none" /* Safari e Chrome */,
        },
        ".brightness-60": {
          filter: "brightness(60%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
