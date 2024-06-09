'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Contact } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CustomToolTip from '@/components/tool-tip';

import AnimationLottieClient from '@/components/lottie/client';
import { BorderButton } from '@/components/framer-motion/moving-border';
import { linkData } from '@/constants';

import backgroundImage from '@/public/hero.svg';

const HeroSection = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section>
            <Image
                src={backgroundImage}
                alt="Hero"
                className="absolute top-0 -z-10 max-w-full"
            />
            <div className="relative flex items-center justify-between my-10 md:my-14 lg:my-20 w-full">
                <div className="flex justify-between items-center size-full">
                    <div className="flex flex-col justify-center items-center md:items-start gap-10 w-full">
                        <div>
                            <div className="text-4xl md:text-6xl font-bold flex flex-col gap-5 items-center md:items-start">
                                <h1 className="mb-3 md:mb-4 lg:mb-7 text-primary dark:text-primary-foreground">
                                    Hi there,
                                </h1>
                                <h1 className="">This is </h1>
                                <div className="">
                                    <span className="text-teal-500 dark:text-white font-extrabold uppercase tracking-wider">
                                        Masum Billah
                                    </span>
                                </div>
                                <h1 className="text-center md:text-start">
                                    A{' '}
                                    <span className="tracking-wider border-b-2">
                                        Web Developer
                                    </span>
                                    <span className="text-teal-500">.</span>
                                </h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-start items-center gap-4">
                                {linkData
                                    .slice(1, linkData.length)
                                    .map((link) => (
                                        <CustomToolTip
                                            key={link.label + 1}
                                            label={link.label}>
                                            <div className="h-10 w-10 p-1 border rounded-full">
                                                <Link href={link.url}>
                                                    {link.icon}
                                                </Link>
                                            </div>
                                        </CustomToolTip>
                                    ))}
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <Link href={'#contact'}>
                                <Button className="text-lg">Contact Me</Button>
                            </Link>
                            {mounted ? (
                                <BorderButton
                                    containerClassName="size-auto p-1"
                                    duration={4000}>
                                    <div className="h-9 w-24 flex justify-center items-center">
                                        <h4 className="text-lg font-semibold dark:text-white">
                                            Resume
                                        </h4>
                                    </div>
                                </BorderButton>
                            ) : (
                                <Button variant={'outline'}>Resume</Button>
                            )}
                        </div>
                    </div>
                    <div className="hidden md:block md:w-full lg:w-1/2">
                        <AnimationLottieClient animationPath="/lottie/code.json" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
