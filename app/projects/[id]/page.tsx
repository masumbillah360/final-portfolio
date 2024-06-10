'use client';

import React, { useEffect, useState } from 'react';


import Loader from '@/components/loader';
import NotFound from '@/components/not-found';
import ProjectContent from '@/components/project';

import { getProjectFromParams } from '@/lib/utils';
import '@/styles/mdx.css';


const SingleProjectPage = ({ params }: { params: { id: string } }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Loader />;
    const project = getProjectFromParams(params.id);

    if (!project) {
        return (
            <NotFound
                message="PROJECT NOT FOUND"
                keyWord={params.id || 'Some'}
                path="/projects"
                pathLabel="Back To Projects"
            />
        );
    }
    return (
        <div>
            <ProjectContent project={project} />
        </div>
    );
};

export default SingleProjectPage;
