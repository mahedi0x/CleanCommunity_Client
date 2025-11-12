import React, { use, useRef } from 'react';
// Using react-icons for a clean look
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaTag } from 'react-icons/fa';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';


const IssueDetails = () => {
    const {user} = use(AuthContext)
  const issue = useLoaderData();
  const payContributionModalRef = useRef(null);





  const handlePayContributionModalOpen = () => {
    payContributionModalRef.current.showModal();
}


const handlePayContributionSubmit = (e) => {
    e.preventDefault();
}

  // Helper to format the date
  const formattedDate = new Date(issue.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* --- Main Content (Left Column) --- */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6 md:p-10">
          
          {/* Breadcrumbs (like in the image) */}
          <p className="text-sm text-gray-500 mb-4">
            Home / Issues / <span className="font-medium text-gray-800">Issue #{issue.id}</span>
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            {issue.title}
          </h1>

          {/* Metadata: Status, Category, and Date */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span 
              className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase"
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
              onError={(e) => { e.target.src = 'https://placehold.co/1200x800/e2e8f0/94a3b8?text=Image+Not+Found'; }}
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
                src={`https://maps.google.com/maps?q=${encodeURIComponent(issue.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

        {/* --- Sidebar (Right Column) --- */}
        <div className="lg:col-span-1 h-fit lg:sticky lg:top-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900">
              Support the Clean-Up
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Your contributions help us resolve these issues faster. Every bit counts!
            </p>

            {/* Suggested Fix Budget */}
            <div className="my-6 p-4 bg-green-50 rounded-lg flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-green-700">Suggested Fix Budget</span>
                <p className="text-3xl font-extrabold text-green-800">
                  ৳{issue.amount}
                </p>
              </div>
              <FaMoneyBillWave className="text-4xl text-green-500" />
            </div>

            {/* Pay Contribution Button */}
            {/* <button 
              className="w-full bg-green-600 text-white text-lg font-bold py-3 px-5 rounded-lg
                         hover:bg-green-700 transition-all duration-300 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              onClick={() => alert('Redirecting to payment...')}
            >
              Pay Clean-Up Contribution
            </button> */}

            <div>

             <button  onClick={handlePayContributionModalOpen}
              className="w-full bg-green-600 text-white text-lg font-bold py-3 px-5 rounded-lg
                         hover:bg-green-700 transition-all duration-300 shadow-md
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
             
            >
              Pay Clean-Up Contribution
            </button> 

                    <dialog ref={payContributionModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Give the best offer!</h3>
                            <p className="py-4">Offer something seller can not resist</p>
                            <form onSubmit={handlePayContributionSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input"
                                        readOnly
                                        defaultValue={user?.displayName} />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' readOnly defaultValue={user?.email} />
                                    {/* bid amount */}
                                    <label className="label">Bid</label>
                                    <input type="text" name='bid' className="input"
                                        placeholder='Your Bid'
                                    />
                                    <button className="btn btn-neutral mt-4">Please your bid</button>
                                </fieldset>
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default IssueDetails;