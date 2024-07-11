/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    // Puoi aggiungere altri percorsi di file qui se necessario
  ],
  theme: {
    extend: {
      spacing: {
        '9/10': '90%',
      },
      height: {
        '90vh': '90vh',
      },
      brightness: {
        35: '.35',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
