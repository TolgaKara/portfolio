import React from "react";

export const List = ({ heading, items, children }) => {
	return (
		<li>
			<h3>{heading}</h3>
			<div className='flex text-2xl space-x-5'>{items || children}</div>
		</li>
	);
};
