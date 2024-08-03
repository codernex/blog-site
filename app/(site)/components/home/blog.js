import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const blogData = [
	{
		_id: 1,
		title: 'A Guide to Igniting Your Imagination',
		author: 'John Doe',
		date: '04 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Creativity',
	},
	{
		_id: 2,
		title: 'The Power of Positive Thinking',
		author: 'Jane Doe',
		date: '08 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Motivation',
	},
	{
		_id: 3,
		title: 'The Art of Writing a Great Blog Post',
		author: 'John Doe',
		date: '12 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Writing',
	},
	{
		_id: 4,
		title: 'The Benefits of Reading Every Day',
		author: 'Jane Doe',
		date: '16 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Reading',
	},
	{
		_id: 5,
		title: 'How to Stay Motivated Feel Giving Up',
		author: 'John Doe',
		date: '20 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Motivation',
	},
	{
		_id: 6,
		title: 'The Importance of Setting Goals',
		author: 'Jane Doe',
		date: '24 June 2022',
		image: 'https://readymadeui.com/Imagination.webp',
		category: 'Goals',
	},
];

const Blog = () => {
	return (
		<div className="py-12">
			<div className="container mx-auto px-4">
				<div className="rounded-lg">
					<div className="max-w-7xl mx-auto px-4 py-8">
						<div className="text-center mb-12">
							<div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto px-4">
								<h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 relative inline-block">
									Our Experts Shape the Public Discourse
									<span className="absolute inset-x-0 bottom-[-10px] mx-auto w-1/6 mt-1 h-1 bg-blue-300 rounded-full"></span>
								</h2>
							</div>
						</div>

						<Swiper
							modules={[Navigation]}
							spaceBetween={30}
							navigation={{
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev',
							}}
							breakpoints={{
								640: {
									slidesPerView: 1,  // Show one slide on small devices
								},
								768: {
									slidesPerView: 2,  // Show two slides on medium devices
								},
								1024: {
									slidesPerView: 3,  // Show three slides on larger devices
								},
							}}
							className="relative"
						>
							{blogData.map((blog) => (
								<SwiperSlide key={blog._id} className="relative">
									<div className="cursor-pointer rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
										<img
											src={blog.image || 'https://via.placeholder.com/600x400'}
											alt={blog.title}
											className="w-full h-60 object-cover"
										/>
										<div className="p-4">
											<div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
												{blog.category}
											</div>
											<h3 className="text-lg font-semibold text-gray-800 mt-4">{blog.title}</h3>
											<div className="flex justify-between items-center mt-4">
												<div className="flex items-center">
													<img
														src='https://readymadeui.com/team-1.webp'
														alt="Author"
														className="w-10 h-10 rounded-full object-cover"
													/>
													<div className="ml-3">
														<p className="text-xs text-gray-500">BY {blog.author.toUpperCase()}</p>
														<p className="text-xs text-gray-500">{blog.date}</p>
													</div>
												</div>
												<p className="text-sm text-blue-600">Read the docs.</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						{/* Uncomment if you want custom navigation buttons */}
						{/* <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10"></div>
						<div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10"></div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
