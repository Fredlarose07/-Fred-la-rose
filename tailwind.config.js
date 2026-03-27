/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#181614',
        accent: '#F66EC4',
        neutral: {
          100: '#FFFFFF',
          90:  'rgba(255,255,255,0.90)',
          70:  'rgba(255,255,255,0.70)',
          50:  'rgba(255,255,255,0.50)',
          30:  'rgba(255,255,255,0.30)',
          20:  'rgba(255,255,255,0.20)',
          10:  'rgba(255,255,255,0.10)',
          6:   'rgba(255,255,255,0.06)',
          3:   'rgba(255,255,255,0.03)',
        },
        icon: {
          default: '#606060',
          active:  '#D2D2D2',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body:    ['"Google Sans Flex"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        'inner': '12px',
        lg:      '16px',
      },
    },
  },
  plugins: [],
}