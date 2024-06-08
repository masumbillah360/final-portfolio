'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import ProjectCard from '@/components/card/project';

import { content } from '@/constants/projects';

const ProjectPage = () => {
    const router = useRouter();
    return (
        <div className="min-h-screen">
            <div className="mt-10">
                <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                    Welcome To The Projects Page
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                {content.map((c) => (
                    <ProjectCard
                        key={c.title}
                        id={c.title + 'ProjectsPage'}
                        title={c.title}
                        subTitle={
                            c.description.length > 150
                                ? c.description.slice(0, 150)
                                : c.description
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
