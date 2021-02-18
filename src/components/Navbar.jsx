import { SocialIcon } from "react-social-icons";
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Logo } from "./Logo";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className='bg-white shadow'>
			<div className='container mx-auto flex justify-between text-green-800'>
				<nav>
					<NavLink
						className='inflex-flex items-center py-6 px-3 mr-4 font-bold cursive tracking-widest'
						to='/'
						exact
					>
						<Logo />
					</NavLink>
					<NavLink
						to='/about'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						ABOUT
					</NavLink>
					<NavLink
						to='/workexperience'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						WORK EXPERIENCE
					</NavLink>
					<NavLink
						to='/project'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						PROJECT
					</NavLink>
					<NavLink
						to='/education'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						EDUCATION
					</NavLink>
					<NavLink
						to='/faq'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						FAQ
					</NavLink>
					<NavLink
						to='/blog'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						BLOG
					</NavLink>
					<NavLink
						to='/contactme'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClassName='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						CONTACT ME
					</NavLink>
				</nav>
				<div className='inline-flex py-3 px-3 my-6'>
					<a href='https://github.com/TolgaKara' target='_blank'>
						<FaGithubAlt className='text-yellow-600 text-2xl hover:text-yellow-700 cursor-pointer mr-4' />
					</a>

					<a href='https://www.linkedin.com/in/tolgakara/' target='_blank'>
						<FaLinkedin className='text-yellow-600 text-2xl hover:text-yellow-700 cursor-pointer mr-4' />
					</a>
					<Link
						className='bg-yellow-400 rounded px-5 text-yellow-600 font-semibold uppercase'
						href=''
					>
						Hire
					</Link>
				</div>
			</div>
		</header>
	);
}
