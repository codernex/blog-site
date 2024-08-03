import React from 'react';

const Event = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="group bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-indigo-600 flex flex-col justify-between overflow-hidden">
          <div className="transition-all duration-300 group-hover:border-blue-500 border-l-4 pl-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-2 group-hover:text-white">Our</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 group-hover:text-white">Experts</h1>
          </div>
          <p className="text-gray-600 leading-relaxed group-hover:text-white">
            At the heart of our organization is our team of seasoned experts, each bringing a wealth of knowledge and experience in their respective fields.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/e1.jpg" alt="Event Image" className="w-full h-80 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="group bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-indigo-600 flex flex-col justify-between overflow-hidden">
          <div className="transition-all duration-300 group-hover:border-blue-500 border-l-4 pl-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-2 group-hover:text-white">Our</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 group-hover:text-white">Research</h1>
          </div>
          <p className="text-gray-600 leading-relaxed group-hover:text-white">
            At the heart of our organization is our team of seasoned experts, each bringing a wealth of knowledge and experience in their respective fields.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="flex items-center justify-center">
          <img src="/e2.jpg" alt="Event Image" className="w-full h-80 object-cover rounded-lg shadow-lg" />
        </div>
        <div className="group bg-white p-8 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-indigo-600 flex flex-col justify-between overflow-hidden">
          <div className="transition-all duration-300 group-hover:border-blue-500 border-l-4 pl-4">
            <h2 className="text-lg font-semibold text-gray-600 mb-2 group-hover:text-white">Our</h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4 group-hover:text-white">Experts</h1>
          </div>
          <p className="text-gray-600 leading-relaxed group-hover:text-white">
            At the heart of our organization is our team of seasoned experts, each bringing a wealth of knowledge and experience in their respective fields.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src="/e3.jpg" alt="Event Image" className="w-full h-80 object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Event;
