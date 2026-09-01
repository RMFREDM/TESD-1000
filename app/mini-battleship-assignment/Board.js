"use state";

// imports
import { useState } from "react";
import BoardRow from "./BoardRow";

// create a board component that contains a list of squares
export default function Board({
	ship,
	squares,
	setSquares,
	isPlayerBoard = false,
}) {
	// create a function to handle clicking on a square
	function handleClick(squareIndex) {
		// create the newSquares values
		let newSquares = { ...squares };

		// update the value of the square
		newSquares[squareIndex] = true;

		// set the value of the squares to the value of newSquares
		setSquares(newSquares);
	}

	// return a board of squares
	return (
		<div id="board">
			<BoardRow
				squares={squares}
				rowIndex={0}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={1}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={2}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={3}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
		</div>
	);
}
