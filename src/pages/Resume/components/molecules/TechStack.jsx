import React from "react";

const TechStack = ({ techStack }) => {
	return (
		<ul className='flex space-x-2 bg-yellow-500 w-full py-1 px-4 font-medium text-sm '>
			{techStack.map((tech) => (
				<li>{tech}</li>
			))}
		</ul>
	);
};

export default TechStack;
