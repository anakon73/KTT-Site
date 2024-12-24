/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1e293b', // Фон для темной темы
        'dark-primary': '#253142', // Основной цвет для темной темы
        'dark-text': '#f8fafc', // Текст для темной темы
      },
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
