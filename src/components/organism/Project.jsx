import React from "react";
import { ProjectCard } from "../molecules/ProjectCard";
import { MainHeading } from "../atoms/MainHeading";
import { ProjectLayout } from "../layout/ProjectLayout";
import { MainPageLayout } from "../layout/MainPageLayout";

export default function Project() {
	return (
		<MainPageLayout col={true}>
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
		</MainPageLayout>
	);
}
