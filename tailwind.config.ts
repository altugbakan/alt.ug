import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
  darkMode: "class",
} satisfies Config;
