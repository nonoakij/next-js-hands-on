export default function dashboardLayout(props: { children: React.ReactNode }) {
	return (
		<main className="p-8 h-dvh">
			<h1 className="text-4xl font-extrabold tracking-tight">
				The Joke Mail Service
			</h1>
			<section className="h-full pt-8">{props.children}</section>
		</main>
	);
}
