import React from "react";
import { Date } from "../atom/Date";
import { JobPosition } from "../atom/JobPosition";
import { Company } from "../atom/Company";

export const EducationDetails = ({ position, date, company, companyURL, bullet, techStack }) => {
	return (
		<div>
			<JobPosition position={position} />
			<Date date={date} />
			<Company company={company} companyURL={companyURL} />
		</div>
	);
};
