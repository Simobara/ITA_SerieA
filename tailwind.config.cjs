/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Modifica questo percorso in base alla tua struttura di progetto
    // Puoi aggiungere altri percorsi di file qui se necessario
  ],
  theme: {
    extend: {
      spacing: {
        '9/10': '90%',
      },
      height: {
        '90vh': '90vh',
      }
    },
  },
  plugins: [],
}

