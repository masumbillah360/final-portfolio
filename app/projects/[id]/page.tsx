'use client';


import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Sidebar } from '@/components/projects-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

import { projects } from '#content';
import { MDXContent } from '@/components/velite/mdx-components';

import '@/styles/mdx.css';

export function getProjectFromParams(params: any) {
    const slug = params;
    return projects.find((result) => result.slugAsParams === slug);
}

const SingleProjectPage = ({ params }: { params: { id: string } }) => {
     const [mounted, setMounted] = useState<boolean>(false);
     useEffect(() => {
         setMounted(true);
     }, []);

     if (!mounted) return null;
    const project = getProjectFromParams(params.id);
    return (
        <div>
            <div className="flex">
                <ScrollArea className="h-screen flex-1 w-full">
                    <div className="p-2">
                        <div className="mt-10">
                            <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                                {project?.name}
                            </h1>
                            <h1 className="text-lg mt-3">
                                {project?.subDescription}
                            </h1>
                        </div>
                        <div className="mt-3">
                            <Image
                                src={project?.thumbnail!}
                                alt="Project thumbnail"
                                width={1024}
                                height={768}
                                className="size-full rounded"
                            />
                        </div>
                        <div className="my-3">
                            <MDXContent code={project?.body!} />
                        </div>
                        <div className="my-3 flex justify-between items-start">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-2 border rounded">
                                    <h3>Start Date:</h3>
                                    <p>{project?.startDate.split('T')[0]}</p>
                                </div>
                                <div className="p-2 border rounded">
                                    <h3>End Date:</h3>
                                    <p>{project?.endDate.split('T')[0]}</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center gap-4">
                                <div>
                                    <Image
                                        src={project?.thumbnail!}
                                        alt="Author Profile Image"
                                        width={60}
                                        height={60}
                                        className="h-10 w-10 rounded-full border hover:border-primary object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">
                                        Masum Billah
                                    </h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                <Sidebar
                    title="Related Projects"
                    type="project"
                    slug={project?.slugAsParams!}
                />
            </div>
        </div>
    );
};

export default SingleProjectPage;
