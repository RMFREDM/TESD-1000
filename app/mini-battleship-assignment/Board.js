"use state";

// imports
import { useState } from "react";
import BoardRow from "./BoardRow";

// create a board component that contains a list of squares
export default function Board({ ship, squares, setSquares }) {
	// create a function to handle clicking on a square
	function handleClick(squareIndex) {
		// create the newSquares values
		let newSquares = { ...squares };

		// check if the clicked square was hit
		let hit = false;
		ship.forEach((square) => {
			if (squareIndex == square) {
				hit = true;
			}
		});

		// update the value of the square
		if (hit) {
			newSquares[squareIndex] = "X";
		} else {
			newSquares[squareIndex] = "O";
		}

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
