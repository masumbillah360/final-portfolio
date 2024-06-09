import * as React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { getBlogFromParams } from '@/app/blogs/[id]/page';
import { blogs, projects } from '@/.velite';
import { getProjectFromParams } from '@/app/projects/[id]/page';
import { Button } from './ui/button';
import CustomToolTip from './tool-tip';

interface Props {
    title: string;
    type: 'project' | 'blog';
    slug: string;
}
type blogType = (typeof blogs)[0];
type projectType = (typeof projects)[0];

function getSimilarCategory(
    slug: string,
    category: string,
    type: 'blog' | 'project'
) {
    if (type === 'blog') {
        return blogs.filter(
            (blog: blogType) =>
                blog.slug !== slug &&
                blog.similarCategory.some((cat: string) => cat === category)
        );
    } else {
        return projects.filter(
            (project: projectType) =>
                project.slug !== slug &&
                project.similarCategory.some((cat: string) => cat === category)
        );
    }
}

export function Sidebar({ title, type, slug }: Props) {
    let result;
    if (type === 'blog') {
        const blog = getBlogFromParams(slug);
        result = getSimilarCategory(blog?.slug!, blog?.category!, 'blog');
    } else {
        const project = getProjectFromParams(slug);
        result = getSimilarCategory(
            project?.slug!,
            project?.category!,
            'project'
        );
    }

    return (
        <ScrollArea className="hidden md:block h-screen rounded-l border">
            <div className="w-[200px]">
                <h4 className="mb-4 text-lg font-medium border-b w-full py-2 text-center">
                    <span className="p-4 w-full whitespace-nowrap">
                        {title}
                    </span>
                </h4>
                <div className="px-2">
                    {result?.map((content: projectType | blogType) => (
                        <div key={content.slug + content.category}>
                            <Link href={`/${content.slug}`} className="text-sm">
                                <CustomToolTip
                                    // @ts-ignore
                                    label={content?.title || content?.name}>
                                    <Button variant={'link'}>
                                        {type === 'blog'
                                            ? // @ts-ignore
                                              content?.title.length > 20
                                                ? // @ts-ignore
                                                  content?.title.slice(0, 20) +
                                                  '...'
                                                : // @ts-ignore
                                                  content?.title!
                                            : // @ts-ignore
                                            content?.name.length > 20
                                            ? // @ts-ignore
                                              content?.name.slice(0, 20) + '...'
                                            : // @ts-ignore
                                              content?.name}
                                    </Button>
                                </CustomToolTip>
                            </Link>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
}
