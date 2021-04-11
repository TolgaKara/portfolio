import React from "react";

export const ProjectCard = () => {
	return (
		<div class='w-1/5 py-5 px-2 shadow-md rounded-md border-2 space-y-4 mx-3 my-5 h-full'>
			<img
				class='rounded-lg relative -mt-8 opacity-90 shadow-xl'
				src='https://i.pinimg.com/originals/16/61/fa/1661fa505fe3bc2f022a5004fda0b8e8.png'
				alt=''
				srcset=''
			/>
			<div class='flex justify-between items-center'>
				<p class='text-sm bg-yellow-200 px-4 py-1 rounded-full text-yellow-700 border-b-2 border-yellow-700 font-semibold'>
					Programming
				</p>
				<p class='text-sm text-gray-600'>02.01.2021</p>
			</div>
			<div>
				<p class='text-xl font-semibold'>Lorem Ipsum is simply dummy text of the printing and</p>
				<p class='font-normal text-gray-600'>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				</p>
			</div>
		</div>
	);
};
