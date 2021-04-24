import React from "react";

const TaskList = ({ tasks }) => {
	return (
		<ul>
			{tasks.map((task) => (
				<li className='italic'>{task}</li>
			))}
		</ul>
	);
};

export default TaskList;
