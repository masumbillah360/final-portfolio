'use client';

import React from 'react';

import NotFound from '@/components/not-found';
import ProjectCard from '@/components/card/project';
import QueryPagination from '@/components/pagination';

import { projects } from '#content';

interface ProjectPageProps {
    searchParams: {
        page?: string;
        tags?: string;
        category?: string;
    };
}

const ProjectPage = ({ searchParams }: ProjectPageProps) => {
    const currentPage = Number(searchParams.page) || 1;
    const BLOG_PER_PAGE = 9;
    
    let filteredProjects = projects.filter((p) => p.published);

    if (searchParams?.tags) {
        filteredProjects = filteredProjects.filter((b) =>
            b.tags.some((tag) => tag === searchParams.tags)
        );
    }
    if (searchParams?.category) {
        filteredProjects = filteredProjects.filter((b) =>
            b.similarCategory.some((cat) => cat === searchParams.category)
        );
    }
    const totalCount = Math.ceil(filteredProjects.length / BLOG_PER_PAGE);
    const disPlayProjects = filteredProjects.slice(
        BLOG_PER_PAGE * (currentPage - 1),
        BLOG_PER_PAGE * currentPage
    );
    return (
        <div className="min-h-screen">
            {disPlayProjects.length ? (
                <>
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
                                url={p.url}
                            />
                        ))}
                    </div>
                    <div className="m-6 px-4 py-2 rounded border">
                        <QueryPagination totalPage={totalCount} />
                    </div>
                </>
            ) : (
                <NotFound
                    message="PROJECTS NOT FOUND"
                    keyWord={
                        searchParams.tags ?? searchParams.category ?? 'Some'
                    }
                    path="/projects"
                    pathLabel="Back To Projects"
                />
            )}
        </div>
    );
};

export default ProjectPage;
