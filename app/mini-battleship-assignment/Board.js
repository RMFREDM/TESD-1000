"use state";

// imports
import { useState } from "react";
import BoardRow from "./BoardRow";

// create a board component that contains a list of squares
export default function Board() {
	// create a state var to hold the value of the board's squares
	const [squares, setSquares] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
	]);

	// create a function to handle clicking on a square
	function handleClick(squareIndex) {
		// create the newSquares values and change the clicked square
		let newSquares = { ...squares };
		newSquares[squareIndex] = "X";

		// set the value of the squares to the value of newSquares
		setSquares(newSquares);
	}

	// return a board of squares
	return (
		<div name="board">
			<BoardRow
				squares={squares}
				rowIndex={0}
				handleClick={handleClick}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={1}
				handleClick={handleClick}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={2}
				handleClick={handleClick}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={3}
				handleClick={handleClick}
			></BoardRow>
		</div>
	);
}
