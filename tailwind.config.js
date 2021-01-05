const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: true,
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.serif]
      },
      fontSize: {
        '2xl': '1.45rem'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    }
  },
  plugins: [],
};