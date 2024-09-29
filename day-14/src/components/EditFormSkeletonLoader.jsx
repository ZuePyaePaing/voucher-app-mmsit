import React from "react";

const EditFormSkeletonLoader = () => {
  return (
    <div className="animate-pulse w-full md:w-1/3">
      <div className="mb-6">
        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
      </div>
      <div className="mb-6">
        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
      </div>
      <div className="mb-5">
        <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
        <div className="h-10 bg-gray-200 rounded mb-4"></div>
      </div>
      <div className=" flex items-center">
        <div className="inline-block h-10 w-24 bg-gray-200 rounded me-2 mb-2"></div>
        <div className="inline-block h-10 w-24 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default EditFormSkeletonLoader;
