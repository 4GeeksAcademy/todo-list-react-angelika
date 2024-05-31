import React from "react";

const Task = ({ task, removeTask }) => {
    return (
        <li className="list-group-item d-flex align-items-center justify-content-between">
			{task}
			<button onClick={removeTask}>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</li>
    )
}

export default Task;