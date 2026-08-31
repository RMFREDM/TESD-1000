"use state";

// imports

// create a square component
export default function Square({ content, handleClick }) {
	// disable the button if it has content
	let disabled = false;
	if (content != null && content != "B") {
		disabled = true;
	}

	return (
		<button onClick={handleClick} id="square" disabled={disabled}>
			{content}
		</button>
	);
}
