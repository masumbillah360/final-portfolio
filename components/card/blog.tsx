'use client';

import React, { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from '../framer-motion/3d-card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { CardSkeleton } from '../customSkeleton/card';
import { useRouter } from 'next/navigation';

interface Props {
    slug: string;
    title: string;
    subTitle: string;
    thumbnail: string;
    date: string;
}

const BlogCard = ({ slug, title, subTitle, thumbnail, date }: Props) => {
    const router = useRouter();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="size-full">
            {mounted ? (
                <CardContainer className="inter-var w-full min-h-[500px] flex flex-col justify-between items-stretch">
                    <CardBody className="bg-gray-50 dark:text-slate-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.2] border-black/[0.1] min-h-[500px] rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-slate-200 h-14">
                            {title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12">
                            {subTitle}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={thumbnail}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-end items-center gap-3 mt-7">
                            <CardItem translateZ={20} className="w-full">
                                <div className="flex items-center justify-between">
                                    <div className="">{date.split('T')[0]}</div>
                                    <Button
                                        onClick={() => router.push(`/${slug}`)}
                                        variant={'link'}
                                        className="dark:text-violet-200">
                                        Read More
                                    </Button>
                                </div>
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ) : (
                <CardSkeleton />
            )}
        </div>
    );
};

export default BlogCard;
