/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#869F58',
        customGray : '#B0B0B0',
        customPink : '#FFB5B5',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"),require('@tailwindcss/line-clamp')],
}
