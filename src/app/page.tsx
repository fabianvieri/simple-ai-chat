import Chat from '@/components/Chat';

export default function Home() {
	return (
		<main className="flex flex-col w-full h-screen max-h-dvh">
			<header className="p-4 border-b shadow-sm">
				<h1 className="text-2xl font-bold mx-auto">AI Chat</h1>
			</header>
			<Chat />
		</main>
	);
}
