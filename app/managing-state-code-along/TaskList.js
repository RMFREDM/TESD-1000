"use client";

// imports
import Task from "./Task";

// create a task list to display each task
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	// return an unordered list of tasks, each with a unique key that matches their id
	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task
						task={task}
						onChange={onChangeTask}
						onDelete={onDeleteTask}
					/>
				</li>
			))}
		</ul>
	);
}
