import React from 'react';

const Journal = () => {
	return (
		<div className='bg-gray-50 py-12'>
			<div className="container mx-auto p-4">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
					<div className="flex items-center">
						<div className='lg:w-[560px]'>
							<h3 className='text-2xl font-bold inline-block mb-4 max-w-max'>
								Bangladesh Under Attack
							</h3>
							<p className='text-gray-700 my-6'>
								The Bangladesh Under Attack is a platform for the National Institute of Mass Communication (NIMC) to share its research, analysis, and insights on a wide range of topics. Our goal is to provide readers with a deeper understanding of the issues that matter most to Bangladesh and the world.
							</p>
							<button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'>
								Keep Reading
							</button>
						</div>
					</div>
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
						<div className='grid grid-rows-2 gap-6'>
							<img src='/p4.webp' alt='Journal Image' className='w-full object-cover rounded-lg shadow-lg' />
							<img src='/p5.webp' alt='Journal Image' className='w-full object-cover rounded-lg shadow-lg' />
						</div>
						<div className='relative'>
							<img src='/p6.webp' alt='Journal Image' className='w-full h-full object-cover rounded-lg shadow-lg' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journal;
