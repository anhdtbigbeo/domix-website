/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bgPrimary: '#050505',
        bgSecondary: '#0A0A0A',
        bgSurface: '#111111',
        borderSubtle: '#242424',
        accentIndigo: '#6366F1',
        accentViolet: '#8B5CF6',
        accentCyan: '#38BDF8',
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
