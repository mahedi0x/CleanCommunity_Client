import React from 'react';
import IssueCategoryCards from '../../components/IssueCategoryCards/IssueCategoryCards';
import Banner from '../../components/Banner/Banner';
import LatestIssues from '../../components/latestIssues/latestIssues';
import CommunityStates from '../../components/CommunityStates/CommunityStates';
import CallAction from '../../components/CallAction/CallAction';

const latestIssuesPromise = fetch('https://clean-community-bd.vercel.app/latest-issues').then(res => res.json());

const Home = () => {
    return (
        <div>
          
           <title>CLeanBD Home</title>
            <Banner></Banner>
         
            <IssueCategoryCards></IssueCategoryCards>

            <LatestIssues latestIssuesPromise={latestIssuesPromise}></LatestIssues>

            <CommunityStates></CommunityStates>

            <CallAction></CallAction>



            
        </div>
    );
};

export default Home;