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
      },
    },
  },
  plugins: [],
}
