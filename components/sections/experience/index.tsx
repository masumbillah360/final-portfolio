'use client';

import Image from 'next/image';
import { experienceData } from '@/constants/experience-data';
import Titlebar from '@/components/title-bar';
import { Workflow } from 'lucide-react';
import AnimationLottieClient from '@/components/lottie/client';
import experience from '@/public/lottie/code.json';
import { BorderButton } from '@/components/framer-motion/moving-border';

function Experience() {
    return (
        <div id="experience" className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Experience" />
            <div className="my-10 md:my-14 lg:my-20">
                <Image
                    src="/section.svg"
                    alt="Hero"
                    width={1572}
                    height={795}
                    className="absolute top-0 -z-10"
                />

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <AnimationLottieClient
                                    animationPath={experience}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {experienceData.map((experience) => (
                                    <BorderButton
                                        key={experience.id}
                                        containerClassName="h-auto"
                                        duration={10000}>
                                        <div className="p-3 relative">
                                            <Image
                                                src="/blur-23.svg"
                                                alt="Hero"
                                                width={1080}
                                                height={200}
                                                className="absolute bottom-0 opacity-80"
                                            />
                                            <div className="flex justify-center">
                                                <p
                                                    className={`text-xs sm:text-sm  ${
                                                        experience.isEx
                                                            ? 'text-rose-500 font-semibold'
                                                            : 'text-[#16f2b3]'
                                                    }`}>
                                                    {experience.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center w-full gap-x-8 px-3 py-5">
                                                {/* <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                    <Workflow size={36} />
                                                </div> */}
                                                <div className="text-black dark:text-white">
                                                    <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                        {experience.title}
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {experience.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </BorderButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
