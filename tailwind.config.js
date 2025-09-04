/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: {
          800: '#124548',
          900: '#0f3a3d',
        },
        orange: {
          400: '#DA8F27',
          500: '#DA8F27',
          600: '#c17d1f',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
