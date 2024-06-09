import React from 'react';
import Image from 'next/image';

import { Sidebar } from '@/components/projects-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

import { blogs } from '#content';
import { MDXContent } from '@/components/velite/mdx-components';

export function getBlogFromParams(params: string) {
    const slug = params;
    return blogs.find((result) => result.slugAsParams === slug);
}
const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    const blog = getBlogFromParams(params.id);
    return (
        <div>
            <div className="flex">
                <ScrollArea className="h-screen flex-1 w-full">
                    <div className="flex-1 w-full p-2">
                        <div className="mt-10">
                            <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                                {blog?.title}
                            </h1>
                            <h1 className="text-lg mt-3">{blog?.subTitle}</h1>
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
                <Sidebar title="Related Blogs" type="blog" slug={blog?.slugAsParams!} />
            </div>
        </div>
    );
};

export default SingleBlogPage;
