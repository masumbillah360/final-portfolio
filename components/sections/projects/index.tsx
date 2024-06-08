'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Titlebar from '@/components/title-bar';
import { Button } from '@/components/ui/button';

import sectionBackground from '@/public/section.svg';

import ProjectCard from '@/components/card/project';

export const content = [
    {
        title: 'Collaborative Editing',
        description:
            'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: 'Real time changes',
        description:
            'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: 'Version control',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: 'Running out of content',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
    {
        title: 'Running out of content',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
    {
        title: 'Running out of content',
        description:
            "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
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
