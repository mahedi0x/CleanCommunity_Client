import React from 'react';
import IssueCategoryCards from '../../components/IssueCategoryCards/IssueCategoryCards';
import Banner from '../../components/Banner/Banner';
import LatestIssues from '../../components/latestIssues/latestIssues';

const latestIssuesPromise = fetch('http://localhost:3000/latest-issues').then(res => res.json());

const Home = () => {
    return (
        <div>
          

            <Banner></Banner>
         
            <IssueCategoryCards></IssueCategoryCards>

            <LatestIssues latestIssuesPromise={latestIssuesPromise}></LatestIssues>
        </div>
    );
};

export default Home;