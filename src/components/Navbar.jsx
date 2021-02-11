import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcons } from "react-social-icons";
export const Navbar = () => {
	return (
		<header className='bg-red-600'>
			<div className='container mx-auto flex justify-between'>
				<nav>
					<NavLink
						className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
						to='/'
						activeClassName='text-white'
						exact
					>
						Tolga Kara
					</NavLink>
					<NavLink
						to='/about'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						ABOUT
					</NavLink>
					<NavLink
						to='/workexperience'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						WORK EXPERIENCE
					</NavLink>
					<NavLink
						to='/project'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						PROJECT
					</NavLink>
					<NavLink
						to='/education'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						EDUCATION
					</NavLink>
					<NavLink
						to='/faq'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						FAQ
					</NavLink>
					<NavLink
						to='/blog'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						BLOG
					</NavLink>
					<NavLink
						to='/contactme'
						className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'
						activeClassName='text-red-100 bg-red-700'
					>
						CONTACT ME
					</NavLink>
				</nav>
				<div>
					<SocialIcons
						url='https://www.linkedin.com/in/tolgakara/'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcons
						url='https://github.com/TolgaKara'
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/>
					{/* <SocialIcons
						url=''
						className='mr-4'
						target='_blank'
						fgColor='#fff'
						style={{ height: 35, width: 35 }}
					/> */}
				</div>
			</div>
		</header>
	);
};
