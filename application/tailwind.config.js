/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./src/**/*.{html,ts}'],
    relative: true
  },
  /**
   * @todo
   * Make this work without safelisting (source - XGlitchDirective)
   */
  safelist: [
    'animate-x-glitch',
    'before:left-0',
    'after:left-0',
    'before:absolute',
    'after:absolute',
    `before:content-[attr(data-XGlitchDirective-text-content-copy)]`,
    `after:content-[attr(data-XGlitchDirective-text-content-copy)]`,
    'before:[clip-path:polygon(0_0,100%_0,100%_33%,0_33%)]',
    'after:[clip-path:polygon(0_67%,100%_67%,100%_100%,0_100%)]',
    'before:animate-x-glitch-top',
    'after:animate-x-glitch-bottom',
    'before:pointer-events-none',
    'after:pointer-events-none',
    'before:select-none',
    'after:select-none'
  ],
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
