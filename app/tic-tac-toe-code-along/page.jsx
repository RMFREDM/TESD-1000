"use client";

import { useState } from "react";

// create a component to control the game state
export default function Game() {
	// create a state for the next player, the move the game is currently on, and the value of each square throughout the game
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	const xIsNext = currentMove % 2 == 0;
	const currentSquares = history[currentMove];

	// handle the user making a move
	function handlePlay(nextSquares) {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
	}

	// create a function that allows for travel between different game states
	function jumpTo(nextMove) {
		// set the currentMove to the move being jumped to and update who is next accordingly
		setCurrentMove(nextMove);
	}

	// map each move to an li with a button to jump to that game state
	const moves = history.map((squares, move) => {
		// set the description based on the move number
		let description;
		if (move > 0) {
			description = "Go to move #" + move;
		} else {
			description = "Go to game start";
		}

		// return an li with a button to jump to the move
		return (
			<li key={move}>
				<button onClick={() => jumpTo(move)}>{description}</button>
			</li>
		);
	});

	// display the game
	return (
		<div className="game">
			<div className="game-board">
				<Board
					xIsNext={xIsNext}
					squares={currentSquares}
					onPlay={handlePlay}
				/>
			</div>
			<div className="game-info">
				<ol>{moves}</ol>
			</div>
		</div>
	);
}

// create a 3x3 game board
function Board({ xIsNext, squares, onPlay }) {
	// create a function to handle the clicking of the button
	function handleClick(i) {
		// log which square was clicked
		console.log("Square " + (i + 1) + " was clicked");

		// prevent the user from changing the value of a square once it's set or if someone won
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		// create a variable to store the value of squares that will be changed
		const nextSquares = squares.slice();

		// update and the value of squares based on whose turn it is
		if (xIsNext) {
			nextSquares[i] = "X";
		} else {
			nextSquares[i] = "O";
		}
		onPlay(nextSquares);
	}

	// display if there was a winner or which player is next
	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	// return a status message and a 3x3 grind of Square components
	return (
		<div>
			{/* display the status message */}
			<div className="status">{status}</div>

			{/* create the game board */}
			<div className="board-row">
				<Square
					value={squares[0]}
					onSquareClick={() => {
						handleClick(0);
					}}
				/>
				<Square
					value={squares[1]}
					onSquareClick={() => {
						handleClick(1);
					}}
				/>
				<Square
					value={squares[2]}
					onSquareClick={() => {
						handleClick(2);
					}}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[3]}
					onSquareClick={() => {
						handleClick(3);
					}}
				/>
				<Square
					value={squares[4]}
					onSquareClick={() => {
						handleClick(4);
					}}
				/>
				<Square
					value={squares[5]}
					onSquareClick={() => {
						handleClick(5);
					}}
				/>
			</div>
			<div className="board-row">
				<Square
					value={squares[6]}
					onSquareClick={() => {
						handleClick(6);
					}}
				/>
				<Square
					value={squares[7]}
					onSquareClick={() => {
						handleClick(7);
					}}
				/>
				<Square
					value={squares[8]}
					onSquareClick={() => {
						handleClick(8);
					}}
				/>
			</div>
		</div>
	);
}

// create a function that calculates the winner of the game
function calculateWinner(squares) {
	// define a constant to hold every possible line of squares
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// iterate through each line
	for (let i = 0; i < lines.length; i++) {
		// check if value in the line is the same
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			// return the value of the squares if the lines had the same value
			return squares[a];
		}
	}

	// if there was no winner return null
	return null;
}

// create a square that holds a value
function Square({ value, onSquareClick }) {
	// return a button with the content of value
	return (
		<button className="square" onClick={onSquareClick}>
			{value}
		</button>
	);
}
