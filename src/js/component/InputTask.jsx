import React, { useState } from "react";

const InputTask = ({ addTask }) => {
    const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValue.trim() !== "") {
			addTask(inputValue);
			setInputValue("");
		}
	};
    return(
        <div className="mb-3">
			<form onSubmit={handleSubmit}>
				<input
                autoComplete="off"
					type="text"
					className="form-control custom-input"
					id="task"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					placeholder="add a task"
				/>
			</form>
		</div>
    )
}

export default InputTask;