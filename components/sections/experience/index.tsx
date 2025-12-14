'use client';

import Image from 'next/image';

import Titlebar from '@/components/title-bar';
import { experienceData } from '@/constants/experience-data';
import AnimationLottieClient from '@/components/lottie/client';

import { BorderButton } from '@/components/framer-motion/moving-border';

function Experience() {
    return (
        <div className="relative z-40 my-10 md:my-14 lg:my-20">
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
                                <AnimationLottieClient animationPath="/lottie/development.json" />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {experienceData.map((experience) =>

                                    <BorderButton
                                        key={experience.id}
                                        containerClassName="h-auto border border-slate-400 dark:border-slate-700 hover:border-primary dark:hover:border-white"
                                        duration={10000}>
                                        <div className="p-3 relative">
                                            <div className="flex justify-center">
                                                <p
                                                    className={`text-xs sm:text-sm  ${experience.isEx
                                                            ? 'text-rose-500 font-semibold'
                                                            : 'text-[#16f2b3]'
                                                        }`}>
                                                    {experience.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center w-full gap-x-8 px-3 py-5">
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
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
