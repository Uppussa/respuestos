/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        'muted-foreground': '#6c757d',
        card: '#f8f9fa',
      },
    },
  },
  variants: {},
  plugins: [],
}