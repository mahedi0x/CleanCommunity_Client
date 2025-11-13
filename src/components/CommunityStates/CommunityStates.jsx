import React, { useEffect, useState, use } from "react";
import useAxios from "../../hooks/useAxios";
import CountUp from "react-countup";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const CommunityStates = () => {
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const [users, setUsers] = useState([]);
  const [myIssues, setMyIssues] = useState([]);
  console.log(users)

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);


  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/my-issues?email=${user.email}`)
        .then((res) => setMyIssues(res.data))
        .catch((err) => console.error(err));
    }
  }, [axiosInstance, user]);

  const pendingIssues = myIssues.filter((issue) => issue.status === "ongoing");
  const resolvedIssues = myIssues.filter((issue) => issue.status === "ended");

  const stats = [
    { label: "Total Users", value: users?.length },
    { label: "Issues Resolved ", value: resolvedIssues.length },
    { label: "Pending Issues", value: pendingIssues.length },
  ];

  return (
    <div className="py-10 bg-gray-100 dark:bg-green-100">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-700">
        Community Stats
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 duration-300"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-2">
              <CountUp end={stat.value} duration={2} separator="," />
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
              {stat?.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityStates;
