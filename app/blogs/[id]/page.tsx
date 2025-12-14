import BlogContent from '@/components/blog';
import NotFound from '@/components/not-found';

import '@/styles/mdx.css';
import { getBlogFromParams } from '@/lib/utils';


const SingleBlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blog = getBlogFromParams(id);
    if (!blog) {
        return (
            <NotFound
                message="BLOGS NOT FOUND"
                keyWord={id || 'Some'}
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
