import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import tolgaHappy from "../../images/tolga/tolgaHappy.png";

export default function About() {
	const [author, setAuthor] = useState(null);

	return (
		<div className='container mx-auto flex justify-between items-center' id='about'>
			About
		</div>
	);
}
