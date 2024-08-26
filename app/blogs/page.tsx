'use client';

import React from 'react';

import NotFound from '@/components/not-found';
import BlogCard from '@/components/card/blog';
import QueryPagination from '@/components/pagination';

import { blogs } from '#content';

interface BlogPageProps {
    searchParams: {
        page?: string;
        tags?: string;
        category?: string;
    };
}

const BlogPage = ({ searchParams }: BlogPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const BLOG_PER_PAGE = 6;
    let filteredBlogs = blogs.filter((b) => b.published && b.featured).slice(0, 6);
    if (searchParams?.tags) {
        filteredBlogs = filteredBlogs.filter((b) =>
            b.tags.some((tag) => tag === searchParams.tags)
        );
    }
    if (searchParams?.category) {
        filteredBlogs = filteredBlogs.filter((b) =>
            b.similarCategory.some((cat) => cat === searchParams.category)
        );
    }
    const totalCount = Math.ceil(filteredBlogs.length / BLOG_PER_PAGE);
    const disPlayPosts = filteredBlogs.slice(
        BLOG_PER_PAGE * (currentPage - 1),
        BLOG_PER_PAGE * currentPage
    );

    return (
        <div className="min-h-screen">
            {disPlayPosts.length ? (
                <>
                    <div className="mt-10">
                        <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                            Welcome To The Blog Page
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10 size-full">
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
                </>
            ) : (
                <NotFound
                    message="BLOGS NOT FOUND"
                    keyWord={
                        searchParams.tags ?? searchParams.category ?? 'Some'
                    }
                    path="/blogs"
                    pathLabel="Back To Blogs"
                />
            )}
        </div>
    );
};

export default BlogPage;
