'use client';

import Titlebar from '@/components/title-bar';
import { content } from '../projects';
import {
    CardBody,
    CardContainer,
    CardItem,
} from '@/components/framer-motion/3d-card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Blog = () => {
    return (
        <div id="blogs" className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Blogs" />
            <div className="my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                    {content.map((c) => (
                        <CardContainer className="inter-var" key={c.title}>
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white">
                                    Make things float in air
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                    Hover over this card to unleash the power of
                                    CSS perspective
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    className="w-full mt-4">
                                    <Image
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="flex justify-end items-center gap-3 mt-7">
                                    <CardItem translateZ={20}>
                                        <Button variant={'link'} className='h-10'>
                                            Read More
                                        </Button>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <Button className="bg-slate-600">SEE ALL</Button>
            </div>
        </div>
    );
};

export default Blog;
