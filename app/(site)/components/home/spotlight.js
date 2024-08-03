import React from 'react';
import { FaPlay } from 'react-icons/fa';

const SpotlightSection = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-x-8">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <h3 className="text-2xl font-bold mb-4 inline-block border-b-4 border-blue-300 max-w-max">Watch Spotlight Video</h3>
                    <p className="text-gray-700 mb-6">Discover Bangladesh: Explore the rich culture, stunning landscapes, and vibrant traditions of Bangladesh in our spotlight video section.</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Watch More Videos</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 lg:w-2/3">
                    <div className="relative bg-black rounded-lg overflow-hidden shadow-lg group">
                        <img src="/s.jpg" alt="Padma Bridge" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-300" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md inline-block mb-2 max-w-max">Channel 1 TV</span>
                            <h4 className="text-white text-lg font-bold mb-2 opacity-80">Padma Bridge Documentary For Inaugural</h4>
                            <p className="text-white text-sm opacity-80">The Padma Bridge is an engineering marvel, designed to endure the challenging conditions posed by one of the world’s most volatile rivers...</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
                                <FaPlay className="opacity-100 transition duration-300" />
                            </a>
                        </div>
                    </div>
                    <div className="relative bg-black rounded-lg overflow-hidden shadow-lg group">
                        <img src="/s.jpg" alt="Smart Bangladesh Vision" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-300" />
                        <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent">
                            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md inline-block mb-2 max-w-max">Desh TV News</span>
                            <h4 className="text-white text-lg font-bold mb-2 opacity-80">Smart Bangladesh Vision 2041</h4>
                            <p className="text-white text-sm opacity-80">Smart Bangladesh is about inclusivity, focusing on the citizens of Bangladesh. Built on four pillars: Smart Citizens, Smart Government...</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-white text-4xl">
                                <FaPlay className="opacity-100 transition duration-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotlightSection;
