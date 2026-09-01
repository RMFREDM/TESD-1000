"use state";

// imports

// create a square component
export default function Square({
	hasBeenGuessed,
	isShip,
	isPlayerTurn,
	isPlayerSquare,
	handleClick,
}) {
	// disable the button if it has content
	let disabled = false;
	if (hasBeenGuessed || !isPlayerTurn || isPlayerSquare) {
		disabled = true;
	}

	// determine the square's content
	let content;
	if (hasBeenGuessed && isShip) {
		content = "X";
	} else if (hasBeenGuessed && !isShip) {
		content = "O";
	} else if (!hasBeenGuessed && isShip && isPlayerSquare) {
		content = "B";
	}

	return (
		<button onClick={handleClick} id="square" disabled={disabled}>
			{content}
		</button>
	);
}
