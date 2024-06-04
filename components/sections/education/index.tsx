'use client';

import AnimationLottieClient from '@/components/lottie/client';
import Titlebar from '@/components/title-bar';
import { educations } from '@/constants/education-data';
import Image from 'next/image';
import lottieFile from '@/public/lottie/education.json';
import { BorderButton } from '@/components/framer-motion/moving-border';

const Education = () => {
    return (
        <div id="education" className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Education" />
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
                            <div className="w-3/4 h-3/4">
                                <AnimationLottieClient
                                    animationPath={lottieFile}
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col gap-6">
                                {educations.map((education) => (
                                    <BorderButton
                                        containerClassName="h-auto"
                                        duration={10000}
                                        key={education.id}>
                                        <div className="p-3 relative">
                                            <Image
                                                src="/blur-23.svg"
                                                alt="Hero"
                                                width={1080}
                                                height={200}
                                                className="absolute bottom-0 opacity-80"
                                            />
                                            <div className="flex justify-center">
                                                <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                    {education.duration}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-x-8 px-3 py-5">
                                                {/* <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                    <School size={36} />
                                                </div> */}
                                                <div className="dark:text-white text-black">
                                                    <p className="sm:text-xl mb-2 font-medium uppercase">
                                                        {education.title}
                                                    </p>
                                                    <p className="text-sm sm:text-base">
                                                        {education.institution}
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
};

export default Education;
