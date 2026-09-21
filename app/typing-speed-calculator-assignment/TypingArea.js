"use client";

import { useEffect, useRef } from "react";

export default function TypingArea({ content, handleType, disabled }) {
	const textAreaRef = useRef(null);

	// focus the textarea on mount
	useEffect(() => {
		textAreaRef.current.focus();
		console.log("Focused the textarea.");
	}, []);

	return (
		<textarea
			value={content}
			onChange={handleType}
			ref={textAreaRef}
			disabled={disabled}
		></textarea>
	);
}
