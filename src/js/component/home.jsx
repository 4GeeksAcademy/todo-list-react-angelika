import React, { useState } from "react";
import Header from "./Header";
import InputTask from "./InputTask";
import List from "./List";

const Home = () => {
	const [todos, setTodos] = useState([]);

	const addTask = (task) => {
		setTodos([...todos, task]);
	};

	const removeTask = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="container d-flex align-items-center justify-content-center p-8">
			<div className="todo card p-5">
				<Header />
				<div className="container-sm">
					<InputTask addTask={addTask} />
					<List todos={todos} removeTask={removeTask} />
				</div>
			</div>
		</div>
	);
};

export default Home;
