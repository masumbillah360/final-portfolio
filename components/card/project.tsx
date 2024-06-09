'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { CardSkeleton } from '../customSkeleton/card';
import { BorderButton } from '../framer-motion/moving-border';
import { CardBody, CardContainer, CardItem } from '../framer-motion/3d-card';

interface Props {
    slug: string;
    name: string;
    subDescription: string;
    thumbnail?: string;
}

const ProjectCard = ({ slug, name, subDescription, thumbnail }: Props) => {
    const router = useRouter();

    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="size-full">
            {mounted ? (
                <CardContainer className="inter-var size-full">
                    <CardBody className="bg-gray-50 dark:text-slate-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.2] border-black/[0.1] size-full rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white">
                            {name}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {subDescription}
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
                        <div className="flex justify-end items-center gap-3 mt-10">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="_blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex items-center gap-1">
                                <BorderButton
                                    containerClassName="h-10 dark:bg-slate-300"
                                    duration={2000}>
                                    <Button
                                        className="h-full dark:bg-slate-300 dark:text-black font-bold uppercase"
                                        variant={'outline'}>
                                        Live
                                    </Button>
                                </BorderButton>
                            </CardItem>
                            <CardItem translateZ={20}>
                                <Button
                                    onClick={() => {
                                        router.push(`/${slug}`);
                                    }}
                                    variant={'default'}>
                                    Details
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

export default ProjectCard;
