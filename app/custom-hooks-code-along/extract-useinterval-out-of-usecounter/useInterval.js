"use client";

import { useEffect } from "react";

export default function useInterval(updateFunction, delay) {
	useEffect(() => {
		const id = setInterval(() => {
			updateFunction();
		}, delay);
		return () => clearInterval(id);
	}, [delay]);
}
