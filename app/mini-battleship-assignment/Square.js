"use state";

// imports

// create a square component
export default function Square({ content, handleClick }) {
	return <button onClick={handleClick}>{content}</button>;
}
