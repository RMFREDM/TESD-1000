"use state";

// imports
import Square from "./Square";

// create a board component that contains a list of squares
export default function BoardRow({
	squares,
	rowIndex,
	handleClick,
	ship,
	isPlayerTurn,
	isPlayerBoard,
}) {
	// ensure each square references the correct index based on the row's index
	rowIndex *= 4;

	// return a row of 4 squares
	return (
		<div id="board-row">
			<Square
				hasBeenGuessed={squares[rowIndex]}
				handleClick={() => {
					handleClick(rowIndex);
				}}
				isShip={
					rowIndex == ship[0] ||
					rowIndex == ship[1] ||
					rowIndex == ship[2]
				}
				isPlayerTurn={isPlayerTurn}
				isPlayerSquare={isPlayerBoard}
			></Square>
			<Square
				hasBeenGuessed={squares[rowIndex + 1]}
				handleClick={() => {
					handleClick(rowIndex + 1);
				}}
				isShip={
					rowIndex + 1 == ship[0] ||
					rowIndex + 1 == ship[1] ||
					rowIndex + 1 == ship[2]
				}
				isPlayerTurn={isPlayerTurn}
				isPlayerSquare={isPlayerBoard}
			></Square>
			<Square
				hasBeenGuessed={squares[rowIndex + 2]}
				handleClick={() => {
					handleClick(rowIndex + 2);
				}}
				isShip={
					rowIndex + 2 == ship[0] ||
					rowIndex + 2 == ship[1] ||
					rowIndex + 2 == ship[2]
				}
				isPlayerTurn={isPlayerTurn}
				isPlayerSquare={isPlayerBoard}
			></Square>
			<Square
				hasBeenGuessed={squares[rowIndex + 3]}
				handleClick={() => {
					handleClick(rowIndex + 3);
				}}
				isShip={
					rowIndex + 3 == ship[0] ||
					rowIndex + 3 == ship[1] ||
					rowIndex + 3 == ship[2]
				}
				isPlayerTurn={isPlayerTurn}
				isPlayerSquare={isPlayerBoard}
			></Square>
		</div>
	);
}
