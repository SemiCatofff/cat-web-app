module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#D5F84A',
        black: '#192126',
        purple: '#8567FF',
        accent: '#f9acaa',
        custom: '#192126',
      },
      fontFamily: {
        ttruns: ['TTRuns', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      borderRadius: {
        box: '20px',
        tab: '100px',
      },
      height: {
        custom: '79px',
        tab: '54px',
      },

      padding: {
        custom: '1.25rem',
      },

      margin: {
        custom: '1.25rem',
      },
      backgroundImage: {
        hero: "url('../assets/images/bgapp.svg')",
        trophy: "url('../assets/images/xyz.png')",
        signup: "url('../assets/images/signup.png')",
        blur: "url('../assets/images/blur.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
