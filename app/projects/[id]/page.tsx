import React from 'react';

const SingleProjectPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h1>Id: {params.id}</h1>
            <h1>Single Project Page</h1>
        </div>
    );
};

export default SingleProjectPage;
