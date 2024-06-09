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
            thumbnail: s.string(),
            liveURL: s.string(),
            tags: s.array(s.string()),
            category: s.string(),
            similarCategory: s.array(s.string()),
            startDate: s.isodate(),
            endDate: s.isodate(),
            description: s.string().max(500),
            published: s.boolean().default(true),
            body: s.mdx(),
        })
        .transform(computedFields),
});

export default defineConfig({
    root: 'content',
    output: {
        data: '.velite',
        assets: 'public/velite',
        base: '/velite/',
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
