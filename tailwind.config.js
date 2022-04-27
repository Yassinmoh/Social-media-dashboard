module.exports = {
  mode:"jit",
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"1rem",
      },
      colors:{
        bg:{
          DEFAULT:"#f8f9ff",
          card:"#f1f3fa"
        }
      }
    },
  },
  plugins: [],
}
