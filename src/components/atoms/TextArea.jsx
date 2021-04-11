import React from "react";

export const TextArea = ({ text, placeholder, variable }) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={variable}>{text}</label>
			<textarea
				id={variable}
				placeholder={placeholder}
				className='h-72 py-2 px-4 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-yellow-700 duration-500'
			/>
		</div>
	);
};
