"use client";

import { useState } from "react";

export default function Scoreboard() {
	const [player, setPlayer] = useState({
		firstName: "Ranjani",
		lastName: "Shettar",
		score: 10,
	});

	function handlePlusClick() {
		// the error here is that the score value is updated, but the component is not re-rendered
		const nextPlayer = {
			...player,
			score: player.score + 1,
		};

		setPlayer(nextPlayer);
	}

	function handleFirstNameChange(e) {
		setPlayer({
			...player,
			firstName: e.target.value,
		});
	}

	function handleLastNameChange(e) {
		// the error here is that the previous values were not passed in to the new object
		setPlayer({
			...player,
			lastName: e.target.value,
		});
	}

	return (
		<>
			<label>
				Score: <b>{player.score}</b>{" "}
				<button onClick={handlePlusClick}>+1</button>
			</label>
			<label>
				First name:
				<input
					value={player.firstName}
					onChange={handleFirstNameChange}
				/>
			</label>
			<label>
				Last name:
				<input
					value={player.lastName}
					onChange={handleLastNameChange}
				/>
			</label>
		</>
	);
}
