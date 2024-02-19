/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4E8",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
        "green-500": "#008000",
      },
      backgroundImage: (theme) => ({
        "gradiend-yellowred": "linear-gradient(90def, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic_school.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        backgroundtext: "url('./assets/school_academy_hompage_background_text.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkes: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

