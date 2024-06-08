import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Brand new Next js and React js Projects',
    description:
        'From this page you can see some brand new React & Next Js projects. Those are made by Masum Billah',
};
const ProjectLayout = ({ children }: { children: React.ReactNode}) => {
    return <div className="">{children}</div>;
};

export default ProjectLayout;
