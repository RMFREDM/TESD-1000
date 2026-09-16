"use client";

import { useEffect } from "react";
import { useEffectEvent } from "react";
import { createEncryptedConnection, createUnencryptedConnection } from "./chat";

export default function ChatRoom({ roomId, onMessage, isEncrypted }) {
	const onReceiveMessage = useEffectEvent(onMessage);
	useEffect(() => {
		function createConnection(isEncrypted, roomId) {
			const options = {
				serverUrl: "https://localhost:1234",
				roomId: roomId,
			};
			if (isEncrypted) {
				return createEncryptedConnection(options);
			} else {
				return createUnencryptedConnection(options);
			}
		}

		const connection = createConnection(isEncrypted, roomId);
		connection.on("message", (msg) => onReceiveMessage(msg));
		connection.connect();
		return () => connection.disconnect();
	}, [isEncrypted, roomId]);

	return <h1>Welcome to the {roomId} room!</h1>;
}
