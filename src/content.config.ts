import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    metrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
    category: z.enum(['identity', 'endpoint', 'security', 'automation', 'project']),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    icon: z.string().optional(), // Emoji or icon identifier
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['identity', 'endpoint', 'security', 'automation', 'general']).default('general'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'blog': blog,
};
