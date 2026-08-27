"use state";

import { useState } from "react";
import Square from "./Square";

// imports

// create a board component that contains a list of squares
export default function BoardRow({ squares, rowIndex }) {
	// ensure each square references the correct index based on the row's index
	rowIndex *= 4;

	// return a row of 4 squares
	return (
		<div name="board-row">
			<Square content={squares[rowIndex]}></Square>
			<Square content={squares[rowIndex + 1]}></Square>
			<Square content={squares[rowIndex + 2]}></Square>
			<Square content={squares[rowIndex + 3]}></Square>
		</div>
	);
}
