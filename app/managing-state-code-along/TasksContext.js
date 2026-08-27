import { createContext, useContext, useReducer } from "react";

// create a reducer function for the tasks
function tasksReducer(tasks, action) {
	switch (action.type) {
		case "added": {
			// add the new task to the previous list of tasks
			return [
				...tasks,
				{
					id: action.id,
					text: action.text,
					done: false,
				},
			];
		}
		case "changed": {
			// change the value of the altered task
			return tasks.map((t) => {
				if (t.id === action.task.id) {
					return action.task;
				} else {
					return t;
				}
			});
		}
		case "deleted": {
			// remove the deleted task from the task list
			return tasks.filter((t) => t.id !== action.id);
		}
		default: {
			// throw an error for any unknown action
			throw Error("Unknown action: " + action.type);
		}
	}
}

// create the context for the tasks content and dispatch
export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

// create the TasksProvider to manage the state of tasks through a reducer and pass down the context of the tasks and the dispatch function
export function TasksProvider({ children }) {
	// use a reducer to manage state
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

	// return the children inside of the context for tasks and dispatch
	return (
		<TasksContext value={tasks}>
			<TasksDispatchContext value={dispatch}>
				{children}
			</TasksDispatchContext>
		</TasksContext>
	);
}

// define a function to let a component use tasks
export function useTasks() {
	return useContext(TasksContext);
}

// define a function to let a component use the dispatch function
export function useTasksDispatch() {
	return useContext(TasksDispatchContext);
}

// define the set of tasks the program initializes with
const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
