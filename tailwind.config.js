module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brand-purple':'#7860EF',
        'brand-green':'#92CD27',
        'typography-white':'#ECF6FF',
        'typography-grey':'#78828B',
        'black-v1':'#18191C',
        'black-v2':'#1A1B1E',
        'black-v3':'#202125'

      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    }
    },
  },
  plugins: [],
}
