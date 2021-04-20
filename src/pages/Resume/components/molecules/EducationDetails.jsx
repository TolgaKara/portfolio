import React from "react";
import { Date } from "../atom/Date";
import { JobPosition } from "../atom/JobPosition";

export const EducationDetails = ({ position, date, company, bullet, techStack }) => {
	return (
		<div>
			<JobPosition position={position} />
			<Date date={date} />
		</div>
	);
};
