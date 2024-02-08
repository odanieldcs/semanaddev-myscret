import Card from '@/app/components/card';

export default function MessagesPage() {
	return (
		<>
			<h1>sua caixa de entrada</h1>
			<ul>
				<li>
					<a href="/app/dash/messages/1">
						<span>mensagem 1</span>
					</a>
				</li>
				<li>
					<a href="/app/dash/messages/1">
						<span>mensagem 2</span>
					</a>
				</li>
				<li>
					<a href="/app/dash/messages/1">
						<span>mensagem 3</span>
					</a>
				</li>
			</ul>
			<button>voltar</button>
		</>
	);
}
