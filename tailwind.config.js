/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#F0F2F5",
        midGrey: "#344054",
        grey500: "#667185",
        grey700: "#344054",
        deepGrey: "#101928",
        lemonGreen: "#8BC043",
        green: "#226A35",
        green500: "#1F6030",
        deepGreen: "#07150B",
        greyBlack: "#333333"
      },
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
