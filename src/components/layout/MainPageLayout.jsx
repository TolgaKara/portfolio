import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const MainPageLayout = (props) => {
	return (
		<motion.div
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
			className={`container mx-auto flex ${
				props.col ? "flex-col" : ""
			} justify-between items-center mt-10`}
		>
			{props.children}
		</motion.div>
	);
};
