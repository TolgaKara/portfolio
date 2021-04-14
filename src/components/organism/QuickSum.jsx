import React from "react";
import tolgaHappy from "../../images/tolga/tolgaHappy.png";
import { FiInstagram } from "react-icons/fi/";
import { FaGithubSquare, FaLinkedin, FaDev } from "react-icons/fa/";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { MainPageLayout } from "../layout/MainPageLayout";
import { MainHeading } from "../atoms/MainHeading";
import { Paragraph } from "../atoms/Paragraph";
import { List } from "../atoms/List";

export const QuickSum = () => {
	const titleAnimation = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 2 } },
	};
	return (
		<MainPageLayout>
			<div className='w-1/3'>
				<MainHeading
					text='👋 Welcome to my Portfolio'
					subHeading='Excited to contribute to awesome projects'
				/>
				<Paragraph type='cta'></Paragraph>
				<a
					className='bg-yellow-600 py-3 rounded-full text-white font-semibold mt-3 shadow-md uppercase px-8 inline-block'
					href=''
				>
					Let's talk !
				</a>
			</div>

			<img className='' src={tolgaHappy} alt='' />

			<ul className='space-y-4 ml-auto'>
				<List heading='Work Environment' items={"Coffee, Coding, Learning, Chess & Videogames"} />
				<List heading='Interests' items={"Coffee, Coding, Learning, Chess & Videogames"} />
				<List heading='Follow Me'>
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
				</List>
			</ul>
		</MainPageLayout>
	);
};
