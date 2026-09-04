"use client";

import { useState, useRef } from "react";

export default function Chat() {
	const [text, setText] = useState("");
	const currentText = useRef(text);

	function handleSend() {
		setTimeout(() => {
			alert("Sending: " + currentText.current);
		}, 3000);
	}

	return (
		<>
			<input
				value={text}
				onChange={(e) => {
					setText(e.target.value);
					currentText.current = e.target.value;
				}}
			/>
			<button onClick={handleSend}>Send</button>
		</>
	);
}
