"use client";

import { useState } from "react";

export default function TypingSpeedApp() {
	const [prompt, setPrompt] = useState(
		"The quick brown fox jumps over the lazy dog",
	);

	return (
		<>
			<h1>Typing Speed Calculator</h1>
			<p>{prompt}</p>
			<textarea></textarea>
		</>
	);
}
