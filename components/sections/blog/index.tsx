'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Titlebar from '@/components/title-bar';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/card/blog';

import sectionBackground from '@/public/section.svg';
import { blogs } from '#content';

function getLatestBlogs() {
    return blogs.slice(0, 6);
}

const Blog = () => {
    const router = useRouter();
    const sectionBlogs = getLatestBlogs();
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
                    {sectionBlogs.map(
                        ({ slug, title, subTitle, thumbnail, date }) => (
                            <BlogCard
                                key={slug + 'ProjectsPage'}
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
            </div>
            <div className="w-full flex justify-center items-center">
                <Button
                    onClick={() => router.push('/blogs')}
                    size={'lg'}
                    className="w-full md:w-auto">
                    SEE ALL
                </Button>
            </div>
        </div>
    );
};

export default Blog;
