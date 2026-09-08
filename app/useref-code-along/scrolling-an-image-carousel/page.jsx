"use client";

import { useRef, useState } from "react";

export default function CatFriends() {
	const [index, setIndex] = useState(0);
	const catRef = Array(catCount);
	for (let i = 0; i < catCount; i++) {
		catRef[i] = useRef(null);
	}

	return (
		<>
			<nav>
				<button
					onClick={() => {
						if (index < catList.length - 1) {
							setIndex(index + 1);
							catRef[index + 1].current.scrollIntoView({
								behavior: "smooth",
								block: "nearest",
								inline: "center",
							});
						} else {
							setIndex(0);
							catRef[0].current.scrollIntoView({
								behavior: "smooth",
								block: "nearest",
								inline: "center",
							});
						}
					}}
				>
					Next
				</button>
			</nav>
			<div>
				<ul>
					{catList.map((cat, i) => (
						<li key={cat.id} ref={catRef[i]}>
							<img
								className={index === i ? "active" : ""}
								src={cat.imageUrl}
								alt={"Cat #" + cat.id}
							/>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

const catCount = 10;
const catList = new Array(catCount);
for (let i = 0; i < catCount; i++) {
	const bucket = Math.floor(Math.random() * catCount) % 2;
	let imageUrl = "";
	switch (bucket) {
		case 0: {
			imageUrl = "https://placecats.com/neo/250/200";
			break;
		}
		case 1: {
			imageUrl = "https://placecats.com/millie/250/200";
			break;
		}
		case 2:
		default: {
			imageUrl = "https://placecats.com/bella/250/200";
			break;
		}
	}
	catList[i] = {
		id: i,
		imageUrl,
	};
}
