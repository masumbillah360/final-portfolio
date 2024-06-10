'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Sidebar } from '@/components/projects-sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';

import { projects } from '#content';
import { MDXContent } from '@/components/velite/mdx-components';

import '@/styles/mdx.css';
import ProjectContent from '@/components/project';
import Loader from '@/components/loader';

export function getProjectFromParams(params: any) {
    const slug = params;
    return projects.find((result) => result.slugAsParams === slug);
}

const SingleProjectPage = ({ params }: { params: { id: string } }) => {
    const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Loader />;
    const project = getProjectFromParams(params.id);
    return (
        <div>
            <ProjectContent project={project} />
        </div>
    );
};

export default SingleProjectPage;
