'use client';

import { BorderButton } from '@/components/framer-motion/moving-border';
import CustomToolTip from '@/components/tool-tip';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';
import { Contact } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative flex items-center justify-between my-10 md:my-14 lg:my-20 w-full">
            <div className="flex justify-between items-center size-full">
                <div className="flex flex-col justify-center items-center md:items-start gap-10">
                    <div>
                        <div className="text-4xl md:text-6xl font-bold text-primary flex flex-col gap-5 items-center md:items-start">
                            <h1 className="mb-7">Hi there,</h1>
                            <h1 className="">This is </h1>
                            <div className="">
                                <span className="text-teal-500 dark:text-white font-extrabold uppercase tracking-wider">
                                    Masum Billah
                                </span>
                            </div>
                            <h1 className="text-center md:text-start">
                                I&apos;m a{' '}
                                <span className="uppercase tracking-wider">
                                    Web Developer.
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start items-center gap-4">
                            {socialLinks.map((link) => (
                                <CustomToolTip
                                    key={link.Label + 1}
                                    label={link.Label}>
                                    <div>
                                        <Link href={link.url}>
                                            <Button
                                                size={'icon'}
                                                className={`bg-sky-500 ${link.className}`}>
                                                {link.icon}
                                            </Button>
                                        </Link>
                                    </div>
                                </CustomToolTip>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <Link href={'#contact'}>
                            <Button>
                                <div className="flex justify-center items-center gap-1">
                                    <Contact />
                                    <h4>Contact Me</h4>
                                </div>
                            </Button>
                        </Link>

                        <BorderButton containerClassName="size-auto p-1">
                            <Button>
                                <div>
                                    <h4>Resume</h4>
                                </div>
                            </Button>
                        </BorderButton>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};

export default HeroSection;
