/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{tsx,ts}',
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'svg': "url('/wave.svg')"
      },
      fontFamily: {
        'sans': ["Inter", 'system-ui'],
        'ubuntu': ['Ubuntu', 'Inter', 'system-ui']
      },
      animation: {
        'left-appears': 'left-appears 1s cubic-bezier(0,.25,.55,.99) backwards'
      },
      keyframes: {
        'left-appears': {
          'from': {
            opacity: 0,
            width: '0%'
          },
          'to': {
            opacity: 1,
            width: '100%'
          }
        },
      }
    },
  },
  plugins: [],
};
