import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const IssueCard = ({issue}) => {
    const {_id, title, category, location, description, image, created_at } = issue;
  
    const formattedDate = created_at ? new Date(created_at).toISOString().split('T')[0] : '';


    return (
        <div className="max-w-md mx-auto bg-white dark:bg-gray-200 rounded-xl shadow-lg overflow-hidden font-sans">
      
      <img className="w-full h-56 object-cover object-center" src={image} alt={title} />
      
      <div className="p-6">
        
        <div className="flex justify-between items-center mb-3">
          <span className="inline-block bg-red-200 text-red-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {category}
          </span>
          <span className="text-lg font-bold text-indigo-600">
            {/* {amount} BDT */}
          </span>
        </div>
        
        <h1 className="block text-2xl font-bold text-gray-800 mb-2">
          {title}
        </h1>
        
        <div className="mb-4 text-gray-600">
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="h-5 w-5 mr-2 text-gray-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="h-5 w-5 mr-2 text-gray-400" />
            <span>{formattedDate}</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-base mb-6">
          {description}
        </p>
        
        
        <Link to={`/issues-details/${_id}`} className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300">
          View Details
        </Link>
      </div>
    </div>
    );
};

export default IssueCard;