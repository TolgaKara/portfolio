import React from "react";

export const Input = ({ text, placeholder, variable, type }) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={variable}>{text}</label>
			<input
				id={variable}
				type={type}
				placeholder={placeholder}
				className='py-2 px-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-yellow-700 duration-500'
			/>
		</div>
	);
};
