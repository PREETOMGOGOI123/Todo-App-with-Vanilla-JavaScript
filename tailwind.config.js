/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.js",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': ['#5596FF'],
        'custom-violet': ['#AC2DEB'],
        'custom-light-grey': ['#E3E4F1'],  
      },
      backgroundImage: {
        'background-light': "url('./assets/images/desktopViewImages/bg-desktop-light.jpg')",
        'checked-mage': "url(./assets/images/universalImages/icon-check.svg)"
      },
      fontFamily:{
        'josefin-sans': ['Josefin Sans','sans-serif'],
      },
    },
  },  
  plugins: [],
}