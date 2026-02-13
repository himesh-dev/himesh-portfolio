import { defineCollection, z } from 'astro:content';
import type { Loader } from 'astro/loaders';

// Mock remote fetch loader
const projectsLoader: Loader = {
    name: 'projects-loader',
    load: async ({ store }) => {
        // Simulate fetching data from a remote source (e.g., Stitch, CMS)
        const mockData = [
            {
                id: 'project-1',
                title: 'Project One',
                description: 'A description for Project One.',
                seoKeywords: ['project', 'one', 'showcase'],
                ogImage: 'https://example.com/project-1-og.jpg',
                content: 'This is the content for Project One.'
            },
            {
                id: 'project-2',
                title: 'Project Two',
                description: 'A description for Project Two.',
                seoKeywords: ['project', 'two', 'design'],
                ogImage: 'https://example.com/project-2-og.jpg',
                content: 'This is the content for Project Two.'
            }
        ];

        mockData.forEach(item => {
            store.set({ id: item.id, data: item });
        });
    }
};

const projectsVal = defineCollection({
    loader: projectsLoader,
    schema: z.object({
        title: z.string(),
        description: z.string(),
        seoKeywords: z.array(z.string()).optional(),
        ogImage: z.string().url().optional(),
    }),
});

export const collections = {
    projects: projectsVal,
};
