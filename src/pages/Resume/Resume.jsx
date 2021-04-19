import React from "react";
import { MainPageLayout } from "../../components/layout/MainPageLayout";
import { MainHeading } from "../../components/atoms/MainHeading";
import { SubNav } from "./components/SubNav";
import { Education } from "./components/Education";
import { ResumeLayout } from "./components/ResumeLayout";

export default function Resume() {
	return (
		<MainPageLayout col={true}>
			<ResumeLayout>
				<div className=' py-14 divide-y-2 divide-y-reverse '>
					<MainHeading text='Resume' />
					<SubNav />
				</div>
				<Education />
			</ResumeLayout>
		</MainPageLayout>
	);
}
