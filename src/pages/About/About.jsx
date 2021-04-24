import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import tolgaHappy from "../../images/tolga/tolgaHappy.png";
import { MainPageLayout } from "../../components/layout/MainPageLayout";

export default function About() {
	const [author, setAuthor] = useState(null);

	return (
		<MainPageLayout>
			<div className='content w-8/12'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ut sunt recusandae mollitia
					voluptatem quae sit odit, natus quibusdam sint minus ipsum fugiat cumque a? Sint nulla
					fuga illum asperiores.
				</p>
			</div>
			<img className='place-items-center' src={tolgaHappy} alt='' />
		</MainPageLayout>
	);
}
