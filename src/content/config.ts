// import { defineCollection, z } from 'astro:content';

// export const collections = {
// 	work: defineCollection({
// 		type: 'content',
// 		schema: z.object({
// 			title: z.string(),
// 			description: z.string(),
// 			//publishDate: z.coerce.date(),
// 			tags: z.array(z.string()),
// 			img: z.string(),
// 			img_alt: z.string().optional(),
// 			// url: z.string().url(),
// 		}),
// 	}),
// };
import { defineCollection, z } from 'astro:content';

const isURL = (value) => {
    try {
        new URL(value);
        return true;
    } catch (error) {
        return false;
    }
};

export const collections = {
    work: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            description: z.string(),
            //publishDate: z.coerce.date(),
            tags: z.array(z.string()),
            img: z.string(),
            img_alt: z.string().optional(),
            url: z.string().refine(value => isURL(value), {
                message: 'URL must be a valid URL'
            }),
        }),
    }),
};


