'use client';

import Image from 'next/image';

import Titlebar from '@/components/title-bar';
import AnimationLottieClient from '@/components/lottie/client';
import { BorderButton } from '@/components/framer-motion/moving-border';

import { educations } from '@/constants/education-data';
import sectionBackground from '@/public/section.svg';

const Education = () => {
    return (
        <div className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Education" />
            <div className="my-10 md:my-14 lg:my-20">
                <Image
                    src={sectionBackground}
                    alt="Section Background"
                    className="absolute top-0 -z-10 right-0"
                />

                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-3/4 h-3/4">
                                <AnimationLottieClient animationPath="/lottie/education.json" />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {educations.map((education) =>
                                    <BorderButton
                                        containerClassName="h-auto border border-slate-400 dark:border-slate-700 hover:border-primary dark:hover:border-white"
                                        duration={10000}
                                        key={education.id}>
                                        <div className="p-3 relative">
                                            <div className="flex justify-center">
                                                <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                    {education.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-8 px-3 py-5">
                                                <div className="dark:text-white text-black">
                                                    <p className="sm:text-xl mb-2 font-medium uppercase">
                                                        {education.title}
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {
                                                            education.institution
                                                        }
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
};

export default Education;
