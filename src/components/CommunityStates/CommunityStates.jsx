import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';

const CommunityStates = () => {
    // const [users, setusers] = useState([]);
    // const [status, setStatus] = useState([])
    // const pendingIssue = myIssues.filter((issue) => issue.status === "ongoing");
    //  const resolvedIssue = myIssues.filter((issue) => issue.status === "ended");

    const axiosInstance = useAxios();


    useEffect(() => {
      
        axiosInstance.get("/users")
        .then(data =>{
            console.log(data.data);
        })
      
    }, [axiosInstance])

    useEffect(() => {

        axiosInstance.get("/my-issues")
        .then(data =>{
            console.log(data.data);
        })
      
    }, [axiosInstance])


    return (
        <div>
            
        </div>
    );
};

export default CommunityStates;