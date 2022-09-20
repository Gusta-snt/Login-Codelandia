module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fonts: {
      merriweather: ['Merriweather', 'serif'],
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'green-light': '#04C35C',
        'purple-light': '#2B6CB0',
        'white-200': '#F7FAFC',
        gray: '#1A202C'
      },
    },
  },
  plugins: [],
}