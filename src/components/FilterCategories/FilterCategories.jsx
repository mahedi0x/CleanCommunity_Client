import React from "react";

const FilterCategories = ({ setCategory, setStatus }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto flex justify-between flex-wrap gap-4  mt-20">

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered bg-white dark:bg-base-100"
        >
          <option value="all">All Categories</option>
          <option value="Garbage">Garbage</option>
          <option value="Illegal Construction">Illegal Construction</option>
          <option value="Broken Public Property">Broken Public Property</option>
          <option value="Road Damage">Road Damage</option>
        </select>

        <select
          onChange={(e) => setStatus(e.target.value)}
          className="select select-bordered bg-white dark:bg-base-100"
        >
          <option value="all">All Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="ended">Ended</option>
        </select>
      </div>
    </div>
  );
};

export default FilterCategories;