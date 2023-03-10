import { defineCollection, z } from 'astro:content';

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      preview: z.string(),
      imgs: z.array(z.string()),
      img_alt: z.string().optional(),
    }),
  }),
};
