import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    github: z.string(),
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectCollection,
};
