import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className='py-16'>
            <div class="container mx-auto px-4 flex flex-col md:flex-row gap-8">

                <div class="md:w-2/3">
                    <div class="relative">
                        {/* <img src="/p3.webp" alt="Prime Minister Sheikh Hasina" class="w-full h-auto" /> */}
                        <iframe width="840" height="505" src="https://www.youtube.com/embed/u5el4WBnekQ?si=wGN3pbG2PykjSZhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                            {/* <span class="bg-blue-600 text-white px-2 py-1 text-sm mb-2 inline-block">Energy and Environment</span> */}
                            <h2 class="text-white text-2xl md:text-3xl font-bold mb-2">Elevated Expressway's Banani toll plaza set on fire amid blackout by BNP-Jamaat Terrorist
                            </h2>
                            {/* <p class="text-gray-300 text-sm">gca.org</p> */}
                            <p class="text-gray-300 text-sm">03 August 2024</p>
                        </div>
                    </div>
                </div>

                <div class="md:w-1/3">
                    <h3 class="text-xl font-bold mb-4 border-b pb-2">Spotlight</h3>
                    <div class="space-y-4">

                        <div class="flex gap-4 items-center">
                            <span class="text-xl font-bold text-gray-400">01</span>
                            <img src="/spot1.jpg" alt="Award" class="w-20 h-20 rounded-full object-cover" />
                            <div>
                                <span class="text-blue-600 text-sm">Economy and Business</span>
                                <p class="text-sm text-gray-600">Zarif Munir, Saibal Chakraborty, & Tausif Ishtiaque</p>
                                <p class="text-sm text-gray-600">28 April 2023</p>
                            </div>
                        </div>


                        <div class="flex gap-4 items-center">
                            <span class="text-xl font-bold text-gray-400">02</span>
                            <img src="/spot2.jpg" alt="Bangabandhu" class="w-20 h-20 rounded-full object-cover" />
                            <div>
                                <span class="text-blue-600 text-sm">Bangabandhu and Liberation War</span>
                                <p class="text-sm text-gray-600">Department of Films & Publications</p>
                                <p class="text-sm text-gray-600">13th November 2023</p>
                            </div>
                        </div>


                        <div class="flex gap-4 items-center">
                            <span class="text-xl font-bold text-gray-400">03</span>
                            <img src="/spot1.jpg" alt="Economy" class="w-20 h-20 rounded-full object-cover" />
                            <div>
                                <span class="text-blue-600 text-sm">Economy and Business</span>
                                <p class="text-sm text-gray-600">Zarif Munir, Saibal Chakraborty, & Tausif Ishtiaque</p>
                                <p class="text-sm text-gray-600">28 April 2023</p>
                            </div>
                        </div>


                        <div class="flex gap-4 items-center">
                            <span class="text-xl font-bold text-gray-400">04</span>
                            <img src="/spot2.jpg" alt="Power Plant" class="w-20 h-20 rounded-full object-cover" />
                            <div>
                                <span class="text-blue-600 text-sm">Economy and Business</span>
                                <p class="text-sm text-gray-600">Zarif Munir, Saibal Chakraborty, & Tausif Ishtiaque</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;


function SpotlightArticle({ imageSrc, title, date, category }) {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-20 h-20 relative">
                <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-full" />
            </div>
            <div>
                <p className="text-blue-900 text-sm">{category}</p>
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-gray-600 text-sm">{date}</p>
            </div>
        </div>
    );
}
