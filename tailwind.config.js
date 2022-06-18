module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
fontFamily: {
  'dmsans': ['DM Sans', 'sans-serif'],
  'syne': ['Syne', 'sans-serif'],
},
      keyframes:{
        scale_up_tr:{
          '0%' : { transform: 'scale(0.5)',
        'transform-origin': '100% 0%'},
'100%': {transform: 'scale(1)',
'transform-origin': '100% 0%'},
      }
      },
      animation: {
scale_up_tr: 'scale_up_tr 0.45s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      },
       
      
      },
     

    
    colors: {
      'black-bg': '#080B10',
      'white': '#ffffff',
      'people-lemon': '#C0EB7E',
      'signup-lemon': '#80CD09',
      'black': '#000000',
      'footer': 'rgba(125, 125, 125, 0.45)',
      'feature-bg': 'rgba(250, 250, 250, 0.1)',
      
    },
    screens: {
      'xlarge': {'raw': '(min-width: 1050px)'},
      'xxlarge': {'raw': '(min-width: 1400px)'},
      'large': { 'raw': '(max-width: 1050px)' },
      'medium': { 'raw': '(max-width: 768px)' },
      'xmedium': {'raw': '(max-width: 950px)'},
      'small': { 'raw': '(max-width: 550px)' },
      'msmall': {'raw': '(min-width: 650px)'},
      'mmsmall': {'raw': '(min-width: 500px)'},
      'lsmall': {'raw': '(min-width: 550px)'},
      'smaller': { 'raw': '(max-width: 450px)' },
      'msmaller': { 'raw': '(min-width: 450px)' },
'xsmaller': { 'raw': '(min-width: 350px)' },
'mxsmaller': { 'raw': '(min-width: 400px)' },

      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  plugins: [],
}
