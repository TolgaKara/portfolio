import React from "react";
import { MainPageLayout } from "../../components/layout/MainPageLayout";
import { MainHeading } from "../../components/atoms/MainHeading";
import { SubNav } from "./components/SubNav";

export default function Resume() {
	return (
		<MainPageLayout col={true}>
			<MainHeading text='Resume' />
			<SubNav />
		</MainPageLayout>
	);
}
