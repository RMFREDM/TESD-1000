// define a constant to hold every possible battleship position
export const possibleShips = [
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
	[0, 4, 8],
	[4, 8, 12],
	[1, 5, 9],
	[5, 9, 13],
	[2, 6, 10],
	[6, 10, 14],
	[3, 7, 11],
	[7, 11, 15],
];

// create a function to run the opponent's turn
export function opponentTurn(
	setIsPlayerTurn,
	opponentSquares,
	setOpponentSquares,
	ship,
	setWinner,
) {
	// create the newSquares values
	let newSquares = { ...opponentSquares };

	// update the value of the square
	let squareIndex = Math.round(Math.random() * 15);
	while (newSquares[squareIndex]) {
		squareIndex = Math.round(Math.random() * 15);
	}
	newSquares[squareIndex] = true;

	// set the value of the squares to the value of newSquares
	setOpponentSquares(newSquares);

	// check if the opponent won
	if (checkWinCondition(newSquares, ship)) {
		setWinner("Opponent");
	} else {
		// enable the player's turn
		setIsPlayerTurn(true);
	}
}

// create a function to check if someone has won
export function checkWinCondition(squares, ship) {
	let isWinner = true;
	ship.forEach((square) => {
		if (!squares[square]) {
			isWinner = false;
		}
	});

	return isWinner;
}
