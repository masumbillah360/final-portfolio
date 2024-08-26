import { defineCollection, defineConfig, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePretteyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const blogs = defineCollection({
    name: 'Blogs',
    pattern: 'blogs/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            title: s.string().max(99),
            subTitle: s.string().max(200),
            date: s.isodate(),
            tags: s.array(s.string()),
            description: s.string().max(500),
            published: s.boolean().default(true),
            category: s.string(),
            similarCategory: s.array(s.string()),
            thumbnail: s.string(),
            body: s.mdx(),
        })
        .transform(computedFields),
});

const projects = defineCollection({
    name: 'Projects',
    pattern: 'projects/**/*.mdx',
    schema: s
        .object({
            slug: s.path(),
            name: s.string().max(99),
            subDescription: s.string().max(200),
            description: s.string().max(500),
            category: s.string(),
            similarCategory: s.array(s.string()),
            tags: s.array(s.string()),
            url: s.string(),
            urls: s.array(s.object({ label: s.string(), link: s.string() })),
            date: s.object({
                startDate: s.isodate(),
                endDate: s.isodate(),
            }),

            thumbnail: s.string(),
            coverImages: s
                .array(s.string())
                .max(3, { message: 'Maximum file url will be 3' }),
            published: s.boolean().default(true),
            upcoming: s.boolean().default(false).optional(),
            protected: s.boolean().default(false).optional(),
            featured: s.boolean().default(false),
            body: s.mdx(),
        })
        .transform(computedFields),
});

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: '/public/content-image',
        base: '/content-image/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },
    collections: { blogs, projects },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePretteyCode, { theme: 'github-dark' }],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: 'wrap',
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    },
                },
            ],
        ],
        remarkPlugins: [],
    },
});
