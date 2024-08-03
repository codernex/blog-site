import React from 'react';

const Header = () => {
  return (
    <div>
      <header class="bg-blue-700 text-white">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <img src="/logoo.jpg" alt="Bangladesh Logo" class="h-8 w-8" />
            <div class="flex items-center space-x-2">
              <img src="/log.jpg" alt="NIMC Logo" class="h-6 w-6" />
              <span class="font-semibold">NIMC Journal and Blog</span>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="flex border rounded-full">
              <button class="px-3 py-1 bg-white text-blue-700 rounded-l-full">EN</button>
              <button class="px-3 py-1 rounded-r-full">BN</button>
            </div>
            <button class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </button>
            <button class="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>


        <nav class="bg-blue-800">
          <div class="container mx-auto px-4 py-2">
            <ul class="flex flex-wrap justify-center space-x-6 text-sm">
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300">Bangabandhu and Liberation War</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Mass Media and Communication</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Economy and Business</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Energy and Environment</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Gender Equity</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">History and Heritage</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Sports and Culture</a>
              </li>
              <li class="transition-transform duration-300 transform hover:scale-110">
                <a href="#" class="hover:text-blue-300 border-l hover:underline pl-2">Current Affairs (National and International)</a>
              </li>
            </ul>
          </div>

        </nav>
      </header>
    </div>
  );
};

export default Header;