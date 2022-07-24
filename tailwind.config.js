module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        //If you change this you need to change the CSS variable declared in index.scss as well.
        'highlight': '#18EC59', 
      },
    },
  },
  plugins: [],
}