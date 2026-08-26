"use client";

// imports
import { useState } from "react";

// create a function to handle creating new tasks
export default function AddTask({ onAddTask }) {
	// create a state variable to control the task's text
	const [text, setText] = useState("");

	// return the input and button to create a new task
	return (
		<>
			<input
				placeholder="Add task"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => {
					setText("");
					onAddTask(text);
				}}
			>
				Add
			</button>
		</>
	);
}
