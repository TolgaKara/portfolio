import React from "react";

export const Company = ({ company, companyURL }) => {
	return (
		<a href={companyURL} target='blank'>
			{" "}
			@ {company}
		</a>
	);
};
