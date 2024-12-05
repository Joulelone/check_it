/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.{html,js}",
    "./src/**/*.{js,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Bleu principal
        secondary: "#60A5FA", // Bleu clair
        background: "#1E293B", // Fond sombre
        light: "#f8fafc", // Couleur claire
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        grotesk: ["Constructio Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Pour les styles de formulaires
  ],
};
