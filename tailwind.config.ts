import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "820": "820px",
      },
      colors: {
        "color-lightgrey": "#fafafa",
        "color-grey": "#d2d2d7",
        "color-blue": "#0071e3",
        "color-blue-hover": "#06c",
        "color-powder-blue": "#c7f8ff",
        "color-purple": "#9d44fd",
        "color-purple-2": "#9091ff",
        "color-black": "#1d1d1f",
      },
      fontFamily: {
        body: [
          "SF Pro Text",
          "Inter",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
          "Inter",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "chip-thumb": "url('/images/chip-highlight-1.jpeg')",
        "chip-thumb-2": "url('/images/chip-highlight-2.jpeg')",
        "text-gradient-1": "linear-gradient(90deg, #ff9fe1 0%, #8727ff 100%)",
        "text-gradient-2":
          "linear-gradient(90deg, #fbf4ec 10%,#ecd7c8 23.3%,#eea4bc 36.6%,#be88c4 49.9%,#9186e7 63.2%,#92c9f9 76.6%,#c7f8ff 90%)",
        "text-gradient-3": "linear-gradient(35deg, #d676eb 30%, #8227ff 70%)",
        "text-gradient-4":
          "linear-gradient(35deg, #fbf4ec 0%, #ecd7c8 16.5%,#eea4bc 33%,#be88c4 49.5%,#9186e7 66%,#92c9f9 82.5%,#c7f8ff 100%)",
      },
    },
  },
  plugins: [],
}
export default config
