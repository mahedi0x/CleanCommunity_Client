import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const IssueCard = ({ issue }) => {
  const { _id, title, category, location, description, image, created_at, status } = issue;

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : "No Date";

  // Category Color Palette matching our new theme
  const getCategoryStyles = (cat) => {
    switch (cat.toLowerCase()) {
      case "illegal construction": return "from-red-500 to-red-700 shadow-red-200";
      case "road damage": return "from-orange-400 to-orange-600 shadow-orange-200";
      case "garbage": return "from-green-500 to-emerald-700 shadow-green-200";
      default: return "from-slate-500 to-slate-700 shadow-slate-200";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group w-full max-w-[400px] h-[520px] mx-auto flex flex-col bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-slate-700"
    >
      {/* Image Section with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={image}
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Status Badge */}
        <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/20 text-white ${status === 'ended' ? 'bg-green-500/80' : 'bg-orange-500/80'}`}>
          {status}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <div className="mb-4">
          <span className={`inline-block bg-gradient-to-r ${getCategoryStyles(category)} text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-[0.15em] text-white shadow-lg`}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-3 leading-tight uppercase italic tracking-tighter line-clamp-2 min-h-[3.5rem]">
          {title}
        </h2>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
            <FaMapMarkerAlt className="mr-2 text-green-600" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm font-medium">
            <FaCalendarAlt className="mr-2 text-green-600" />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 font-medium italic">
          "{description}"
        </p>

        {/* Action Button */}
        <Link
          to={`/issues-details/${_id}`}
          className="mt-auto group/btn flex items-center justify-center gap-2 w-full py-4 bg-green-600 dark:bg-green-700 text-white font-black uppercase tracking-widest rounded-2xl transition-all hover:bg-green-700 dark:hover:bg-green-500 shadow-lg active:scale-95"
        >
          View Full Details
          <FaChevronRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default IssueCard;