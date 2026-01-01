/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          background: 'hsl(var(--background) / <alpha-value>)',
          foreground: 'hsl(var(--foreground) / <alpha-value>)',
          navy: '#0f2b56',
          mint: '#74dea1',
        },
        fontFamily: {
          sans: ['Lato', 'sans-serif'],
        },
        keyframes: {
          fade: {
            '0%': {
              'opacity': '0',
              'transform': 'translateY(10px)',
            },
            '100%': {
              'opacity': '1',
              'transform': 'translateY(0)',
            },
          },
        },
        animation: {
          'fade-in': 'fade 0.5s ease-out forwards',
          fadeInUp: 'fadeInUp 0.6s ease-out forwards',
          fadeIn: 'fadeIn 0.6s ease-out forwards',
        },
      },
    },
    plugins: [],
  };
  