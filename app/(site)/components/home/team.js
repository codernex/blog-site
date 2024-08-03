import React from "react";

const Team = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="flex items-center max-w-lg mb-4 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 lg:mb-0">
              Our contributors shape the public discourse
            </h2>
            <div className="flex ml-4 -space-x-2">
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <img
                className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300"
                src="/pp.jpg"
                alt="Bordered avatar"
              />
              <div className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                1K+
              </div>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            See More Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
