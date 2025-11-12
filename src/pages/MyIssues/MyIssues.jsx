import React, { use, useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";

const MyIssues = () => {
    const { user } = use(AuthContext); 
    const [myIssues, setMyIssues] = useState([]);
    const [loading, setLoading] = useState(true);



    const handleUpdateClick = () => {
  
    };

    useEffect(() => {
        if (!user || !user.email) {
            setLoading(false);
            return; 
        }

        const url = `http://localhost:3000/my-issues?email=${user.email}`;
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch user issues');
                }
                return res.json();
            })
            .then(data => {
                setMyIssues(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Fetch error:", error);
                setLoading(false);
            });

    }, [user]); 

    if (loading) {
        return <div> Please wait ... Loading...</div>; 
    }
    
    return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
        My Reported Issues
      </h1>
      <p className="text-gray-500 mb-6">
        A list of all the cleanliness issues you have reported.
      </p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="text-gray-700 bg-gray-100 f">
            <tr>
              <th className="px-6 py-3 font-medium">Issue Title</th>
              <th className="px-6 py-3 font-medium">Category</th>
              <th className="px-6 py-3 font-medium">Location</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium ">Update</th>
              <th className="px-6 py-3 font-medium ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myIssues.map((issue) => (
              <tr
                key={issue._id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {issue.name}
                </td>
                <td className="px-6 py-4">{issue.category}</td>
                <td className="px-6 py-4">{issue.location}</td>
                <td className="px-6 py-4 ">
                    <span className="px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-xl">
                    {issue.status }
                    </span>
                   </td>
                <td className="px-6 py-4 ">
                  <button onClick={handleUpdateClick} className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg transition">
                    <Pencil size={16} /> Update
                  </button>
                </td>

                <td className="px-6 py-4 ">
                  <button className="flex items-center gap-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg transition">
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default MyIssues;
