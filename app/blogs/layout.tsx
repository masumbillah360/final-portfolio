// This is blog layout

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'MERN Stacks | Programming | Web development blogs by Masum Billah',
    description:
        'From this page you can see some brand new & latest MERN Stacks | Programming | Web development blogs. Those are made by Masum Billah',
};
const BlogLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="">{children}</div>;
};

export default BlogLayout;
