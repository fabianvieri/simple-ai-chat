'use client';

import { useEffect, useRef } from 'react';

import { useChat } from 'ai/react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat();

	const chat = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const domNode = chat.current;
		if (domNode) {
			domNode.scrollTop = domNode.scrollHeight;
		}
	});

	return (
		<>
			<section className="p-4">
				<form
					onSubmit={handleSubmit}
					className="flex items-center w-full max-w-3xl mx-auto"
				>
					<Input
						className="flex-1"
						value={input}
						type="text"
						placeholder="Ask anything..."
						onChange={handleInputChange}
					/>
					<Button className="ml-2" type="submit">
						Submit
					</Button>
				</form>
			</section>
			<section className="container px-0 pb-10 max-w-3xl mx-auto mt-4 flex flex-col flex-grow gap-4">
				<ul
					ref={chat}
					className="flex flex-col gap-4 overflow-y-auto rounded-lg p-4 h-1 flex-grow bg-slate-50/50"
				>
					{messages.map((m, index) => (
						<div key={index}>
							{m.role === 'user' ? (
								<li className="flex flex-row">
									<div className="rounded-r-xl rounded-bl-xl border p-4 shadow-md flex">
										<p className="text-primary font-bold">{m.content}</p>
									</div>
								</li>
							) : (
								<li className="flex flex-row-reverse">
									<div className="p-4 shadow-md flex w-3/4 border rounded-l-xl rounded-br-xl">
										<p className="text-primary">{m.content}</p>
									</div>
								</li>
							)}
						</div>
					))}
				</ul>
			</section>
		</>
	);
}
