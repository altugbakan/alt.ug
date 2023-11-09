import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string(),
    github: z.string(),
    technologies: z.array(z.string()),
  }),
});

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectCollection,
  posts: postCollection,
};
