module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color:{
      'main': "f3f3f3",
      // 'bl': "2273FF", 
      // 'blackCustom': "1B1212",
      transparent: 'transparent',
      current: 'currentColor',
    },
      boxShadow:{
        'md': '0 4px 6px rgba(0, 0, 0, 0.20)', 
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      zIndex: {
        'n1': '-10',
        'n2': '-5',
        'n3': '-4',
      },
  },
  plugins: [],
}