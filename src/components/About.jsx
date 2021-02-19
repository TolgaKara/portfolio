import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function About() {
	const [author, setAuthor] = useState(null);

	return (
		<div className='container mx-auto'>
			<div>
				<h1>Tolga Kara</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi asperiores porro sint non,
					aspernatur deleniti est! Accusantium nisi, cupiditate excepturi ex exercitationem nam,
					quidem mollitia blanditiis doloremque, repudiandae fugiat maiores.
				</p>
			</div>
			<div></div>
		</div>
	);
}
