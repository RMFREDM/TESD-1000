export function getFinalState(baseState, queue) {
	let finalState = baseState;

	queue.forEach((update) => {
		if (typeof update == "function") {
			finalState = update(finalState);
		} else {
			finalState = update;
		}
	});

	return finalState;
}
