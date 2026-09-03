export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
						This page contains links to assignments.
					</h1>

					<ul>
						<PageLink
							href={"/quick-start-code-along"}
							labelText={"Code-Along:"}
							linkText={"Quick Start Code-Along"}
						/>
						<PageLink
							href={"/tic-tac-toe-code-along"}
							labelText={"Code-Along:"}
							linkText={"Tic-Tac-Toe Code-Along"}
						/>
						<PageLink
							href={"/pure-components-code-along"}
							labelText={"Code-Along:"}
							linkText={"Pure Components Code-Along"}
						/>
						<PageLink
							href={"/interactivity-code-along"}
							labelText={"Code-Along:"}
							linkText={"Interactivity Code-Along"}
						/>
						<PageLink
							href={"/managing-state-code-along"}
							labelText={"Code-Along:"}
							linkText={"Managing State Code-Along"}
						/>
						<PageLink
							href={"/mini-battleship-assignment"}
							labelText={"Assignment:"}
							linkText={"Mini Battleship Assignment"}
						/>
						<PageLink
							href={"/use-ref-code-along"}
							labelText={"Code-Along:"}
							linkText={"Use Ref Code-Along"}
						/>
					</ul>
				</div>
			</main>
		</div>
	);
}

function PageLink({ href, labelText, linkText }) {
	return (
		<ul className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
			{labelText}{" "}
			<a
				href={href}
				className="font-medium text-zinc-950 dark:text-zinc-50"
			>
				{linkText}
			</a>{" "}
		</ul>
	);
}
