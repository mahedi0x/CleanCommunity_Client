import React from 'react';
import loading from "../../assets/loading.json"
import Lottie from 'lottie-react';

const Loading = () => {
   return (
        <div className='min-h-screen flex justify-center items-center'>
        <Lottie animationData={loading} loop={true} className='w-20'/>
        </div>
   );
};

export default Loading;