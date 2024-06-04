'use client';

import Image from 'next/image';

import { FaGithub, FaGlobe } from 'react-icons/fa';

function ProjectThumbCard({ project }: Readonly<{ project: any }>) {
    return (
        <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full h-full">
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
                    <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
                </div>
                <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
                    {project.name}
                </p>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 p-4 lg:p-8">
                <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 rounded-lg relative group">
                    <div className="h-[400px] overflow-hidden rounded-lg relative">
                        <Image
                            src={project?.image}
                            height={1080}
                            width={1920}
                            alt="Project Thumbnail"
                            className="w-full h-auto transform group-hover:-translate-y-1/2 transition-transform duration-700 ease-in-out"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center text-[#16f2b3] text-sm pb-2 pr-2">
                <p></p>
                <div className="flex items-center gap-3">
                    <p className="flex items-center gap-1">
                        <FaGlobe className="h-5 w-5" />
                        <span className="font-semibold text-white border-b-2 border-[#2b3c55]">
                            Live URL
                        </span>
                    </p>

                    <p className="flex items-center gap-1">
                        <FaGithub className="h-5 w-5" />
                        <span className="font-semibold text-white border-b-2 border-[#2b3c55]">
                            Github
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectThumbCard;
