import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import bgImage from "../images/bg_minimalism_origami_japan.jpg";

export default function Landingpage() {
	return (
		<main>
			<img src={bgImage} alt='' className='absolute object-cover w-full h-full' />
			<section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
				<h1 className='text-6xl text-white bg-red-800 h-full px-4 shadow-lg font-bold cursive leading-none lg:leading-snug home-name'>
					Welcome, I am Tolga Kara
				</h1>
			</section>
		</main>
	);
}
