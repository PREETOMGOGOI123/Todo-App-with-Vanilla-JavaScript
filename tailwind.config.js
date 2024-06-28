/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.mjs",
    "./src/**/*.{js,html}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': ['#5596FF'],
        'custom-violet': ['#AC2DEB']
      },
      backgroundImage: {
        'background-light': "url('./assets/images/desktopViewImages/bg-desktop-light.jpg')",
      },
      fontFamily:{
        'josefin-sans': ['Josefin Sans','sans-serif'],
      },
    },
  },  
  plugins: [],
}