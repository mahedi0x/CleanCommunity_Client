import React, { use, useEffect, useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxios from "../../hooks/useAxios";

const MyIssues = () => {
    const { user } = use(AuthContext); 
    const [myIssues, setMyIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();
    const [selectedIssue, setSelectedIssue] = useState([]);

    // console.log(selectedIssue);

    const UpdateModalRef = useRef(null);



    const handleDeleteIssue = (id) => {
        axiosInstance.delete(`/issues/${id}`)
        .then(data => {
            console.log(data.data);
            setMyIssues(prev => prev.filter(e => e._id !== id ))
        })
        console.log(id);
    };

    useEffect(() => {
          axiosInstance.get(`/my-issues?email=${user?.email}`)
          .then(data => {
            console.log(data.data);
            setMyIssues(data.data)
            setLoading(false);
          })

    }, [axiosInstance, user]); 

     

    if (loading) {
        return <div> Please wait ... Loading...</div>; 
    }



    const handleUpdateSubmit= (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const amount  = e.target.amount.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        const category = e.target.category.value;

        console.log({title, amount,description,status, category  });

        // const formData = {title, amount,description,status, category  };

        console.log(selectedIssue._id);
        axiosInstance.patch(`/issues/${selectedIssue._id}`)
          .then(data => {
            console.log(data.data);
            setMyIssues(data.data)
            setLoading(false);
          })

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
                  {issue.title}
                </td>
                <td className="px-6 py-4">{issue.category}</td>
                <td className="px-6 py-4">{issue.location}</td>
                <td className="px-6 py-4 ">
                    <span className="px-3 py-1 text-xs font-semibold text-yellow-600 bg-yellow-100 rounded-xl">
                    {issue.status }
                    </span>
                   </td>
                <td className="px-6 py-4 ">
                  <button onClick={() => {
                    setSelectedIssue(issue)
                    UpdateModalRef.current.showModal();
                    }} className="flex items-center gap-1 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-lg transition">
                    <Pencil size={16} /> Update
                  </button>
                </td>

                <td className="px-6 py-4 ">
                  <button onClick={() => handleDeleteIssue(issue._id)} className="flex items-center gap-1 text-sm bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg transition">
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>



        <dialog id="my_modal_5" ref={UpdateModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Title"
                defaultValue={selectedIssue.name}
                className="w-full border p-2 rounded"
              />

                             <div>
                  <label className="label">Category</label>
                  <select
                    name="category"
                    className="select select-bordered w-full"
                  >
                    <option>Garbage</option>
                    <option>Illegal Construction</option>
                    <option>Broken Public Property</option>
                    <option>Road Damage</option>
                  </select>
                </div>

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                defaultValue={selectedIssue.amount}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                defaultValue={selectedIssue.description}
                className="w-full border p-2 rounded"
              />

              {/* Status as dropdown */}
              {/* Status */}
              <div>
                  <label className="label">Status</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="status"
                        value="ongoing"
                        defaultChecked
                        className="radio radio-sm"
                      />
                      Ongoing
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="status"
                        value="ended"
                        className="radio radio-sm"
                      />
                      Ended
                    </label>
                  </div>
                </div>

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => UpdateModalRef.current.close()}
                  
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-600 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>

            </div>
        </div>
        </dialog>
      </div>

     
    </div>
  );
};

export default MyIssues;
