import React from "react";

export const MainHeading = ({ text, subHeading }) => {
	return (
		<div>
			<p className='leading-tight text-yellow-600 font-semibold uppercase opacity-60'>
				{subHeading}
			</p>
			<h1 className='font-bold text-3xl'>{text}</h1>
		</div>
	);
};
