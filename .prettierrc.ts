import type { Config } from "prettier";

export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  bracketSameLine: true,
  htmlWhitespaceSensitivity: "strict",
} satisfies Config;
