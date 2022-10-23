module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color:{
      'main': "f3f3f3",
      'blue': "2273FF", 
      'black': "1B1212"
    },
      // width:{
      //   '40-r': '40rem',
      //   '35-r': '30rem',
      //   '50-r': '50rem',
      //   '45-r': '45rem'  

      // },
      // height:{
      //   '40-r': '40rem',
      //   '35-r': '30rem',
      //   '50-r': '50rem',
      //   '45-r': '45rem' 
      // },
      boxShadow:{
        'md': '0 4px 6px rgba(0, 0, 0, 0.20)', 
//          0 2px 4px -1px rgba(0, 0, 0, 0.06);
// box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
  },
  plugins: [],
}