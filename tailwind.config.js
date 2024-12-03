/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      dropShadow: {
        mainshadow: '4px 4px 40px rgba(37, 99, 235, 0.25)',
      },
      boxShadow: {
        innershadow: 'inset 0px 0px 30px rgba(0, 0, 0, 0.05)',
        inOutShadow: '0px 0px 30px rgba(0, 0, 0, 0.07), inset 0px 0px 30px rgba(0, 0, 0, 0.07)',
      },
    },
  },
  plugins: [],
}
