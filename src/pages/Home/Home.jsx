import React from 'react';
import IssueCategoryCards from '../../components/IssueCategoryCards/IssueCategoryCards';
import Banner from '../../components/Banner/Banner';
import LatestIssues from '../../components/latestIssues/latestIssues';
import CommunityStates from '../../components/CommunityStates/CommunityStates';
import CallAction from '../../components/CallAction/CallAction';
import Brand from '../../components/Brand/Brand';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Testimonials from '../../components/Testimonials/Testimonials';
import Faq from '../../components/Faq/Faq';
import Newsletter from '../../components/Newsletter/Newsletter';
import Team from '../../components/Team/Team';

// import ImgGrid from '../../components/imgGrid/ImgGrid';

const latestIssuesPromise = fetch('https://clean-community-bd.vercel.app/latest-issues').then(res => res.json());

const Home = () => {
    return (
        <div>
            <title>CleanBD Home</title>
            <Banner></Banner>

            <HowItWorks></HowItWorks>

            <IssueCategoryCards></IssueCategoryCards>

            <LatestIssues latestIssuesPromise={latestIssuesPromise}></LatestIssues>

            <CommunityStates></CommunityStates>

            <Testimonials></Testimonials>

            <Team></Team>

            <Faq></Faq>

            <Newsletter></Newsletter>

            <Brand></Brand>
            {/* <ImgGrid></ImgGrid> */}

            <CallAction></CallAction>
        </div>
    );
};

export default Home;