'use client'
import React, { useState } from 'react';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <div>
      <header className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center justify-center flex-grow">
            <div className="flex items-center justify-center space-x-2 w-full">
              <span className="font-semibold text-2xl text-end w-full">Bangladesh Under Attack</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 flex-grow justify-end">
            <button className="p-2" onClick={toggleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            {searchVisible && (
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded"
              />
            )}
          </div>
        </div>

        <nav className="bg-blue-800">
          <div className="container mx-auto px-4 py-2">
            <ul className="flex flex-wrap justify-center space-x-6 text-sm">
              <li className="transition-transform duration-300 transform hover:scale-110">
                <a href="#" className="hover:text-blue-300">Spotlight</a>
              </li>
              <li className="transition-transform duration-300 transform hover:scale-110">
                <a href="#" className="hover:text-blue-300 border-l hover:underline pl-2">Feature</a>
              </li>
              <li className="transition-transform duration-300 transform hover:scale-110">
                <a href="#" className="hover:text-blue-300 border-l hover:underline pl-2">Important</a>
              </li>
              <li className="transition-transform duration-300 transform hover:scale-110">
                <a href="#" className="hover:text-blue-300 border-l hover:underline pl-2">News</a>
              </li>
              <li className="transition-transform duration-300 transform hover:scale-110">
                <a href="#" className="hover:text-blue-300 border-l hover:underline pl-2">Videos</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
