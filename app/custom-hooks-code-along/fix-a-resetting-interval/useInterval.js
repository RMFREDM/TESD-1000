import { useEffect } from "react";
import { useEffectEvent } from "react";

export function useInterval(onTick, delay) {
	const onTickUpdate = useEffectEvent(() => {
		return setInterval(onTick, delay);
	});
	useEffect(() => {
		console.log("✅ Setting up an interval with delay ", delay);
		const id = onTickUpdate();
		return () => {
			console.log("❌ Clearing an interval with delay ", delay);
			clearInterval(id);
		};
	}, [delay]);
}
