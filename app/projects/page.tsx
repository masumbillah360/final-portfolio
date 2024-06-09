'use client';

import React from 'react';

import ProjectCard from '@/components/card/project';

import { projects } from '#content';
import QueryPagination from '@/components/pagination';

interface ProjectPageProps {
    searchParams: {
        page?: string;
    };
}

const ProjectPage = ({ searchParams }: ProjectPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const BLOG_PER_PAGE = 9;
    const filteredProjects = projects.filter((p) => p.published != false);
    const totalCount = Math.ceil(filteredProjects.length / BLOG_PER_PAGE);
    const disPlayProjects = filteredProjects.slice(
        BLOG_PER_PAGE * (currentPage - 1),
        BLOG_PER_PAGE * currentPage
    );
    return (
        <div className="min-h-screen">
            <div className="mt-10">
                <h1 className="text-slate-600 text-3xl md:text-5xl font-bold tracking-wider">
                    Welcome To The Projects Page
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-7 my-4 md:my-6 lg:my-10">
                {disPlayProjects.map((p) => (
                    <ProjectCard
                        key={p.slug + 'ProjectPage'}
                        slug={p.slug}
                        name={p.name}
                        subDescription={
                            p.subDescription.length > 150
                                ? p.subDescription.slice(0, 150)
                                : p.subDescription
                        }
                        thumbnail={p.thumbnail}
                    />
                ))}
            </div>
            <div className="m-6 px-4 py-2 rounded border">
                <QueryPagination totalPage={totalCount} />
            </div>
        </div>
    );
};

export default ProjectPage;
