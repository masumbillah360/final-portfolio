'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Loader from './loader';
import { ScrollArea } from './ui/scroll-area';
import { MDXContent } from './velite/mdx-components';
import { Sidebar, blogType } from './projects-sidebar';

const BlogContent = ({ blog }: { blog: blogType }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Loader />;
    return (
        <div className="flex">
            <ScrollArea className="h-screen flex-1 w-full">
                <div className="flex-1 w-full p-2">
                    <div className="mt-10">
                        <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                            {blog?.title}
                        </h1>
                        <Link
                            href={`/blogs?category=${blog.category}`}
                            className="block my-2 font-semibold text-xl">
                            Category:{' '}
                            <span className="uppercase underline underline-offset-4">
                                {blog.category}
                            </span>
                        </Link>
                        <h1 className="text-xl mt-3">{blog?.subTitle}</h1>
                        <p className="my-1 text-lg">{blog?.description}</p>
                        <div className="flex justify-start items-center gap-x-2 font-bold">
                            {blog.tags.map((t) => (
                                <Link
                                    href={`/blogs?tags=${t}`}
                                    key={t + blog.slugAsParams}>
                                    {'#' + t}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="mt-3">
                        <Image
                            src={blog?.thumbnail!}
                            alt="Project thumbnail"
                            width={1024}
                            height={768}
                            className="size-full rounded"
                        />
                    </div>
                    <div className="my-3">
                        <MDXContent code={blog?.body!} />
                    </div>
                    <div className="my-3 flex justify-between items-center">
                        <div>
                            <h3>Published Date</h3>
                            <p>{blog?.date.split('T')[0]}</p>
                        </div>
                        <div className="flex justify-end items-center gap-4">
                            <div>
                                <Image
                                    src={blog?.thumbnail!}
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
                title="Related Blogs"
                type="blog"
                slug={blog?.slugAsParams!}
            />
        </div>
    );
};

export default BlogContent;
