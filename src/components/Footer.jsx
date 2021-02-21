import React from "react";

export const Footer = () => {
	return (
		<footer className='container mx-auto text-xs border-t border-gray-400 py-10 flex items-center justify-between'>
			<ul className='flex items-center space-x-12'>
				<li>&copy; 2020 Tolga Kara</li>
				<li>
					<a href='#' className='text-blue-600 hover:underline'>
						Blog
					</a>
				</li>
			</ul>
			<div className='mx-16'>
				<a href='#'>
					<Logo />
				</a>
			</div>
		</footer>
	);
};
