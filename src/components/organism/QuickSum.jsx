import React from "react";
import tolgaHappy from "../../images/tolga/tolgaHappy.png";
import { FiInstagram } from "react-icons/fi/";
import { FaGithubSquare, FaLinkedin, FaDev } from "react-icons/fa/";

export const QuickSum = () => {
	return (
		<div className='container mx-auto flex justify-between items-center mt-24' id='about'>
			<div className='w-1/3'>
				<p className='leading-tight text-yellow-600 font-semibold uppercase opacity-60'>
					Excited to contribute to awesome projects
				</p>
				<h1 className='font-bold text-3xl'>👋 Welcome to my Portfolio</h1>
				<p className=' mt-6 max-w-sm '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente qui laudantium,
					blanditiis ducimus molestias quasi obcaecati unde magnam debitis veritatis impedit
					reprehenderit delectus dolor dolore quaerat, accusamus iusto. Cum, quisquam!
				</p>
				<a
					className='bg-yellow-600 py-3 rounded-full text-white font-semibold mt-3 shadow-md uppercase px-8 inline-block'
					href=''
				>
					Let's talk !
				</a>
			</div>

			<img className='' src={tolgaHappy} alt='' />

			<ul className='space-y-4 ml-auto'>
				<li>
					<h3 className=''>Work Environment</h3>
					<p> Coffee, Coding, learning, Chess & Videogames</p>
				</li>
				<li>
					<h3>Interest</h3>
					<p> Coffee, Coding, learning, Chess & Videogames</p>
				</li>
				<li>
					<h3>Follow me</h3>
					<div className='flex text-2xl space-x-5'>
						<a
							className='hover:text-yellow-600 duration-300'
							href='https://www.linkedin.com/in/tolgakara/'
						>
							<FaLinkedin />
						</a>
						<a className='hover:text-yellow-600 duration-300' href='https://github.com/TolgaKara'>
							<FaGithubSquare />
						</a>
						<a
							className='hover:text-yellow-600 duration-300'
							href='https://www.instagram.com/tolgakaradev/'
						>
							<FiInstagram />
						</a>
						<a className='hover:text-yellow-600 duration-300' href='https://dev.to/tolgakara'>
							<FaDev />
						</a>
					</div>
				</li>
			</ul>
		</div>
	);
};
