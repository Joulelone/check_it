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
        light: "#F1F5F9", // Couleur claire
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Police principale
        heading: ["Poppins", "sans-serif"], // Police pour les titres
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Pour les styles de formulaires
  ],
};
