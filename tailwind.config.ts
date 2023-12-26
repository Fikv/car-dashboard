import type { Config } from 'tailwindcss'

const config: Config = {
  plugins: [require("daisyui")],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["night"],
  },
}
export default config
