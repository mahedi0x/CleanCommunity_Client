import React from 'react';
import { useLoaderData } from 'react-router';

const IssuesDetails = () => {
    const issuesData = useLoaderData();
    console.log(issuesData);
    
    return (
        <div>
            <h2>Issues Details</h2>
        </div>
    );
};

export default IssuesDetails;