import React, { use } from 'react';
import IssueCard from '../IssueCard/IssueCard';

const LatestIssues = ({latestIssuesPromise}) => {
    const issues = use(latestIssuesPromise);
    console.log(issues)

    return (
        <div className='py-5 mt-20'>
            <h2 className="text-6xl text-center font-bold ">Latest <span className='text-primary'> Issues</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 py-5 container mx-auto mt-10">
                {
                    issues.map(issue => <IssueCard
                        key={issue._id}
                        issue={issue}
                    ></IssueCard>)
                }
            </div>
        </div>
    );
};

export default LatestIssues;