/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "color-green": '#71cd14',
        "color-grey": '#797979',
        "color-grey-light": '#EFF2F3'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: {
          DEFAULT: "20px",
          md: '50px'
        }
      }
    }
  },
  plugins: [],
}

