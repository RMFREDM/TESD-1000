"use state";

// imports
import { useState } from "react";
import BoardRow from "./BoardRow";

// create a board component that contains a list of squares
export default function Board({
	ship,
	squares,
	isPlayerTurn,
	isPlayerBoard = false,
	handleClick,
}) {
	// return a board of squares
	return (
		<div id="board">
			<BoardRow
				squares={squares}
				rowIndex={0}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerTurn={isPlayerTurn}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={1}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerTurn={isPlayerTurn}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={2}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerTurn={isPlayerTurn}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
			<BoardRow
				squares={squares}
				rowIndex={3}
				handleClick={handleClick}
				ship={[...ship]}
				isPlayerTurn={isPlayerTurn}
				isPlayerBoard={isPlayerBoard}
			></BoardRow>
		</div>
	);
}
