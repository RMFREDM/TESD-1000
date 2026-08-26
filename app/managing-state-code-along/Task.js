"use client";

// imports
import { useState } from "react";

// create a task that contains a checkbox to determine completion, a name, an edit button, and a delete button
export default function Task({ task, onChange, onDelete }) {
	// create a state to track if the task is being edited
	const [isEditing, setIsEditing] = useState(false);

	// declare the taskContent
	let taskContent;

	if (isEditing) {
		// set the task content equal to an input with the value of the task's text  if it is being edited
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
		// set the task content equal to the task's text if it isn't being edited
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}

	// return the task content along with a checkbox to determine if the task is complete, and buttons to edit or delete the task
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
