import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const posts = await getCollection("posts");
const projects = await getCollection("projects");

const pages = Object.fromEntries(
  [...posts, ...projects].map(({ slug, data }) => [
    slug,
    { title: data.title, description: data.description },
  ]),
);

export const { getStaticPaths, GET } = OGImageRoute({
  param: "route",
  pages: pages,

  getImageOptions: (_, page) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [24, 24, 27],
      [39, 39, 42],
    ],
    logo: {
      path: "./src/images/logo-128.png",
      size: [128, 128],
    },
    font: {
      title: {
        families: ["Helvetica"],
        size: 64,
        lineHeight: 1.1,
      },
      description: {
        families: ["Helvetica"],
      },
    },
    padding: 80,
  }),
});
