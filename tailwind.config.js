module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#D5F84A",
        black: "#192126",
        accent: "#f9acaa",
        custom: "#282C2E",
      },
      fontFamily: {
        ttruns: ["TTRuns", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },

      borderRadius: {
        custom: "12px",
      },
      height: {
        custom: "170px",
      },

      padding: {
        custom: "1.25rem",
      },

      margin: {
        custom: "1.25rem",
      },
    },
  },
  plugins: [],
};
