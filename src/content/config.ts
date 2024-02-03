import { defineCollection, z } from 'astro:content'

const post = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    description: z.string(),
    draft: z.boolean().optional(),
    heroImage: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    title: z.string(),
    toc: z.boolean().optional(),
    topic: z.string().optional(),
    updatedDate: z.coerce.date().optional()
  })
})

export const collections = { post }
