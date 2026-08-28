"use state";

// imports
import { useState } from "react";
import BoardRow from "./BoardRow";

// define a constant to hold every possible battleship position
const possibleShips = [
	[0, 1, 2],
	[1, 2, 3],
	[4, 5, 6],
	[5, 6, 7],
	[8, 9, 10],
	[9, 10, 11],
	[12, 13, 14],
	[13, 14, 15],
	[4, 9, 14],
	[0, 5, 10],
	[5, 10, 15],
	[1, 6, 11],
	[7, 10, 13],
	[3, 6, 9],
	[6, 9, 12],
	[2, 5, 8],
];

console.log("Possible Ship Positions");
console.log(possibleShips.length);
const randomShip = Math.round(Math.random() * (possibleShips.length - 0) + 0);
console.log(randomShip);
console.log(possibleShips[randomShip]);

// create a board component that contains a list of squares
export default function Board() {
	// create a state var to hold the value of the board's squares
	const [squares, setSquares] = useState(Array(16));

	// create a state to hold the position of the board's ship
	const [ship, setShip] = useState([...possibleShips[randomShip]]);

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
