"use client";

import { useState } from "react";

export default function Challenges() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
					<h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
						This page contains links to the challenges for the Pure
						Components Code-Along.
					</h1>

					<ul>
						<PageLink
							href={"/pure-components-code-along/clock"}
							labelText={"Code-Along:"}
							linkText={"Fix a Broken Clock"}
						/>
						<PageLink
							href={"/pure-components-code-along/profile"}
							labelText={"Code-Along:"}
							linkText={"Fix a Broken Profile"}
						/>
						<PageLink
							href={"/pure-components-code-along/story-tray"}
							labelText={"Code-Along:"}
							linkText={"Fix a Broken Story Tray"}
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
