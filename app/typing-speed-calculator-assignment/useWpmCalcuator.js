"use client";

import { useEffect, useState } from "react";

export default function useWpmCalculator() {
	// declare the prompt
	const prompt = "The quick brown fox jumps over the lazy dog";

	// declare the wpm
	const [wpm, setWpm] = useState("Type the prompt to calculate your WPM.");

	// create the timer for tracking how long it takes to type the prompt
	const [timeToType, setTimeToType] = useState(0);
	useEffect(() => {
		console.log("Set WPM timer.");

		// create an interval to update the timer
		const promptTimer = setInterval(() => {
			setTimeToType((t) => t + 1);
		}, 1000);

		// return a cleanup function
		return () => {
			clearInterval(promptTimer);
			console.log("Cleared WPM timer.");
		};
	}, []);

	// declare the value the user types and its updater function
	const [typedValue, setTypedValue] = useState("");

	function handleTypedValueUpdate(e) {
		// set the new typed value
		const newTypedValue = e.target.value;
		setTypedValue(newTypedValue);

		// check if the typed value is the same as the prompt
		if (newTypedValue == prompt) {
			let calculatedWpm = (9 / timeToType) * 60;
			console.log(
				"It took " +
					timeToType +
					" seconds to type the prompt, for a total of " +
					calculatedWpm +
					" WPM.",
			);

			// update the wpm
			setWpm(calculatedWpm);
		}
	}

	// return the typedValue, its updater function, and the prompt
	return [typedValue, handleTypedValueUpdate, prompt, wpm];
}
