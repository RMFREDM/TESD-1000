export default function Clock({ time }) {
	// get the current hour
	const hours = time.getHours();

	// change the className of the h1 based on the time
	let timeOfDay;
	if (hours >= 0 && hours <= 6) {
		timeOfDay = "night";
	} else {
		timeOfDay = "day";
	}

	// return the header
	return (
		<h1 id="time" className={timeOfDay}>
			{time.toLocaleTimeString()}
		</h1>
	);
}
