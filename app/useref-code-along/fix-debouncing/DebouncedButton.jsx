"use client";

import { useRef } from "react";

export default function DebouncedButton({ onClick, children }) {
	let timeoutID = useRef(null);

	return (
		<button
			onClick={() => {
				clearTimeout(timeoutID);
				timeoutID = setTimeout(() => {
					onClick();
				}, 1000);
			}}
		>
			{children}
		</button>
	);
}
