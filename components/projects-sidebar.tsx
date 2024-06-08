import * as React from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `React Version 19 Latest Blog ${a.length - i}`
);

interface Props {
    title: string;
    type: 'project' | 'blog';
}
export function Sidebar({ title, type }: Props) {
    return (
        <ScrollArea className="h-screen rounded-l border">
            <div className="">
                <h4 className="mb-4 text-lg font-medium leading-7 border-b w-full py-2">
                    <span className="p-4">{title}</span>
                </h4>
                <div className="px-4">
                    {tags.map((tag) => (
                        <div key={tag + type}>
                            <Link
                                href={'/'}
                                key={tag + type}
                                className="text-sm">
                                {tag}
                            </Link>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    );
}
