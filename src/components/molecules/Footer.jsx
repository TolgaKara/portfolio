import React from "react";
import { Logo } from "../atoms/Logo";

export const Footer = () => {
	return (
		<footer className='h-screen text-sm flex items-center justify-center'>
			<div className='border-t border-gray-400 py-5 w-full text-center'>
				<p className='mr-24'>© Tolga Kara</p>
			</div>
		</footer>
	);
};
