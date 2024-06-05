import React from 'react';

const SingleBlogPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h1>Id: {params.id}</h1>
            <h1>SingleBlogPage</h1>
        </div>
    );
};

export default SingleBlogPage;
