/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif'],
        'mono': ['Noto Sans Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

