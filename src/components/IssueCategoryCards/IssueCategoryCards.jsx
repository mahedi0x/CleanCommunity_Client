import React from 'react';
import { motion } from 'framer-motion';
import { FaTrashAlt, FaHardHat, FaRoad, FaHome, FaArrowRight } from 'react-icons/fa';

const IssueCategoryCards = () => {
  const categories = [
    { name: "Garbage", description: "Report uncollected waste or overflowing bins.", icon: FaTrashAlt, accent: "from-green-500 to-emerald-700", path: "/report/garbage" },
    { name: "Illegal Building", description: "Report unauthorized building or safety violations.", icon: FaHardHat, accent: "from-orange-500 to-red-600", path: "/report/illegal-construction" },
    { name: "Public Property", description: "Report damaged benches or streetlights.", icon: FaHome, accent: "from-blue-500 to-indigo-700", path: "/report/broken-property" },
    { name: "Road Damage", description: "Report potholes or missing manholes.", icon: FaRoad, accent: "from-yellow-500 to-amber-600", path: "/report/road-damage" },
  ];

  // Animation variants for the container and children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each card appearing
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="max-w-8xl mx-auto py-24 px-6 lg:px-8 ">
      {/* Animated Header */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-left mb-16 border-l-8 border-green-600 pl-6"
      >
        <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
          What's the <span className="text-green-600">Issue?</span>
        </h2>
      </motion.div>

      {/* Animated Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:mx-20"
      >
        {categories.map((category, index) => (
          <motion.a
            key={index}
            href='/add-issues'
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative overflow-hidden bg-white py-10 dark:bg-slate-800 rounded-[2rem] p-8 border border-gray-100 dark:border-slate-700 shadow-xl flex flex-col items-start cursor-pointer"
          >
            {/* Background Hover Glow */}
            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${category.accent} opacity-10 rounded-full group-hover:scale-[5] transition-transform duration-700`}></div>

            {/* Icon */}
            <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.accent} text-white text-xl mb-6 group-hover:rotate-[360deg] transition-transform duration-700`}>
              <category.icon />
            </div>

            <h3 className="text-2xl font-black text-slate-800 dark:text-white uppercase italic tracking-tight mb-3">
              {category.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 font-medium">
              {category.description}
            </p>

            <div className="mt-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-green-600 group-hover:gap-4 transition-all">
              <span>Report Now</span>
              <FaArrowRight />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default IssueCategoryCards;