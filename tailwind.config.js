/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Menyertakan file HTML utama
    "./src/**/*.{js,jsx,ts,tsx}", // Menyertakan semua file JS/JSX dan TS/TSX di folder src
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
