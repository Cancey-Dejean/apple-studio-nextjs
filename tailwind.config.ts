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
        "color-blue": "#0071e3",
      },
      fontFamily: {
        body: [
          "SF Pro Text",
          "SF Pro Icons",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "SF Pro Display",
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
      },
    },
  },
  plugins: [],
}
export default config
