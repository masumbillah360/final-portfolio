import { Sidebar } from '@/components/projects-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { content } from '@/constants/projects';
import React from 'react';

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    const project = content[0];
    return (
        <div>
            <div className="flex">
                <ScrollArea className="h-screen">
                    <div className="flex-1 w-full p-2">
                        <div className="mt-10">
                            <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                                {project.title}
                            </h1>
                        </div>
                        <div className="my-3">
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                            <p>{project.description}</p>
                        </div>
                        <div></div>
                        <div>{project.content}</div>
                    </div>
                </ScrollArea>
                <Sidebar title="Related Blogs" type="blog" />
            </div>
        </div>
    );
};

export default SingleBlogPage;
