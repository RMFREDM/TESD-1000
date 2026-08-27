"use state";

// imports
import Square from "./Square";

// create a board component that contains a list of squares
export default function BoardRow({ squares, rowIndex, handleClick }) {
	// ensure each square references the correct index based on the row's index
	rowIndex *= 4;

	// return a row of 4 squares
	return (
		<div name="board-row">
			<Square
				content={squares[rowIndex]}
				handleClick={() => {
					handleClick(rowIndex);
				}}
			></Square>
			<Square
				content={squares[rowIndex + 1]}
				handleClick={() => {
					handleClick(rowIndex + 1);
				}}
			></Square>
			<Square
				content={squares[rowIndex + 2]}
				handleClick={() => {
					handleClick(rowIndex + 2);
				}}
			></Square>
			<Square
				content={squares[rowIndex + 3]}
				handleClick={() => {
					handleClick(rowIndex + 3);
				}}
			></Square>
		</div>
	);
}
