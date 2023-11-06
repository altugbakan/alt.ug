import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
  },
  darkMode: "class",
} satisfies Config;