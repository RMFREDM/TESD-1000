export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
						This page contains links to the challenges in the
						useEffect Code-Along.
					</h1>

					<ul>
						<PageLink
							href={"/fix-reconnecting-on-every-keystroke"}
							labelText={"Challenge:"}
							linkText={"Fix Reconnecting on Every Keystroke"}
						/>
						<PageLink
							href={"/switch-synchronization-on-and-off"}
							labelText={"Challenge:"}
							linkText={"Switch Synchronization On and Off"}
						/>
						<PageLink
							href={"/investigate-a-stale-value-bug"}
							labelText={"Challenge:"}
							linkText={"Investigate a Stale Value Bug"}
						/>
						<PageLink
							href={"/fix-a-connection-switch"}
							labelText={"Challenge:"}
							linkText={"Fix a Connection Switch"}
						/>
						<PageLink
							href={"/populate-a-chain-of-select-boxes"}
							labelText={"Challenge:"}
							linkText={"Populate a Chain of Select Boxes"}
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
				href={"/effect-lifecycle-code-along" + href}
				className="font-medium text-zinc-950 dark:text-zinc-50"
			>
				{linkText}
			</a>{" "}
		</ul>
	);
}
