'use client';
import Titlebar from '@/components/title-bar';
import { personalData } from '@/constants/personal-data';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <div id="about" className="z-20 relative min-h-screen">
            <Titlebar title="About Me" />
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="order-2 lg:order-1">
                        <p className="font-semibold mb-5 text-primary dark:text-destructive text-xl uppercase">
                            Who I am?
                        </p>
                        <p className="text-gray-200 text-sm lg:text-lg">
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
