import React from 'react';
import Image from 'next/image';

import { Sidebar } from '@/components/projects-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

import { blogs } from '#content';
import { MDXContent } from '@/components/velite/mdx-components';

function getBlogFromParams(params: any) {
    const slug = params;
    const blog = blogs.find((blog) => blog.slugAsParams === slug);
    return blog;
}
const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    const project = getBlogFromParams(params.id);
    return (
        <div>
            <div className="flex">
                <ScrollArea className="h-screen">
                    <div className="flex-1 w-full p-2">
                        <div className="mt-10">
                            <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                                {project?.title}
                            </h1>
                            <h1 className="text-lg mt-3">
                                {project?.subTitle}
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
                        <div className="my-3 flex justify-between items-center">
                            <div>
                                <h3>Published Date</h3>
                                <p>{project?.date.split('T')[0]}</p>
                            </div>
                            <div className="flex justify-end items-center gap-4">
                                <div>
                                    <Image
                                        src={project?.thumbnail!}
                                        alt="Author Profile Image"
                                        width={60}
                                        height={60}
                                        className="size-full rounded-full border hover:border-primary object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Masum Billah</h3>
                                    <p>Web Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
                <Sidebar title="Related Blogs" type="blog" />
            </div>
        </div>
    );
};

export default SingleBlogPage;
