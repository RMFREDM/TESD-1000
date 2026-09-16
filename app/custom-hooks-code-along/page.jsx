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
							href={"/extract-a-usecounter-hook"}
							labelText={"Challenge:"}
							linkText={"Extract a useCounter Hook"}
						/>
						<PageLink
							href={"/make-the-counter-delay-configurable"}
							labelText={"Challenge:"}
							linkText={"Make the Counter Delay Configurable"}
						/>
						<PageLink
							href={"/extract-useinterval-out-of-usecounter"}
							labelText={"Challenge:"}
							linkText={"Extract useInterval out of useCounter"}
						/>
						<PageLink
							href={"/fix-a-resetting-interval"}
							labelText={"Challenge:"}
							linkText={"Fix a Resetting Interval"}
						/>
						<PageLink
							href={"/implement-a-staggering-movement"}
							labelText={"Challenge:"}
							linkText={"Implement a Staggering Movement"}
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
				href={"/custom-hooks-code-along" + href}
				className="font-medium text-zinc-950 dark:text-zinc-50"
			>
				{linkText}
			</a>{" "}
		</ul>
	);
}
