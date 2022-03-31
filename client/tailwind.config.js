module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A65FEC",
          200: "#8D31E7",
        },
        secondary: {
          100: "#A5EC5F",
          200: "#8BE731"
        }
      },
      fontFamily: {
        body: ['PlayFair']
      }
    },
  },
  plugins: [require("daisyui")],
}
