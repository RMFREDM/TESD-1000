"use client";

import { useState } from "react";
import Background from "./Background.js";
import Box from "./Box.js";
import { transform } from "typescript";

const initialPosition = {
	x: 0,
	y: 0,
};

export default function Canvas() {
	const [shape, setShape] = useState({
		color: "orange",
		position: initialPosition,
	});

	function handleMove(dx, dy) {
		const nextShape = {
			...shape,
			position: {
				x: shape.position.x + dx,
				y: shape.position.y + dy,
			},
		};

		setShape(nextShape);
	}

	function handleColorChange(e) {
		setShape({
			...shape,
			color: e.target.value,
		});
	}

	return (
		<>
			<select
				value={shape.color}
				onChange={handleColorChange}
				style={{
					// the position is set because the background covered the select
					position: "absolute",
					transform: "translate(0px, -20px)",
				}}
			>
				<option value="orange">orange</option>
				<option value="lightpink">lightpink</option>
				<option value="aliceblue">aliceblue</option>
			</select>
			<Background position={initialPosition} />
			<Box
				color={shape.color}
				position={shape.position}
				onMove={handleMove}
			>
				Drag me!
			</Box>
		</>
	);
}
