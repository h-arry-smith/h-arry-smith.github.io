module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  },
  theme: {
    extend: {
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