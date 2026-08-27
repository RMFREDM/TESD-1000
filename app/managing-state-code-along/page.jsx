"use client";

// imports
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { TasksProvider } from "./TasksContext.js";

// create the highest level of the program for managing tasks
export default function TaskApp() {
	// return and display the task list, along with a header and a button to add more tasks, using context to pass down the list of tasks and the dispatch function
	return (
		<TasksProvider>
			<h1>Prague itinerary</h1>
			<AddTask />
			<TaskList />
		</TasksProvider>
	);
}
