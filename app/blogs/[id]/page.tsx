import React from 'react';

import BlogContent from '@/components/blog';

import { blogs } from '#content';
import '@/styles/mdx.css';

export function getBlogFromParams(params: string) {
    const slug = params;
    return blogs.find((result) => result.slugAsParams === slug);
}
const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    const blog = getBlogFromParams(params.id);
    return (
        <div className="min-h-screen">
            <BlogContent blog={blog} />
        </div>
    );
};

export default SingleBlogPage;
