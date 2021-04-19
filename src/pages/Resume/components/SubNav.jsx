import React from "react";

export const SubNav = () => {
	return (
		<ul className='flex justify-start space-x-5 font-semibold  mt-3 uppercase mr-8'>
			<li className='text-yellow-600'>
				<a href=''>Education</a>
			</li>
			<li className='text-yellow-600'>
				<a href=''>Work Experience</a>
			</li>
			<li className='text-yellow-600'>
				<a href=''>Skills</a>
			</li>
		</ul>
	);
};
