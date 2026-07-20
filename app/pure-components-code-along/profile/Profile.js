import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

export default function Profile({ person }) {
	return (
		<Panel>
			<Header currentPerson={person} />
			<Avatar currentPerson={person} />
		</Panel>
	);
}

function Header({ currentPerson }) {
	return <h1>{currentPerson.name}</h1>;
}

function Avatar({ currentPerson }) {
	return (
		<img
			className="avatar"
			src={getImageUrl(currentPerson)}
			alt={currentPerson.name}
			width={50}
			height={50}
		/>
	);
}
