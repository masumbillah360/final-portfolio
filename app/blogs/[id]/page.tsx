import React from 'react';

import BlogContent from '@/components/blog';

import { blogs } from '#content';
import '@/styles/mdx.css';
import NotFound from '@/components/not-found';

export function getBlogFromParams(params: string) {
    const slug = params;
    return blogs.find((result) => result.slugAsParams === slug);
}
const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    const blog = getBlogFromParams(params.id);
    if (!blog) {
        return (
            <NotFound
                message="BLOGS NOT FOUND"
                keyWord={params.id || 'Some'}
                path="/blogs"
                pathLabel="Back To Blogs"
            />
        );
    }
    return (
        <div className="min-h-screen">
            <BlogContent blog={blog} />
        </div>
    );
};

export default SingleBlogPage;
