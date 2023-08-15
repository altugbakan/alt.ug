/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".link": {
          textUnderlineOffset: "4px",
          fontSize: "1.25rem",
          lineHeight: "1.75rem",
        },
        ".link:hover": {
          textDecoration: "underline",
        },
      });
    },
  ],
};
