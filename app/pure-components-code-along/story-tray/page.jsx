"use client";

import { useState, useEffect } from "react";
import StoryTray from "./StoryTray.js";

const initialStories = [
	{ id: 0, label: "Ankit's Story" },
	{ id: 1, label: "Taylor's Story" },
];

export default function App() {
	const [stories, setStories] = useState([...initialStories]);
	const [hasCreateStory, setHasCreateStory] = useState(false);
	const time = useTime();

	// HACK: Prevent the memory from growing forever while you read docs.
	// We're breaking our own rules here.
	if (stories.length > 100) {
		stories.length = 100;
	}

	// handle the addition of new stories
	function handleStoryAddition(id, label) {
		const nextStories = [...stories];
		nextStories.push({
			id: id,
			label: label,
		});

		setStories(nextStories);
	}

	// add the create story, but only if one does not already exist
	if (!hasCreateStory) {
		handleStoryAddition("create", "Create Story");
		setHasCreateStory(true);
	}

	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				textAlign: "center",
			}}
		>
			<h2>It is {time.toLocaleTimeString()} now.</h2>
			<StoryTray stories={stories} />
		</div>
	);
}

function useTime() {
	const [time, setTime] = useState(() => new Date());
	useEffect(() => {
		const id = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(id);
	}, []);
	return time;
}
