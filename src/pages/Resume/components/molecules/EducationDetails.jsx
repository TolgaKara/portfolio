import React from "react";
import { Date } from "../atom/Date";
import { JobPosition } from "../atom/JobPosition";
import { Company } from "../atom/Company";
import TaskList from "../molecules/TaskList";
import TechStack from "../molecules/TechStack";

export const EducationDetails = ({ position, date, company, companyURL, tasks, techStack }) => {
	return (
		<div className='w-1/2'>
			<JobPosition position={position} />
			<Date date={date} />
			<Company company={company} companyURL={companyURL} />
			<TaskList tasks={tasks} />
			<TechStack techStack={techStack} />
		</div>
	);
};
