import { SocialIcon } from "react-social-icons";
import React from "react";
import { Logo } from "../atoms/Logo";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { scroller, Link, animateScroll as scroll } from "react-scroll";

import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<header className='bg-white shadow '>
			<div className='container mx-auto flex justify-between text-green-800'>
				<nav>
					<NavLink
						className='inflex-flex items-center py-6 px-3 mr-4 font-bold cursive tracking-widest'
						to='/'
						exact
						onClick={() => scroll.scrollToTop()}
					>
						<Logo />
					</NavLink>

					<Link
						to='about'
						spy={true}
						smooth={true}
						duration={500}
						className='cursor-pointer items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
					>
						ABOUT
					</Link>
					<Link
						to='work-experience'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						WORK EXPERIENCE
					</Link>
					<Link
						to='project'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						PROJECT
					</Link>
					<Link
						to='education'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						EDUCATION
					</Link>
					<Link
						to='skill'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						SKILL
					</Link>
					<Link
						to='faq'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						FAQ
					</Link>
					<Link
						to='blog'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						BLOG
					</Link>
					<Link
						to='contact-me'
						className='inline-flex items-center py-3 px-3 my-6  text-black font-semibold hover:text-yellow-600 transition duration-300 ease-in-out'
						activeClass='text-yellow-600 border-b-2 border-yellow-600 font-bold'
						spy={true}
						smooth={true}
						duration={500}
					>
						CONTACT ME
					</Link>
				</nav>
				<div className='inline-flex py-3 px-3 my-6'>
					<a href='https://github.com/TolgaKara' target='_blank'>
						<FaGithubAlt className='text-yellow-600 text-2xl hover:text-yellow-700 cursor-pointer mr-4' />
					</a>

					<a href='https://www.linkedin.com/in/tolgakara/' target='_blank'>
						<FaLinkedin className='text-yellow-600 text-2xl hover:text-yellow-700 cursor-pointer mr-4' />
					</a>
					<a className='bg-yellow-400 rounded px-5 text-yellow-600 font-semibold uppercase' href=''>
						Hire
					</a>
				</div>
			</div>
		</header>
	);
}
