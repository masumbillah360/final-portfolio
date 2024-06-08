'use client';

import React, { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from '../framer-motion/3d-card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { CardSkeleton } from '../customSkeleton/card';

interface Props {
    id: string;
    title: string;
    subTitle: string;
    thumbnail?: string;
}

const BlogCard = ({ id, title, subTitle, thumbnail }: Props) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <div className="size-full">
            {mounted ? (
                <CardContainer className="inter-var" key={id}>
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white">
                            {title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {subTitle}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={
                                    thumbnail ||
                                    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                }
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-end items-center gap-3 mt-7">
                            <CardItem translateZ={20}>
                                <Button variant={'link'} className="h-10">
                                    Read More
                                </Button>
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