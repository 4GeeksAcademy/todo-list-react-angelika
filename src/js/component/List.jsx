import React from "react";
import Task from "./Task";

const List = ({ todos, removeTask }) => {
    return (
        <ul className="list-group">
            {todos.length === 0 ? (
                <li className="list-group-item text-center text-muted">
                    No hay tareas, añadir tareas
                </li>
            ) : (
                todos.map((task, index) => (
                    <Task key={index} task={task} removeTask={() => removeTask(index)} />
                ))
            )}
        </ul>
    );
};

export default List;