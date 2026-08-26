"use client";

// imports
import { useReducer } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import tasksReducer from "./tasksReducer.js";
import { TasksContext, TasksDispatchContext } from "./TasksContext.js";

// create the highest level of the program for managing tasks
export default function TaskApp() {
	// create a reducer to manage state
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	// // handle deletion of tasks through the reducer
	// function handleDeleteTask(taskId) {
	// 	dispatch({
	// 		type: "deleted",
	// 		id: taskId,
	// 	});
	// }

	// return and display the task list, along with a header and a button to add more tasks, using context to pass down the list of tasks and the dispatch function
	return (
		<TasksContext value={tasks}>
			<TasksDispatchContext value={dispatch}>
				<h1>Prague itinerary</h1>
				<AddTask />
				<TaskList />
			</TasksDispatchContext>
		</TasksContext>
	);
}

// define the set of tasks the program initializes with
const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
