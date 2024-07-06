/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      keyframes: {
        'x-glitch-keyframes': {
          '2%, 64%': {
            transform: 'translate(2px,0) skew(0deg)'
          },
          '4%, 60%': {
            transform: 'translate(-2px,0) skew(0deg)'
          },
          '62%': {
            transform: 'translate(0,0) skew(5deg)'
          }
        },
        'x-glitch-top-keyframes': {
          '2%, 64%': {
            transform: 'translate(2px,-2px)'
          },
          '4%, 60%': {
            transform: 'translate(-2px,2px)'
          },
          '62%': {
            transform: 'translate(13px,-1px) skew(-13deg)'
          }
        },
        'x-glitch-bottom-keyframes': {
          '2%, 64%': {
            transform: ' translate(-2px,0)'
          },
          '4%, 60%': {
            transform: 'translate(-2px,0)'
          },
          '62%': {
            transform: 'translate(-22px,5px) skew(21deg)'
          }
        }
      },
      animation: {
        'x-glitch': 'x-glitch-keyframes 2s linear infinite',
        'x-glitch-top': 'x-glitch-top-keyframes 2s linear infinite',
        'x-glitch-bottom': 'x-glitch-bottom-keyframes 3s linear infinite'
      }
    }
  }
};
