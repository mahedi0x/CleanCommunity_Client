import React, { use, useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Loading from   '../../components/Loading/Loading'
import Table from '../../components/Table/Table';

const MyContribution = () => {
    const axiosInstance = useAxios();
    const {user} = use(AuthContext);
    const [myContribution, setMyContribution] = useState([]);
    console.log(myContribution);
    const [loading , setLoading] = useState(true);

    // axiosInstance.get(`my-contribution/?email=${user?.email}`)

    useEffect(() => {
        axiosInstance.get(`/my-contribution/?email=${user?.email}`).then((data) => {
           setMyContribution(data.data);
          setLoading(false);
        });
      }, [user, axiosInstance]);


      if(loading){
        return <Loading></Loading>
      }

    return (
        <div className="min-h-screen px-5">
        <title>My Contributions</title>
        <h2 className="text-4xl font-bold my-8 px-2">
          My <span className="text-primary">Contributions</span> (
          {myContribution?.length})
        </h2>
        
        <Table myContribution={myContribution}></Table>
      </div>
    );
};

export default MyContribution;