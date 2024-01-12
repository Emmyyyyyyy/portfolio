/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1280px'},
      'lg': {'max': '1024px'},
      'md': {'max': '770px'},
      'sm': {'max': '640px'},
      'screen-580': {'max': '580px'},
      'screen-437': {'max': '437px'},
      'bf-xs': {'max': '430px'},
      'screen-422': {'max': '422px'},
      'xs': {'max': '390px'}, 
      'mini': {'max': '350px'},  
    },
  },
  plugins: [],
}

