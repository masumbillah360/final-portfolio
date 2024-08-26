'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Titlebar from '@/components/title-bar';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/card/project';

import sectionBackground from '@/public/section.svg';


import { projects } from '#content';

function getLatestProjects() {
    return projects.filter((p) => p.featured).slice(0, 6);
}

const Projects = () => {
    const router = useRouter();
    const sectionProjects = getLatestProjects();
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
                {sectionProjects.map(
                    ({ slug, name, subDescription, thumbnail, url, upcoming }) => (
                        <ProjectCard
                            key={slug + 'ProjectSection'}
                            slug={slug}
                            name={name}
                            subDescription={
                                subDescription.length > 150
                                    ? subDescription.slice(0, 150)
                                    : subDescription
                            }
                            thumbnail={thumbnail}
                            url={url}
                            upcoming={upcoming}
                        />
                    )
                )}
            </div>

            <div className="w-full flex justify-center items-center">
                <Button
                    onClick={() => router.push('/projects')}
                    size={'lg'}
                    className="w-full md:w-auto">
                    SEE ALL
                </Button>
            </div>
        </div>
    );
};

export default Projects;
