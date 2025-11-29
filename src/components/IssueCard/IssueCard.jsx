import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const IssueCard = ({ issue }) => {
    const { _id, title, category, location, description, image, created_at } = issue;

    const formattedDate = created_at ? new Date(created_at).toISOString().split('T')[0] : 'No Date Provided';

    // Helper to truncate description to prevent uneven card heights
    const truncatedDescription = description.length > 100 
        ? description.substring(0, 100) + '...' 
        : description;

    // Function to determine color based on category
    const getCategoryColor = (cat) => {
        switch (cat.toLowerCase()) {
            case 'illegal construction':
                return 'bg-red-600 text-white';
            case 'road damage':
            case 'broken public property':
                return 'bg-orange-500 text-white';
            case 'garbage':
                return 'bg-blue-500 text-white';
            default:
                return 'bg-gray-400 text-white';
        }
    };

    const colorClass = getCategoryColor(category);

    return (
        // 1. Fixed Width (e.g., w-80 or w-96)
        // 2. Fixed Height (e.g., h-[28rem] or h-[450px])
        // I will use a class name that implies a specific size, feel free to adjust the h-[450px] value.
        <div className="w-90 h-[450px] mx-auto flex flex-col bg-white dark:bg-gray-100 rounded-xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden font-sans">
            
            <div className="flex-shrink-0">
                 <img className="w-full h-40 object-cover object-center" src={image} alt={title} />
            </div>

            <div className="p-4 flex flex-col flex-grow"> {/* Slightly reduced padding to save space */}
                
                <div className="flex justify-between items-center mb-2">
                    <span className={`inline-block ${colorClass} text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}>
                        {category}
                    </span>
                </div>
                
                {/* Fixed Title Height: Enforce a maximum of two lines using line-clamp-2 */}
                <h2 className="text-xl font-extrabold text-gray-900 mb-2 leading-tight overflow-hidden line-clamp-2">
                    {title}
                </h2>
                
                {/* Note: If using `line-clamp-2`, you need to ensure the `line-clamp` plugin is enabled in your tailwind.config.js */}
                
                <div className="mb-3 text-gray-600 space-y-1">
                    <div className="flex items-center text-sm">
                        <FaMapMarkerAlt className="h-4 w-4 mr-2 text-indigo-500 flex-shrink-0" />
                        <span className="truncate">{location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                        <FaCalendarAlt className="h-4 w-4 mr-2 text-indigo-500 flex-shrink-0" />
                        <span>{formattedDate}</span>
                    </div>
                </div>
                
                {/* Description: Fixed height due to flex-grow and overflow-hidden */}
                <p className="text-gray-700 text-sm mb-4 flex-grow overflow-hidden leading-snug">
                    {truncatedDescription}
                </p>
                
                <Link 
                    to={`/issues-details/${_id}`} 
                    className="mt-auto block text-center bg-green-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default IssueCard;