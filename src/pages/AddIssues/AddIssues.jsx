import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const AddIssue = () => {
    const {user} = use(AuthContext);
    // console.log(user);


    const handleAddIssues = (e) =>{
        e.preventDefault()

        const formData = {
          name: e.target.title.value,
          category: e.target.category.value,
          location: e.target.location.value,
          description: e.target.description.value,
          image: e.target.image.value,
          amount: e.target.amount.value,
          status: e.target.status.value,
          created_at: new Date(),
          created_by: user.email
        }
        console.log(formData)

        fetch('http://localhost:3000/issues', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
          .then(res => res.json())
          .then(data=> {
            toast.success("Successfully added!")
            console.log(data)
          })
          .catch(err => {
            console.log(err)
          })
    

    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleAddIssues} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Report an Issue
        </h2>

        {/* Issue Title */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Issue Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter issue title"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Category</label>
          <select
          defaultValue={""}
          name="category"
          required
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">Select category</option>
            <option value="Garbage">Garbage</option>
            <option value="Illegal Construction">Illegal Construction</option>
            <option value="Broken Public Property">Broken Public Property</option>
            <option value="Road Damage">Road Damage</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Describe the issue"
            className="w-full border rounded-lg px-3 py-2 h-24 focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block font-medium mb-1">
            Amount [Suggested Fix Budget]
          </label>
          <input
            type="number"
            name="amount"
            placeholder="Enter amount"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Status</label>
          <input
            type="text"
            name="status"
            value="ongoing"
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Date</label>
          <input
            type="text"
            name="date"
            value={new Date().toLocaleDateString()}
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Email</label>
          <input

          defaultValue={user?.email}
            type="email"
            name="email"
            // value="currentuser@example.com"
            readOnly
            className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default AddIssue;
