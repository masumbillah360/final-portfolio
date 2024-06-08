'use client';

import Image from 'next/image';

import Titlebar from '@/components/title-bar';
import { Button } from '@/components/ui/button';

import { content } from '../projects';
import sectionBackground from '@/public/section.svg';

import BlogCard from '@/components/card/blog';

const Blog = () => {
    return (
        <div className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Blogs" />
            <div className="my-10">
                <Image
                    src={sectionBackground}
                    alt="Section Image"
                    className="absolute top-0 -z-10 w-full"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                    {content.map((c) => (
                        <BlogCard
                            key={c.title}
                            id={c.title + 'Blogs'}
                            title={c.title}
                            subTitle={
                                c.description.length > 150
                                    ? c.description.slice(0, 150)
                                    : c.description
                            }
                        />
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Button className="bg-slate-600">SEE ALL</Button>
            </div>
        </div>
    );
};

export default Blog;
