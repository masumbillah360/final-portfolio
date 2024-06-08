'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Titlebar from '@/components/title-bar';
import { Button } from '@/components/ui/button';

import sectionBackground from '@/public/section.svg';

import ProjectCard from '@/components/card/project';

import { content } from '@/constants/projects';

const Projects = () => {
    const router = useRouter();

    return (
        <div className="relative z-40 my-10 md:my-14 lg:my-20">
            <Titlebar title="Projects" />
            <div>
                <Image
                    src={sectionBackground}
                    alt="Section Image"
                    className="absolute top-0 -z-10 w-full"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                {content.map((c) => (
                    <ProjectCard
                        key={c.title}
                        id={c.title + 'Projects'}
                        title={c.title}
                        subTitle={
                            c.description.length > 150
                                ? c.description.slice(0, 150)
                                : c.description
                        }
                    />
                ))}
            </div>

            <div className="w-full flex justify-center items-center">
                <Button
                    onClick={() => router.replace('/projects')}
                    className="bg-slate-600">
                    SEE ALL
                </Button>
            </div>
        </div>
    );
};

export default Projects;
