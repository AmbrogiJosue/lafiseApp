/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        lafiseGreen: "#018765",
        lafiseGreenAccent: "#E6F3F0",
        gray: "#7E7E7E",
        lightGray: '#CACFD8',
        blueAccent: '#E6F7FD',
        blue: '#0079A8',
        success: '#33BA75',
      },
      borderRadius: {
        "3xl": 18,
      }
    },
  },
  plugins: [],
}