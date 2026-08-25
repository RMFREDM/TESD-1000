"use client";

// imports
import { useReducer } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import tasksReducer from "./tasksReducer.js";

// create the highest level of the program for managing tasks
export default function TaskApp() {
	// create a reducer to manage state
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	// handle addition of tasks through the reducer
	function handleAddTask(text) {
		dispatch({
			type: "added",
			id: nextId++,
			text: text,
		});
	}

	// handle changing of tasks through the reducer
	function handleChangeTask(task) {
		dispatch({
			type: "changed",
			task: task,
		});
	}

	// handle deletion of tasks through the reducer
	function handleDeleteTask(taskId) {
		dispatch({
			type: "deleted",
			id: taskId,
		});
	}

	// return and display the task list, along with a header and a button to add more tasks
	return (
		<>
			<h1>Prague itinerary</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
}

// define the next task id and the set of tasks the program initializes with
let nextId = 3;
const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
