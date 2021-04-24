import React from "react";
import { Heading } from "./atom/Heading";
import { EducationDetails } from "./molecules/EducationDetails";

export const Education = () => {
	return (
		<div>
			<Heading text='Education' />
			<EducationDetails
				position='Full Stack Web Developer Bootcamp'
				date='Aug 2020 - Oct 2020'
				company='Ironhack'
				companyURL='https://www.ironhack.com/en'
				tasks={["asd", "asd"]}
				techStack={["Python", "Java"]}
			/>
		</div>
	);
};
