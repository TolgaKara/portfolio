import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";
import { MainHeading } from "../atoms/MainHeading";
import { ProjectLayout } from "../layout/ProjectLayout";

export default function Project() {
	return (
		<div className='container mx-auto flex flex-col justify-between items-start mt-10' id='project'>
			<MainHeading text='📦 Projects' subHeading='The creme de la creme of Projects' />
			<ProjectLayout>
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</ProjectLayout>
		</div>
	);
}
