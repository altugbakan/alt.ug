/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["pastel", "forest"],
  },
  darkMode: ["class", "[data-theme='forest']"],
};
