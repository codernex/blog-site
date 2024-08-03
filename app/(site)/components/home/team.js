import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-100 p-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-5 rounded-md">
          <div className="max-w-lg lg:max-w-md mb-4 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 lg:mb-0">
              Our contributors shape the public discourse
            </h2>
            <div className="flex -space-x-2">
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                1K+
              </div>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            See More Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
