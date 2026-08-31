"use state";

// imports
import { useState } from "react";
import Board from "./Board";

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

// define the player and opponent ships
const playerShipIndex = Math.round(Math.random() * (possibleShips.length - 1));
const opponentShipIndex = Math.round(
	Math.random() * (possibleShips.length - 1),
);
let initialOpponentSquares = Array(16);
[...possibleShips[opponentShipIndex]].forEach((square) => {
	initialOpponentSquares[square] = "B";
});

// create a board component that contains a list of squares
export default function Game() {
	// create a state to hold the position of the player's ship and squares
	const [playerShip, setPlayerShip] = useState([
		...possibleShips[playerShipIndex],
	]);
	const [playerSquares, setPlayerSquares] = useState(Array(16));

	// create a state to hold the position of the opponent's ship and squares
	const [opponentShip, setOpponentShip] = useState([
		...possibleShips[opponentShipIndex],
	]);
	const [opponentSquares, setOpponentSquares] = useState(
		initialOpponentSquares,
	);

	// return the two game boards
	return (
		<>
			<div id="opponent-board">
				<h2>Opponent Board</h2>
				<Board
					ship={opponentShip}
					squares={playerSquares}
					setSquares={setPlayerSquares}
				></Board>
			</div>
			<div id="player-board">
				<h2>Player Board</h2>
				<Board
					ship={playerShip}
					squares={opponentSquares}
					setSquares={setOpponentSquares}
				></Board>
			</div>
		</>
	);
}
