'use client';

import Image from 'next/image';

import Titlebar from '@/components/title-bar';

import { personalData } from '@/constants/personal-data';

import sectionBackground from '@/public/section.svg';

const AboutSection = () => {
    return (
        <div className="z-20 relative my-10 md:my-14 lg:my-20">
            <Titlebar title="About Me" />
            <Image
                src={sectionBackground}
                alt="Section Image"
                className="absolute top-0 -z-10 w-full"
            />
            <div className="my-9">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="order-2 lg:order-1">
                        <p className="font-semibold mb-5 text-xl uppercase text-center lg:text-start">
                            Who I am?
                        </p>
                        <p className="text-sm md:text-xl font-light tracking-wide">
                            {personalData.description}
                        </p>
                    </div>
                    <div className="flex justify-center order-1 lg:order-2">
                        <Image
                            src={personalData.profile}
                            width={280}
                            height={280}
                            alt="Abu Said"
                            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
