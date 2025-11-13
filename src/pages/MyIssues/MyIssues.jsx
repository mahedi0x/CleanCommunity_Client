import React, { use, useEffect, useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const MyIssues = () => {
    const { user } = use(AuthContext); 
    const [myIssues, setMyIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();
    const [selectedIssue, setSelectedIssue] = useState([]);
    const [refetch, setRefetch]= useState(false);

    // console.log(selectedIssue);

    const UpdateModalRef = useRef(null);


    const handleDeleteIssue = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosInstance.delete(`/issues/${id}`)
            .then(res => {
              console.log(res)
              setMyIssues(prev => prev.filter(e => e._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your issue has been deleted.",
                icon: "success"
              });
            })
            .catch(() => {
              Swal.fire({
                title: "Error!",
                text: "Failed to delete issue.",
                icon: "error"
              });
            });
        }
      });
    };
    
    useEffect(() => {
          axiosInstance.get(`/my-issues?email=${user?.email}`)
          .then(data => {
            console.log(data.data);
            setMyIssues(data.data)
            setLoading(false);
          })

    }, [axiosInstance, user, refetch]); 

     

    if(loading){
      return <Loading></Loading>
    }


    const handleUpdateSubmit= (e) =>{
        e.preventDefault();
        const title = e.target.title.value;
        const amount  = e.target.amount.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        const category = e.target.category.value;

        // console.log({title, amount,description,status, category  });

        const formData = {title, amount,description,status, category  };

        // console.log(selectedIssue._id);
        axiosInstance.patch(`/issues/${selectedIssue._id}`, formData)
          .then(data => {
            console.log(data.data);
            toast.success("Data Update successfully!");
            setRefetch(!refetch);
            
            setLoading(false);
          })

    }


    console.log(myIssues);
    
    
    return (
    <div className="p-6 md:p-10  min-h-screen">
       <ToastContainer position="top-center" />
      <h1 className="text-2xl md:text-3xl font-bold  mb-1">
        My Reported Issues
      </h1>
      <p className=" mb-6">
        A list of all the cleanliness issues you have reported.
      </p>

      <div className="overflow-x-auto rounded-2xl shadow-sm border ">
        <table className="w-full text-sm text-left ">
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
                className="border-b last:border-none transition"
              >
                <td className="px-6 py-4 font-medium ">
                  {issue.title}
                </td>
                <td className="px-6 py-4">{issue.category}</td>
                <td className="px-6 py-4">{issue.location}</td>
                <td className="px-6 py-4 ">
                    <span className ={`px-3 py-1 text-xs font-semibold ${issue.status === "ongoing" ? "badge badge-warning" : "badge badge-success" }  rounded-xl`} >
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
                defaultValue={selectedIssue.title}
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
                  onClick={() => UpdateModalRef.current.close()}
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
