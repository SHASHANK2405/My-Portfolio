/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': 'rgb(231, 231, 231)',
        'orange': 'var(--bgOrange)',
      },
      
      fontFamily: {
        // inter: ["Inter", "sans-serif"],
        'be-vietnam': ['"Be Vietnam Pro"', 'sans'],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
        orange : {
          500 : "#e84949"
        }
      },
    },
  },
  plugins: [],
};
