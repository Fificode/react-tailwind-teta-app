module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
backgroundImage: {
'greenbg-one': "url('/assets/greenbgone.png')",
'greenbg-two': "url('/assets/greenbgtwo.png')",
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
        move_forward:{
          'from' : { transform: 'translateY(0em)'
        },
'to': {transform: 'translateY(3em)'
},
      }
      },
      animation: {
        // animationName: 'scale_up_center',
        // animationDuration: '1s',
        // animationDelay: '4s',
        // animationIterationCount: '1',
        // animationFillMode: 'forwards',
move_forward: 'move_forward 1s 4s 1 forwards',
      },

    
    colors: {
      'black-bg': '#080B10',
      'white': '#ffffff',
      'people-lemon': '#C0EB7E',
      'signup-lemon': '#80CD09',
      'logo' : 'linear-gradient(95deg, #84FD4F -25.32%, #CCFA84 137.5%)',
      'btn-bg': 'linear-gradient(95deg, #D0FE89 -25.32%, #95E50A 93.62%, #D6FB9D 116.91%)',
      'commit-bg': 'linear-gradient(104.19deg, #283234 0.08%, #243133 48.88%, #080B10 100%)',
      'black': '#000000',
      
    },
    screens: {
      'xlarge': {'raw': '(min-width: 1050px)'},
      'large': { 'raw': '(max-width: 1050px)' },
      'medium': { 'raw': '(max-width: 768px)' },
      'xmedium': {'raw': '(max-width: 950px)'},
      'small': { 'raw': '(max-width: 550px)' },
      'msmall': {'raw': '(min-width: 650px)'},
      'mmsmall': {'raw': '(min-width: 500px)'},
      'lsmall': {'raw': '(min-width: 550px)'},
      'smaller': { 'raw': '(max-width: 450px)' },
      'msmaller': { 'raw': '(min-width: 370px)' },
'xsmaller': { 'raw': '(max-width: 350px)' },

      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  plugins: [],
}
