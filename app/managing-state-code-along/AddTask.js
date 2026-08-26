"use client";

// imports
import { useContext, useState } from "react";
import { TasksDispatchContext } from "./TasksContext";

// create a function to handle creating new tasks
export default function AddTask() {
	// create a state variable to control the task's text and get the dispatch function from context
	const [text, setText] = useState("");
	const dispatch = useContext(TasksDispatchContext);

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

					// add the new task to the list of tasks
					dispatch({
						type: "added",
						id: nextId++,
						text: text,
					});
				}}
			>
				Add
			</button>
		</>
	);
}

// define the initial nextId
let nextId = 3;
