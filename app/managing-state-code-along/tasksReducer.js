// create a reducer function for the tasks
export default function tasksReducer(tasks, action) {
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
