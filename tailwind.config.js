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
        'contactShadow': '-20px 15px 10px -10px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        highlight: "var(--highlight)",
        text1: "var(--text1)",
        secondary2: "var(--secondary)",
        contactBG: "var(--contactBG)",
        contactBorder: "var(--contactBorder)",
        titlecard: 'var(--titlecard)',
        'titlegray': '#ffffff',
        'borderlight': '#ddd',
        'blueCustom': '#4e66f8',
      },
    },
  },
  plugins: [],
};
