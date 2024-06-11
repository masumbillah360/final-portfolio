'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from './ui/button';
import { Heading } from './velite/heading';
import { Sidebar } from './projects-sidebar';
import { ScrollArea } from './ui/scroll-area';
import { MDXContent } from './velite/mdx-components';

// project type
import { Projects } from '@/.velite';

const ProjectContent = ({ project }: { project: Projects }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="flex">
            <ScrollArea className="h-screen flex-1 w-full">
                <div className="p-2">
                    <div className="mt-10">
                        <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                            {project?.name}
                        </h1>
                        <Link
                            href={`/projects?category=${project.category}`}
                            className="block my-2 font-semibold text-xl">
                            Category:{' '}
                            <span className="uppercase underline underline-offset-4">
                                {project.category}
                            </span>
                        </Link>
                        <h4 className="text-lg mt-3">
                            {project?.subDescription}
                        </h4>
                        <h4 className="text-lg mt-3">{project?.description}</h4>
                        <div className="flex justify-start items-center gap-x-2 font-bold">
                            {project.tags.map((t) => (
                                <Link
                                    href={`/projects?tags=${t}`}
                                    key={t + project.slugAsParams}>
                                    {'#' + t}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3 flex gap-x-4 flex-col md:flex-row">
                        {project.coverImages.slice(0, 2).map((im) => (
                            <Image
                                key={im + project.slug}
                                src={im}
                                alt="Project thumbnail"
                                width={1024}
                                height={768}
                                className="h-[400px] w-1/2 rounded"
                            />
                        ))}
                    </div>
                    {project.coverImages.length === 3 && (
                        <div className="mt-3 flex gap-x-4 flex-col md:flex-row">
                            <Image
                                src={
                                    project.coverImages[
                                        project.coverImages.length - 1
                                    ]
                                }
                                alt="Project thumbnail"
                                width={1024}
                                height={768}
                                className="h-full w-full rounded"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-3 mt-3">
                        <Heading type="danger">
                            Overview of {project.name}
                        </Heading>

                        <Heading type="default" typo="h2">
                            All Necessary Links
                        </Heading>
                        <div className="flex justify-center items-center gap-4">
                            {project.urls.map((ur) => (
                                <Link
                                    key={ur.link + ur.label}
                                    href={ur.link}
                                    target="_blank">
                                    <Button>{ur.label}</Button>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="my-3">
                        <MDXContent code={project?.body} />
                    </div>
                    <div className="my-3 flex justify-end items-start">
                        <div className="flex justify-end items-center gap-4">
                            <div>
                                <Image
                                    src={project?.thumbnail}
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
                contentType="project"
                slug={project?.slugAsParams}
            />
        </div>
    );
};

export default ProjectContent;
