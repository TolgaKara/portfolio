import React from "react";

export const Paragraph = ({ children, type }) => {
	return (
		<p className={`mt-6 mb-3 ${type === "cta" ? "max-w-sm" : ""}`}>
			{children ||
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui laudantium, blanditiis ducimus molestias quasi obcaecati unde magnam debitis veritatis impedit reprehenderit delectus dolor dolore quaerat, accusamus iusto. Cum, quisquam!"}
		</p>
	);
};
