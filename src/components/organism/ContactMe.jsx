import React from "react";
import { Input } from "../atoms/Input";
import { MainHeading } from "../atoms/MainHeading";
import { TextArea } from "../atoms/TextArea";
import tolgaFistBumb from "../../images/tolga/tolgaFistBumb.png";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactMe = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			className='container mx-auto'
		>
			<div className='flex justify-between mt-10'>
				<div className='flex flex-col'>
					<MainHeading text={"🤙 Contact Me"} subHeading={"Let's get in Touch"} />
					<p className='text-4xl w-1/2 mt-10'>
						Feel free to reach out to me if your wish to talk about something.
					</p>
					<img src={tolgaFistBumb} className='w-96' alt='Me fistBumbing to have a chat' />
					<div className='flex flex-col mt-5 text-gray-500'>
						<p>tolgakara2.0@gmail.com</p>
						<p>0000 000 000 0000</p>
					</div>
				</div>
				<form action='' className='flex flex-col p-5 space-y-5 shadow-md'>
					<div className='flex space-x-8'>
						<Input text='First name' placeholder='eg. John' variable='firstName' type='text' />
						<Input text='Last name' placeholder='eg. Doe' variable='lastName' type='text' />
					</div>
					<Input text='E-Mail' placeholder='eg. john@doe.com' variable='email' type='email' />
					<Input text='Subject' placeholder='eg. Job offer' variable='subject' type='text' />

					<TextArea
						text='Message'
						placeholder='eg. We would like to work with you <3'
						variable='message'
					/>

					<button
						type='submit'
						className='bg-yellow-500 w-1/2 py-2 px-5 rounded-md shadow-md font-semibold place-self-center hover:text-white duration-300'
					>
						Send mail
					</button>
				</form>
			</div>
		</motion.div>
	);
};
