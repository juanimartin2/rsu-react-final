/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    '../componentes//*.{js,ts,jsx,tsx,mdx}',
    '/app//*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          main: '#00492C',
          main50: '#00824e',
          medicas: '#2A8B22',
          medicas50: '#67bb5f',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        brown: {
          derecho: '#781A1A',
          derecho50: '#dd3d3d',
        },
        red: {
          filo: '#E31E24',
          filo50: '#f3656a',
        },
        orange: {
          educ: '#DE6E00',
          educ50: '#ff9c39',
        },
        blue: {
          econom: '#1B3B82',
          econom50: '#3568d6',
          escseg: '#021233',
          escseg50: '#4669af',
          alim: '#07858A',
          alim50: '#23c3c9',
        },
        yellow: {
          escform: '#FEED00',
          escform50: '#faf6bb',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};