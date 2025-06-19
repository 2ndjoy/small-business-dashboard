/** @type {import('tailwindcss').Config} */
module.exports = {  
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors if needed
        primary: '#4F46E5',
      },
    },
  },
  plugins: [],
}

