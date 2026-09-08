"use client";

import { useRef } from "react";
import SearchButton from "./SearchButton.js";
import SearchInput from "./SearchInput.js";

export default function Page() {
	const inputRef = useRef(null);

	function handleClick() {
		inputRef.current.focus();
	}

	return (
		<>
			<nav>
				<SearchButton handleClick={handleClick} />
			</nav>
			<SearchInput inputRef={inputRef} />
		</>
	);
}
