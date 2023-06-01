/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1024px',
      },
      colors: {
        'black': '#000000',
        'blue': '#00AEFF' ,
        'gray': '#EBE9EA',
        'white': {
          100:'#ffffff',
          200: '#f9f9f9'
        }
      },
      fontFamily: {
        mont: ['Montserrat Alternates', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
