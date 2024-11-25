/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'boxFocus': '0px 0px 10px rgb(0, 123, 255)',
      },
      colors: {
        background: "var(--background)",
        
        'blueCustom': '#4e66f8',
      },
    },
  },
  plugins: [],
};
