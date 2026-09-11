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
							href={"/focus-a-field-on-mount"}
							labelText={"Challenge:"}
							linkText={"Focus a Field on Mount"}
						/>
						<PageLink
							href={"/focus-a-field-conditionally"}
							labelText={"Challenge:"}
							linkText={"Focus a Field Conditionally"}
						/>
						<PageLink
							href={"/fix-an-interval-that-fires-twice"}
							labelText={"Challenge:"}
							linkText={"Fix an Interval that Fires Twice"}
						/>
						<PageLink
							href={"/fix-fetching-inside-of-an-event"}
							labelText={"Challenge:"}
							linkText={"Fix Fetching Inside of an Event"}
						/>
						<PageLink
							href={"/transform-data-without-effects"}
							labelText={"Challenge:"}
							linkText={"Transform Data without Effects"}
						/>
						<PageLink
							href={"/cache-a-calculation-without-effects"}
							labelText={"Challenge:"}
							linkText={"Cache a Calculation without Effects"}
						/>
						<PageLink
							href={"/reset-state-without-effects"}
							labelText={"Challenge:"}
							linkText={"Reset State without Effects"}
						/>
						<PageLink
							href={"/submit-a-form-without-effects"}
							labelText={"Challenge:"}
							linkText={"Submit a Form without Effects"}
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
				href={"/useeffect-code-along" + href}
				className="font-medium text-zinc-950 dark:text-zinc-50"
			>
				{linkText}
			</a>{" "}
		</ul>
	);
}
