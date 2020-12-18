module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["lato", "sans-serif"],
        nunito: ["nunito", "tahoma"]
      },
      colors: {
        blue: {
          light: '#857dce',
          default: '#3326ae',
          dark: '#3326ae',
          search: "#f7f8ff",
        },
        orange: {
          light: '#ff342d',
          default: '#ff392b',
          dark: '#ff3a2b',
        }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        body: '1fr 25fr',
        searchRow: '9fr 9fr 2fr',
        autoTwoColumns: '1fr 1fr',
        twoUnevenColumns: "2fr 1fr",
        twoUnevenColumnsReversed: "1fr 2fr",

      },
      gridTemplateRows: {
        header: "200px auto",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      boxShadow: {
        around: "0 0 1.5rem rgba(51, 38, 185, 0.15)",
        aroundY: "0 8px 1.5rem rgba(51, 38, 185, 0.15)",

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
