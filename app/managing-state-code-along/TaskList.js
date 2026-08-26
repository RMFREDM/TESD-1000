"use client";

import { useContext } from "react";
// imports
import Task from "./Task";
import { TasksContext } from "./TasksContext";

// create a task list to display each task
export default function TaskList() {
	// get the task list through context
	const tasks = useContext(TasksContext);

	// return an unordered list of tasks, each with a unique key that matches their id
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
}
