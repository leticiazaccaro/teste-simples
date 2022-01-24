module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,tsx}'
  ],
  darkMode: false, //or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-gray': '#FCFCFC',
        'ligth-gray-text': '#BDBDBD',
        'dark-gray-text': '#828282',
        'blue-default': '#0291FB',
        'blue-gradient': '#00ACFF',
        'gray-border': '#E0E0E0'
      },
      boxShadow: {
        '3xl': '0px 5px 19px -4px rgba(0, 0, 0, 0.03)',
        '5xl': '0px 8px 24px -4px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
