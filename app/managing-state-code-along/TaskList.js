"use client";

// imports
import { useState } from "react";

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

// create a task that contains a checkbox to determine completion, a name, an edit button, and a delete button
function Task({ task, onChange, onDelete }) {
	const [isEditing, setIsEditing] = useState(false);
	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						onChange({
							...task,
							text: e.target.value,
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</>
		);
	} else {
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}
	return (
		<label>
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					onChange({
						...task,
						done: e.target.checked,
					});
				}}
			/>
			{taskContent}
			<button onClick={() => onDelete(task.id)}>Delete</button>
		</label>
	);
}
