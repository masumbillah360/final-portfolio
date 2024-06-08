'use client';

import React from 'react';

import BlogCard from '@/components/card/blog';

import { content } from '@/constants/projects';

const BlogPage = () => {
    return (
        <div className="min-h-screen">
            <div className="mt-10">
                <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                    Welcome To The Blog Page
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                {content.map((c) => (
                    <BlogCard
                        key={c.title}
                        id={c.title + 'ProjectsPage'}
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
    );
};

export default BlogPage;
