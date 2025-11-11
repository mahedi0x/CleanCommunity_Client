import React from 'react';
import { useLoaderData } from 'react-router';
import IssueCard from '../../components/IssueCard/IssueCard';

const AllIssues = () => {
    const allIssues = useLoaderData();
    console.log(allIssues)
    return (
        <div>
           
           
            <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 py-10 container mx-auto mt-10"
            >
            {
                allIssues.map(issue => <IssueCard issue={issue}></IssueCard>)
            }
            </div>
        </div>
    );
};

export default AllIssues;