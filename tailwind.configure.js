/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brown: {
            500: "#8B4513", // SaddleBrown
            600: "#A0522D", // Sienna
            700: "#654321", // Darker Brown
          },
        },
      },
    },
    plugins: [],
  }
  
  