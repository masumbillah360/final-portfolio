import * as React from 'react';
import Link from 'next/link';

import { Button } from './ui/button';
import CustomToolTip from './tool-tip';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

import { blogs, projects } from '@/.velite';
import { getBlogFromParams } from '@/app/blogs/[id]/page';
import { getProjectFromParams } from '@/app/projects/[id]/page';

interface Props {
    title: string;
    type: 'project' | 'blog';
    slug: string;
}
export type blogType = (typeof blogs)[0];
export type projectType = (typeof projects)[0];

function getSimilarCategory(
    slug: string,
    category: string,
    type: 'blog' | 'project'
) {
    if (type === 'blog') {
        return blogs.filter((blog: blogType) => {
            const isSlugDifferent = blog.slugAsParams !== slug;
            const hasCategory = blog.similarCategory.some(
                (cat: string) => cat === category
            );
            return isSlugDifferent && hasCategory;
        });
    } else {
        return projects.filter((project: projectType) => {
            const isSlugDifferent = project.slugAsParams !== slug;
            const hasCategory = project.similarCategory.some(
                (cat: string) => cat === category
            );

            return isSlugDifferent && hasCategory;
        });
    }
}

export function Sidebar({ title, type, slug }: Props) {
    let result;
    if (type === 'blog') {
        const blog = getBlogFromParams(slug);
        result = getSimilarCategory(
            blog?.slugAsParams!,
            blog?.category!,
            'blog'
        );
    } else {
        const project = getProjectFromParams(slug);
        result = getSimilarCategory(
            project?.slugAsParams!,
            project?.category!,
            'project'
        );
    }
    let someOtherContent: string | any[] = [];
    if (result.length === 0) {
        if (type === 'blog') {
            someOtherContent = blogs.slice(0, 10);
        } else {
            someOtherContent = projects.slice(0, 10);
        }
    }
    const finalResult = result.length ? result : someOtherContent;
    return (
        <ScrollArea className="hidden md:block h-screen rounded-l border">
            <div className="w-[200px]">
                <h4 className="mb-4 text-lg font-medium border-b w-full py-2 text-center">
                    <span className="p-4 w-full whitespace-nowrap">
                        {someOtherContent?.length > 0
                            ? `Other ${type === 'blog' ? 'Blogs' : 'Projects'}`
                            : title}
                    </span>
                </h4>
                <div className="px-2">
                    {finalResult?.map((content: projectType | blogType) => (
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
