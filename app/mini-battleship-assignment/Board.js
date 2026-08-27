"use state";

import { useState } from "react";
import Square from "./Square";
import BoardRow from "./BoardRow";

// imports

// create a board component that contains a list of squares
export default function Board() {
	// create a state var to hold the value of the board's squares
	const [squares, setSquares] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
	]);

	// return a board of squares
	return (
		<div name="board">
			<BoardRow squares={squares} rowIndex={0}></BoardRow>
			<BoardRow squares={squares} rowIndex={1}></BoardRow>
			<BoardRow squares={squares} rowIndex={2}></BoardRow>
			<BoardRow squares={squares} rowIndex={3}></BoardRow>
		</div>
	);
}
