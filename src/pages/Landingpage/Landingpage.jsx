import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Element } from "react-scroll";
import About from "../../components/organism/About";
import Project from "../../components/organism/Project";
import { Education } from "../../components/organism/Education";
import { Skill } from "../../components/organism/Skill";
import { FAQ } from "../../components/organism/FAQ";
import { WorkExperience } from "../../components/organism/WorkExperience";
import { BlogSlider } from "../../components/organism/BlogSlider";
import { ContactMe } from "../../components/organism/ContactMe";
import Navbar from "../../components/molecules/Navbar";

export default function Landingpage() {
	return (
		<Fragment>
			<About />

			<WorkExperience />

			<Project />

			<Education />

			<Skill />

			<FAQ />

			<BlogSlider />

			<ContactMe />
		</Fragment>
	);
}
