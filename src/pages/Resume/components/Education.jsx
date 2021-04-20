import React from "react";
import { Heading } from "./atom/Heading";
import { EducationDetails } from "./molecules/EducationDetails";

export const Education = () => {
	return (
		<div>
			<Heading text='Education' />
			<EducationDetails position='' date='' company='' bullet={[]} techStack={[]} />
		</div>
	);
};
