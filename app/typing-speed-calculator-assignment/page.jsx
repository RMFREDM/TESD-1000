"use client";

import { useState } from "react";
import TypingArea from "./TypingArea.js";
import useWpmCalculator from "./useWpmCalcuator.js";

export default function TypingSpeedApp() {
	const [content, handleType, prompt, wpm] = useWpmCalculator();

	return (
		<>
			<h1>Typing Speed Calculator</h1>
			<p>Words Per Minute: {wpm}</p>
			<p>{prompt}</p>
			<TypingArea
				content={content}
				handleType={handleType}
				disabled={typeof wpm == typeof 1}
			/>
		</>
	);
}
