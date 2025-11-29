import React, { useEffect, useState } from "react";
import IssueCard from "../../components/IssueCard/IssueCard";
import FilterCategories from "../../components/FilterCategories/FilterCategories";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading/Loading";

const AllIssues = () => {
//   const allIssues = useLoaderData();
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");
  console.log(category, status)

  const [loading, setLoading] = useState(true);
  const [allIssues, setAllIssues] = useState([]); 

  const axiosInstance = useAxios();
  useEffect(() => {
    axiosInstance.get("/issues", {params: {
        category,
        status,
      }},)
      .then(data => {
        console.log(data.data)
        setLoading(false)
        setAllIssues(data.data);
      })
  }, [axiosInstance, category, status]);

  if(loading){
    return <Loading></Loading>
  }

  console.log(allIssues);
  return (
    <div>
        <title>CLeanBD AllIssues</title>
      <FilterCategories
        setCategory={setCategory}
        setStatus={setStatus}
      ></FilterCategories>



      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-10 py-10 container mx-auto">
        {
            allIssues.length === 0 ? <p>Issue Not Found</p> : <>{allIssues.map((issue) => (
                <IssueCard issue={issue}></IssueCard>
              ))}</>
        }
        
      </div>
    </div>
  );
};

export default AllIssues;
