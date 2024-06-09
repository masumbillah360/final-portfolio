'use client';

import React from 'react';

import BlogCard from '@/components/card/blog';

import { blogs } from '#content';
import QueryPagination from '@/components/pagination';

interface BlogPageProps {
    searchParams: {
        page?: string;
    };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const BLOG_PER_PAGE = 9;
    const filteredBlogs = blogs.filter((b) => b.published != false);
    const totalCount = Math.ceil(filteredBlogs.length / BLOG_PER_PAGE);
    const disPlayPosts = filteredBlogs.slice(
        BLOG_PER_PAGE * (currentPage - 1),
        BLOG_PER_PAGE * currentPage
    );
    return (
        <div className="min-h-screen">
            <div className="mt-10">
                <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                    Welcome To The Blog Page
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                {disPlayPosts.map(
                    ({ slug, title, subTitle, thumbnail, date }) => (
                        <BlogCard
                            key={slug + 'BlogPage'}
                            slug={slug}
                            title={title}
                            subTitle={
                                subTitle.length > 150
                                    ? subTitle.slice(0, 150)
                                    : subTitle
                            }
                            thumbnail={thumbnail}
                            date={date}
                        />
                    )
                )}
            </div>
            <div className="m-6 px-4 py-2 rounded border">
                <QueryPagination totalPage={totalCount} />
            </div>
        </div>
    );
};

export default BlogPage;
