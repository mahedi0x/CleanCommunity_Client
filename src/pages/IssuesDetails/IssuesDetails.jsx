import React, { use, useRef, useState, useEffect } from "react";
// Using react-icons for a clean look
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaTag,
} from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxios from "../../hooks/useAxios";

const IssueDetails = () => {
  // Fix for 'use' hook issue: use is intended for reading context/promises,
  // but if AuthContext is just a plain object/value, `use` is fine.
  // Assuming AuthContext is set up correctly in your provider tree.
  const { user } = use(AuthContext); 
  const issue = useLoaderData();
  const payContributionModalRef = useRef(null);
  const axiosInstance = useAxios();
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sorting contributions for display (Descending amount)
  const decContributions = [...contributions].sort((a, b) => b.amount - a.amount);

  // Function to fetch contributions
  const fetchContributions = () => {
    setLoading(true);
    setError(null);
    // NOTE: This URL should likely be relative if useAxios handles the base URL,
    // or use the environment variable if you need a full URL.
    // I've kept your original URL structure for direct compatibility.
    axiosInstance.get(`https://clean-community-bd.vercel.app/contributions/${issue._id}`)
      .then(data => {
        setContributions(data.data);
      })
      .catch(err => {
        console.error("Error fetching contributions:", err);
        setError("Failed to load contributions.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch contributions on component mount
  useEffect(() => {
    fetchContributions();
  }, [issue._id, axiosInstance]); // Re-fetch if issue ID or axios instance changes

  const handlePayContributionModalOpen = () => {
    // Ensure the modal has the correct method available before calling
    if (
      payContributionModalRef.current &&
      payContributionModalRef.current.showModal
    ) {
      payContributionModalRef.current.showModal();
    }
  };

  const handlePayContributionSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const amount = e.target.amount.value;
    const contributorName = e.target.contributor.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const address = e.target.address.value;
    const date = e.target.date.value;
    const additionalInfo = e.target.additionalInfo.value;

    const formData = {
      title,
      amount: parseFloat(amount), // Ensure amount is a number for sorting/calculations
      contributorName,
      email,
      number,
      address,
      date,
      additionalInfo,
      image: user?.photoURL,
      issueId: issue._id,
      category: issue.category
    };

    axiosInstance.post("/contributions", formData).then((data) => {
      console.log(data.data);
      // OPTIMIZATION: Re-fetch contributions to update the list immediately
      fetchContributions(); 
    }).catch(err => {
      console.error("Error submitting contribution:", err);
      alert("Failed to submit contribution.");
    });

    if (payContributionModalRef.current) {
      payContributionModalRef.current.close();
    }
  };

  // Helper to format the date
  const formattedDate = new Date(issue.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  // Default image for contributors if photoURL is missing/invalid
  const defaultContributorImage = "https://i.ibb.co.com/CpHdF8h2/icons8-user.gif";

  return (
    <div className=" min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* --- Main Content (Left Column) --- */}
        <div className="lg:col-span-2 dark:bg-gray-300 bg-white rounded-xl shadow-lg p-6 md:p-10">
          {/* Breadcrumbs (like in the image) */}
          <p className="text-sm text-gray-500 mb-4">
            Home / Issues /{" "}
            <span className="font-medium text-gray-800">Issue #{issue.id}</span>
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {issue.title}
          </h1>

          {/* Metadata: Status, Category, and Date */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span
              className="inline-block  text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase"
              title="Status"
            >
              {issue.status}
            </span>
            <span
              className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full"
              title="Category"
            >
              <FaTag size={12} />
              {issue.category}
            </span>
            <div
              className="flex items-center gap-2 text-sm text-gray-600"
              title="Reported Date"
            >
              <FaCalendarAlt className="text-gray-400" />
              <span>Reported on {formattedDate}</span>
            </div>
          </div>

          {/* Visual Evidence / Image */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Visual Evidence
            </h2>
            <img
              src={issue.image}
              alt={issue.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md border"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/1200x800/e2e8f0/94a3b8?text=Image+Not+Found";
              }}
            />
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Description
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {issue.description}
            </p>
          </div>

          {/* Location */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Location
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-800 mb-3">
              <FaMapMarkerAlt className="text-green-600" />
              <span>{issue.location}</span>
            </div>
            {/* --- Map Placeholder Replaced with Live iFrame --- */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md border">
              <iframe
                title="Issue Location Map"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                // This dynamically creates the map URL from the issue's location
                // NOTE: I fixed a potential issue with the template literal by removing googleusercontent.com and using the correct structure.
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  issue.location
                )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* --- Sidebar (Right Column) --- */}
        <div className="lg:col-span-1 h-fit lg:sticky lg:top-12">
          {/* Support Section */}
          <div className="bg-white dark:bg-gray-300 rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900">
              Support the Clean-Up
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Your contributions help us resolve these issues faster. Every bit
              counts!
            </p>

            {/* Suggested Fix Budget */}
            <div className="my-6 p-4 bg-green-50 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-green-700">
                  Suggested Fix Budget
                </span>
                <p className="text-3xl font-extrabold text-green-800">
                  ৳{issue.amount}
                </p>
              </div>
              <FaMoneyBillWave className="text-4xl text-green-500" />
            </div>

            <div>
              <button
                onClick={handlePayContributionModalOpen}
                className="w-full bg-green-600 text-white text-lg font-bold py-3 px-5 rounded-lg
                         hover:bg-green-700 transition-all duration-300 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Pay Clean-Up Contribution
              </button>

              {/* The ref is correctly attached here */}
              <dialog
                ref={payContributionModalRef}
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box w-full max-w-lg bg-white dark:bg-base-100">
                  <h3 className="font-bold text-lg mb-4">Contribution Form</h3>

                  <form
                    onSubmit={handlePayContributionSubmit}
                    className="space-y-4"
                  >
                    {/* Issue Title */}
                    <div>
                      <label className="label">Issue Title</label>
                      <input
                        type="text"
                        name="title"
                        defaultValue={issue?.title}
                        readOnly
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="label">Amount</label>
                      <input
                        type="number"
                        name="amount"
                        // Removed defaultValue={issue?.amount} as contributions are usually voluntary amounts
                        placeholder="Enter amount" 
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Contributor Name */}
                    <div>
                      <label className="label">Contributor Name</label>
                      <input
                        type="text"
                        name="contributor"
                        defaultValue={user?.displayName}
                        placeholder="Your name"
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="label">Email</label>
                      <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        readOnly
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="label">Phone Number</label>
                      <input
                        type="tel"
                        name="number"
                        placeholder="Your phone number"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="label">Address</label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Your address"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label className="label">Date</label>
                      <input
                        type="text"
                        name="date"
                        defaultValue={new Date().toLocaleDateString()}
                        readOnly
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Additional Info */}
                    <div>
                      <label className="label">Additional Info</label>
                      <textarea
                        placeholder="Any extra details..."
                        name="additionalInfo"
                        className="textarea textarea-bordered w-full"
                      ></textarea>
                    </div>

                    {/* Buttons */}
                    <div className="modal-action">
                      <button
                        type="button"
                        className="btn btn-ghost"
                        // CORRECTED: Using the payContributionModalRef
                        onClick={() => payContributionModalRef.current.close()}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary bg-green-600 hover:bg-green-700 border-none">
                        Submit Contribution
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>


            </div>
          </div>
          
          {/* --- NEW: Recent Contributions Section (List/Card View) --- */}
          <div className="bg-white dark:bg-gray-300 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Recent Contributions ({contributions.length})
            </h3>

            {loading && <p className="text-center text-gray-500">Loading contributions...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            
            {!loading && decContributions.length === 0 && (
                <p className="text-center text-gray-500 italic">No contributions yet. Be the first!</p>
            )}

            <ul className="space-y-4">
              {decContributions.slice(0, 5).map((contribution, index) => (
                <li 
                  key={contribution?._id}
                  className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50 hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={
                          contribution?.image?.startsWith("https")
                            ? contribution?.image
                            : defaultContributorImage
                        }
                        alt={contribution?.contributorName}
                        className="h-10 w-10 rounded-full object-cover border-2 border-green-400"
                        onError={(e) => { e.target.src = defaultContributorImage; }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        {contribution?.contributorName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {contribution?.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-green-600">
                      ৳{contribution?.amount}
                    </span>
                    {/* Optional: Add a badge for top contributor */}
                    {index === 0 && (
                        <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full mt-1">
                            Top Donor
                        </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Show more button if there are more than 5 contributions */}
            {decContributions.length > 5 && (
                <div className="mt-4 text-center">
                    <button className="text-sm text-green-600 hover:text-green-800 font-medium">
                        View All Contributions ({decContributions.length - 5} more)
                    </button>
                </div>
            )}
            
          </div>
        </div>
      </div>
      
      {/* NOTE: The old table structure was located here, 
        I've replaced it with the new list-based structure 
        and moved it into the right sidebar (above).
      */}
      
    </div>
  );
};

export default IssueDetails;