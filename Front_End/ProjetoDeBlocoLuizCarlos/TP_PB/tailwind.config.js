/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#d7f4e6',
        customBlueColor: '#00849E',
        customBlackColor: '#22262A',
        customBlack2Color: '#484F56',
        customBege: '#FFFAF0',
        customCinza:'#F6F8F8',

      },
    },
  },
  plugins: [],


}

