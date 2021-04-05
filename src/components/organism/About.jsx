import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

export default function About() {
	const [author, setAuthor] = useState(null);

	return <div className='container mx-auto' id='about'></div>;
}
