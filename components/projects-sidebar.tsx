import * as React from 'react';
import Link from 'next/link';

import { Button } from './ui/button';
import CustomToolTip from './tool-tip';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

import { Blogs, blogs, projects, Projects } from '@/.velite';
import {
    getBlogFromParams,
    getProjectFromParams,
    getSimilarCategory,
    truncate,
} from '../lib/utils';

interface Props {
    title: string;
    contentType: 'project' | 'blog';
    slug: string;
}

export function Sidebar({ title, contentType, slug }: Readonly<Props>) {
    let result;
    if (contentType === 'blog') {
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
    let someOtherContent: Projects[] | Blogs[] = [];
    if (result.length === 0) {
        if (contentType === 'blog') {
            someOtherContent = blogs
                .filter((b) => b.slugAsParams === slug)
                .slice(0, 10);
        } else {
            someOtherContent = projects
                .filter((p) => p.slugAsParams !== slug)
                .slice(0, 10);
        }
    }
    const finalResult = result.length ? result : someOtherContent;
    let sidebarTitle;

    if (someOtherContent?.length) {
        sidebarTitle = `Other ${contentType === 'blog' ? 'Blogs' : 'Projects'}`;
    } else {
        sidebarTitle = title;
    }

    return (
        <ScrollArea className="hidden md:block h-[90vh] rounded-l border">
            <div className="w-[200px]">
                <h4 className="mb-4 text-lg font-medium border-b w-full py-2 text-center">
                    <span className="p-4 w-full whitespace-nowrap">
                        <span className="p-4 w-full whitespace-nowrap">
                            {sidebarTitle}
                        </span>
                    </span>
                </h4>
                <div className="px-2">
                    {finalResult?.map((content: any) => (
                        <div key={content.slug + content.category}>
                            <Link href={`/${content.slug}`} className="text-sm">
                                <CustomToolTip
                                    label={content?.title || content?.name}>
                                    <Button variant="link">
                                        {contentType === 'blog'
                                            ? truncate(content?.title)
                                            : truncate(content?.name)}
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
