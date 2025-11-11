import React from 'react';
// Import icons from react-icons. I've chosen some suitable ones.
// You might need to install: npm install react-icons
import { FaTrashAlt, FaHardHat, FaTools, FaRoad } from 'react-icons/fa';

const IssueCategoryCards = () => {
  const categories = [
    {
      name: "Garbage",
      description: "Report uncollected waste, overflowing bins, or general litter.",
      icon: FaTrashAlt,
      color: "text-green-600",
      bgColor: "bg-green-50",
      path: "/report/garbage" // Example path for navigation
    },
    {
      name: "Illegal Construction",
      description: "Report unauthorized building, encroachments, or safety violations.",
      icon: FaHardHat, // Hardhat for construction
      color: "text-red-600",
      bgColor: "bg-red-50",
      path: "/report/illegal-construction"
    },
    {
      name: "Broken Public Property",
      description: "Report damaged benches, streetlights, signs, or public facilities.",
      icon: FaTools, // Tools for repair/maintenance
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      path: "/report/broken-property"
    },
    {
      name: "Road Damage",
      description: "Report potholes, cracks, uneven surfaces, or missing manholes.",
      icon: FaRoad, // Road icon for damage
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      path: "/report/road-damage"
    },
  ];

  return (
    <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Report an Issue
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <a
            key={index}
            href={category.path} // Make the entire card a link
            className={`
              ${category.bgColor} 
              rounded-xl shadow-md p-8 flex flex-col items-center text-center
              hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
              transform
              group // For child styling on hover
            `}
          >
            {/* Icon */}
            <div 
              className={`
                text-5xl mb-4 p-4 rounded-full
                ${category.color} 
                bg-white
                group-hover:bg-opacity-80 transition-colors duration-300
              `}
            >
              <category.icon />
            </div>

            {/* Category Name */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {category.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">
              {category.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default IssueCategoryCards;