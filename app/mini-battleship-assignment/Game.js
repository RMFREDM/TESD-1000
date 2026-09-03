"use state";

// imports
import { useState, useEffect } from "react";
import Board from "./Board";
import { checkWinCondition, opponentTurn, possibleShips } from "./Util";

// create a board component that contains a list of squares
export default function Game() {
	// create a state to hold the position of the player's ship, using the useEffect Hook to prevent Hydration errors
	const [playerShip, setPlayerShip] = useState([]);
	useEffect(() => {
		if (playerShip.length == 0) {
			const initialPlayerShip = [
				...possibleShips[
					Math.round(Math.random() * (possibleShips.length - 1))
				],
			];
			setPlayerShip(initialPlayerShip);
		}
	});

	// create a state for the player's squares
	const [playerSquares, setPlayerSquares] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	// create a state to hold the position of the opponent's ship and squares (useEffect is not needed as this does not initially render, preventing a Hydration error)
	const [opponentShip, setOpponentShip] = useState([
		...possibleShips[
			Math.round(Math.random() * (possibleShips.length - 1))
		],
	]);
	const [opponentSquares, setOpponentSquares] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);

	// create a state to hold the winner
	const [winner, setWinner] = useState("");

	// create a state to alternate the player and opponent turns
	const [isPlayerTurn, setIsPlayerTurn] = useState(true);

	// create a function to handle clicking on a square
	function handleClick(squareIndex) {
		// disable the player's turn
		setIsPlayerTurn(false);

		// create the newSquares values
		let newSquares = { ...playerSquares };

		// update the value of the square
		newSquares[squareIndex] = true;

		// set the value of the squares to the value of newSquares
		setPlayerSquares(newSquares);

		// check the win condition
		if (checkWinCondition(newSquares, opponentShip)) {
			setWinner("Player");
		} else {
			// run the opponent turn
			setTimeout(() => {
				opponentTurn(
					setIsPlayerTurn,
					opponentSquares,
					setOpponentSquares,
					playerShip,
					setWinner,
				);
			}, 500);
		}
	}

	// determine the turn text
	let turnText = "";
	if (winner == "") {
		if (isPlayerTurn) {
			turnText = "Player's turn";
		} else {
			turnText = "Opponent's turn";
		}
	} else {
		turnText = "Winner: " + winner;
	}

	// return the two game boards
	return (
		<>
			<h2>{turnText}</h2>
			<div id="game-boards">
				<div id="opponent-board">
					<h3>Opponent Board</h3>
					<Board
						ship={opponentShip}
						squares={playerSquares}
						isPlayerTurn={isPlayerTurn}
						handleClick={handleClick}
					></Board>
				</div>
				<div id="player-board">
					<h3>Player Board</h3>
					<Board
						ship={playerShip}
						squares={opponentSquares}
						isPlayerTurn={isPlayerTurn}
						isPlayerBoard={true}
						handleClick={handleClick}
					></Board>
				</div>
			</div>
		</>
	);
}
