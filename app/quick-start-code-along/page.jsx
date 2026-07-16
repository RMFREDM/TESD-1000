"use client";

import { useState } from "react";

export default function MyApp() {
	// declare a state to track the number of times the buttons have been clicked
	const [count, setCount] = useState(0);

	// handle button clicking
	function handleClick() {
		setCount(count + 1);
	}

	return (
		<div name="button-container">
			<h1>Click the buttons!</h1>
			<CounterButton count={count} onClick={handleClick} />
			<CounterButton count={count} onClick={handleClick} />
		</div>
	);
}

function CounterButton({ count, onClick }) {
	return (
		<button
			onClick={onClick}
			name="counter-button"
			className="bg-gray-200 active:bg-gray-300 border p-1"
		>
			{count < 5
				? "You haven't clicked me enough times."
				: "You've clicked me too many times. Settle down."}
		</button>
	);
}
