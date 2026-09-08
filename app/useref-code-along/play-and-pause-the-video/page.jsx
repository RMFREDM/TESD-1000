"use client";

import { useState, useRef } from "react";

export default function VideoPlayer() {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef(false);

	function handleClick() {
		if (!isPlaying) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();
		}

		const nextIsPlaying = !isPlaying;
		setIsPlaying(nextIsPlaying);
	}

	return (
		<>
			<button onClick={handleClick}>
				{isPlaying ? "Pause" : "Play"}
			</button>
			<video width="250" ref={videoRef}>
				<source
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
					type="video/mp4"
				/>
			</video>
		</>
	);
}
