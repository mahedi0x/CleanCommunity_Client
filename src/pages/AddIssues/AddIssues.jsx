import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import useAxios from "../../hooks/useAxios";


const AddIssue = () => {
  const { user } = use(AuthContext);
  const axiosInstance = useAxios();

  const handleAddIssues = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      amount: e.target.amount.value,
      status: e.target.status.value,
      created_at: new Date(),
      created_by: user.email,
    };
    console.log(formData);
    

    axiosInstance.post("/issues", formData)
    .then(data => {
      console.log(data.data);
      toast.success("Add Issues successfully!");
      e.target.reset();
    })
  };




  return (
<div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
        <ToastContainer position="top-center" />
      <form
        onSubmit={handleAddIssues}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-3xl border border-gray-200"
      >
        <h2 className="text-4xl font-semibold text-center mb-8 text-green-800">
           Report an Issue
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Issue Title */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Issue Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter issue title"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Category
            </label>
            <select
              defaultValue=""
              name="category"
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select category</option>
              <option value="Garbage">Garbage</option>
              <option value="Illegal Construction">Illegal Construction</option>
              <option value="Broken Public Property">
                Broken Public Property
              </option>
              <option value="Road Damage">Road Damage</option>
            </select>
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter location"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Amount */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Amount [Suggested Fix Budget]
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Enter amount"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Status
            </label>
            <input
              type="text"
              name="status"
              value="ongoing"
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Date</label>
            <input
              type="text"
              name="date"
              value={new Date().toLocaleDateString()}
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">
              Email
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="email"
              readOnly
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
            />
          </div>
        </div>

        {/* Description (full width) */}
        <div className="mt-6">
          <label className="block font-medium mb-1 text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            placeholder="Describe the issue"
            className="w-full border rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-green-800 w-full hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
          >
            Submit Issue
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default AddIssue;
