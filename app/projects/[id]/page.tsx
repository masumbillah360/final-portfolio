import NotFound from '@/components/not-found';
import ProjectContent from '@/components/project';

import { getProjectFromParams } from '../../../lib/utils';
import '@/styles/mdx.css';


const SingleProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const project = getProjectFromParams(id);

    if (!project) {
        return (
            <NotFound
                message="PROJECT NOT FOUND"
                keyWord={id || 'Some'}
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
