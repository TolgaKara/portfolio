import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
	return (
		<header className='bg-red-600'>
			<div className='container mx-auto flex justify-between'>
				<nav>
					<NavLink to='/' exact>
						Tolga Kara
					</NavLink>
					<NavLink to='/about'>ABOUT</NavLink>
					<NavLink to='/workexperience'>WORK EXPERIENCE</NavLink>
					<NavLink to='/project'>PROJECT</NavLink>
					<NavLink to='/education'>EDUCATION</NavLink>
					<NavLink to='/faq'>FAQ</NavLink>
					<NavLink to='/blog'>BLOG</NavLink>
					<NavLink to='/contactme'>CONTACT ME</NavLink>
				</nav>
			</div>
		</header>
	);
};
