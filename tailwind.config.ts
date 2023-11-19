import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
    },
    extend: {
      minHeight: {
        screen: ["100vh", "100svh"] as any,
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
  darkMode: "class",
} satisfies Config;
